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

