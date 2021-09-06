import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialSatate = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialSatate);
  const handleDelete = (counterId) => {
    // console.log("handleDelete", counterId);
    let newCounters = counters.filter((f) => f.id !== counterId);
    setCounters(newCounters);
  };

  const handleIncrement = (counterId) => {
    const newCounters = [...counters];
    const elementIndex = counters.findIndex((f) => f.id === counterId);
    newCounters[elementIndex].value++;
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    const newCounters = [...counters];
    const elementIndex = counters.findIndex((f) => f.id === counterId);
    newCounters[elementIndex].value--;
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialSatate);
  };
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
