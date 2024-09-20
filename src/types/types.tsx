export interface UserLogin {
  password: number;
  email: string
}
export interface User {
  remember: boolean;
  id: number;
  name: string;
  surname: string;
  surname2:string;
  town: string;
  country: string;
  phone: string;
  notifications: Array<string>;
  userId: number;
  password:string;
  email: string;
}
export interface News {
  id: number;
  title: string;
  image: string;
  date: string;
  text: string;
}
export interface Question {
  title: string;
  list: Array<string>;
}
export interface Columns {
  id: number;
  header: string;
  accessor: string;
}

export interface Rows {
  id: number;
  number: string;
  po: string;
  cod: string;
  class: string;
  date: string;
  address?: string;
}

export interface Documents {
  id: number;
  category: string;
  name: string;
  number: string;
  date: string;
  link?: string;
}
export interface Errors {
  password: string;
  name: string;
}
