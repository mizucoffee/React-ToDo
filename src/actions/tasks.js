// Actionを生成する関数群 = Action Creators

export const addTask = task => ({
  type: 'ADD_TASK',
  text: task
})

export const inputTask = text => ({
  type: 'INPUT_TASK',
  input_text: text
})