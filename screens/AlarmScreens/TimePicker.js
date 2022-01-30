import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
//import DateTimePicker from '@react-native-community/datetimepicker';
import {connect} from 'react-redux';

import ReactNativeAN from 'react-native-alarm-notification';
import DateTimePicker from 'react-native-modal-datetime-picker';
import addAlarm from '../actions/alarm'
function TimePicker(props) {
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const makeid=() =>{
    var length=5;
    var result="";
    var characters= "0123456789";
    var charactersLength =characters.length;
    for(var i=0;i<length;i++){
      result+= characters.charAt(Math.floor(Math.random()+ charactersLength));
    }
    return result;
  }
  const showDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };
  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };

  const handleDatePicker = (dateTime) => {
    var currentTime = Date.now();
    if (dateTime.getTime() < currentTime) {
      alert('Please choose future time');
      this.hideDateTimePicker();
      return;
    }
    const alarmNotifyData={
      id:makeid(),
      title: "Alarm Ringing",
      message: "My Notification Message",
      channel: "alarm-channel",
      ticker :"My Notification Message",
      auto_cancel:true,
      vibrate:true,
      vibration:100,
      small_icon:"ic_launcher",
      large_icon:"ic_launcher",
      play_sound:true,
      sound_name:null, // Plays custom notification ringtone if sound_name: null
      color: 'red',
      schedule_once: true, // Works with ReactNativeAN.scheduleAlarm so alarm fires once
      tag: 'some_tag',
      //fire_date: fireDate,
      fire_date: Date.now(),
      data: { value: dateTime },
    }
    props.add(alarmNotifyData);
    hideDateTimePicker();
  };

  return (
    <View>
      <Button
        title="+Add Alarm"
        color="blue"
        onPress={() => {
          showDateTimePicker();
        }}
      />
      <DateTimePicker
        mode="datetime"
        isVisible={isDateTimePickerVisible}
        onConfirm={handleDatePicker}
        onCancel={hideDateTimePicker}
      />
    </View>
  );
}
// const mapStateToProps = (state) => {
//   return {};
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     add: (alarmNotifyObj) => {
//       dispatch(addAlarm(alarmNotifyObj));
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    add: alarmNotifObj => {
      dispatch(addAlarm(alarmNotifObj));
    },
  };
};
export default TimePicker;
//export default connect(mapStateToProps, mapDispatchToProps)(TimePicker());
