import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    elevation: 2,
    justifyContent: 'center',
    height: 80,
    paddingBottom: 20,
    paddingTop: 40,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
};

const Header = ({ label }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle} >
      <Text style={textStyle}>{label}</Text>
    </View>
  );
};

export { Header };
