import { RootState } from "../Store";

import { createSelector } from "@reduxjs/toolkit";


export const selectTodos = (state:RootState) => state.todos.entities;


export const selectCompletedTodos = createSelector(

    [ selectTodos ],

    todos => todos.filter(todo=>todo.completed)

);