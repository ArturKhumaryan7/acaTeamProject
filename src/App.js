import Footer from "./Components/Footer"
import CreateEvent from "./Components/CreateEvent"
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/createEvent" element = { <CreateEvent />}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
