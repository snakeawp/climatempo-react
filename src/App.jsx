import React, {useState} from 'react'
import axios from 'axios'
import './App.css';
import Input from './components/Input';

function App() {

  var baseUrl = "https://api.hgbrasil.com/weather?format=json-cors&key=fae5ce68"

  const [regiao, setRegiao] = useState('');
  console.log("claudio", regiao)

  async function consultaRegiao() {
    const require = await axios.get(`${baseUrl}&city_name=${regiao}`)

    console.log(require)
  }

  return (
      <div className="App">
        <input type="text" placeholder='Informe a Região' onChange={event => setRegiao(event.target.value)}/>
        <button onClick={consultaRegiao}>Consultar</button>
        <Input/>
      </div>
  )
}

export default App
