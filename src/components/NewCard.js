import React from "react";
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export function NewCard(skill){
  return (
    <TouchableOpacity key={skill} style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSkill: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#1F1E25',
    alignItems: 'center',
    marginTop: 10
  }
})