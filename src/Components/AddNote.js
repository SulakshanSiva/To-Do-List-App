import React from 'react'
import {useState} from "react";

function AddNote(){
    const [note, setNote] = useState("Hi");

     const addToDoNote = () =>{
        console.log(note);

    }

    return(
        <div>
            <label htmlFor="note">Create Note</label>
            <input type="text" id="note" onChange={e => setNote(e.target.value)}></input>

            <button className="btn btn-primary" type="button" onClick={addToDoNote}>
                Add
            </button>
        </div>
    );
}

export default AddNote;
