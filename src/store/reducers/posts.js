import { ADD_POST } from '../actions/actionsTypes'

const initialState = {
  posts: [{
    id: Math.random(),
    nickname: 'Fernando Malucao',
    email: 'fernandomaluco@gmail.com',
    image: require('../../../assets/imgs/fence.jpg'),
    comments: [{
      nickname: 'Maicon',
      comment: 'Feiosao'
    }, {
      nickname: 'Luciana',
      comment: 'Bonitaoo'
    }]
  }, {
    id: Math.random(),
    nickname: 'Pedro Paulo',
    email: 'pedropaulo@gmail.com',
    image: require('../../../assets/imgs/bw.jpg'),
    comments: [{
      nickname: 'Caetano',
      comment: 'Coisa linda !!'
    }]
  }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST:
        return {
          ...state,
          posts: state.posts.concat({
            ...action.payload
          })  
        }
        default:
          return state
    }
  }

export default reducer
