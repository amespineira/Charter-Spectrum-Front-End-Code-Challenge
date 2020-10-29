import React from 'react'

function textFilter(fields, text){
  let passes = false;
  fields.forEach((field) => {
    if(field.includes(text)){
      passes = true;
    }
  })
  return passes
}
function genStateOptions(){
  var states = ['Any', 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
  return states.map((state) => {
    return (
      <option value={state}>{state}</option>
    )
  });


}
class FilterForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchText: '',
      selectedState: 'Any',
      stateOptions: genStateOptions()
    }
    this.searchTextChange =  this.searchTextChange.bind(this)
    this.stateSelectChange = this.stateSelectChange.bind(this)
    this.runSearch= this.runSearch.bind(this)
    this.updateDisplayed = this.updateDisplayed.bind(this)
  }



  runSearch(){
    console.log("runSearch ran")
    console.log(this.props.data)
    var searchText=this.state.searchText
    var selectedState = this.state.selectedState
    console.log(searchText)
    console.log(selectedState);
    let toDisplay = this.props.data.filter(function(el){
      let passes = true

      if(searchText != ''){
        if(!textFilter([el.name, el.city, el.genre], searchText))
          passes = false
      }
      if(selectedState != 'Any'){
        if(el.state != selectedState){
          passes = false
        }
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
  stateSelectChange(event){
    console.log("state select happened...")
    console.log(event.target.value)
    this.setState({
      selectedState : event.target.value
    })
    setInterval(() => this.runSearch(), 200)
  }
  render(){
    return (
      <div>
        <form >
          <label>Search
            <input type="text" value={this.state.searchText} onChange={this.searchTextChange}></input>
          </label>
          <label>State:
            <select value={this.state.selectedState} onChange={this.stateSelectChange}>
              {this.state.stateOptions}
            </select>
          </label>
        </form>
        <button onClick={this.runSearch}>Search</button>
      </div>
    )
  }
}


export default FilterForm
