import { createSlice,PayloadAction } from "@reduxjs/toolkit";


import { TodoState } from "../../Types/TodoState";


import { Todo } from "../../Types/Todo";


const initialState : TodoState = {

    entities:[],

    status:'idle',

    error:null

}

const todoSlice = createSlice({

    name:'todos',

    initialState,

    reducers:{


        addTodo:(state,action:PayloadAction<string>)=>{

            const newTodo:Todo = {

                id:Date.now(),

                text:action.payload,

                completed:false

            }
            state.entities.push(newTodo);

        },

        toggleTodo:(state,action:PayloadAction<number>)=>{

            const todo = state.entities.find(todo=>todo.id === action.payload);

            if (todo) todo.completed = !todo.completed;

        }

    }

})


export const { addTodo,toggleTodo } = todoSlice.actions

export default todoSlice.reducer