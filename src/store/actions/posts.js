import {ADD_POST, ADD_COMMENT} from './actionsTypes'
import axios from 'axios'


export const addPost = post =>{
  return dispatch =>{
    axios.post('/posts.json', {...post})
    .catch(erro => console.lot(err))
    .then(res => console.log(res.data))
  }
  // return{
  //   type: ADD_POST,
  //   payload:post
  // }
}

export const addComment = payload =>{
  return{
    type:ADD_COMMENT,
    payload: payload
  }
}
