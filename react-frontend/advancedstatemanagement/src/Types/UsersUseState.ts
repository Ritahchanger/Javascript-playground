import { User } from "./User";

export interface UsersUseState{

    users:User[];

    loading:boolean,

    error:null | string,

}