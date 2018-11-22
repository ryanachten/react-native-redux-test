import React from 'react';
import { View, Text, TextInput } from 'react-native';

const styles = {
  inputStyle: {
    color: '#000',
    flex: 2,
    fontSize: 18,
    lineHeight: 23,
    paddingLeft: 5,
    paddingRight: 5,
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
  },
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 40,
  }
};

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize={'none'}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export { Input };
