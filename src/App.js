import Accordion from './Accordion';

export function App() {
  return (
  <div>
    <Accordion labelText="My profile">
      <strong>My first accordion</strong>
      <p>My p tag</p>
    </Accordion>
    <Accordion labelText="My hobbies">new accordion</Accordion>
  </div>
);
}

export default App;
