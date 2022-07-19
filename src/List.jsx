import React, { useState, useRef } from "react";
import "./styles.css";
import './List.css';
import Card from "./Card";
import InputBox from "./InputBox";


const List = (props) => {

  const updatedText = useRef();
  const { worklog, header, deleteCard, updateCard, statusHandler } = props;
  const [visible, setvisible] = useState(false);
  const inputBoxVisibilityhandler = () => setvisible(!visible)
  const updateCardHandler = (data) => {
    data.text = updatedText && updatedText.current.value;
    updateCard(data)
  }

  return (
    <div className="list">
      <h3 className="heading">{header.name}</h3>
      <button type="button" className="plus-button" onClick={inputBoxVisibilityhandler}> + </button>
      {visible && <InputBox data={props} visibilityHandler={inputBoxVisibilityhandler} />}
      {worklog && worklog.map((item, index) => {
        let cssClass = `space_btw card_${header.id}`
        return (
          <Card key={index} className={cssClass}>
            {item.state && (<div>{item.text}</div>)}
            {!item.state && (<input type="text" placeholder="...." ref={updatedText} />)}
            <div>
              <button className="delete-btn" type="button" onClick={() => statusHandler(item.id)}>Edit</button>
              <button className="delete-btn" type="button" onClick={() => updateCardHandler(item)}>Update</button>
              <button className="delete-btn" type="button" onClick={() => deleteCard(item.id)}>Delete</button>
            </div>
          </Card>
        )
      })}
    </div>
  );
};

export default List;
