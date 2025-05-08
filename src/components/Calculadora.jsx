import React from 'react'
import '../components/calculadora.css'

const Calculadora = () => {
  return (
    <div className="comeco">
      <h1>Calculadora Simples</h1>
      <input type="number" placeholder="Digite o primeiro número" />
      <br />
      <input type="number" placeholder="Digite o segundo número" />
      <br />
      <div className="botao">
        <button>Somar</button>
        <button>Subtrair</button>
        <button>Multiplicar</button>
        <button>Dividir</button>
      </div>
      <p><strong>Resultado:</strong></p>
    </div>
  )
}

export default Calculadora;