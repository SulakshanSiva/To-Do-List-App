import '../Styles/App.css';
import AddNote from './AddNote';
import Navbar from './Navbar';
import DisplayNotes from './DisplayNotes';
import { useState, useEffect } from 'react';

function App() {

    const [toDoList, setToDoList] = useState({list: []});
    
    useEffect(() => {
        fetch("http://localhost:3000/list")
        .then((response) => response.json())
        .then((toDoList) => setToDoList({list: toDoList}))
    }, []);

    //callback function
    const addNoteToList = (note) => {
        let currentList = toDoList["list"];

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(note),

        };
        fetch("http://localhost:3000/list", requestOptions)
        .then((response) => response.json())
        .then((toDoList) =>{
            currentList.push(note);
            setToDoList({list : currentList});
        });
        
    }


    return (
    <div className="App">
        <Navbar/>
        <AddNote addItem={addNoteToList}/>
        <DisplayNotes notesList={toDoList["list"]}/>
        
    </div>
  );
}

export default App;
