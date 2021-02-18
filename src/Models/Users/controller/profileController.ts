import {Request, Response, } from 'express';
import connection from '../../../database/knex/connection'

interface IUserDTO {
  users_id: string;
  users_name: string;
  users_date_of_birth: string;
  users_avatar: string;
  users_created_at: string;
  users_updated_at: string;
}

interface ICount{
  count: string
  
}  


interface Ipage{
  page: string
}


export default class UsersController{

  public async show(request: Request, response: Response){
  try {
    const {users_id} = request.params;
  
  const [user] = await connection('users')
  .where('users_id', users_id)
  .select<IUserDTO[]>('*')

  return response.json(user)
  } catch (error) {
    console.log(error)
    if (error.code === '22P02'){
      return response.status(404).json({
        error: 'The user code is incorrect'
      })
    }
    return response.status(404).json({
      error: 'critical failure'
    })
  }  
  
  }

  public async delete(request: Request, response: Response){
    const {users_id} = request.params;

    await connection('users')
    .where<IUserDTO>('users_id', users_id)
    .delete();

    return response.status(204).send();
  }

  public async update(request: Request, response: Response){
    
  }
}