import React, { useState } from "react"
import ClassContextComponent from "../components/FunctionContextComponent"
import FunctionContextComponent from "../components/ClassContextComponent"

export const ThemeContext = React.createContext()

const Home = () => {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <div className='container mx-auto'>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme} className='bg-indigo-500 py-2 px-4 hover:bg-indigo-400 transition duration-300'>Toggle</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </div>
  )
}

export default Home