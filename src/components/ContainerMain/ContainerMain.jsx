import React from 'react'

const ContainerMain = ({informacoes}) => {
  console.log(informacoes)
    return (
      <div className="container">
         <div className="homeCidade">
          <div className="cidade">
            <div className="cidadeNome">{informacoes.data.results.city}</div>
            <div className="nascerPordoSol"></div>
          </div>
          <div className="icon"></div>
          <div className="temperatura"></div>
        </div>
        <div className="detalheSemana"></div>
        </div>
   )
}

export default ContainerMain