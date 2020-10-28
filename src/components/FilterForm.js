import React from 'react'

function textFilter(fields, text){
  let passes = false;
  fields.forEach((field) => {
    console.log(field)
    if(field.includes(text)){
      console.log(field + " includes " +text)
      passes = true;
    }
  })
  return passes
}

class FilterForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchText: '',
    }
    this.searchTextChange =  this.searchTextChange.bind(this)
    this.runSearch= this.runSearch.bind(this)
    this.updateDisplayed = this.updateDisplayed.bind(this)
  }



  runSearch(){
    console.log("runSearch ran")
    var searchText=this.state.searchText
    let toDisplay = this.props.data.filter(function(el){
      let passes = true

      if(searchText != ''){
        if(!textFilter([el.name, el.city, el.genre], searchText))
          passes = false
      }



      return passes

    })

    this.updateDisplayed(toDisplay)
  }
  updateDisplayed(results){
    console.log("logging results")
    console.log(results)
    
    this.props.updateDisplayed(results)
  }
  searchTextChange(event){
    this.setState({
      searchText: event.target.value
    })
  }
  render(){
    return (
      <div>
        <form >
          <label>Search
            <input type="text" value={this.state.searchText} onChange={this.searchTextChange}></input>
          </label>
        </form>
        <button onClick={this.runSearch}>Search</button>
      </div>
    )
  }
}


export default FilterForm
