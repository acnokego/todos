import React, { Component } from 'react';
import './App.css';

class TodoItem extends Component {
  
  render() {
    const items = this.props.items;
    const listInd = this.props.listInd;
    const itemGroup = items.map((todo, Ind) => {
      return (
        <li className="item" key={todo.item}>
        <input type="checkbox" className="w3-check"
        onClick={()=>this.props.check(listInd,Ind)}
        ></input>

        <span className="item-content" id={listInd + "_" + Ind}>
        {todo.item}
        </span>

        <button className="rmItem-button" 
        onClick={()=>this.props.rmItem(listInd, Ind)}
        >X</button>

        </li>
      );
    });

    return (
      <ul className="TodoItem">
      {itemGroup}
      </ul>
    );
  }
}

export default TodoItem;
