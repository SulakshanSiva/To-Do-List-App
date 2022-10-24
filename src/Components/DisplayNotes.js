import React from 'react';

function DisplayNotes(props){

    const showNote = (item) => {
        return(
                <div>
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