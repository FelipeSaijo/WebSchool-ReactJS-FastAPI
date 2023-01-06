import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  //axios.get('http://localhost:8000').then(res => { console.log(res); }).catch(erro => console.log(erro))

  const [body, setBody] = useState('');

  useEffect( () => {
    axios.get('http://localhost:8000')
      .then(res => setBody(res.data['body']))
      .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <h1>{body}</h1>
    </div>
  );
}

export default App;
