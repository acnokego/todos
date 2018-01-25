import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
  render() {
    const lists = this.props.lists;
    const listGroup = lists.map((list, index) => {
      const inputId = "itemname_" + index;
      return (
        <div className="TodoList">
        <p className="listname">
        {list.name}
        <button className="rmList-button" onClick={() => this.props.rmList(index)}>X</button>
        </p>


        <input id={inputId} type="text" className="List-input" placeholder="Add a todo item">
        </input>
        <button className="w3-button w3-medium  w3-padding-small w3-circle w3-green" onClick={() => this.props.addItem(index)}>+</button>
        <TodoItem
        items={list.items}
        listInd={index}
        check={(i, j) => this.props.check(i, j)}
        rmItem={(i, j) => this.props.rmItem(i, j)}
        />
        </div>
      );
    });

    return (
      <div className="listGroup">
        {listGroup} 
      </div>
    );
  }

}

export default TodoList;
