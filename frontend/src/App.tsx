import React, { useEffect, useState } from "react";
import ApiClient from "./API/apiClient";

interface Number {
  id: string;
}

function App() {
  const [numbers, setNumbers] = useState([]);

  const getNumbers = () => {
    ApiClient.get("prime-number")
      .then(({ data }) => setNumbers(data.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => getNumbers(), []);

  return (
    <div className="App">
      {numbers.map((number: Number) => (
        <div key={number.id}>{number.id}</div>
      ))}
    </div>
  );
}

export default App;
