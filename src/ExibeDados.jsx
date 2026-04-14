import React from 'react'
import { useState } from 'react'
import CapturaDados from './CapturaDados.jsx'

const ExibeDados = (props) => {
  
    return (
    <div className='container mt-4 p-4 rounded'
        style={{backgroundColor: '#E8E3DE'}}>

        <div>
            <p>Valor Final acumulado</p>
            <p className='fw-bold' style={{fontSize: '30px', color: 'green'}}>R$ {props.valorFinal}</p>
        </div>
        
        

        <div className='row mt-2'>

            <div className='col-12 col-md-6'>
                <div>Total investido</div>
                <div className='fw-bold' style={{fontSize: '20px'}}>R$ {props.totalInvestido}</div>
            </div>

            <div className='col-12 col-md-6'>
                <div>Juros acumulados</div>
                <div className='fw-bold' style={{fontSize: '20px'}} >R$ {props.jurosAcumulados}</div>
            </div>
        </div>
        
        <div className='row mt-2'>

            <div className='col-12 col-md-6'>
                <div>Nº de aportes</div>
                <div className='fw-bold' style={{fontSize: '20px'}} >{props.periodo}</div>
            </div>

            <div className='col-12 col-md-6'>
                <div>Rentabilidade</div>
                <div className='fw-bold' style={{fontSize: '20px', color: 'green'}} >+{props.rentabilidade} %</div>
            </div>
        </div>

    </div>
  )
}

export default ExibeDados