import React from 'react'
import Header from '../parts/Header'
import { addTodo } from '../../services/todo'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { inputTask, addTask } from '../../actions/tasks'

import Style from '../../styles/common'

function Add(props) {
  function handleInput(e) {
    props.inputTask(e.target.value)
  }

  function handleClick(e) {
    console.log(props.input_text)
    addTodo(props.input_text)
      .then(result => props.history.push('/list'))
      .catch(e => { console.err(e); props.history.push('/list') })
  }

  return (
    <div>
      <Header />
      <div class={Style.body}>
        <h2 class={Style.title}>Add</h2>
        <input type="text" onChange={handleInput} style={{
          height: "48px",
          width: '400px',
          'border-radius': '5px',
          margin: 'auto',
          padding: '8px',
          display: 'block',
          fontSize: '32pt'
        }} /><br />
        <button onClick={handleClick} style={{
          fontSize: '32pt',
          height: "48pt",
          width: '200px',
          'border-radius': '5px',
          margin: '12px auto 24px',
          display: 'block',
          background: '#222',
          color: '#fff'
        }} >追加</button>
        <button onClick={e => props.history.push('/list')} style={{
          fontSize: '32pt',
          height: "48pt",
          width: '200px',
          'border-radius': '5px',
          margin: 'auto',
          display: 'block',
          background: '#222',
          color: '#fff'
        }} >戻る</button>
      </div>
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

// withRouterを使うとpropsにHistoryが渡される
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add))