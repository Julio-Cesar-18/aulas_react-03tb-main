import { Routes, Route } from "react-router-dom"

import Inside from "./pages/Inside"
import Outside from "./pages/Outside"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Inside />} />
            <Route path="/outside" element={<Outside/>} />
        </Routes>
    )
}

export default Router