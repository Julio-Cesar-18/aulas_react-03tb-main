import {Link} from "react-router-dom"

function Inside() {
  return (
    <div>
      <h1>Inside</h1>
      <Link to={"/outside"}>Ir para fora</Link>
    </div>
  )
}

export default Inside