import React from "react";
import react from "react";
import Card from "./components/Card";
import axios from "axios";


function App() {
  const [event, setEvent] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  react.useEffect(() => {
    axios.get('https://61e2a20e3050a10017682205.mockapi.io/events').then((res) => {
    setEvent(res.data)
  })
  }, [])

  return (
    <div className="App">
        <div className="header"> 
              {event.map((obj) => 
              <Card 
              title={obj.title} 
              price={obj.price} 
              imageUrl={obj.imageUrl} 
              page={obj.page} 
              location={obj.location} 
              data={obj.data} 
              followers={obj.followers} 
              loading = {isLoading}
              />) }
         </div>
    </div>
  );
}

export default App;
