/** @format */

import React, {useContext, useState} from 'react'
import style from './style.css'
import {ThemeContext} from '../../page/home/index'

interface IButton {
  text: string
}

export const Button: React.FC<IButton> = (props: IButton) => {
  const theme = useContext(ThemeContext)

  const themeStyle = {...theme}

  return (
    <div style={themeStyle} className={style.button}>
      {props.text}
    </div>
  )
}
