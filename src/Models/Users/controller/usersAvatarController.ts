import {Request, Response} from 'express';
import * as Yup from 'yup';
import path from 'path';
import fs from 'fs';

import connection from '../../../database/knex/connection'
import userView from '../Views/users_view'

import uploadConfig from '../../../config/upload';

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

  public async update(request: Request, response: Response){
    const {users_id} = request.params; 
    const users_avatar = request.file.filename;
    
    const [user] = await connection('users')
    .where('users_id', users_id)
    .select<IUserDTO[]>('*');

    if (!user) {
      
      throw new Error('Only Authenticated users can change avatar!');
    }
    if (user.users_avatar) {
      const filePath = path.resolve(__dirname, '..', '..', '..', '..', 'uploads', user.users_avatar)
      try {
        await fs.promises.stat(filePath);
      } catch (err) {
        console.log(err)
        return;
      }
      await fs.promises.unlink(filePath);
    }

    const [updatedUser] = await connection('users')
      .where('users_id', users_id)
      .update({
        users_avatar,
      })
      .returning<IUserDTO[]>('*');

    return response.json(userView.render(updatedUser))
  }
}