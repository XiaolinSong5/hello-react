import './Accordion.css';
import {useState} from "react";

export default function Accordion(props) {
    console.log({props});
    const handleClick = () => {
        props.onClick(props.id);

    }
//return (<div>this is an accordion</div>);
    return (
        <div className="accordion">
            <div className="label-text" onClick={handleClick}>{props.labelText}</div>
            {!!props.open &&
            <div>{props.children}</div>
            }
        </div>);
}
