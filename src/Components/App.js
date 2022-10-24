import '../Styles/App.css';
import AddNote from './AddNote';
import Navbar from './Navbar';
import DisplayNotes from './DisplayNotes';
import { useState } from 'react';

function App() {

    const [toDoList, setToDoList] = useState({list: []});

    //callback function
    const addNoteToList = (note) => {
        let currentList = toDoList["list"];
        currentList.push(note);
        setToDoList({list : currentList});
        console.log(toDoList);
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
