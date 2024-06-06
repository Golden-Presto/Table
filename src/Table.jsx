function Table({ data, keysSet }) {
    return (
        <>
        {Array.from(keysSet).map((key, i) => (
            <table key={i}>
              <thead>
                <tr><th>{key}</th></tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item[key].toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
          {Array.from(keysSet).map((key, i) => (
            <table key={i}>
              <thead>
                <tr><th>{key}</th></tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item[key].toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
          {Array.from(keysSet).map((key, i) => (
            <table key={i}>
              <thead>
                <tr><th>{key}</th></tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item[key].toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
          {Array.from(keysSet).map((key, i) => (
            <table key={i}>
              <thead>
                <tr><th>{key}</th></tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item[key].toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
          {Array.from(keysSet).map((key, i) => (
            <table key={i}>
              <thead>
                <tr><th>{key}</th></tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item[key].toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
          {Array.from(keysSet).map((key, i) => (
            <table key={i}>
              <thead>
                <tr><th>{key}</th></tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item[key].toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
          {Array.from(keysSet).map((key, i) => (
            <table key={i}>
              <thead>
                <tr><th>{key}</th></tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item[key].toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </>
    )
}

export default Table