import './App.css'
import { useEffect, useState } from 'react';
import Prato from './componentes/Prato';

function App() {

  const [pratos, setPratos] = useState([])

  useEffect(() => {
    fetch('https://rafa-restaurante.herokuapp.com/api/pratos/')
    .then(resposta => resposta.json())
    .then(dados => {
      setPratos(dados)
    })
  }, [])

  return (
    <div className="App">
      <div className='banner-conteiner'>
        <img src="/imagens/banner.png" alt="Banner da pizzaria"/>
      </div>
      <div className='logo-conteiner'>
        <img src="/imagens/logo.png" alt="Logo da pizzaria"/>
      </div>
      <section className='cardapio'>
        {pratos.map(prato => 
        (<Prato 
        key={prato.id} 
        nome={prato.nome} 
        descricao={prato.descricao} 
        imagem={prato.imagem} 
        preco={prato.preco} 
        />))}
      </section>
    </div>
  );
}

export default App;
