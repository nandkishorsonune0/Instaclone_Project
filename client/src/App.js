import Landing from "./components/Landing";
import Postview from "./components/Postview";
import Form from "./components/Form";
import {Route,Routes,BrowserRouter} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/postview" element={<Postview/>}></Route>
      <Route path="/form" element={<Form/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;