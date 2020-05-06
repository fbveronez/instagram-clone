import React from 'react'
import {connect} from 'react-redux'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'
const Post = (props) =>{

  const addComment = props.name ? <AddComment  postId={props.id}/> : null 

  return (
    <View style={styles.container} >
      <Image source={{uri: props.image}} style={styles.image} />
      <Author email={props.email} nickname={props.nickname}/>
      <Comments comments={props.comments}/>
      {addComment}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('screen').width * 3 / 4,
    resizeMode: 'contain'
  }
})


const mapStateToProps = ({user}) =>{
  return{
    name: user.name
  }
}
export default connect(mapStateToProps,null)(Post)