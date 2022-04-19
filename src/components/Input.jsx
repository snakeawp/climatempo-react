import React, {useState} from 'react'

const Input = () => {

  const [regiao, setRegiao] = useState('');
  console.log("claudio", regiao)


  return (
        <input type="text" placeholder='Informe a Região' onChange={event => setRegiao(event.target.value)}/>
  )
}

export default Input