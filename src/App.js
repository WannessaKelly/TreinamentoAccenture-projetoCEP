
import './App.css';
import { useState } from 'react'

function App(props) {

  const [ cep, setCep ] = useState({})
  
  function handleTextChange(e) {
    e.preventDefault()
    fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
      .then(res => res.json())
      .then(res => setCep(res));
  }
  return (
    <div className="App">
      
        <div>
        <input type="text" className="input"></input>
         <button className="button" onClick={handleTextChange}> Pesquisar</button>
          {Object.entries(cep).map((values, key) => (
          <div key={key}><strong>{values[0]}:</strong>{values[1]}</div>
            ))}
        </div>
       
    
    <div className="box">
    Cidade
    <input type="text" className="cidade"/>
    <label className="bairro">Bairro
    </label>       
    <input className="bairro" type="text"/>
    <label className="endereco">
    Endereço</label>
    <input type="text" className="endereco" />
    <label className="uf">
    UF</label>
    <input type="text" className="uf" />
    <label className="complemento">
    Complemento</label>
    <input type="text" className="complemento" />

     </div>
    
    </div>
  
  );
}
export default App;
    
