export const AddUser = (value) => async dispatch =>{
    dispatch({
        type:"ADD",
        payload: value,
    })
}
export const RemoveUser = (value) => async dispatch =>{
dispatch({
    type:"REMOVE",
    payload: {name:value},
})
}

