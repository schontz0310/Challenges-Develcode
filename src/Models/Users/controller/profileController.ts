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
    return response.json(users);
  }

  public async show(request: Request, response: Response){

  const {users_id} = request.params;
  
  const [user] = await connection('users')
  .where('users_id', users_id)
  .select<IUserDTO[]>('*')

  return response.json(user)
  }

  public async create(request: Request, response: Response){
    const {
      users_name,
      users_date_of_birth,
      users_avatar,
    } = await request.body;

    const [user] = await connection('users')
      .insert({
        users_name,
        users_date_of_birth,
        users_avatar,
      })
      .returning<IUserDTO[]>('*');
    
    return response.json(user);
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