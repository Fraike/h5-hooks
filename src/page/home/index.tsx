import React, {createContext, useEffect} from "react"
import HD from '../../utils/promise'
// import {Button} from "../../component/Button/index";


interface IThemeProps {
    [key: string] : { color: string; background: string}
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

    useEffect(()=>{
        const p = new HD((resolve:any, reject:any)=>{
            resolve('解决')
            reject('失败')
        })

        console.log(p);
        

    })

    return (
        <>
            <div>123</div>
            {/*<ThemeContext.Provider value={themes.light}>*/}
            {/*    /!*<Button text={'123'}/>*!/*/}
            {/*</ThemeContext.Provider>*/}
        </>
    )
}
