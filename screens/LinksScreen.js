import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import moment from 'moment';


const DATA = {
  timer: 1234567,
  laps: [ 1212121, 2332323, 3434343 ],
}
const Timer = ({ interval }) => {
  const duration = moment.duration(interval)
  const centiSeconds = Math.floor(duration.milliseconds() / 10)
  return (
    <Text style={styles.timer}>
      {duration.minutes()}:{duration.seconds()}:{centiSeconds}
    </Text>)
}
export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Timer interval={ DATA.timer } />
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
    backgroundColor: '#ffffff'
  },
  timer: {
    color: '#000000',
    fontSize: 76,
    fontWeight: '200',
  }
});
