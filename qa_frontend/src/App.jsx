
import './App.css'
import { useEffect, useState } from "react";
import axios from "axios";
import LandingPage from '../components/LandingPage';

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/transcripts/")
      .then(response => setData(response.data.message))
      .catch(error => console.log(error));
  }, []);

  

  return (
    <>
    <LandingPage></LandingPage>
   
    </>
  )
}

export default App
