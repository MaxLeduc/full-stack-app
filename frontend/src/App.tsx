import React, { useEffect } from "react";
import ApiClient from "./API/apiClient";

function App() {
  const foo: string = "bar";

  const getNumbers = () => {
    ApiClient.get("prime-number")
      .then(({ data }) => console.log(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => getNumbers(), []);

  return (
    <div className="App">
      <h1>{foo}</h1>
    </div>
  );
}

export default App;
