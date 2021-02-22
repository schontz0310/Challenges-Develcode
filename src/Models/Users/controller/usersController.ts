import {Request, Response} from 'express';
import * as Yup from 'yup';

import connection from '../../../database/knex/connection'
import userView from '../Views/users_view'


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

  public async index(request: Request, response: Response){
    let page: Ipage = {
      page: '1'
    };
    
    page = (request.query) as unknown as Ipage;
    
    const [count]: ICount[] = await connection('users').count<ICount[]>();

    const users = await connection('users')
    .limit(5)
    .offset((parseInt(page.page)-1)*5)
    .select<IUserDTO[]>('*');

    response.header('X-Total-Count', count.count);
    return response.json(userView.renderMany(users))
  }

  public async show(request: Request, response: Response){
    try {
      const {users_id} = request.params;
    
    const [user] = await connection('users')
    .where('users_id', users_id)
    .select<IUserDTO[]>('*')
  
    return response.json(userView.render(user))
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

  public async create(request: Request, response: Response){
    const {
      users_name,
      users_date_of_birth,
    } = await request.body;

    const users_avatar = request.file.filename;
    
    const data = {
      users_name,
      users_date_of_birth,
      users_avatar
    }

    const schema = Yup.object().shape({
      users_name: Yup.string().required(),
      users_date_of_birth: Yup.date().required(),
      users_avatar: Yup.string().required(),
    })

    await schema.validate(data, {
      abortEarly: false,
    })


    const [user] = await connection('users')
      .insert({
        users_name,
        users_date_of_birth,
        users_avatar,
      })
      .returning<IUserDTO[]>('*');
    
    return response.json(userView.render(user));
  }
  
  public async update(request: Request, response: Response){
    
    const {users_id} = request.params;

    const {
      users_name,
      users_date_of_birth,
    } = await request.body;
    
    const [user] = await connection('users')
      .where('users_id', users_id)
      .update({
        users_name,
        users_date_of_birth,
      })
      .returning<IUserDTO[]>('*');
    
      return response.json(userView.render(user))
  }


}