import React from "react";
import {noteDelete, noteEdit,} from "../features/notesSlice";
import {useDispatch} from "react-redux";
import {useState, useRef} from "react";
function Note({note}){
    const inputRef = useRef(note.note)
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const handleDelete = ()=>{
        dispatch(noteDelete(note))
    }
    const handleEdit = () =>{
        if (edit) {
            dispatch(noteEdit({id: note.id, note: inputRef.current.value}))
            setEdit(false)
        }else{
            setEdit(true)
        }
    }
    return <>
        {
            edit? <li>
                    <input ref={inputRef} placeholder={note.note} type="text"/>
                    <span className="edit-button" onClick={handleEdit}>Save</span>
                    <span className="delete-button" onClick={()=>{
                        setEdit(false)
                    }}>Cancel</span>
                </li>
                :<li><span>{note.note}</span>
                    <div className="button-container">
                        <span className="edit-button" onClick={handleEdit}>Edit</span>
                        <span onClick={handleDelete} className="delete-button">Delete</span>
                    </div>
                </li>}
        </>
}
export default Note;