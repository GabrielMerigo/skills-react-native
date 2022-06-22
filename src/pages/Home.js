import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { NewCard } from '../components/NewCard'
import { Button } from '../components/Button'


export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);

  function handleAddNewSkill(){
    setSkills(oldState  => [...oldState, newSkill]);
  }

  return(
    <View style={styles.container}>
      <View style={styles.space}>
        <Text style={styles.title}>Welcome, Gabriel</Text>
        <TextInput 
          onChangeText={(e) => setNewSkill(e)} 
          style={styles.input} 
          placeholder="New Skill" 
          placeholderTextColor="#555" 
        />

        <Button handleAddNewSkill={handleAddNewSkill} />

        <Text style={[styles.title, { marginVertical: 20, marginTop: 20 }]}>
          My Skills
        </Text>
  
        {skills.map((skill) => (
          NewCard(skill)
        ))}
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015'
  },
  space: {
    margin: 20
  },
  title: {
    marginTop: 10,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    width: '100%',
    marginTop: 30,
    borderRadius: 5
  },
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