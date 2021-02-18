interface IUserDTO {
  users_id: string;
  users_name: string;
  users_date_of_birth: string;
  users_avatar: string;
  users_created_at: string;
  users_updated_at: string;
}

export default {
  render(user: IUserDTO) {
    return{
      users_id: user.users_id,
      users_name: user.users_name,
      users_date_of_birth: user.users_date_of_birth,
      users_avatar: `http://localhost:3333/uploads/${user.users_avatar}`
    };
  },

  renderMany(users: IUserDTO[]) {
    return users.map(user => this.render(user));
  }
};

