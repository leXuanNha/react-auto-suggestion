import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AutoSuggestion from "./components/AutoSuggestion";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const inputProps = {
    value,
    onChange,
  };

  return (
    <div className="App">
      <AutoSuggestion inputProps={inputProps} />
    </div>
  );
}

export default App;
