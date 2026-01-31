import Accordion from './Accordion';
import {useState} from "react";

export function App() {
  const [openAccordionId, setOpenAccordionId] = useState(null);
  const handleAccordionClick = (accordionId) => {
    setOpenAccordionId((prevValue) => {
      return prevValue === accordionId ? null : accordionId;
    });
  }
  return (
  <div>
    <Accordion id="my-profile"
               labelText="My profile"
               open={openAccordionId === "my-profile"}
                onClick={handleAccordionClick}>
      <strong>My first accordion</strong>
      <p>My p tag</p>
    </Accordion>
    <Accordion id="my-hobbies"
               labelText="My hobbies"
               open={openAccordionId === "my-hobbies"}
               onClick={handleAccordionClick}
    >new accordion</Accordion>
  </div>
);
}

export default App;
