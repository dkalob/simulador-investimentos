import React from 'react'
import { useState , useEffect } from 'react'
import CapturaDados from './CapturaDados.jsx'
import ExibeDados from './ExibeDados.jsx'
import RegistraDados from './RegistraDados.jsx'

const App = () => {

  const [dados, setDados] = useState({
    totalInvestido: 0,
    valorFinal: 0,
    rentabilidade: 0,
    jurosAcumulados: 0,
    periodo: 0,
    data:0
  })

  const [historico, setHistorico] = useState([])

  useEffect(() => {
    if (dados.valorFinal !== 0) {
      setHistorico((historico) => {
        const novoHistorico = historico.slice()
        novoHistorico.push({ data: dados.data, valorFinal: dados.valorFinal })
        return novoHistorico
      })  
    }
  }, [dados])


  return (
  <div className='container-xl mt-2'>
      <div className="row justify-content-center">
        <div className="col-12 mb-3">
          <CapturaDados 
              setDados={setDados} />
          <ExibeDados 
              totalInvestido={dados.totalInvestido}
              valorFinal={dados.valorFinal}
              rentabilidade={dados.rentabilidade}
              jurosAcumulados={dados.jurosAcumulados}
              periodo={dados.periodo} />
          <RegistraDados 
              historico={historico} />
        </div>
      </div>
    </div>
  )
}


export default App