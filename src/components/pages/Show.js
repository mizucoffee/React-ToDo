import React from 'react'
import Header from '../parts/Header'
import { deleteTodo } from '../../services/todo'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { inputTask, addTask } from '../../actions/tasks'

function Show(props) {

  function handleDelete(e) {
    deleteTodo(props.match.params.id)
      .then(result => props.history.push('/list'))
      .catch(e => { console.log(e); props.history.push('/list') })
  }

  return (
    <div>
      <Header />
      <h2>Show</h2>
      <button onClick={e => props.history.push('/list')}>戻る</button>
      <button onClick={handleDelete}>削除</button>
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