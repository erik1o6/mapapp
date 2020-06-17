import React from 'react';
//import { StyleSheet, Text, View, TouchableHighlightBase } from 'react-native';
import { StyleSheet, Button, TextInput ,Text, View, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


export default class App extends React.Component {
    state= {
        region: null,
        name: "hello",
        loggedIn: false,
        password: "poop",
    }

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if(status !== 'granted')
            console.log('Permission  to access location was denied.')

        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            console.log(status)
            console.log(location)
        let region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.045,

        }
    this.setState({region: region})

    }
componentDidMount=async () => {

        await this._getLocationAsync()
}
login=()=> {
        this.setState({loggedIn: true})
};
// handleSimple = event => {
//     this.setState({[event]:})
// //    this.setState({[event.target.name]: event.target.value});
//};
    render=()=> {
        if(this.state.loggedIn) {
            return (
                <View style={styles.container}>
                    <Text>HomeScreen</Text>
                    <MapView
                        initialRegion={this.state.region}
                        region={this.state.region}
                        showCompass={true}
                        rotateEnabled={false}
                        style={styles.mapStyle}

                    />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <Text>HomeScreen2</Text>
                <TextInput onChangeText={(name)=>this.setState({name})} name="name" value={this.state.name}/>
                <TextInput secureTextEntry={true} onChangeText={(password)=>this.setState({password})} name="password" value={this.state.password}/>
                <Button onPress={this.login} title="login">Login</Button>


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "15%"
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

});
