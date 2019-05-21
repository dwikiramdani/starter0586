import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity, Modal, FlatList} from 'react-native';

const Device_Width = Dimensions.get('window').width ;
const thumbnailWidht = Device_Width/3;

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      isTabA: true,
      isTabB: false,
      isTabC: false,
      isLoading: true,
      ModalVisibleStatus: false,
      TempImageURL : ''
    }
  }

  ubahTab = (val) => {
    if (val === 'A') {
      this.setState({
        isTabA: true,
        isTabB: false,
        isTabC: false
      })
    } else if (val === 'B') {
      this.setState({
        isTabA: false,
        isTabB: true,
        isTabC: false,
      })
    }else {
      this.setState({
        isTabA: false,
        isTabB: false,
        isTabC: true
      })
    }
  }

  componentDidMount() {
    return fetch('https://reactnativecode.000webhostapp.com/FlowersList.php')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson
      }, function() {
        // In this block you can do something with new state.
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  ShowModalFunction(visible, imageURL){
    this.setState({
      ModalVisibleStatus: visible,
      TempImageURL: imageURL,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row", height: 44}}>
          <View style={{flex: 1}}>
            <Text style={styles.titlePage}>MY PROFILE </Text>
          </View>
            <TouchableOpacity style={styles.postMore}>
               <Image source={require('./assets/more.png')} resizeMode='stretch'/>
            </TouchableOpacity>
          </View>
        <ScrollView style={{marginBottom: 56}}>

          {/* Profile */}
          <View style={styles.card}>

              <View style={{flexDirection: "row", marginTop: 16, marginBottom: 16}}>
                <Image source={require('./assets/man-js.png')} style={{marginRight: 12, marginLeft: 16, marginTop: 'auto', marginBottom: 'auto'}} resizeMode='stretch'/>
                <View style={{flex: 9,}}>
                  <Text style={{flex: 0, fontSize: 16, fontFamily: 'Lato', fontWeight: 'bold', lineHeight: 24}}>Jon Snow</Text>
                  <Text style={{flex: 1, fontSize: 14, fontFamily: 'Lato', lineHeight: 20}}>Lord Commander lalalala of The Night's Watch</Text>
                  <View style={{flex: 0, flexDirection: 'row'}}>
                    <Image source={require('./assets/pin.png')} resizeMode='stretch' style={{marginRight: 6, marginBottom: 'auto', marginTop: 'auto'}}/>
                    <Text style={{fontSize: 14, fontFamily: 'Lato', lineHeight: 20, color: '#ACACAD'}}>
                      DKI Jakarta, Indonesia
                    </Text>
                  </View>
                </View>
                <View style={{flex: 1,}}>
                  <Image source={require('./assets/info.png')} resizeMode='stretch'/>
                </View>
              </View>

              <View style={{flex: 0, height: 'auto', flexDirection: 'row'}}>
                <View style={styles.level}>
                  <View style={{marginLeft: 16, marginTop: 15, marginRight: 16, flexDirection: 'row',}}>
                    <Text style={{color: '#FFFFFF', fontFamily: 'Lato', flex: 1, fontWeight: 'bold'}}>Level 2</Text>
                    <Text style={{color: '#FFFFFF', fontFamily: 'Lato', flex: 1, textAlign: 'right', fontSize: 14}}>100 ions to go</Text>
                  </View>
                </View>
                <View style={styles.point}>
                  <Text style={{color: '#FFFFFF', fontFamily: 'Lato', flex: 1, fontWeight: 'bold', textAlign: 'center', marginTop: 9}}>Point 1000</Text>
                  <TouchableOpacity style={{backgroundColor: '#6D1043', height: 'auto', flex: 1, borderRadius: 14, marginBottom: 9, marginTop: 3, marginLeft: 16, marginRight: 16,}}>
                    <Text style={{color: '#FFFFFF', fontFamily: 'Lato', flex: 1, fontWeight: 'bold', textAlign: 'center', marginBottom: 6, marginTop: 6, marginLeft: 16, marginRight: 16, fontSize: 13}}>Redeem</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
          {/* Profile */}

          {/* Tabs */}
          <View style={{ flex: 1,}}>

            <View style={{flexDirection: 'row'}}>

              <View style={{flex: 1, height: 40}}>
                <TouchableOpacity
                  style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}
                onPress={ () => this.ubahTab('A') }
                >
                <Text style={{fontFamily: 'Lato', fontWeight: 'bold', color: this.state.isTabA ? '#3F3F40' : '#ACACAD', fontSize: 14}}>Achievements</Text>
                </TouchableOpacity>
                <View style={{flex: 0, backgroundColor: this.state.isTabA ? '#FFC000' : '#F0F0F0', height: 4}} />
              </View>

              <View style={{flex: 1, height: 40}}>
                <TouchableOpacity
                  style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}
                onPress={ () => this.ubahTab('B') }
                >
                <Text style={{fontFamily: 'Lato', fontWeight: 'bold', color: this.state.isTabB ? '#3F3F40' : '#ACACAD', fontSize: 14}}>Galery</Text>
                </TouchableOpacity>
                <View style={{flex: 0, backgroundColor: this.state.isTabB ? '#FFC000' : '#F0F0F0', height: 4}} />
              </View>

              <View style={{flex: 1, height: 40}}>
                <TouchableOpacity
                  style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}
                onPress={ () => this.ubahTab('C') }
                >
                <Text style={{fontFamily: 'Lato', fontWeight: 'bold', color: this.state.isTabC ? '#3F3F40' : '#ACACAD', fontSize: 14}}>Statistics</Text>
                </TouchableOpacity>
                <View style={{flex: 0, backgroundColor: this.state.isTabC ? '#FFC000' : '#F0F0F0', height: 4}} />
              </View>

            </View>

            <View style={{flex: 1, padding: 8}}> 
            
            {
              this.state.isTabA ?
              // Achievements
              <View style={{flex: 1}}>
  
              </View>

              // Gallery
              : this.state.isTabB ?
              <View style={{flex: 1, }}>
                <FlatList
                  data={ this.state.dataSource }
                  renderItem={({item}) => 
                    <View style={{flex:1, flexDirection: 'column', margin:1 }}> 
                      <TouchableOpacity onPress={this.ShowModalFunction.bind(this, true, item.flower_image_url)} >
                        <Image style={styles.imageThumbnail} source = {{ uri: item.flower_image_url }} resizeMode='cover'/>
                      </TouchableOpacity>
                    </View>
                  }
                  numColumns = { 3 }
                  keyExtractor={(item, index) => index}
                />
                {
                  this.state.ModalVisibleStatus ?
                    (
                      <Modal
                    transparent={false}
                    animationType={"fade"}
                    visible={this.state.ModalVisibleStatus}
                    onRequestClose={ () => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } >
                      <View style={styles.modalView}>
                        <Image style={styles.mainImage} source = {{ uri: this.state.TempImageURL }} />
                          <TouchableOpacity 
                            activeOpacity = { 0.5 }
                            style={styles.TouchableOpacity_Style}
                            onPress={() => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } >
                              <Image source={{uri: 'https://reactnativecode.com/wp-content/uploads/2018/01/close_button.png'}}
                              style={{width:25, height: 25}} />
                          </TouchableOpacity>
                      </View>
                    </Modal>
                    ) 
                    :
                    null
                }
              </View>

              // Statistics
              : 
              <View style={{flex: 1, height: 'auto'}}>
                <View style={{flex: 1, marginTop: 24, marginLeft: 24, marginRight: 24}}>
                  <Text>
                    GLOBAL STATISTICS
                  </Text>
                  <View style={{flex: 1, flexDirection: 'row', marginTop: 16, marginBottom: 4}}>
                    <Text style={{flex: 4, fontFamily: 'Lato', fontSize: 14,}}>Total Time</Text>
                    <Text style={{flex: 6, fontFamily: 'Lato', fontSize: 14, fontWeight: 'bold'}}>3 hours 17 minutes</Text>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row', marginTop: 4, marginBottom: 4}}>
                    <Text style={{flex: 4, fontFamily: 'Lato', fontSize: 16}}>Max Speed</Text>
                    <Text style={{flex: 6, fontFamily: 'Lato', fontSize: 14, fontWeight: 'bold'}}>32 km/h</Text>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row', marginTop: 4, marginBottom: 4}}>
                    <Text style={{flex: 4, fontFamily: 'Lato', fontSize: 14,}}>Avg PaceTime</Text>
                    <Text style={{flex: 6, fontFamily: 'Lato', fontSize: 14, fontWeight: 'bold'}}>5" 13'</Text>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row', marginTop: 4, marginBottom: 4}}>
                    <Text style={{flex: 4, fontFamily: 'Lato', fontSize: 14,}}>Total Distance</Text>
                    <Text style={{flex: 6, fontFamily: 'Lato', fontSize: 14, fontWeight: 'bold'}}>6.39 km</Text>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row', marginTop: 4, marginBottom: 4}}>
                    <Text style={{flex: 4, fontFamily: 'Lato', fontSize: 14,}}>Calories</Text>
                    <Text style={{flex: 6, fontFamily: 'Lato', fontSize: 14, fontWeight: 'bold'}}>7.011</Text>
                  </View>
                </View>

                <View style={{flex: 1, marginLeft: 24, marginTop: 24, marginBottom: 24}}>
                  <Text>
                    Participated EventS (18)
                  </Text>

                  {/* Event */}
                  <View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginBottom: 4, marginRight: -8, borderBottomWidth: 1,borderBottomColor: '#E0E0E0' , height: '100%', paddingBottom: 10}}>
                  <Image source={require('./assets/slider4.png')} style={{width: 48, height: 48, borderRadius: 6}} />
                    <View style={{marginLeft: 12,}}>
                      <Text style={{fontSize: 16, fontFamily: 'Lato', fontWeight: 'bold', flex: 1}}>Yoayo 5K VR</Text>
                      <View style={{flexDirection: 'row', flex: 0}}>
                        <TouchableOpacity style={{backgroundColor: '#3FC4E0', flex: 0, borderRadius: 6, width: 28, marginRight: 2}}>
                          <Text style={{color: '#FFFFFF', fontFamily: 'Lato', flex: 1, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center',fontSize: 13}}>5K</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: '#ED0875', flex: 0, borderRadius: 6, width: 52, marginLeft: 2, marginRight: 5}}>
                          <Text style={{color: '#FFFFFF', fontFamily: 'Lato', flex: 1, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center',fontSize: 13}}>Virtual</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 12, fontFamily: 'Lato', color:'#7C7C7D',}}>Ends 14/04/2019</Text>
                      </View>
                    </View>
                  </View>

                  {/* Event */}
                  <View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginBottom: 4, marginRight: -8, borderBottomWidth: 1,borderBottomColor: '#E0E0E0' , height: '100%', paddingBottom: 10}}>
                  <Image source={require('./assets/slider4.png')} style={{width: 48, height: 48, borderRadius: 6}} />
                    <View style={{marginLeft: 12,}}>
                      <Text style={{fontSize: 16, fontFamily: 'Lato', fontWeight: 'bold', flex: 1}}>Yoayo 5K VR</Text>
                      <View style={{flexDirection: 'row', flex: 0}}>
                        <TouchableOpacity style={{backgroundColor: '#3FC4E0', flex: 0, borderRadius: 6, width: 28, marginRight: 2}}>
                          <Text style={{color: '#FFFFFF', fontFamily: 'Lato', flex: 1, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center',fontSize: 13}}>5K</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: '#ED0875', flex: 0, borderRadius: 6, width: 52, marginLeft: 2, marginRight: 5}}>
                          <Text style={{color: '#FFFFFF', fontFamily: 'Lato', flex: 1, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center',fontSize: 13}}>Virtual</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 12, fontFamily: 'Lato', color:'#7C7C7D',}}>Ends 14/04/2019</Text>
                      </View>
                    </View>
                  </View>

                  {/* Event */}
                  <View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginBottom: 4, marginRight: -8, borderBottomWidth: 1,borderBottomColor: '#E0E0E0' , height: '100%', paddingBottom: 10}}>
                  <Image source={require('./assets/slider4.png')} style={{width: 48, height: 48, borderRadius: 6}} />
                    <View style={{marginLeft: 12,}}>
                      <Text style={{fontSize: 16, fontFamily: 'Lato', fontWeight: 'bold', flex: 1}}>Yoayo 5K VR</Text>
                      <View style={{flexDirection: 'row', flex: 0}}>
                        <TouchableOpacity style={{backgroundColor: '#3FC4E0', flex: 0, borderRadius: 6, width: 28, marginRight: 2}}>
                          <Text style={{color: '#FFFFFF', fontFamily: 'Lato', flex: 1, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center',fontSize: 13}}>5K</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: '#ED0875', flex: 0, borderRadius: 6, width: 52, marginLeft: 2, marginRight: 5}}>
                          <Text style={{color: '#FFFFFF', fontFamily: 'Lato', flex: 1, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center',fontSize: 13}}>Virtual</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 12, fontFamily: 'Lato', color:'#7C7C7D',}}>Ends 14/04/2019</Text>
                      </View>
                    </View>
                  </View>

                  {/* Event */}
                  <View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginBottom: 4, marginRight: -8, borderBottomWidth: 1,borderBottomColor: '#E0E0E0' , height: '100%', paddingBottom: 10}}>
                  <Image source={require('./assets/slider4.png')} style={{width: 48, height: 48, borderRadius: 6}} />
                    <View style={{marginLeft: 12,}}>
                      <Text style={{fontSize: 16, fontFamily: 'Lato', fontWeight: 'bold', flex: 1}}>Yoayo 5K VR</Text>
                      <View style={{flexDirection: 'row', flex: 0}}>
                        <TouchableOpacity style={{backgroundColor: '#3FC4E0', flex: 0, borderRadius: 6, width: 28, marginRight: 2}}>
                          <Text style={{color: '#FFFFFF', fontFamily: 'Lato', flex: 1, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center',fontSize: 13}}>5K</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: '#ED0875', flex: 0, borderRadius: 6, width: 52, marginLeft: 2, marginRight: 5}}>
                          <Text style={{color: '#FFFFFF', fontFamily: 'Lato', flex: 1, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center',fontSize: 13}}>Virtual</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 12, fontFamily: 'Lato', color:'#7C7C7D',}}>Ends 14/04/2019</Text>
                      </View>
                    </View>
                  </View>
                  
                </View>

              </View>
            }

            </View>

          </View>
          {/* Tabs */}
        
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
  card: {
    flex: 1,
    height: 'auto',
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
  titlePage: {
    fontFamily: 'Lato', 
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    left: 11,
    zIndex: 2,
  },
  postMore: {
    flex: 0,
    marginBottom: 'auto',
    marginTop: 'auto',
    marginRight: 8,
    height: 10,
    width: 24,
    alignItems: 'center',
    zIndex: 1,
  },
  level: {
    flex: 7,
    backgroundColor: '#BF1567',
    borderBottomStartRadius: 12,
    borderRightWidth:1,
    borderColor: '#FFFFFF'
  },
  point: {
    flex: 3,
    backgroundColor: '#BF1567',
    borderBottomEndRadius: 12,
    borderLeftWidth: 1,
    borderColor: '#FFFFFF'
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: thumbnailWidht,
  },

  mainImage:{
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width:'98%',
    resizeMode : 'contain'
   },

   modalView:{
    flex:1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.4)'
   },
   TouchableOpacity_Style:{
    width:25, 
    height: 25, 
    top:9, 
    right:9, 
    position: 'absolute'
   },
});
