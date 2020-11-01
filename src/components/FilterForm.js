import React from 'react'

function textFilter(fields, text){
  let passes = false;
  fields.forEach((field) => {
    if(field.toLowerCase().includes(text.toLowerCase())){
      passes = true;
    }
  })
  return passes
}
function genStateOptions(){
  var states = ['Any', 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
  return states.map((state) => {
    return (
      <option key={state} value={state}>{state}</option>
    )
  });
}
function genGenreOptions(){
  var genres = ["Any","American", "Seafood", "International", "Asian", "Cafe", "Steak", "Traditional", "European", "French", "Belgian", "Vegetarian", "Contemporary", "Oysters", "Italian", "Bistro", "Continental", "Bakery", "Grill", "Hawaiian", "Polynesian", "Pacific Rim", "Vietnamese", "Coffee", "Fusion", "Irish", "Pasta", "Kosher", "Japanese", "Sushi", "Sandwiches", "Tea", "Eclectic", "British"]

  return genres.map((genre) =>{
    return (
      <option key={genre} value={genre}>{genre}</option>
    )
  })
}

class FilterForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchText: '',
      selectedState: 'Any',
      selectedGenre: 'Any',
      stateOptions: genStateOptions(),
      genreOptions: genGenreOptions()
    }
    this.searchTextChange =  this.searchTextChange.bind(this)
    this.stateSelectChange = this.stateSelectChange.bind(this)
    this.genreSelectChange = this.genreSelectChange.bind(this)
    this.runSearch= this.runSearch.bind(this)
    this.updateDisplayed = this.updateDisplayed.bind(this)
  }



  runSearch(event){
    if(event){
      event.preventDefault()
    }
    var searchText=this.state.searchText
    var selectedState = this.state.selectedState
    var selectedGenre = this.state.selectedGenre

    let toDisplay = this.props.data.filter(function(el){
      let passes = true

      if(searchText !== ''){
        if(!textFilter([el.name, el.city, el.genre], searchText))
          passes = false
      }
      if(selectedState !== 'Any'){
        if(el.state !== selectedState){
          passes = false
        }
      }
      if(selectedGenre !== 'Any'){
        if(!el.genre.includes(selectedGenre)){
          passes = false
        }
      }
      return passes

    })

    this.updateDisplayed(toDisplay)
  }

  updateDisplayed(results){
    this.props.updateDisplayed(results)
  }

  searchTextChange(event){
    this.setState({
      searchText: event.target.value
    })
  }

  stateSelectChange(event){
    this.setState({
      selectedState : event.target.value
    })
    setTimeout(() => this.runSearch(), 200)
  }

  genreSelectChange(event){

    this.setState({
      selectedGenre : event.target.value
    })
    setTimeout(() => this.runSearch(), 200)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.runSearch}>
          <label>Search
            <input type="text" value={this.state.searchText} onChange={this.searchTextChange}></input>
          </label>
          <label>State:
            <select value={this.state.selectedState} onChange={this.stateSelectChange}>
              {this.state.stateOptions}
            </select>
          </label>
          <label>Genre:
            <select value={this.state.selectedGenre}
            onChange={this.genreSelectChange}>
              {this.state.genreOptions}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


export default FilterForm
