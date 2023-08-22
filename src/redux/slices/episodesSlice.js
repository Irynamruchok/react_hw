import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";


const initialState ={
episodes:[],
    errors: null,
    isLoading: null
}

const all = createAsyncThunk(
    'episodesSlice/all',
    async (_,thunkAPI) =>{
        try {
        return  await episodeService.getAll()
        }catch (e) {
           return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(all.fulfilled, (state, action) =>{
                state.episodes = action.payload
            })
            .addMatcher((action)=> action.type.endsWith('/rejected'),
                (state, action)=> {
                state.errors = action.payload
                    state.isLoading = false
                })
            .addMatcher(
                (action)=> action.type.endsWith('/pending'),
                (state)=> {
                    state.isLoading = true
                }
            )
    }
})

const {reducer: episodeReducer} = episodesSlice

const { all: episodeActionAll } = episodesSlice.actions;

export { episodeReducer, episodeActionAll as episodeAction };