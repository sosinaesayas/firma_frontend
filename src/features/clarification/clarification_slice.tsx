import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {  getClarificationListApi ,askClarificationApi , answerClarificationApi} from './clarification_api';
import { Clarification } from '../../data/interfaces/clarification';

interface ClarificationState{
    clarifications : Clarification[];
    getClarificationStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    postClarificationStatus: 'idle' | 'loading' | 'succeeded' | 'failed';   
    postClarificationError: string | null | undefined;
    getClarificationError: string | null | undefined; 
}

const initialState: ClarificationState = {
    clarifications: [],
    getClarificationStatus: 'idle',
    getClarificationError: null,
    postClarificationError: null,
    postClarificationStatus: 'idle',
};

export const getClarifications = createAsyncThunk('clarification/getClarifications', async (tenderId: string, { rejectWithValue }) => {
    try {
        const response = await getClarificationListApi(tenderId);
        return response.data;
    } catch (error) {
        const errorMessage = (error as Error).message;
        return rejectWithValue(errorMessage);
    }
});

export const postClarification = createAsyncThunk('clarification/postClarification', async (clarification: any, { rejectWithValue }) => {
    try {
        const response = await  askClarificationApi(clarification);
        return response.data;
    } catch (error) {
        const errorMessage = (error as Error).message;
        return rejectWithValue(errorMessage);
    }
});

export const addReply = createAsyncThunk('clarification/addReply', async (reply: any, { rejectWithValue }) => {
    try {
        const response = await answerClarificationApi(reply);
        return response.data;
    } catch (error) {
        const errorMessage = (error as Error).message;
        return rejectWithValue(errorMessage);
    }
});


const clarificationSlice = createSlice({
    name : 'clarification', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getClarifications.pending, (state) => {
                state.getClarificationStatus = 'loading';
                state.getClarificationError = null;
            })
            .addCase(getClarifications.fulfilled, (state, action) => {
                state.getClarificationStatus = 'succeeded';
                state.clarifications = action.payload;
            })
            .addCase(getClarifications.rejected, (state, action) => {
                state.getClarificationStatus = 'failed';
                state.getClarificationError = action.payload.message;
            })
            .addCase(postClarification.pending, (state) => {
                state.postClarificationStatus = 'loading';
                state.postClarificationError = null;
            })   
            .addCase(postClarification.fulfilled, (state, action) => {
                state.postClarificationStatus = 'succeeded';
                state.clarifications.push(action.payload);
            }) 
            .addCase(postClarification.rejected, (state, action  ) => {
                state.postClarificationStatus = 'failed';
                state.postClarificationError = action.payload.message;
            })
            .addCase(addReply.fulfilled, (state, action) => {
                const reply = action.payload;
                const clarification = state.clarifications.find((clarification) => clarification._id === reply.clarification);
                if (clarification) {
                    clarification.replies.push(reply);
                }
            })
            .addCase(addReply.rejected, (state, action) => {
                state.postClarificationStatus = 'failed';
                state.postClarificationError = action.payload.message;
            })
            .addCase(addReply.pending, (state) => {
                state.postClarificationStatus = 'loading';
                state.postClarificationError = null;
            }
            );

    }
})

export default clarificationSlice.reducer;