import './Accordion.css';

export default function Accordion(props) {
    console.log({props});
//return (<div>this is an accordion</div>);
    return (
        <div className="accordion">
            <div className="label-text">{props.labelText}</div>
            <div>{props.children}</div>
        </div>);
}
