import React from 'react'
import {useState} from "react";

function AddNote(props){
    const [note, setNote] = useState("");

     const addToDoNote = () =>{
        props.addItem({
            note: note 
        });
        //reset state
        setNote("");
    }

    return(
        <div className='d-flex justify-content-center mt-4'>
            <input className="w-25" type="text" id="note" placeholder="Create TODO" value={note} onChange={e => setNote(e.target.value)}></input>

            <button className="btn btn-info btn-lg rounded-0" type="button" onClick={addToDoNote}>
                Add
            </button>
        </div>
    );
}

export default AddNote;
