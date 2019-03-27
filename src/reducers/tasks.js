const initialState = {
    tasks: [],
    input_text: ''
}

const reducer = {
    ADD_TASK: (state, action) => ({
        ...state,
        tasks: state.tasks.concat([action.text])
    }),
    INPUT_TASK: (state, action) => ({
        ...state,
        input_text: action.input_text
    })
}

export default (state = initialState, action) => {
    console.log(action)
    if (!reducer[action.type]) return state
    return reducer[action.type](state, action)
}