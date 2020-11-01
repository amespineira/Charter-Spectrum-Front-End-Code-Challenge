
function TableRow (props){

  return (
    <tr onClick={props.clickFunction}>
      <td>{props.data.name}</td>
      <td>{props.data.city}</td>
      <td>{props.data.state}</td>
      <td>{props.data.phone}</td>
      <td>{props.data.genre}</td>
    </tr>
  )
}


export default TableRow
