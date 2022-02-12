import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const Paginate = createAsyncThunk(
    'paginationReducer/Paginate',

)

export const paginationSlice = createSlice({
    name: "paginationReducer",
    initialState : {
        currentPage: 1,
        tempPerpage: 30,
        firstPage:0,
        indexOfLastTemp: 0,
        indexOfFirstTemp: 0,
    },
    reducers: {
        // getIndexOfFirstTemp: (state) => {
        //     state.indexOfFirstTemp = state.currentPage - state.tempPerPage
        // },
        getIndexOfLastTemp: (state) => {
           state.indexOfLastTemp = state.currentPage * state.tempPerpage
        },
        getIndexOfFirstTemp: (state) => {
            state.indexOfFirstTemp = state.indexOfLastTemp - state.tempPerpage
        },
        incrementCurrentPage: (state) => {
            state.currentPage += 1
            state.firstPage += 1
            state.indexOfLastTemp = state.currentPage * state.tempPerpage
            state.indexOfFirstTemp = state.indexOfLastTemp - state.tempPerpage
        },
        decrementCurrentPage: (state) => {
            state.currentPage -= 1
            state.firstPage -= 1
            state.indexOfLastTemp = state.currentPage * state.tempPerpage
            state.indexOfFirstTemp = state.indexOfLastTemp - state.tempPerpage
        }
        
    }
})

export const { getIndexOfFirstTemp, getIndexOfLastTemp, incrementCurrentPage, decrementCurrentPage  } = paginationSlice.actions;


export default paginationSlice.reducer;