import './App.css';
import List from './List'
import { workItem, headers } from './const'
import React, { useState } from 'react';

function App() {
  const [worklog, setworklog] = useState(workItem);
  const addCard = (newCard) => {
    setworklog(prevState => (
      [
        ...prevState,
        { ...newCard, id: workItem.length, state: false }
      ]
    ))
  }

  const updateCard = (details) => {
    setworklog(worklog.map(item => {
      if (item.id === details.id) {
        item.text = details.text;
        item.state = !item.state;
        return item;
      } else {
        return item;
      }
    }))
  }

  const deleteCard = (id) => setworklog(worklog.filter(item => item.id !== id))
  const statusHandler = (card_index) => {
    setworklog(worklog.map(item => item.id === card_index ? {...item, state: !item.state} : item))
  }

  return (
    <div className="App">
      {headers && headers.map((item, index) => {
        let sortedWorklog = worklog && worklog.filter(log => item.id === 0 ? log.status === 'complete' : item.id === 1 ? log.status === 'pending' : log.status === 'todo')
        return <List key={`list_${index}`}
          header={item} worklog={sortedWorklog}
          cardHandler={addCard}
          deleteCard={deleteCard}
          updateCard={updateCard}
          statusHandler={statusHandler} />
      })}

    </div>
  );
}

export default App;
