const Calculadora = () => {
  return (
    <div class='corpo'>
      <div class='tudo'>
        <h1>Calculadora Simples</h1>
        <div class='lacunas'>
          <input type="number" placeholder="Digite o primeiro número" /><br></br>
          <input type="number" placeholder="Digite o segundo número" />
          <br></br>
        </div>
        
        <button>Somar</button>
        <button>Subtrair</button>
        <button>Multiplicar</button>
        <button>Dividir</button>

         <p>Resultado:</p>
         </div>
    </div>
  )
}

export default Calculadora
