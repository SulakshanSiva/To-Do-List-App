import React from 'react';

function DisplayNotes(props){

    const showNote = (item) => {
        return(
            <div className='bg-primary w-50 d-flex mx-auto mt-3'>
                <p>{item.note}</p>
            </div>
        );
    }

    return(
        <div className=''>
                <p className='float-left'>{props.notesList.map(showNote)}</p>
        </div>

    );
}

export default DisplayNotes;