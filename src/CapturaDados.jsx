import React, { useState } from 'react'

const CapturaDados = ({ setDados }) => {

    const [valorInicial, setValorInicial] = useState(0)
    const [aporteMensal, setAporteMensal] = useState(0)
    const [juros, setJuros] = useState(0)
    const [periodo, setPeriodo] = useState(0)

    
    const calcular = () => {
      
      //https://investidor10.com.br/calculadoras/juros-compostos/
      const totalInvestido = (valorInicial + (aporteMensal * periodo))
      const montanteInicial = valorInicial * Math.pow(1 + (juros / 100), periodo)
      const montanteAportes = aporteMensal * ((Math.pow(1 + (juros / 100), periodo) - 1) / (juros / 100))
      const montanteFinal = montanteInicial + montanteAportes
      const jurosAcumulados = montanteFinal - totalInvestido
      const rentabilidade = (((montanteFinal - totalInvestido) / totalInvestido) * 100)

      const dataAtual = new Date().toLocaleString('pt-BR')

      setDados({
          totalInvestido: totalInvestido.toFixed(2),
          valorFinal: montanteFinal.toFixed(2),
          rentabilidade: rentabilidade.toFixed(2),
          jurosAcumulados: jurosAcumulados.toFixed(2),
          periodo: periodo,
          data: dataAtual
      })

    }

    const limpar = () => {
      setValorInicial(0)
      setAporteMensal(0)
      setJuros(0)
      setPeriodo(0)
    }

  return (
    <div className='container mt-2'>

      <div>
        <p className='fw-bold'>Simulador de Investimentos</p>
        <p className='fw-normal'>Descubra quanto seu dinheiro pode render com juros compostos</p>
      </div>

      <div className='row'>
        <div className="col-12 col-md-6">
          <div className='mb-2'>Valor inicial (R$)</div>
          <input
            value={valorInicial}
            onChange={(e) => setValorInicial(Number(e.target.value))} 
            type='number'
            className='form-control w-100'/>
        </div>

        <div className='col-12 col-md-6'>
          <div className='mb-2'>Aporte mensal (R$)</div>
          <input
            value={aporteMensal}
            onChange={(e) => setAporteMensal(Number(e.target.value))}
            type='number'
            className='form-control w-100'/>
        </div>
      </div>

      <div className='row'>
        <div className='col-12 col-md-6'>
          <div className='mb-2'>Taxa de juros (% ao mês)</div>
          <input
            value={juros} 
            onChange={(e) => setJuros(Number(e.target.value))}
            type='number' 
            className='form-control w-100'/>
        </div>

        <div className='col-12 col-md-6'>
          <div className='mb-2'>Período (meses)</div>
          <input
            value={periodo} 
            onChange={(e) => setPeriodo(Number(e.target.value))}
            type='number' 
            className='form-control w-100'/>
        </div>
      </div>

      <div className='row mt-3'>
        
        <div className='col-9'>
          <button
            className='btn btn-outline-primary w-100 p-1'
            onClick={calcular}>
                    Calcular
            </button>
        </div>

        <div className='col-3'>
          <button 
            className='btn btn-outline-secondary w-100 p-1'
            onClick={limpar}>
                    Limpar
            </button>
        </div>
      
      </div>

    </div>
    
  )
}

export default CapturaDados