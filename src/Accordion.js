import './Accordion.css';
import {useState} from "react";

export default function Accordion(props) {
    const [open, setOpen] = useState(false);
    console.log({props});
    const handleClick = () => {
        console.log('This was clicked');
        setOpen((prevValue) => {
            return !prevValue;
        });
    }
//return (<div>this is an accordion</div>);
    return (
        <div className="accordion">
            <div className="label-text" onClick={handleClick}>{props.labelText}</div>
            {!!open &&
            <div>{props.children}</div>
            }
        </div>);
}
