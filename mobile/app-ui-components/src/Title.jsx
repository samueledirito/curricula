/**
 * Title
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});

const Title = ({text}) =>
  <Text style={styles.welcome}>{text}</Text>

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title;