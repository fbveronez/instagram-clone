import React, {Component} from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet
}from 'react-native'


export default class Login extends Component {
  state= {
    email:'',
    password:''
  }

  login = () => {
    this.props.navigation.navigate('Profile')
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput placeholder='Email' style={styles.input} 
        value={this.state.email} autoFocus={true} keyboardType='email-address'
        onChangeText={email => this.setState({email})}
        />
        <TextInput placeholder='password' style={styles.input} 
        value={this.state.password} autoFocus={true} secureTextEntry={true}
        onChangeText={password => this.setState({password})}
        />
        <TouchableOpacity onPress={this.login} style={styles.buttom}>
          <Text style={styles.buttomText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('Register')}} 
        style={styles.buttom}>
          <Text style={styles.buttomText}>Criar nova conta...</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  buttom:{
    marginTop:30,
    padding:10,
    backgroundColor:'#4286f4'
  },
  buttomText:{
    fontSize:20,
    color:'#FFF'
  },
  input:{
    marginTop:20,
    width:'90%',
    backgroundColor:'#EEE',
    height:40,
    borderWidth:1,
    borderColor:'#333'
  }
})