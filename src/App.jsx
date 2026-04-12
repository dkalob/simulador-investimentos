import React from 'react'
import CapturaDados from './CapturaDados.jsx'

const App = () => {

  return (
  <div className='container-xl mt-2'>
      <div className="row justify-content-center">
        <div className="col-12 mb-3">
          <CapturaDados />
          {/* valor final acumulado */}
          {/* histórico de simulaçaões */}
        </div>
      </div>
    </div>
  )
}


export default App