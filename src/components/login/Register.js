import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Keyboard} from 'react-native';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      username: '',
      isHidden: false,
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.changeHidden,
    );

    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.changeShow,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  changeHidden = () => {
    this.setState({
      isHidden: true
    })
  }

  changeShow = () => {
    this.setState({
      isHidden: false
    })
  }

  render() {
    return (
        <View style={styles.container}>
          <ScrollView style={{flex: 1}}>
            <Image 
              source={require('./assets/Icon/shoe.png')}
              style={styles.shoeIcon}
              />
            <Text style={styles.titleText}>REGISTER</Text>
            <Text style={styles.titleDesc}>Create a free account</Text>

            <TouchableOpacity
            style={styles.regFacebook}>
              <Image source={require('./assets/Icon/fb.png')} style={{width: 10, height: 21, marginRight: 264, marginLeft: 21}}/>
              <Text style={{
                fontFamily: 'Lato',
                fontSize: 18,
                fontWeight: 'bold',
                lineHeight: 24,
                color: '#FFFFFF',
                position: "absolute"
              }}>
                Register with Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.regGoogle}>
              <Image source={require('./assets/Icon/google.png')} style={{width: 21, height: 21, marginRight: 264, marginLeft: 21}}/>
              <Text style={{
                fontFamily: 'Lato',
                fontSize: 18,
                fontWeight: 'bold',
                lineHeight: 24,
                color: '#FFFFFF',
                position: "absolute"
              }}>
                Register with Google
              </Text>
            </TouchableOpacity>

            <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 32}}>
              <Text style={{opacity: .50}}>──  Or  ──</Text>
            </View>

            <TextInput
              style={styles.formEmail}
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
              placeholder='Username'
            />
            <TextInput
              style={styles.formEmail}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              placeholder='Email'
            />
            <TextInput
              style={styles.formPassword}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              placeholder='Password'
              secureTextEntry={true}
            />
            <TouchableOpacity
            style={styles.submitButton}>
              <Text style={{
                fontFamily: 'Lato',
                fontSize: 18,
                fontWeight: 'bold',
                lineHeight: 24,
              }}>
                Register
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent: "center", alignItems: 'center', marginTop: 16}}>
              <Text style={{
                fontFamily: 'Lato',
                fontSize: 14,
                fontWeight: 'normal',
                lineHeight: 20,
              }}>
                By creating an account, you agree to our
              </Text>
              <Text style={{
                fontFamily: 'Lato',
                fontSize: 14,
                fontWeight: 'normal',
                lineHeight: 20,
                textDecorationLine: "underline",
                marginBottom: 32
              }}>
                Term & Conditions
              </Text>
            </TouchableOpacity>
          </ScrollView>
            { !this.state.isHidden && 
              <Footer />
            }
        </View>
    );
  }
}

class Footer extends Component {

  render(){
    return(
      <View style={{flex: 0, backgroundColor: 'white',elevation: 10 , height: 70}}>
          <View style={{flex: 0, height: 64, flexDirection: 'row', alignItems: "center", shadowColor: 'black', shadowOpacity: 1}}>
            <TouchableOpacity style={{
              flex: 1,
              marginLeft: 'auto',
              marginRight: 'auto',
              alignItems: 'center',
            }}>
              <Text style={{
              fontFamily: 'Lato',
              fontSize: 14,
              fontWeight: 'bold'}}>
                Register
              </Text>
            </TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#F0F0F0',
                  flex: 0,
                  width: 1,
                }}
              >
                <Text>...</Text>
              </View>
            <TouchableOpacity style={{
              flex: 1,
              marginLeft: 'auto',
              marginRight: 'auto',
              alignItems: 'center',
            }}>
              <Text style={{
              fontFamily: 'Lato',
              fontSize: 14,
              fontWeight: 'bold'}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

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
    marginTop: 52
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
    marginLeft: 40
  },

  // Login Form
  loginForm: {
    flex: 8,
    borderColor: 'blue',
    marginTop: 40,
    paddingLeft: 40,
    
  },
  formEmail: {
    marginTop: 32,
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
  },
  regFacebook: {
    marginTop: 32,
    height: 56,
    width: 295,
    borderRadius: 5,
    backgroundColor: '#4468B3',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  regGoogle: {
    marginTop: 8,
    height: 56,
    width: 295,
    borderRadius: 5,
    backgroundColor: '#E64D40',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  botNav: {
    marginTop: 8,
    height: 56,
    width: 295,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center', 
    justifyContent: 'center'
  }
});
