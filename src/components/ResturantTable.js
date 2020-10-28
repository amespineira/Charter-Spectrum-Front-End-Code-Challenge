import React from 'react';
import ReactDOM from 'react-dom';
import TableRow from './TableRow.js'
import PageNav from './PageNav.js'

function formatRows(toDisplay){
  return toDisplay.map((row) => {
    return <TableRow key={row.id} name={row.name} city={row.city} state={row.state}
    phone={row.telephone} genre={row.genre}
    />
  })
}
function pageSlice(page, sorted){
  return sorted.slice(page * 10, (page *10) +10)
}
function alphabeticalFilter(a, b){

  return (a.name < b.name) ? -1 : 1
}


class ResturantTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      displayed : "",
      page : 0
    };
    this.nextPage =this.nextPage.bind(this)
    this.prevPage =this.prevPage.bind(this)

  }
  prevPage(){

    this.setState({
      page: this.state.page-1,
      displayed: formatRows(pageSlice(this.state.page-1,this.state.data))
    })
  }
  nextPage(){
    this.setState({
      page: this.state.page+1,
      displayed: formatRows(pageSlice(this.state.page+1,this.state.data))
    })
  }

  componentDidMount() {
    console.log("mounted, doing fetch")
    fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", { headers: {
      Authorization: "Api-Key q3MNxtfep8Gt", },
    }).then(response => response.json())
    .then(data => this.setState({data : data,
      displayed : formatRows(pageSlice(0, data.sort(alphabeticalFilter)))}));
  }


  render (){
    return (
      <div>
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
        <PageNav page={this.state.page} onNext={this.nextPage}
        onPrev={this.prevPage} totalPages={Math.ceil(this.state.data.length/10)}/>
      </div>
    );
  }
}

export default ResturantTable