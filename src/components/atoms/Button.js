import React from 'react';
import "./Button.css";

const Button = (props) => {
    return (
    <button className ="button" {...props}>
        <span>
        {props.up ? "↑" : "↓"}
        </span>

    </button>
    );
};

export default Button;