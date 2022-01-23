import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import EventPage from "./Components/EventPage";
import CardPage from "./Components/CardPage";

function App() {
  const [curentEvent, setCurentEvent] = useState(undefined);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardPage selectEvent={setCurentEvent} />} />
        <Route path="/event/:id" element={<EventPage {...curentEvent} />} />
      </Routes>
    </div>
  );
}

export default App;
