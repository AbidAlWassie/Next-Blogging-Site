import React, { useContext } from "react";
import { ThemeContext } from "../pages";

export default function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext)

  const themeStyles = {
      backgroundColor: darkTheme ? "#333" : "#CCC",
      color: darkTheme ? "#CCC" : "#333",
      padding: "2rem",
      margin: "2rem",
  }

  return (
    <div style={themeStyles}>Function Component</div>
  )
}