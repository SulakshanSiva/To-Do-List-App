import React from 'react';

function DisplayNotes(props){

    const showNote = (item) => {
        return(
            <div className='bg-primary w-50 mx-auto rounded'>
                <p>{item.note}</p>
            </div>
        );
    }

    return(
        <div>
            {props.notesList.map(showNote)}
        </div>
    );
}

export default DisplayNotes;