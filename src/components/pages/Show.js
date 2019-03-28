import React, { useState } from 'react';
import Header from '../parts/Header'
import { getTodo, deleteTodo } from '../../services/todo'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { inputTask, addTask } from '../../actions/tasks'

import Style from '../../styles/common'

function Show(props) {

  const [data, setData] = useState(null);

  if (data == null)
    getTodo(props.match.params.id)
      .then(result => {console.log(result);setData(result)})
      .catch(e => console.log(e))

  function handleDelete(e) {
    deleteTodo(props.match.params.id)
      .then(result => props.history.push('/list'))
      .catch(e => { console.log(e); props.history.push('/list') })
  }

  return (
    <div>
      <Header />
      <h2 class={Style.title}>{data && data.data.todo.text}</h2>

      <button onClick={handleDelete} style={{
          fontSize: '32pt',
          height: "48pt",
          width: '200px',
          'border-radius': '5px',
          margin: '12px auto 24px',
          display: 'block',
          background: '#222',
          color: '#fff'
        }} >削除</button>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))