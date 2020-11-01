
function ResturantDisplay (props){
  console.log(props.data)
  if(props.data){
    return (
      <p>
      Name: {props.data.name}
      <ul>
        <li key='1'>Address: {props.data.address1} </li>
        <li key='2'> City: {props.data.city} </li>
        <li key='3'> State: {props.data.state} </li>
        <li key='4'> Zip: {props.data.zip} </li>
        <li key='5'> Telephone: {props.data.telephone} </li>
        <li key='6'> Tags: {props.data.tags} </li>
        <li key='7'> Website: {props.data.website} </li>
        <li key='8'> Genre: {props.data.genre} </li>
        <li key='9'> Hours: {props.data.hours} </li>
        <li key='10'> Attire: {props.data.attire}</li>
      </ul>
      </p>
    )
  }
  else{
    return (
      <p>Click on a row to see more information about the resturant!</p>
    )
  }
}


export default ResturantDisplay
