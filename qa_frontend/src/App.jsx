
import './App.css'
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/transcripts/")
      .then(response => setData(response.data.message))
      .catch(error => console.log(error));
  }, []);

  

  return (
    <>
    <h1>QA Supervisor Agent</h1>
    <p>{data}</p>
      
    </>
  )
}

export default App
