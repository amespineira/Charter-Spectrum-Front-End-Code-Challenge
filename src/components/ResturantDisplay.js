
function ResturantDisplay (props){
  console.log(props.data)
  if(props.data){
    return (
      <p>
      Name: {props.data.name} Address: {props.data.address1} City: {props.data.city} State: {props.data.state} Zip: {props.data.zip} Telephone: {props.data.telephone} Tags: {props.data.tags} Website: {props.data.website} Genre: {props.data.genre} Hours: {props.data.hours} Attire: {props.data.attire}
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
