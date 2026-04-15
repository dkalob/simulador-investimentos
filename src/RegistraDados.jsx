import React from 'react'

const RegistraDados = (props) => {

  return (
    <div className='container mt-4'>

        <div className='row'>

            <div className='col-6'>
                <p className='fw-bold'>Histórico de Simulações</p>
            </div>

            <div className='col-6 text-end'>
                <p>{props.historico.length} simulações</p>
            </div>

        </div>

        <div className='card'>
            <div className='card-header'>
                <div className='row'>

                    <div className='col-6'>
                        <p>Data</p>
                    </div>

                    <div className='col-6 text-end'>
                        <p>Valor Final</p>
                    </div>

                </div>
            </div>
        
            <div className='card-body'>
                {props.historico.map((item, index) => (
                <div className='row border-bottom mb-2 align-items-center' key={index}>
                    
                    <div className='col-6'>
                        <p>{item.data}</p>
                    </div>

                    <div className='col-6 text-end'>
                        <p className='fw-bold'>R$ {item.valorFinal}</p>
                    </div>
                
                </div>
            ))}
            </div>
        
        </div>


    </div>
  )
}

export default RegistraDados