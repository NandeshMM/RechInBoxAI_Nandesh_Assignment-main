import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Auth/Login/Login"
import OneBox from "./Auth/Main_Page_Window/OneBox"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<OneBox/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
