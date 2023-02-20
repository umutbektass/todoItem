import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async()=>{
    const res =await axios("http://localhost:7000/todos")
    return res.data;
})
export const todosSlice = createSlice({
    name:"todos",
    initialState:{
        items:[{"id":1,"title":"React","complated":false}],
    activeFilter:"All",
    isLoading:true,
    error:""
    },
    reducers:{
        addTodo:(state,action)=>{
            state.items.push(action.payload)
        },
        toggle:(state,action)=>{
            const id=action.payload
            const item = state.items.find(u=>u.id===id)
            item.complated=!item.complated
        },
        deleteItem:(state,action)=>{
            const id = action.payload
            const item=state.items.filter(u=>u.id!==id)
            state.items=item
        },
        secimDegistir:(state,action)=>{
            state.activeFilter = action.payload
            
        },
        clearComplated:(state)=>{
            state.items=state.items.filter(u=>u.complated==false)
        }
    },
    extraReducers:{
   
}
})
export const {addTodo,toggle,deleteItem,secimDegistir,clearComplated} = todosSlice.actions;
export default todosSlice.reducer;