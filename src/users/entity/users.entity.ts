import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';


@Table({})
 class User extends Model<User> {

  @PrimaryKey
  @Column
  username: string;

  @Column
  password:string;

  @Column
  firstname: string;

  @Column
  lastname: string;

  @Column
  cid: string;

  @Column
  email: string;

  @Column
  publickey: string;

  @Column
  privatekey: string;

  @Column
  coin: number;
  
}

export default User