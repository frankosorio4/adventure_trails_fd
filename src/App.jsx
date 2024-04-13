import {Outlet} from "react-router-dom"
import Header from "./components/header/header.jsx"
import {TrilhasContextProviders} from "./context/TrilhasContext.jsx"
import "./App.css"

function App() {

  return (
    <TrilhasContextProviders >
      <Header/>

      <Outlet />

      <div>Footer</div>

    </TrilhasContextProviders>
  )
}

export default App;
