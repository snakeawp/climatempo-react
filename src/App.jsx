import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import ContainerMain from './components/ContainerMain/ContainerMain';

function App() {

  var baseUrl = "https://api.hgbrasil.com/weather?format=json-cors&key=fae5ce68"

  const [regiao, setRegiao] = useState('');
  const [informacaoCidade, setInformacaoCidade] = useState()
  const [isLoading, setIsLoading] = useState(false)

  async function consultaRegiao() {
    await axios.get(`${baseUrl}&city_name=${regiao}`).then(
      (response) => {
        setInformacaoCidade(response)
        console.log(response)
      }
    )
  }

  return (
    <div className="App">
      <input type="text" placeholder='Informe a Região' onChange={event => setRegiao(event.target.value)} />
      <button onClick={consultaRegiao}>Consultar</button>
      {informacaoCidade && <ContainerMain informacoes={informacaoCidade} />}

    </div>
  )
}

export default App
