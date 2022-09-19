import { createSlice } from '@reduxjs/toolkit';
import {icons} from '../../assets' 

const asset = icons.news
const initialState = [
    { id: 1, name: 'novedad1', image: asset, createdAt:'18/09/2022' },
    { id: 2, name: 'novedad2', image: asset, createdAt:'18/09/2022' },
    { id: 3, name: 'novedad3', image: asset, createdAt:'18/09/2022' },

]




export const newslice = createSlice({

name:"news",
initialState,
reducers:{
    editNews: (state, action) => {
        const { id, name, createdAt } = action.payload;
        const editNews = state.find((news) => news.id === id);
        if (editNews) {
            editNews.name = name;
            editNews.createdAt = createdAt;
        }
      },
      deleteNews: (state, action) => {
        const deleteNews = state.find((news) => news.id === action.payload);
        if (deleteNews) {
          state.splice(state.indexOf(deleteNews), 1);
        }
      },
    },
    NewsToEdit: (state, action) => {
     const {id} = action.payload
    const newToEdit = state.find((news) => news.id === id);
     return {
        ...state,
        newToEdit,
      }
    },
})


export const { editNews,  deleteNews,NewsToEdit} =  newslice.actions;
export default  newslice.reducer;