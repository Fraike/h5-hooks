import React, { createContext, useEffect } from "react"
interface IThemeProps {
  [key: string]: { color: string; background: string }
}

const themes: IThemeProps = {
  'light': {
    color: '#fff',
    background: '#eee'
  },
  'dark': {
    color: '#000',
    background: '#222'
  }
}

export const ThemeContext = createContext(themes.light)

export const Main: React.FC = () => {

  return (
    <>
      <div>123</div>
    </>
  )
}
