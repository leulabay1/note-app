import {useState, useRef} from "react";
import {useDispatch} from "react-redux";
import {noteAdd} from "../features/notesSlice";
import {nanoid} from "@reduxjs/toolkit";

const AddNote = ()=>{
    const dispatch = useDispatch()
    const [appear, setAppear] = useState(false)
    const addNoteInputRef = useRef("")
    const addNote = ()=>{
        if (addNoteInputRef.current.value){
            const value = addNoteInputRef.current.value
            dispatch(
                noteAdd(
                    {
                        id: nanoid(),
                        note:value
                    }
                )
            )
        }
    }
    return <div>
        {appear?<>
        <input ref={addNoteInputRef} type="text" className="newNote" placeholder="Add a new note"/>
            <button onClick={addNote} className="addButton" >Add</button></>:
            <button onClick={()=>setAppear(!appear)} className="addButton">Add a Note</button>}
    </div>
}
export default AddNote