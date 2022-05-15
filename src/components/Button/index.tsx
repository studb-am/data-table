import React from "react";

export interface ButtonProps {
    label: string;
    size: number;
}

const Button: React.FC<ButtonProps> = props => {
    return <button style={{fontSize: props.size}}>{props.label}</button>
};

export default Button;