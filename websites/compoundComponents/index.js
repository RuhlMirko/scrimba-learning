import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/Menu"

function App() {
  return (
    <>
      <Menu
        buttonText="Sports"
        items={["Tennis", "Racquetball", "Pickleball", "Squash"]}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);