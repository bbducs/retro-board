import './App.css';
import List from './List'
import { workItem, headers } from './const'
import React, { useState } from 'react';

function App() {
  const [worklog, setworklog] = useState(workItem);
  const updateCard = (newCard) => {
    setworklog(prevState => (
      [
        ...prevState,
        { ...newCard, id: workItem.length }
      ]
    ))
  }

  const deleteCard = (id) => setworklog(worklog.filter(item => item.id !== id))

  return (
    <div className="App">
      {headers && headers.map((item, index) => {
        let sortedWorklog = worklog && worklog.filter(log => item.id === 0 ? log.status === 'complete' : item.id === 1 ? log.status === 'pending' : log.status === 'todo')
        return <List key={`list_${index}`} header={item} worklog={sortedWorklog} cardHandler={updateCard} deleteCard={deleteCard}/>
      })}

    </div>
  );
}

export default App;
