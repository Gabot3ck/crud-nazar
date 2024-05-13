import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
      isSaving: true,
      records:[],
    },
    reducers: {
      getRecords: ( state, { payload } ) => {
        state.records = payload;
      },
      savingNewRecord: ( state ) => {
        state.isSaving = false;
      },
      recorded: ( state ) => {
        state.isSaving = true;
      },
      addNewRecord: (state, { payload }) => {
        state.records.push(payload);
      }
    }
});



export const { getRecords, savingNewRecord, recorded, addNewRecord } = appSlice.actions;