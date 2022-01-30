import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { TabView, SceneMap } from 'react-native-tab-view';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import StopWatchScreen from './screens/StopWatchScreen';
import TimerScreen from './screens/TimerScreen';
import AlarmScreen from './screens/AlarmScreens/AlarmScreen'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      routes: [
        // { key: 'first', title: '⏰' },
        // { key: 'second', title: '⏱' },
        // { key: 'third', title: '⏲' },
        { key: 'first', title: 'Alarm' },
        { key: 'second', title: 'Stopwatch' },
        { key: 'third', title: 'Timer' },
      ],
    };
  }
  renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <View style={[styles.scene, { backgroundColor: '#673ab7' }]} >
        <AlarmScreen /></View>;
      case 'second':
        return (
          <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
            <StopWatchScreen />
          </View>
        );
      case 'third':
        return <View style={[styles.scene, { backgroundColor: '#0FFFF' }]} >
        <TimerScreen />
        </View>;
    }
  };
  render() {
    return (
      <TabView
        navigationState={{ index: this.state.index, routes: this.state.routes }}
        renderScene={this.renderScene}
        onIndexChange={(index) => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    fontSize:90,
  }
});
export default App;
