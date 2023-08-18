import {useSelector} from "react-redux";
import Note from "./Note";

const NotesList = () =>{
    const notes = useSelector((state)=>state.notes)

    const renderedNotes = notes.map((note)=>( <Note note={note} />))

    return (
        <>
            <ul>
                {renderedNotes}
            </ul>
        </>
    )
}
export default NotesList