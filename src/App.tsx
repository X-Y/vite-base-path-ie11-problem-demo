import { useState } from 'react'

import DateSelect from "./components/DateSelect/DateSelect";

function App() {
  const [reveal, setReveal] = useState(false);
  const onClick = () => {
    setReveal(true);
  }
  return (
    <div>
      <button onClick={onClick}>Reveal lazy comp</button>
      {reveal && <DateSelect />}
    </div>
  )
}

export default App
