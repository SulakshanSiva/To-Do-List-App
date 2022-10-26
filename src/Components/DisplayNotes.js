import React from 'react';
import test from "../Images/icons8-trash.svg"

function DisplayNotes({notesList, deleteNote}){

    const showNote = (item) => {
        return(
                
                <div className='bg-info w-50 d-flex mt-3 mx-auto'>
                    
                        <p>{item.note}</p>
                    
                    
                    <div className="ms-auto">
                        <button className='btn' onClick={() => deleteNote(item)}>
                            <img src={test} width="30" height="30" alt=""></img>
                        </button>
                    </div>

                </div>
                
        );
    }

    return(
        <div>
                <p>{notesList.map(showNote)}</p>
        </div>

    );
}

export default DisplayNotes;