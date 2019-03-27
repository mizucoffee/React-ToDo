import React from 'react'
import Header from '../parts/Header'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { inputTask, addTask } from '../../actions/tasks'
import { Link } from 'react-router-dom'

function List(props) {
  return (
    <div>
      <Header />
      <h2>List</h2>
      <Link to="/add">追加</Link>
      <ul>
        {props.tasks.map((t, i) => <li key={i}>{t}</li>)}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))