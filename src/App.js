import logo from './logo.svg';
import './App.css';


function ResturantTable(props){
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>City</th>
        <th>State</th>
        <th>Phone #</th>
        <th> Genres</th>
      </tr>
    </table>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResturantTable />

      </header>
    </div>
  );
}

export default App;
