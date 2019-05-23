import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Image,
  Button
} from 'react-native';
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE
} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import haversine from "haversine";

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = -2.172092;
const LONGITUDE = 106.785625;

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
            <Text style={{color: '#F6881F', fontSize: 48, fontFamily: 'Lato', fontWeight: 'bold'}}>{this.state.distanceTravelled}</Text>
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
  watchID = null;

  constructor(props){
    super(props);
    this.state = {
      isStandby: true,
      isStarted: false,
      isPaused: false,
      isFinished: false,
      loading: false,
      updatesEnabled: false,
      latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0,
        longitudeDelta: 0
      })
    };
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

  componentDidMount() {
    const {coordinate} = this.state;

    this.requestCameraPermission();

    this.watchID = Geolocation.watchPosition(
      position => {
        const {routeCoordinates, distanceTravelled} = this.state;
        const {latitude, longitude} = position.coords;

        const newCoordinate = {
          latitude,
          longitude
        };
        console.log({newCoordinate});

        if(Platform.OS === 'android'){
          if(this.marker){
            this.marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
          }
        }else{
          coordinate.timing(newCoordinate).start();
        }
        this.setState({
          latitude,
          longitude,
          routeCoordinates: routeCoordinates.concat(
            [newCoordinate]
          ),
          distanceTravelled: distanceTravelled + this.calcDistance(newCoordinate),
          prevLatLng: newCoordinate,
        })
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );
  }

  componentWillMount(){
    Geolocation.clearWatch(this.watchID);
  }

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  calcDistance = (newLatLng) => {
    const {prevLatLng} = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Location Access Permission",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={{flexDirection: "row", height: 44}}>
          <TouchableOpacity style={styles.back}>
             <Image source={require('./assets/close.png')} resizeMode='stretch'/>
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <Text style={styles.titlePage}>Running </Text>
          </View>
        </View>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showUserLocation
          followUserLocation
          loadingEnabled
          region={this.getMapRegion()}
        >
          <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
          <Marker.Animated
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate}
          />
        </MapView>
        <View style={styles.container}>
          <View style={styles.baseProgress}>
            <View style={{flexDirection: 'row', marginTop: 96, marginLeft: 36, marginRight: 36}}>
              <View style={{flex: 0, alignItems: 'center', marginRight: 10}}>
                <Text style={{color: '#F6881F', fontSize: 48, fontFamily: 'Lato', fontWeight: 'bold'}}>{parseFloat(this.state.distanceTravelled).toFixed(2)}</Text>
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

        {/* Progress Info */}

        {
          this.state.isStarted ?
          <View style={{flex: 1, flexDirection: 'row', marginTop: 48,}}>
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', height: 56}}>
              <Text style={{fontFamily: 'Lato', fontSize: 14, color: '#ACACAD'}}>TIME</Text>
              <Text style={{fontFamily: 'Lato', fontSize: 18, color: '#222222', fontWeight: 'bold'}}>00:00:00</Text>
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
          {
            this.state.isPaused ?
            <View style={{flex: 1,  justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity style={{width: 64, height: 64, backgroundColor: '#7C7C7D', justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderRadius: 200, marginLeft: 43}}>
                <Image source={require('./assets/reset.png')} resizeMode='stretch'/>
              </TouchableOpacity>
            </View>
            :
            <View style={{flex: 1,  justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            </View>
          }
            
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

            :this.state.isPaused ? 
            <TouchableOpacity style={{width: 128, height: 128, backgroundColor: '#FFC000', justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderWidth: 6, borderRadius: 200, borderColor: '#F6881F'}}
            onPress={() => this.ubahStatus('start')}
            >
              <Text style={{fontFamily: 'Lato', fontSize: 48, color: 'white', fontWeight: 'bold'}}>
                GO
              </Text>
            </TouchableOpacity>
            
            :
            <TouchableOpacity style={{width: 128, height: 128, backgroundColor: '#7C7C7D', justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderWidth: 6, borderRadius: 200, borderColor: '#5D5D5E'}}
            onPress={() => this.ubahStatus('pause')}
            >
              <Image source={require('./assets/pause.png')} resizeMode='stretch'/>
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
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.bubble, styles.button]}>
            <Text style={styles.bottomBarContent}>
              {parseFloat(this.state.distanceTravelled).toFixed(2)} km
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  map: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 215,
    flex: 0,
    zIndex: 5
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent"
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
    height: 288,
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
