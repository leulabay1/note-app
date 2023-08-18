import {createSlice} from "@reduxjs/toolkit";

const initialState = [{id: 1,note: "this is actually nice"},{id: 2,note: "this is actually nice"},{id: 3,note: "this is actually nice"},{id: 4,note: "this is actually nice"}]

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        noteAdd(state, action){
            state.push(action.payload)
        },
        noteDelete(state, action){
            let idx = state.indexOf(action.payload)
            state.splice(idx, 1)
        },
        noteEdit(state, action){
            state.forEach((note)=>{
                if (note.id == action.payload.id){
                    note.note = action.payload.note
                }
            })
        }
    }
})

export const {noteAdd, noteDelete, noteEdit} = notesSlice.actions
export const selectAllNotes = (state) => state.notes;
export default notesSlice.reducer