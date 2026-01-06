import React, { useContext } from 'react';



export const TodoContext = React.createContext({
    todos: [{
        id:1,
        todo:"todo msg",
        completed:false,
        }
   ],
   addTodo: (todo) => {},
   updateTodo: (id,to) => {},
   deleteTodo: (id) => {},
   toggleCompleted: (id) => {},
    
});

export const useTodo=()=>{
    return useContext(TodoContext); 
}

export const TodoProvider=TodoContext.Provider;



