import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNum: 0,
      todoitemNum: 0,
      checkitemNum: 0,
      lists: [],
    };
  }

  addList() {
    const newlist = document.getElementById('listname');
    const lists = this.state.lists;
    this.setState({
      lists: lists.concat([{
        name: newlist.value,
        items: [],
        listtodo: 0,
        listcheck: 0,
      }]),
      listNum: lists.length,                
    });
    newlist.value = '';
  }

  rmList(listInd) {
    const lists = this.state.lists;
    let todoitemNum = this.state.todoitemNum;
    let checkitemNum = this.state.checkitemNum;
    todoitemNum -= lists[listInd].listtodo;
    checkitemNum -= lists[listInd].listcheck;
    lists.splice(listInd, 1);
    this.setState({
      lists: lists,
      listNum: lists.length,
      todoitemNum: todoitemNum,
      checkitemNum: checkitemNum,                 
    })
  }

  addItem(index) {
    const newItem = document.getElementById('itemname_' + index);
    const lists = this.state.lists;
    lists[index].items = lists[index].items.concat([{
      item: newItem.value,
      check: false,
    }]);
    lists[index].listtodo += 1;
    const itemNum = this.state.todoitemNum; 
    this.setState({
      lists: lists,
      todoitemNum: itemNum + 1,
    });
    newItem.value = '';

  }

  check(listInd, Ind) {
    const lists = this.state.lists;
    const checkedItem = lists[listInd].items[Ind];
    let todoitemNum = this.state.todoitemNum;
    let checkitemNum = this.state.checkitemNum;
    if(!checkedItem.check) {
      checkedItem.check = true;
      
      lists[listInd].listtodo -= 1;
      lists[listInd].listcheck += 1;

      const element = document.getElementById(listInd + '_' + Ind);
      element.style.color = 'grey';
      element.innerHTML = '<del>' + checkedItem.item + '</del>';

      todoitemNum -= 1;
      checkitemNum += 1;
    }
    else{
      checkedItem.check = false;
      
      lists[listInd].listtodo += 1;
      lists[listInd].listcheck -= 1;
      const element = document.getElementById(listInd + '_' + Ind);
      element.style.color = 'black';
      element.innerHTML =  checkedItem.item ;

      todoitemNum += 1;
      checkitemNum -= 1;
    }

    this.setState({
      lists: lists,
      todoitemNum: todoitemNum,
      checkitemNum: checkitemNum,
    });
    
  }

  rmItem(listInd, Ind) {
    const lists = this.state.lists;
    const items = lists[listInd].items;
    let todoitemNum = this.state.todoitemNum;
    let checkitemNum = this.state.checkitemNum;
    if(items[Ind].check) {
      checkitemNum -= 1;
    }
    else {
      todoitemNum -= 1;
    }

    items.splice(Ind, 1);
    this.setState({
      lists: lists,
      todoitemNum: todoitemNum,
      checkitemNum: checkitemNum,
    });
  }

  render() {
    const todoitemNum = this.state.todoitemNum;
    const checkitemNum = this.state.checkitemNum;
    return (
      <div className="App">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <header className="App-header"> 
          <h1 className="App-title">TODOs</h1>
        </header>
        <p className="App-intro">
          Create a TODO list and enter your todo items.
        </p>
        <input id="listname" type="text" className="App-input" placeholder="Add a TODO list"></input>
        <button className="App-button" onClick={()=>this.addList()}>Add</button>
        <p className="App-count"> Todo Item #: {todoitemNum},  Checked Item #: {checkitemNum} </p>
        <TodoList
          lists={this.state.lists}
          rmList={(i)=> this.rmList(i)}
          addItem={(i) => this.addItem(i)}
          check={(i, j) => this.check(i, j)}
          rmItem={(i, j) => this.rmItem(i, j)}
        />
      </div>
    );
  }
}

export default App;
//<img src={logo} className="App-logo" alt="logo" />
