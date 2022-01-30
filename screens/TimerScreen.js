import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,TouchableOpacity,
  TextInput,
} from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

function ButtonsRow({ children }) {
  return <View style={styles.buttonsRow}>{children}</View>;
}

function TextinputRow({ children }) {
  return <View style={styles.timerlayout}>{children}</View>;
}

function RoundButton({ title, color, background, onPress, disabled }) {
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()}
      style={[ styles.button, { backgroundColor: background }]}
      activeOpacity={disabled ? 1.0 : 0.7}
    >
      <View style={styles.buttonBorder}>
        <Text style={[ styles.buttonTitle, { color }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default class TestApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 60000,
      timerReset: false,
      stopwatchReset: false,
      setTimer: '',
      setHour: '0',
      setMin: '0',
      setSec: '0',
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  toggleTimer() {
    this.setState({ timerStart: !this.state.timerStart, timerReset: false });
  }

  resetTimer() {
    this.setState({ timerStart: false, timerReset: true });
  }

  getFormattedTime(time) {
    this.currentTime = time;
  }

  SaveTimer = (text) => {
    this.setState({ setTimer: text });
  };
  SaveTimerHour = (text) => {
    this.setState({ setTimer: '' });
    this.setState({ setHour: text });
    this.setState({ setTimer: text + 'hr' });
  };
  SaveTimerMinute = (text) => {
    this.setState({ setMin: text });
    this.setState({ setTimer: this.state.setTimer + text + 'min' });
  };
  SaveTimerSec = (text) => {
    this.setState({ setSec: text });
    this.setState({ setTimer: this.state.setTimer + text + 'sec' });
  };
  ScheduleTimer() {
    this.setState({
      totalDuration:
        parseInt(this.state.setHour) * 1000 * 60 * 60 +
        parseInt(this.state.setMin) * 60 * 1000 +
        parseInt(this.state.setSec) * 1000,
    });
  }
  ButtonsRow({ children }) {
    return <View style={styles.buttonsRow}>{children}</View>;
  }
  render() {
    return (
      <View style={styles.container}>
      <Timer
          style={styles.time}
          totalDuration={this.state.totalDuration}
          msecs
          start={this.state.timerStart}
          reset={this.state.timerReset}
          options={options}
          handleFinish={handleTimerComplete}
          getTime={this.getFormattedTime}
        />
        <ButtonsRow>
          <TextInput
            style={{
              fontSize: 25,
              margin: 15,
              color: '#fff',
            }}
            placeholderTextColor="#9a73ef"
            onChangeText={this.SaveTimerHour}
            placeholder="Hour"
            keyboardType="numeric"
          />
          <TextInput
            style={{
              fontSize: 25,
              margin: 15,
              color: '#fff',
            }}
            placeholderTextColor="#9a73ef"
            onChangeText={this.SaveTimerMinute}
            placeholder="Min"
            keyboardType="numeric"
          />
          <TextInput
            style={{
              fontSize: 25,
              margin: 15,
              color: '#fff',
              //textAlign: 'center',
            }}
            placeholderTextColor="#9a73ef"
            onChangeText={this.SaveTimerSec}
            placeholder="Sec"
            keyboardType="numeric"
          />
        </ButtonsRow>
        <ButtonsRow>
          <Button
            title="Start/Stop"
            onPress={() => {
              if (this.state.setTimer === '') {
                alert('Please set timer first');
              } else {
               this.ScheduleTimer();
                this.toggleTimer();
              }
            }}
          />
          <Button
            title="Reset"
            onPress={this.resetTimer}
          />
        </ButtonsRow>
        <Text style={{ color: '#fff' }}>Time in Milliseconds={this.state.totalDuration}</Text>
      </View>
      
    );
  }
}

const handleTimerComplete = () => alert('custom completion function');

const options = {
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  time: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 30,
  },
  timerlayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
});
//AppRegistry.registerComponent('TestApp', () => TestApp);
