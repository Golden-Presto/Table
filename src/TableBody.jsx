import React from 'react'

const TableBody = ({ data, obj }) => {
  return (
    <tbody>
        {data.map((item, index) => (
            <tr key={index}>
            <td>{item[obj]}</td>
            </tr>
        ))}
    </tbody>
  )
}

export default TableBody