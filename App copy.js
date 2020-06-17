import React from 'react';
//import { StyleSheet, Text, View, TouchableHighlightBase } from 'react-native';
import { StyleSheet, Text, View} from 'react-native';
import { MapView } from 'expo';

export default class App extends React.Component {
    state= {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.9222,
      longitudeDelta: 0.0421
    }
  }
  render=()=> {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <MapView
          initialRegion={this.state.region}
          showCompass={true}
          rotateEnabled={false}
          style={{flex: 1}}
          />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
