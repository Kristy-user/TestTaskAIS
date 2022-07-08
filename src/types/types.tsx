export interface User {
  isLoggedIn: boolean;
  remember: boolean;
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  town: string;
  country: string;
  phone: string;
  password: string;
  notifications: Array<string>;
  image: string;
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
  adress: string;
}

export interface Documents {
  id: number;
  category: string;
  name: string;
  number: string;
  date: string;
  link: string;
}
export interface Errors {
  password: string;
  name: string;
}
