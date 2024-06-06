import TableBody from "./TableBody"
import TableHeader from "./TableHeader"

function Table({ data, obj, i, className }) {

    return (
        <>
          <table key={i} className={className}>
              <TableHeader obj={obj} />
              <TableBody data={data} obj={obj}/>
            </table>
        </>
    )
}

export default Table