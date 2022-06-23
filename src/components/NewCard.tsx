import React from "react";
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface NewCardProps extends TouchableOpacityProps {
  skill: string;
}

export function NewCard({ skill, onPress, ...rest }: NewCardProps){
  return (
    <TouchableOpacity key={skill} onPress={onPress} style={styles.buttonSkill} {...rest}>
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