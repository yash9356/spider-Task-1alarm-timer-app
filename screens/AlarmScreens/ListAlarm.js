//import React, { Component } from 'react';
import  React from 'react';
import {Component} from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { addAlarm } from '../actions/alarm';

import { deleteAlarm } from '../actions/alarm';
import ReactNativeAN from 'react-native-alarm-notification';
import { ListItem, Icon } from 'react-native-elements';

class ListAlarm extends Component {
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <View style={styles.container}>
      <ListItem
        title={item.time.toString()}
        titleStyle={styles.titleStyle}
        subtitle={item.date.toString()}
        // leftIcon={{name: 'alarm'}}
        bottomDivider
        rightElement={
          <Button
            title="Remove"
            color="red"
            onPress={(e) => {
              ReactNativeAN.deleteAlarm(item.alarmNotifData.id);
              ReactNativeAN.stopAlarm();

              this.props.delete(item.value);
            }}
          />
        }
        // leftElement={<Icon name="alarm" />}
      />
    </View>
  );
  renderItem = ({ item }) => (
    <View style={styles.container}>
      <ListItem
        title={item.time.toString()}
        titleStyle={styles.titleStyle}
        subtitle={item.date.toString()}
        // leftIcon={{name: 'alarm'}}
        bottomDivider
        rightElement={
          <Button
            title="Remove"
            color="red"
            onPress={(e) => {
              ReactNativeAN.deleteAlarm(item.alarmNotifData.id);
              ReactNativeAN.stopAlarm();

              this.props.delete(item.value);
            }}
          />
        }
        // leftElement={<Icon name="alarm" />}
      />
    </View>
  );
  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.alarms}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  titleStyle: { fontWeight: 'bold', fontSize: 30 },
});

const mapStateToProps = state => {
  return {
    alarms: state.alarms.alarms,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: value => {
      dispatch(deleteAlarm(value));
    },
  };
};
export default ListAlarm;
 //export default connect(mapStateToProps, mapDispatchToProps)(ListAlarm);
