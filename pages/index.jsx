import React, { useState } from "react"
import FunctionContextComponent from "../components/FunctionContextComponent"
import ClassContextComponent from "../components/ClassContextComponent"
import TodoList from "../components/TodoList";

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
        <ClassContextComponent />
        <FunctionContextComponent />
        
        <TodoList/>

      </ThemeContext.Provider>


    </div>
  )
}

export default Home