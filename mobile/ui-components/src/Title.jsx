/**
 * Title
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Title = ({text}) =>
  <Text style={styles.welcome}>{text}</Text>

Title.propTypes = {
  text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});
