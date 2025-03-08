import logo from './logo.svg';
import './App.css';

function Button(){
  return (
    <button> clickable</button>
  )
}

function List_btn(){
  return (
    <div className="App">
      <Button/>
      <Button/>
      <Button/>
      <Button/>
    </div>
  );

}


function App() {
  return (
    <div className="App">
      <List_btn/>
    </div>
  );
}

export default App;
