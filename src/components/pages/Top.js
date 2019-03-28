import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../parts/Header'
import Logo from '../parts/Logo'
import { inputTask, addTask } from '../../actions/tasks'

function Top(props) {
  return (
    <div>
      <Header />
      <Logo />
      <p>ようこそToDoへ。</p>
      <Link to="/list">リスト</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Top)