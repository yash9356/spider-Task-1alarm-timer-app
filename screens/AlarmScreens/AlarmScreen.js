import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import ListAlarm from './ListAlarm';
import Timepicker from './TimePicker';
import { Card } from 'react-native-paper';
import {connect } from 'react-redux';
import {} from '../actions/alarm'
export default class AlarmScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.listAlarm}>
          <ListAlarm />
        </SafeAreaView>

        <View style={styles.timepicker}>
          <Timepicker />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 130,
    height: 60,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 25,
    padding: 10,
  },
  timepicker: {
    paddingTop: '10%',
    width: '50%',
    bottom: 20,
  },
  cardContainer: {
    width: '95%',
    borderRadius: 12,
  },
  listAlarm: {
    flex: 1,
    borderRadius: 20,
    width: '100%',
  },
});
