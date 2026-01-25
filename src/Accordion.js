export default function Accordion(props) {
    console.log({props});
//return (<div>this is an accordion</div>);
    return (<div>{props.children}</div>);
}
