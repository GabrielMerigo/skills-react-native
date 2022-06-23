import React from "react";
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps{
  title: string
}

export function Button({ title, ...rest }: ButtonProps){
  return (
    <TouchableOpacity 
      activeOpacity={0.7}  
      style={styles.button} 
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 10,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    padding: 5
  }
})