
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


export default TableRow
