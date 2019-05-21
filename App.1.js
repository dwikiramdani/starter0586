import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Modal, FlatList} from 'react-native';
import MapView from 'react-native-maps';

propStyle = (percent) => {
  const base_degrees = -135;
  const rotateBy = base_degrees + (percent * 3.6);
  return {
    transform:[{rotateZ: `${rotateBy}deg`}]
  };
}

const CircularProgress = ({percent}) => {
  let stylesFromProps = propStyle(percent);
  return(
    <View style={styles.container}>
      <View style={styles.baseProgress}>
        <View style={{flexDirection: 'row', marginTop: 96, marginLeft: 36, marginRight: 36}}>
          <View style={{flex: 0, alignItems: 'center', marginRight: 10}}>
            <Text style={{color: '#F6881F', fontSize: 48, fontFamily: 'Lato', fontWeight: 'bold'}}>4</Text>
            <Text style={{bottom: 12}}>km left</Text>
          </View>
          <View style={{flex: 0, alignItems: 'center'}}>
            <Text style={{fontSize: 60}}>/</Text>
          </View>
          <View style={{flex: 0, alignItems: 'center', marginTop: 32, marginLeft: 8}}>
            <Text style={{color: '#7C7C7D', fontSize: 14, fontFamily: 'Lato', fontWeight: 'bold'}}>TOTAL</Text>
            <Text style={{color: '#7C7C7D', fontSize: 14, fontFamily: 'Lato', fontWeight: 'bold'}}>4 km</Text>
          </View>
        </View>
      </View>
      <View style={styles.ongoingProgress}></View>
      <View style={styles.totalProgress}></View>
    </View>
  )
}

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      isStandby: true,
      isStarted: false,
      isPaused: false,
      isFinished: false,
    }
  }

  ubahStatus = (val) => {
    if (val === 'standby') {
      this.setState({
        isStandby: true,
        isStarted: false,
        isPaused: false,
        isFinished: false
      })
    } else if (val === 'start') {
      this.setState({
        isStandby: false,
        isStarted: true,
        isPaused: false,
        isFinished: false
      })
    }else if (val === 'pause'){
      this.setState({
        isStandby: false,
        isStarted: false,
        isPaused: true,
        isFinished: false
      })
    }else {
      this.setState({
        isStandby: false,
        isStarted: false,
        isPaused: false,
        isFinished: true
      })
    }
  }

  render() {
    return (
      <View style={styles.body}>

        {/* Header */}
        <View style={{flexDirection: "row", height: 44}}>
          <TouchableOpacity style={styles.back}>
             <Image source={require('./assets/close.png')} resizeMode='stretch'/>
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <Text style={styles.titlePage}>Running </Text>
          </View>
        </View>
        {/* Header */}

        {/* Map */}
        <MapView
          style={{width:'auto', height: 215, zIndex: 5, flex: 0}}
          initialRegion={{
            latitude: -6.172092,
            longitude: 106.785625,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        {/* Map */}

        <CircularProgress />
        
        {/* Progress Info */}

        {
          this.state.isStarted ?
          <View style={{flex: 1, flexDirection: 'row', marginTop: 48,}}>
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', height: 56}}>
              <Text style={{fontFamily: 'Lato', fontSize: 14, color: '#ACACAD'}}>TIME</Text>
              <Text style={{fontFamily: 'Lato', fontSize: 18, color: '#222222', fontWeight: 'bold'}}>00:55:32</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderLeftWidth: .75, borderLeftColor: '#E0E0E0',borderRightWidth: .75, borderRightColor: '#E0E0E0', height: 56}}>
              <Text style={{fontFamily: 'Lato', fontSize: 14, color: '#ACACAD'}}>PACE</Text>
              <Text style={{fontFamily: 'Lato', fontSize: 18, color: '#222222', fontWeight: 'bold'}}>8'9" / km</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', height: 56}}>
              <Text style={{fontFamily: 'Lato', fontSize: 14, color: '#ACACAD', }}>CALORIES</Text>
              <Text style={{fontFamily: 'Lato', fontSize: 18, color: '#222222', fontWeight: 'bold'}}>1.300 kal</Text>
            </View>
          </View>
          :
          <View style={{flex: 1, flexDirection: 'row', marginTop: 48,}}>
  
          </View>
        }

        <View style={{ flex: 0, flexDirection: 'row', marginBottom: 54}}>
        <View style={{flex: 1,  justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
          </View>
          <View style={{flex: 1,  justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
          
          {
            this.state.isStandby ?
          <TouchableOpacity style={{width: 128, height: 128, backgroundColor: '#FFC000', justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderWidth: 6, borderRadius: 200, borderColor: '#F6881F'}}
          onPress={() => this.ubahStatus('start')}
          >
            <Text style={{fontFamily: 'Lato', fontSize: 48, color: 'white', fontWeight: 'bold'}}>
              GO
            </Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={{width: 128, height: 128, backgroundColor: '#FFC000', justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderWidth: 6, borderRadius: 200, borderColor: '#F6881F'}}
          onPress={() => this.ubahStatus('standby')}
          >
            <Text style={{fontFamily: 'Lato', fontSize: 48, color: 'white', fontWeight: 'bold'}}>
              GO
            </Text>
          </TouchableOpacity>
          }
          </View>
          <View style={{flex: 1,  justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{width: 64, height: 64, backgroundColor: '#D62F2F', justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderRadius: 200, marginRight: 43}}>
            <Text style={{fontFamily: 'Lato', fontSize: 18, color: 'white', fontWeight: 'bold'}}>
              SOS
            </Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    right: 11,
    zIndex: 2,
  },
  back: {
    flex: 0,
    marginBottom: 'auto',
    marginTop: 'auto',
    marginLeft: 13,
    height: 14,
    width: 14,
    alignItems: 'center',
    zIndex: 1,
  },
  container: {
    flex: 0, 
    justifyContent: 'center', 
    alignContent: 'center', 
    alignItems: 'center', 
    zIndex: 1, 
    height: 'auto',
    marginTop: -144,
  },
  baseProgress: {
    width: 288,
    height: 288,
    borderWidth: 20,
    borderRadius: 200,
    borderColor: '#E0E0E0',
    position: 'absolute',
    zIndex: 2,
    shadowColor: "#000",
    justifyContent: 'center',
    alignItems: 'center',
  },
  ongoingProgress: {
    width: 288,
    height: 288,
    borderRadius: 200,
    borderBottomWidth: 20,
    borderTopWidth: 20,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    zIndex: 3,
    borderBottomColor: 'transparent',
    borderLeftColor: '#ED0875',
    borderRightColor: 'transparent',
    borderTopColor: '#ED0875',
    transform:[{rotateZ: '-135deg'}],
    position: 'absolute',
    
  },
  totalProgress: {
    width: 288,
    height: 288,
    borderRadius: 200,
    borderBottomWidth: 20,
    borderTopWidth: 20,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    zIndex: 4,
    borderBottomColor: 'transparent',
    borderLeftColor: '#E0E0E0',
    borderRightColor: 'transparent',
    borderTopColor: '#E0E0E0',
    transform:[{rotateZ: '-215deg'}],
  },
});
