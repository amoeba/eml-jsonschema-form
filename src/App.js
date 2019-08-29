import React from 'react';
import './App.css';
import Form from "react-jsonschema-form";
import schema from "./schema";
import uiSchema from "./uischema";

const log = (type) => console.log.bind(console, type);

function App() {
  return (
    <div className="App">
      <Form schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
    </div>
  );
}

export default App;
