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
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{marginTop: 44, marginBottom: 56}}>
          <View>
            <ImageBackground source={require('./assets/map1.png')} style={{flex: 1, height: 208, alignItems: 'center'}}>
              <View style={{backgroundColor: 'white', width: 343, height: 112, marginBottom: 'auto', marginTop: 'auto', borderRadius: 12, flexDirection: 'row' }}>
                <Image source={require('./assets/slider4.png')} style={{width: 80, height: 80, marginLeft: 16, marginTop: 16,
                marginBottom: 16, borderRadius: 6}} />
                <View style={{marginLeft: 12, marginTop: 12}}>
                  <Text style={{fontSize: 16, fontFamily: 'Lato', fontWeight: 'bold', marginBottom: 5}}>Yoayo 5K VR</Text>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{backgroundColor: '#ED0875', borderRadius: 6, height: 18, width: 50, alignItems: 'center'}}>
                      <Text style={{fontSize: 12, fontFamily: 'Lato', fontWeight: 'bold', color: 'white',}}>Virtual</Text>
                    </TouchableOpacity>
                    <Text style={{marginLeft: 5}}>Ends 14/04/2019</Text>
                  </View>
                  <Text style={{marginTop: 6}}>Your Progress</Text>
                </View>
              </View>
            </ImageBackground>
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
                Continue Running
              </Text>
            </TouchableOpacity>
          </View>
          
          {/* Club Post */}
          <View style={styles.card}>
              <View style={{flexDirection: "row", width: 295, height: 48, marginLeft: 'auto', marginRight: 'auto', marginTop: 16}}>
                <Image source={require('./assets/pic48x48.png')} style={{width: 48, height: 48}} resizeMode='stretch'/>
                <View style={{marginLeft: 12,}}>
                  <Text style={styles.postTitle}>Lion Running Club <Image source={require('./assets/pin-outline.png')} style={{width: 16, height: 16}}/> </Text>
                  <Text style={styles.postTime}>30 Minutes ago</Text>
                </View>
                <TouchableOpacity style={styles.postMore}>
                   <Image source={require('./assets/more.png')} resizeMode='stretch'/>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, height: 112, marginLeft: 16, marginRight: 16, marginTop: 8}}>
                <Text numberOfLines={4} ellipsizeMode={"tail"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nisi vitae quam euismod bibendum. Morbi diam lacus, efficitur non luctus non, mollis et metus. Nulla eu lorem rhoncus, finibus dolor non, sodales metus. Aliquam at finibus nibh. Cras ac egestas tellus. Aliquam erat volutpat. Sed hendrerit tortor ut hendrerit rutrum. Nunc arcu diam, feugiat ac ultrices nec, bibendum lacinia risus. Cras sit amet pulvinar ex, et auctor ipsum. Vivamus ut finibus mauris, in semper augue. 
                </Text>
                <Text>Test</Text>
              </View>
              <View style={{flex: 0, height: 37, flexDirection: 'row', borderTopWidth: 1.5, borderTopColor: '#F0F0F0'}}>
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
              </View>
          </View>
          {/* Club Post */}

          {/* ADS */}
          <View style={styles.ads}>
            <Image source={require('./assets/insurance-ads.png')} />
          </View>
          {/* ADS */}

          {/* Club Post */}
          <View style={styles.card}>
              <View style={{flexDirection: "row", width: 295, height: 48, marginLeft: 'auto', marginRight: 'auto', marginTop: 16}}>
                <Image source={require('./assets/pic48x48.png')} style={{width: 48, height: 48}} resizeMode='stretch'/>
                <View style={{marginLeft: 12,}}>
                  <Text style={styles.postTitle}>Lion Running Club <Image source={require('./assets/pin-outline.png')} style={{width: 16, height: 16}}/> </Text>
                  <Text style={styles.postTime}>30 Minutes ago</Text>
                </View>
                <TouchableOpacity style={styles.postMore}>
                   <Image source={require('./assets/more.png')} resizeMode='stretch'/>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, height: 112, marginLeft: 16, marginRight: 16, marginTop: 8}}>
                <Text numberOfLines={4} ellipsizeMode={"tail"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nisi vitae quam euismod bibendum. Morbi diam lacus, efficitur non luctus non, mollis et metus. Nulla eu lorem rhoncus, finibus dolor non, sodales metus. Aliquam at finibus nibh. Cras ac egestas tellus. Aliquam erat volutpat. Sed hendrerit tortor ut hendrerit rutrum. Nunc arcu diam, feugiat ac ultrices nec, bibendum lacinia risus. Cras sit amet pulvinar ex, et auctor ipsum. Vivamus ut finibus mauris, in semper augue. 
                </Text>
                <Text>Test</Text>
              </View>
              <View style={{flex: 0, height: 37, flexDirection: 'row', borderTopWidth: 1.5, borderTopColor: '#F0F0F0'}}>
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
              </View>
          </View>
          {/* Club Post */}

          {/* ADS */}
          <View style={styles.ads}>
            <Image source={require('./assets/insurance-ads.png')} />
          </View>
          {/* ADS */}

          {/* Club Post */}
          <View style={styles.card}>
              <View style={{flexDirection: "row", width: 295, height: 48, marginLeft: 'auto', marginRight: 'auto', marginTop: 16}}>
                <Image source={require('./assets/pic48x48.png')} style={{width: 48, height: 48}} resizeMode='stretch'/>
                <View style={{marginLeft: 12,}}>
                  <Text style={styles.postTitle}>Lion Running Club <Image source={require('./assets/pin-outline.png')} style={{width: 16, height: 16}}/> </Text>
                  <Text style={styles.postTime}>30 Minutes ago</Text>
                </View>
                <TouchableOpacity style={styles.postMore}>
                   <Image source={require('./assets/more.png')} resizeMode='stretch'/>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, height: 112, marginLeft: 16, marginRight: 16, marginTop: 8}}>
                <Text numberOfLines={4} ellipsizeMode={"tail"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nisi vitae quam euismod bibendum. Morbi diam lacus, efficitur non luctus non, mollis et metus. Nulla eu lorem rhoncus, finibus dolor non, sodales metus. Aliquam at finibus nibh. Cras ac egestas tellus. Aliquam erat volutpat. Sed hendrerit tortor ut hendrerit rutrum. Nunc arcu diam, feugiat ac ultrices nec, bibendum lacinia risus. Cras sit amet pulvinar ex, et auctor ipsum. Vivamus ut finibus mauris, in semper augue. 
                </Text>
                <Text>Test</Text>
              </View>
              <View style={{flex: 0, height: 37, flexDirection: 'row', borderTopWidth: 1.5, borderTopColor: '#F0F0F0'}}>
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
              </View>
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
    height: 214,
    marginLeft: 16,
    marginRight: 16,
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
