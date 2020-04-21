import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import Author from './Author'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Image source={this.props.image} style={styles.image} />
        <Author email='teste@teste.com' nickname='fulano de tal'/>
      </View>
    )
  }
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