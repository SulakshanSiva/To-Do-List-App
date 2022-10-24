import React from 'react'
import {useState} from "react";

function AddNote(props){
    const [note, setNote] = useState("");

     const addToDoNote = () =>{
        props.addItem({
            note: note 
        });
        //reset stae
        setNote("");
    }

    return(
        <div>
            <label htmlFor="note">Create Note</label>
            <input type="text" id="note" value={note} onChange={e => setNote(e.target.value)}></input>

            <button className="btn btn-primary" type="button" onClick={addToDoNote}>
                Add
            </button>
        </div>
    );
}

export default AddNote;
