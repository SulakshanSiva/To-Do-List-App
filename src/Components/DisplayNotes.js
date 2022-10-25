import React from 'react';

function DisplayNotes({notesList, deleteNote}){

    const showNote = (item) => {
        return(
            <div className='bg-primary w-50 d-flex mx-auto mt-3'>
                <p>{item.note}</p>
                <button className='btn btn-danger' onClick={() => deleteNote(item)}>Delete</button>
            </div>
        );
    }

    return(
        <div className=''>
                <p className='float-left'>{notesList.map(showNote)}</p>
        </div>

    );
}

export default DisplayNotes;