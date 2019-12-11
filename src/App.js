import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {
  render() {
    const list = ['レポート課題', 'テスト勉強'];
    
    return (
      <div>
        <h1>TODOアプリ</h1>
        <TodoList list={list}/>
      </div>
    );
  }
}

export default App;