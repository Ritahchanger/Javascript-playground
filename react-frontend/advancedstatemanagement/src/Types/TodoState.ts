import { Todo } from "./Todo";
export interface TodoState{

    entities:Todo[];

    status:'idle' | 'loading' | 'succeeded' | 'failed';

    error:string | null;

}