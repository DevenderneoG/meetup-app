import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Events from "./components/events";
import Header from "./components/header";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";

function App() {
  const { data, loading, error } = useFetch(
    "https://events-app-red-two.vercel.app/events"
  );

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if(data) {
      setFilteredData(data);
    }
  }, [data]);

  return (
    <div className="App">
      <Header data={data} setFilteredData={setFilteredData}/>
      <Events filteredData={filteredData} loading={loading} />
    </div>
  );
}

export default App;


