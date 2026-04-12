import React from 'react'

const CapturaDados = () => {
  return (
    <div className='container mt-2'>

      <div>
        <p className='fw-bold'>Simulador de Investimentos</p>
        <p className='fw-normal'>Descubra quanto seu dinheiro pode render com juros compostos</p>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <div className='mb-2'>Valor inicial (R$)</div>
          <input 
            type="number"
            className='form-control w-100'/>
        </div>

        <div className="col-12 col-md-6">
          <div className='mb-2'>Aporte mensal (R$)</div>
          <input 
            type="number" 
            className='form-control w-100'/>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12 col-md-6">
          <div className='mb-2'>Taxa de juros (% ao mês)</div>
          <input 
            type="number" 
            className='form-control w-100'/>
        </div>

        <div className="col-12 col-md-6">
          <div className='mb-2'>Período (meses)</div>
          <input 
            type="number" 
            className='form-control w-100'/>
        </div>
      </div>

      <div className="row mt-3">
        
        <div className="col-9">
          <button
            className='btn btn-outline-primary w-100 p-1'
            style={{ 
                borderRadius: 5 }}>
                    Calcular
            </button>
        </div>

        <div className="col-3">
          <button 
            className='btn btn-outline-secondary w-100 p-1'
            style={{
                borderRadius: 5 }}>
                    Limpar
            </button>
        </div>
      
      </div>

    </div>
  )
}

export default CapturaDados