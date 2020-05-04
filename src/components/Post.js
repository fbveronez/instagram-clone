import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'
const Post = (props) =>{
  return (
    <View style={styles.container} >
      <Image source={props.image} style={styles.image} />
      <Author email={props.email} nickname={props.nickname}/>
      <Comments comments={props.comments}/>
      <AddComment  postId={props.id}/>
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

export default Post