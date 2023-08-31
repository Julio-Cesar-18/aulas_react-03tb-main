import {Link} from "react-router-dom"

function Outside() {
  return (
    <div>
      <h1>Outside</h1>
      <Link to={"/"}>Ir para dentro</Link>
    </div>
  )
}

export default Outside