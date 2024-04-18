import {Outlet} from "react-router-dom"
import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"
import {TrilhasContextProviders} from "./context/TrilhasContext.jsx"
// import {ThemeContextProvider} from "./context/ThemeContext.jsx"
import "./App.css"

function App() {

  return (
    // <ThemeContextProvider>
      <TrilhasContextProviders >
        <Header/>

        <Outlet />

        <Footer/>
      </TrilhasContextProviders>
    // </ThemeContextProvider>
  )
}

export default App;
