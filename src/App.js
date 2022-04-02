import logo from './logo.svg';
import './App.css';
import Name from './Components/Header';
import PersonList from './Components/PersonList'
// import Person from './Components/Person'



function App() {
  return (
    <div>
      <header>
        <Name />
      </header>
        <PersonList />
      </div>
    
  );
}

export default App;
