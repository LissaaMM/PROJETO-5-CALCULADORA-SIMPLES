import React from 'react'
import '../components/calculadora.css'

export default function Calculadora(){
  const [num1, setNum1]= useState('')
  const [num2, setNum2]= useState('')
  const [resultado, setResultado]= useState('')
}
function somar(){
  setResultado(Number(num1)+Number(num2))
}
function subtrair(){
  setResultado(Number(num1)-Number(num2))
}
function multiplicar(){
  setResultado(Number(num1)*Number(num2))
}
function dividir (){
  setResultado(Number(num1)/Number(num2))
}
const Calculadora = () => {
  return (
    <div className="comeco">
      <h1>Calculadora Simples</h1>

      <input type="number" 
      placeholder="Digite o primeiro número" 
      value={num2} 
      onChangeCapture={(e) =>setNum1}
      />
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