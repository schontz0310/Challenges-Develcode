import {ErrorRequestHandler} from 'express';
import {ValidationError} from 'yup'

interface IValidationErrors{
  [key: string]: string[];
}
 
const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError){
    let errors: IValidationErrors = {};
    error.inner.forEach(err => {
      errors[err.path as string] = err.errors
    });

    return response.status(400).json({
      message: 'Validation Fails', errors 
    })
  }
  console.error(error)
  return response.status(500).json({
    message: 'Critical failure, contact support'
  })
};

export default errorHandler;