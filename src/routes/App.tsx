import { HashRouter, Routes, Route } from "react-router-dom"

import { HomePage } from "./home/HomePage"
import { CreatePage } from "./create/CreatePage"
import { EditPage } from "./edit/EditPage"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/edit/:id" element={<EditPage/>}/>
        <Route path="*" element={<p>Not Found</p>}/>
      </Routes>
    </HashRouter>
  )
}

export { App }