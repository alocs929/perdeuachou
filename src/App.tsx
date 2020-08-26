import React, { useState } from 'react';
import './styles/globalStyles.css';
import { Container } from './styles';
import api from './service/api';
// import { uuid } from 'react-uuid';
import { uuid } from 'uuidv4';

const App: React.FC = () => {
  const [respostaListUsers, setRespostaListUsers ] = useState([]);

  // useEffect(()=>{
  //   handleTest();
  // },[respostaListUsers]);

  async function handleTest (){
    // let i;
    // for(i=0; i<10; i++){
      // const idUnique = uuid();
      // const user = {
      //   cpfCpnj: idUnique,
      //   email: `${idUnique}@gmail.com`,
      //   nome: `Teste ${idUnique}`,
      //   pertences: [],
      //   telefone: 12345678
      // }
      // console.log(user);
      const response = await api.get('/');
      console.log(response);
      // setResposta([...respostaListUsers, response.nome]);
    // }
  }
  
  return (
    <>
      <Container>
        <h1>Teste da api de Perdeu achou usando o balanceador</h1>
        <button onClick={handleTest}>Testar</button>
        {respostaListUsers && respostaListUsers.map(item => {
          return (
            <label htmlFor="" key={item}>{item}</label>
          );
        })}
        
      </Container>
    </>
  );
}

export default App;
