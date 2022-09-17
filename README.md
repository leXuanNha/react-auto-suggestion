# React auto suggestion

This project is a an Auto-suggestion React component.

## Development

```
yarn
yarn start
```

Now, open `http://localhost:3000`

## Features

- Suggest results by the search keyword
- Responsive
- Can be implemented into any Search box
- Built-in three sections: **Suggestions**, **Collections**, **Products**
- Allow to customize render of any section

## Basic Usage

```js
import React, { useState } from "react";
import AutoSuggestion from "components/AutoSuggestion";

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
```

## Props

| Prop                                                                   | Type     |                     Required                     | Description                                                                                                                                                                                           |
| :--------------------------------------------------------------------- | :------- | :----------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `numOfCharToDisplayResultBox`                                   | Number    |                                                 | There is number of characters in search box to start display the suggestion result.                                                                                                                  |
| `numOfProductToDisplay`  | Number |                                                 | There is number of products to display in `Products `section.                                                                                                                                     |
| `inputProps`  | Function | ✓ | Pass through arbitrary props to the input. It must contain at least `value` and `onChange`.                                                                                                                                      |
| `groups`                     | Array |                                                 | Define which section to display and it's order as well. Default is `["suggestion", "collection", "product"]`                                                                                              |
| `renderSuggestionGroup`                        | Function |                                                 | To customize `Suggestion` section.                                                                                                                                          |
| `renderCollectionGroup`                                     | Function   |                                                 | To customize `Collection` section.                                                                                                           |
| `renderProjectGroup` | Function | | To customize `Product` section. |
| `renderInput`                 | Function |                                                  | To customize the rendering of the input.                                                                                                                     
                                                                                                                                  

### Thank you for reading!
