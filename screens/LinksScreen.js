import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Text, Button } from 'react-native';
import moment from 'moment';

const Timer = ({ interval }) => {
  const duration = moment.duration(interval)
  const centiSeconds = Math.floor(duration.milliseconds() / 10)
  return (
    <Text style={styles.timer}>
      {duration.minutes()}:{duration.seconds()}:{centiSeconds}
    </Text>)
}
export default function LinksScreen() {
  const [ timer, setTimer ] = useState(0)
  const [ start, setStart ] = useState('Start')
  var aj
  const onPressStart = () => {
    const now = new Date().getTime()
    
    if (start === 'Start') {
      aj = setInterval(() => {setTimer(new Date().getTime() - now) }, 100)
    }
    setStart(start === 'Start' ? 'Stop' : 'Start')
  }
  const onPressStop = () => {
    clearInterval(aj)
    setTimer(0)
    setStart(start === 'Start' ? 'Stop' : 'Start')
  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainView}>
        <Timer interval={ timer } />
        <Button
          onPress={start === 'Start' ? onPressStart : onPressStop}
          title={`${start} Timer`}
          color="#841584"
        />
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Stop watch',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#ffffff',
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    color: '#000000',
    fontSize: 76,
    fontWeight: '200',
  }
});
