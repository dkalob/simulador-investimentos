import React from 'react'
import { useState } from 'react'
import CapturaDados from './CapturaDados.jsx'
import ExibeDados from './ExibeDados.jsx'

const App = () => {

  const [dados, setDados] = useState({
    totalInvestido: 0,
    valorFinal: 0,
    rentabilidade: 0,
    jurosAcumulados: 0,
    periodo: 0
  })

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
          {/* histórico de simulaçaões */}
        </div>
      </div>
    </div>
  )
}


export default App