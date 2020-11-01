
function ResturantDisplay (props){
  console.log(props.data)
  if(props.data){
    return (
      <p>
      {props.data}
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
