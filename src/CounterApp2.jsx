import React, { useState } from "react";

function CounterApp() {
  // Объявляем состояние "count" с начальным значением 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React useState Hook</h1>
      <h2>Counter: {count}</h2>
      <div>
        {/* Кнопка для увеличения значения */}
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Increment
        </button>
        {/* Кнопка для уменьшения значения */}
        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Decrement
        </button>
        {/* Кнопка для сброса значения */}
        <button
          onClick={() => setCount(0)}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
