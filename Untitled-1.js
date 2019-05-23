import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, PermissionsAndroid, Button, ToastAndroid, Platform} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

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
  watchId = null;

  constructor(props){
    super(props);
    this.state = {
      isStandby: true,
      isStarted: false,
      isPaused: false,
      isFinished: false,
      loading: false,
      updatesEnabled: false,
      location: '',
      latitude: 1,
      longitude: 1,
      pressCoor: '',
    }
  }

  hasLocationPermission = async () => {
    if (Platform.OS === 'ios' ||
        (Platform.OS === 'android' && Platform.Version < 23)) {
      return true;
    }
  
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
  
    if (hasPermission) return true;
  
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
  
    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;
  
    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }
  
    return false;
  }
  
  onMapPress = (mapData) => {
    const jsonOnPress = mapData.nativeEvent.coordinate
    const newCoor = JSON.stringify(jsonOnPress)
  
    this.setState({
      pressCoor: newCoor
    })
    console.warn(mapData.nativeEvent.coordinate)
  }
  
  getLocation = async () => {
    const hasLocationPermission = await this.hasLocationPermission();
  
    if (!hasLocationPermission) return;
  
    this.setState({ loading: true }, () => {
      Geolocation.getCurrentPosition(
        (position) => {
          this.setState({ 
            location: position, 
            loading: false,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          console.log(position);
        },
        (error) => {
          this.setState({ location: error, loading: false });
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 50 }
      );
    });
  }
  
  getLocationUpdates = async () => {
    const hasLocationPermission = await this.hasLocationPermission();
  
    if (!hasLocationPermission) return;
  
    this.setState({ updatesEnabled: true }, () => {
      this.watchId = Geolocation.watchPosition(
        (position) => {
          this.setState({ 
            location: position,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          console.log(position);
        },
        (error) => {
          this.setState({ location: error });
          console.log(error);
        },
        { enableHighAccuracy: true, distanceFilter: 0, interval: 5000, fastestInterval: 2000 }
      );
    });
  }
  
  removeLocationUpdates = () => {
      if (this.watchId !== null) {
          Geolocation.clearWatch(this.watchId);
          this.setState({ updatesEnabled: false })
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
    const { loading, location, updatesEnabled } = this.state;
    return (
      <ScrollView style={styles.body}>

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
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={(a) => this.onMapPress(a)}
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

        <Button title='Get Location' onPress={this.getLocation} disabled={loading || updatesEnabled} />
        <View style={styles.buttons}>
            <Button title='Start Observing' onPress={this.getLocationUpdates} disabled={updatesEnabled} />
            <Button title='Stop Observing' onPress={this.removeLocationUpdates} disabled={!updatesEnabled} />
        </View>

        <View style={styles.result}>
            <Text>{JSON.stringify(location, null, 4)}</Text>
            <Text>{this.state.latitude}</Text>
            <Text>{this.state.longitude}</Text>
        </View>

      </ScrollView>
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
    transform:[{rotateZ: '-315deg'}],
  },
});
