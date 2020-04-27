import React from "react";

interface IButton {
    text: string
}

export const Button:React.FC<IButton> = (props:IButton) => {
    return <div>
        {props.text}
    </div>
}
