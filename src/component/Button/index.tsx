import React, {useContext, useState} from "react";

import style from './style.css'

import { ThemeContext} from "../../page/home/index";


interface IButton {
    text: string
}

export const Button:React.FC<IButton> = (props:IButton) => {

    const [count] = useState(0)

    const theme = useContext(ThemeContext)

    console.log({theme})

    const themeStyle = { ...theme }

    return <div style={themeStyle} className={style.button}>
        {props.text}
    </div>
}
