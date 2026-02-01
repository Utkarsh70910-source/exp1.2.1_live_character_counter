import { useState } from "react";
import "./App.css";

function App() {
  const maxLength = 150;
  const [text, setText] = useState("");

  return (
    <div className="page">
      <p className="subtitle">Live Character Counter</p>

      <div className="card">
        <textarea
          placeholder="Type your message..."
          maxLength={maxLength}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="counter">
          {text.length}/{maxLength}
        </div>
      </div>
    </div>
  );
}

export default App;

