import React, { PropTypes } from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';

const HomeButton = ({ onPress, ...rest }) => (
  <TouchableHighlight {...rest} underlayColor="transparent" style={styles.button} onPress={onPress}>
    <Image style={styles.icon} source={require('../../assets/images/icon-search.png')}/>
  </TouchableHighlight>
);

HomeButton.propTypes = {
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  button: {
    padding: 18,
    position: 'absolute',
    top: 0,
    right: 0
  },
  icon: {
    borderRadius: 15,
    backgroundColor: '#9b9b9b',
    height: 30,
    width: 30
  }
});

export default HomeButton;
