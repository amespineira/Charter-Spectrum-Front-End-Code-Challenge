import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


function TableRow (props){
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.city}</td>
      <td>{props.state}</td>
      <td>{props.phone}</td>
      <td>{props.genre}</td>
    </tr>
  )
}

function formatRows(toDisplay){
  console.log("format rows called")
  console.log(toDisplay)
  return toDisplay.map((row) => {
    return <TableRow key={row.id} name={row.name} city={row.city} state={row.state}
    phone={row.telephone} genre={row.genre}
    />
  })
}
function alphabeticalFilter(a, b){
  console.log("filtering")
  console.log(a);
  console.log(b)
  console.log(a.name < b.name)
  return (a.name < b.name) ? -1 : 1
}
class ResturantTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      displayed : ""
    };
  }

  componentDidMount() {
    console.log("mounted, doing fetch")
    fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", { headers: {
      Authorization: "Api-Key q3MNxtfep8Gt", },
    }).then(response => response.json())
    .then(data => this.setState({data : data,
      displayed : formatRows(data.sort(alphabeticalFilter).slice(0,10) )}));
  }


  render (){
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>Phone #</th>
            <th>Genres</th>
          </tr>
          {this.state.displayed}
        </tbody>
      </table>
    );
  }
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
