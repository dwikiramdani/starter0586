/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, ImageBackground, Image, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: 'richardlie'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{marginTop: 44, marginBottom: 56}}>
          {/* Club Post */}
              <View style={{flexDirection: "row", width: '85%', height: 48, marginLeft: 'auto', marginRight: 'auto', marginTop: 16}}>
                <Image source={require('./assets/pic48x48.png')} style={{width: 48, height: 48}} resizeMode='stretch'/>
                <View style={{marginLeft: 12,}}>
                  <Text style={styles.postTitle}>Lion Running Club <Image source={require('./assets/pin-outline.png')} style={{width: 16, height: 16}}/> </Text>
                  <Text style={styles.postTime}>30 Minutes ago</Text>
                </View>
                <TouchableOpacity style={styles.postMore}>
                   <Image source={require('./assets/more.png')} resizeMode='stretch'/>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, height: 'auto', width: '85%', marginLeft: 'auto', marginRight: 'auto', marginTop: 12, marginBottom: 24}}>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nisi vitae quam euismod bibendum. Morbi diam lacus, efficitur non luctus non, mollis et metus. Nulla eu lorem rhoncus, finibus dolor non, sodales metus. Aliquam at finibus nibh. Cras ac egestas tellus. Aliquam erat volutpat. Sed hendrerit tortor ut hendrerit rutrum. Nunc arcu diam, feugiat ac ultrices nec, bibendum lacinia risus. Cras sit amet pulvinar ex, et auctor ipsum. Vivamus ut finibus mauris, in semper augue. 
                </Text>
              </View>
              <View style={{flex: 0, height: 37, width: '85%', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto'}}>
                <View style={styles.like}>
                  <TouchableOpacity style={styles.thumb}>
                    <Image source={require('./assets/thumb-up-outline.png')}/>
                  </TouchableOpacity>
                  <Text style={{
                    marginLeft: 22,
                    fontFamily: 'Lato',
                    fontSize: 12,
                    marginTop: 'auto',
                    marginBottom: 2,
                    }}>
                    100 Likes
                  </Text>
                </View>
                <View style={styles.comment}>
                  <TouchableOpacity style={styles.textComment}>
                    <Image source={require('./assets/comment-outline.png')}/>
                  </TouchableOpacity>
                  <Text style={{
                    marginLeft: 22,
                    fontFamily: 'Lato',
                    fontSize: 12,
                    marginTop: 'auto',
                    marginBottom: 2,
                    }}>
                    262 Comment
                  </Text>
                </View>
                <TouchableOpacity style={styles.postMore}>
                   <Image source={require('./assets/arrow.png')} resizeMode='stretch'/>
                </TouchableOpacity>
              </View>
              <View style={{width: '80%', flexDirection: 'row', borderWidth: 0.5, borderColor: '#F0F0F0', marginLeft: 'auto', marginRight: 'auto', marginTop: 6}}>
              </View>
              <View style={{flexDirection: "row", width: '85%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', marginTop: 16, borderWidth: 1}}>
                <Image source={require('./assets/man.png')} style={{width: 48, height: 48}} resizeMode='stretch'/>
                <View style={{marginLeft: 12,}}>
                  <Text style={styles.postTitle}>{this.username}</Text>
                  <Text style={styles.postTime}>30 Minutes ago</Text>
                </View>
                <TouchableOpacity style={styles.postMore}>
                   <Image source={require('./assets/more.png')} resizeMode='stretch'/>
                </TouchableOpacity>
              </View>
          {/* Club Post */}
        
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mapBackground: {
    position: 'absolute',
    width: 375,
    height: 236,
    top: 64,
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
  submitButton: {
    bottom: 26,
    height: 56,
    width: 215,
    borderRadius: 80,
    backgroundColor: '#FFC000',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  card: {
    flex: 1,
    width: 327,
    height: 214,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 24,
    borderRadius: 12,
    borderColor: '#EBEBEB',
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowColor: 'black'
  },
  postTitle: {
    fontFamily: 'Lato', 
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  postTime: {
    fontFamily: 'Lato', 
    fontSize: 12,
    fontWeight: 'normal',
    color: '#7C7C7D',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  postMore: {
    flex: 1,
    marginBottom: 'auto',
    marginTop: 'auto',
    marginRight: 10,
    height: 10,
    alignItems: 'flex-end'
  },
  like: {
    width: 90, 
    height: 20, 
    marginBottom: 'auto', 
    marginTop: 'auto', 
    marginLeft: 16
  },
  thumb: {
    flex: 1,
    marginBottom: 'auto',
    marginTop: 'auto',
    height: 18,
  },
  comment: {
    width: 110, 
    height: 20, 
    marginBottom: 'auto', 
    marginTop: 'auto', 
    marginLeft: 16
  },
  textComment: {
    flex: 1,
    marginBottom: 'auto',
    marginTop: 'auto',
    height: 18,
  },
  ads: {
    flex: 1,
    width: 327,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 24,
  },
});
