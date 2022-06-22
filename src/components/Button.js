import React from "react";
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export function Button({ handleAddNewSkill }){
  return (
    <TouchableOpacity onPress={handleAddNewSkill} style={styles.button}>
      <Text style={styles.buttonText}>Add</Text>
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