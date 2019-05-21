/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
      key: 'pic1',
      image: require('./assets/slider1.png'),
      imageStyle: {
        position: 'absolute',
        width: 221,
        height: 232,},
      text: 'New to Yoayo? Join now and get a free account. Log in to connect with your peers and run in an event together',
      textStyle: {
        width: 280,
        height: 100,
        marginTop: -50,
        fontFamily: 'Noto Sans',
        fontSize: 16,
        textAlign: 'center'
      }
    },
    {
      key: 'pic2',
      image: require('./assets/slider2.png'),
      imageStyle: {
        position: 'absolute',
        width: 221,
        height: 232,},
      text: 'Running is a team sport. Yoayo is a platform to connect runners in Indonesian through clubs and events',
      textStyle: {
        width: 280,
        height: 100,
        marginTop: -50,
        fontFamily: 'Noto Sans',
        fontSize: 16,
        textAlign: 'center'
      }
    },
    {
      key: 'pic3',
      image: require('./assets/slider3.png'),
      imageStyle: {
        position: 'absolute',
        width: 221,
        height: 232,},
      text: 'Joining a club is essential to keep your spirit going. Your peerswill push you from funto competition mode',
      textStyle: {
        width: 280,
        height: 100,
        marginTop: -50,
        fontFamily: 'Noto Sans',
        fontSize: 16,
        textAlign: 'center'
      }
    },
    {
      key: 'pic4',
      image: require('./assets/slider4.png'),
      imageStyle: {
        position: 'absolute',
        width: 221,
        height: 232,},
      text: 'Easily get access to every events that are available for you to join. Put your jersey on and get your medal!',
      textStyle: {
        width: 280,
        height: 100,
        marginTop: -50,
        fontFamily: 'Noto Sans',
        fontSize: 16,
        textAlign: 'center'
      }
    },
    {
      key: 'pic5',
      image: require('./assets/slider5.png'),
      imageStyle: {
        position: 'absolute',
        width: 221,
        height: 232,},
      text: 'Every run counts. Track yourstats to see your progressevery step of the way',
      textStyle: {
        width: 280,
        height: 100,
        marginTop: -50,
        fontFamily: 'Noto Sans',
        fontSize: 16,
        textAlign: 'center'
      }
    }
];

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            show_Main_App: false
        };
    }

    on_Done_all_slides = () => {
        this.setState({
            show_Main_App: true
        })
    }

    on_Skip_slides = () => {
        this.setState({
            show_Main_App: true
        })
    }

    render(){
      return (
        <View style={styles.container}>
          <ImageBackground source={require('./assets/MaskGroup.png')} style={{flex: 1, width: '100%', height: '100%'}}>
            <AppIntroSlider
              slides={slides}
              onDone={this.on_Done_all_slides}
              showSkipButton={false}
              showNextButton={false}
              showDoneButton={false}
              onSkip={this.on_Skip_slides}
            />
          </ImageBackground>
          <Footer />
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
  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
});
