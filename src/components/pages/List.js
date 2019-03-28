import React, { useState } from 'react';
import Header from '../parts/Header'
import { getTodoList } from '../../services/todo'
import TodoList from '../parts/TodoItem'
import { connect } from 'react-redux'
import { inputTask, addTask } from '../../actions/tasks'
import { Link } from 'react-router-dom'

function List(props) {

  const [list, setList] = useState(null);

  if (list == null)
    getTodoList()
      .then(result => setList(result.data.todo_list))
      .catch(e => console.log(e))

  return (
    <div>
      <Header />
      <h2>List</h2>
      <Link to="/add">追加</Link>
      <ul>
      { list && list.map((d, i) => <TodoList key={i} data={d}/>) }
      </ul>
    </div>
  )
}

// StateをPropsに混ぜる
function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    input_text: state.input_text
  }
}

// Dispatch関数をPropsに混ぜる
function mapDispatchToProps(dispatch) {
  return {
    addTask: task => dispatch(addTask(task)),
    inputTask: text => dispatch(inputTask(text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)