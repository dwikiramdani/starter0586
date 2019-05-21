import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button} from 'react-native';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: ''
    };
  }

  onPressLearnMore = () => {
    alert('Button berfungsi')
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={{flex: 1}}>
            <Image 
              source={require('./assets/Icon/shoe.png')}
              style={styles.shoeIcon}
              />
            <Text style={styles.titleText}>RESET</Text>
            <Text style={styles.titleText}>PASSWORD</Text>
            <Text style={styles.titleDesc}>Enter your email for password recovery</Text>

            <TextInput
              style={styles.formEmail}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              placeholder='Email'
            />
            <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.75}
            >
              <Text style={{
                fontFamily: 'Lato',
                fontSize: 18,
                fontWeight: 'bold',
                lineHeight: 24,
              }}>
                Reset Password
              </Text>
            </TouchableOpacity>
          </View>
        <Footer />
      </View>
    );
  }
}

class Footer extends Component {

  render(){
    return(
      <View style={{flex: 0, backgroundColor: 'white',elevation: 10 , height: 6}}>
          <View style={{flex: 0, height: 6, flexDirection: 'row'}}>
            <View style={{flex: 1, backgroundColor: '#ED0875'}}></View>
            <View style={{flex: 1, backgroundColor: '#F6881F'}}></View>
            <View style={{flex: 1, backgroundColor: '#CFDD27'}}></View>
            <View style={{flex: 1, backgroundColor: '#3FC4E0'}}></View>
            <View style={{flex: 1, backgroundColor: '#A862A7'}}></View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderColor: 'red',
  },
  // Login Title
  loginTitle: {
    flex: 2,
    marginLeft: 40,
    marginTop: 72,
    paddingLeft: 40
  },
  shoeIcon: {
    width: 57,
    height: 40,
    marginBottom: 20,
    marginLeft: 40,
    marginTop: 52,
  },
  titleText: {
    fontFamily: 'Lato',
    fontSize: 48,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 5,
    marginLeft: 35,
  },
  titleDesc: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    marginLeft: 40,
    color: '#7C7C7D',
  },

  // Login Form
  loginForm: {
    flex: 8,
    borderColor: 'blue',
    marginTop: 40,
    paddingLeft: 40,
    
  },
  formEmail: {
    marginTop: 40,
    height: 40, 
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    fontSize: 18,
    lineHeight: 20,
    fontFamily: 'Lato',
    marginLeft: 40,
  },
  formPassword: {
    height: 40,
    marginTop: 32, 
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    fontSize: 18,
    lineHeight: 20,
    fontFamily: 'Lato',
    marginLeft: 40,
  },
  submitButton: {
    marginTop: 32,
    height: 56,
    width: 295,
    borderRadius: 80,
    backgroundColor: '#FFC000',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center', 
    justifyContent: 'center'
  }
});
