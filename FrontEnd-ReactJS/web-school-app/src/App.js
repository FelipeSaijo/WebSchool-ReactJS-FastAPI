// import axios from "axios";
// import { useEffect, useState } from "react";

import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header";
import SignIn from "./components/SignIn";

function App() {

  // const [body, setBody] = useState('');

  // useEffect( () => {
  //   axios.get('http://localhost:8000')
  //     .then(res => setBody(res.data['body']))
  //     .catch(err => console.log(err))
  // },[])

  return (
    <div>
      <Header/>
      <SignIn/>
      <Footer/>
    </div>
  );
}

export default App;
