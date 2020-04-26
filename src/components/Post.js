import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import Author from './Author'
import Comments from './Comments'

const Post = (props) =>{
  return (
    <View style={styles.container} >
      <Image source={props.image} style={styles.image} />
      <Author email='teste@teste.com' nickname='fulano de tal'/>
      <Comments comments={props.comments}/>
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