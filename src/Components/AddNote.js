import React from 'react'

function AddNote(){
    return(
        <div>
            <label htmlFor="note">Create Note</label>
            <input type="text" id="note"></input>

            <button className="btn btn-primary" type="button">Add</button>
        </div>
    );
}

export default AddNote;
