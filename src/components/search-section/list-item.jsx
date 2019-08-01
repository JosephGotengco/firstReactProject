import React from 'react';

function ListItem(props) {
  return (
    <div className="d-block">
      {props.label}:
      <div className="float-right">{props.data}</div>
    </div>
  );
}

export default ListItem;
