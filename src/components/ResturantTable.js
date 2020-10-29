import React from 'react';
import ReactDOM from 'react-dom';
import TableRow from './TableRow.js'
import PageNav from './PageNav.js'
import FilterForm from './FilterForm.js'

function formatRows(toDisplay){
  if(toDisplay.length===0){
    return (<tr> <td>No results found</td></tr>)
  }
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
      filtered: [],
      displayed : "",
      page : 0
    };
    this.nextPage =this.nextPage.bind(this)
    this.prevPage =this.prevPage.bind(this)
    this.updateDisplayed = this.updateDisplayed.bind(this)
  }
  prevPage(){
    this.setState({
      page: this.state.page-1,
      displayed: formatRows(pageSlice(this.state.page-1,this.state.filtered))
    })
  }
  nextPage(){
    console.log(this.state.filtered)
    this.setState({
      page: this.state.page+1,
      displayed: formatRows(pageSlice(this.state.page+1,this.state.filtered))
    })
  }
  updateDisplayed(results){

    this.setState({
      page: 0,
      filtered:results,
      displayed: formatRows(pageSlice(0, results))
    })
  }

  componentDidMount() {
    console.log("mounted, doing fetch")
    fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", { headers: {
      Authorization: "Api-Key q3MNxtfep8Gt", },
    }).then(response => response.json())
    .then(data => this.setState({data : data,
      displayed : formatRows(pageSlice(0, data.sort(alphabeticalFilter))),
      filtered : data.sort(alphabeticalFilter),
    }));
  }


  render (){
    return (
      <div>
        <FilterForm data={this.state.data} updateDisplayed={this.updateDisplayed}/>
        <PageNav page={this.state.page} onNext={this.nextPage}
        onPrev={this.prevPage} totalPages={Math.ceil(this.state.filtered.length/10)}/>
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

      </div>
    );
  }
}

export default ResturantTable
