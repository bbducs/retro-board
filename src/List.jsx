import React, { useState } from "react";
import "./styles.css";
import Card from "./Card";
import InputBox from "./InputBox";


const List = (props) => {
  const { worklog, header } = props;
  const [visible, setvisible] = useState(false);

  const inputBoxVisibilityhandler = () => setvisible(!visible)

  return (
    <div className="list">
      <div className="heading">{header.name}</div>
      <button type="button" className="plus-button" onClick={inputBoxVisibilityhandler}> + </button>
      {visible && <InputBox data={props} visibilityHandler={inputBoxVisibilityhandler} />}
      {worklog && worklog.map((item, index) => {
        let cssClass = `card_${header.id}`
        return (
          <Card key={index} className={cssClass}>
            <span>{item.text}</span>
          </Card>
        )
      })}
    </div>
  );
};

export default List;
