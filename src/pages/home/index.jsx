import React, {useState, useEffect} from 'react' // criando um estado
import './styles.css'

import {Card} from '../../components/card';

export function Home() {
  const [studentName, setStudentName] = useState() 
  const [students, setStudents] = useState([]) 

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR",{
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    }

    setStudents(prevState =>  [...prevState, newStudent])
  }

  useEffect(() => {
    console.log("useEffect foi chamado")
  }, [students]); 

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>Miguel</strong>
          <img src="https://github.com/miguelfill.png" alt="foto de perfil" />
        </div>
      </header>

      <input type="text" placeholder="Digite o nome:" 
        onChange={event => setStudentName(event.target.value)}/>

      <button type="button" 
        onClick={handleAddStudent}>Adicionar</button>

      {
        students.map(student => (
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time}
          />))
        }
    </div>
    
  )
}

// export default Home;
// linha 27: pegando o valor do input e colocando na função que vai atualizar o estado
// quando a gente usa chaves, é porque a gente quer pegar o conteúdo de uma variável (students)
// Linha 10-20: toda vez que eu chamar a função eu vou criar um novo objeto que vai ter duas propriedades, nome que eu vou pegar da variável que ta armazenada o estado e o time que eu vou pegar o horário atual
// Linha 24: corpo do useEffect: tudo que tiver dentro do corpo do useEffect serão as ações ou aquilo que eu quero que execute 
// Linha 25: serve pra colocar quais são os estados que nosso useEffect depende
// Linha 7: padrão do estado, primeiro elemento: onde vou armazenar o estado, segundo elemento: variável que irá mudar o estado