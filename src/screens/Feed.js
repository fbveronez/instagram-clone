import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'


export default class Feed extends Component {
  state = {
    posts: [{
      id: Math.random(),
      nickname: 'Fernando Malucao',
      email: 'fernandomaluco@gmail.com',
      image: require('../../assets/imgs/fence.jpg'),
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
      image: require('../../assets/imgs/bw.jpg'),
      comments: []
    }]
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) =>
            <Post key={item.id} {...item} />} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    color:'#F5FCFF'
  }
})