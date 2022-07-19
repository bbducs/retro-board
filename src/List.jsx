import React, { useState } from "react";
import "./styles.css";
import Card from "./Card";
import InputBox from "./InputBox";


const List = (props) => {
  const { worklog, header, deleteCard } = props;
  const [visible, setvisible] = useState(false);
  const inputBoxVisibilityhandler = () => setvisible(!visible)
  const deleteCardHandler = (item) => deleteCard(item.id)

  return (
    <div className="list">
      <h3 className="heading">{header.name}</h3>
      <button type="button" className="plus-button" onClick={inputBoxVisibilityhandler}> + </button>
      {visible && <InputBox data={props} visibilityHandler={inputBoxVisibilityhandler} />}
      {worklog && worklog.map((item, index) => {
        let cssClass = `space_btw card_${header.id}`
        return (
          <Card key={index} className={cssClass}>
            <div>{item.text}</div>
            <div>
              <button className="delete-btn" type="button" onClick={() => deleteCardHandler(item)}>Edit</button>
              <button className="delete-btn" type="button" onClick={() => deleteCardHandler(item)}>Delete</button>
            </div>
          </Card>
        )
      })}
    </div>
  );
};

export default List;
