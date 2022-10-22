import '../Styles/App.css';
import AddNote from './AddNote';
import Navbar from './Navbar';
import DisplayNotes from './DisplayNotes';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <AddNote/>
        <DisplayNotes/>
        
    </div>
  );
}

export default App;
