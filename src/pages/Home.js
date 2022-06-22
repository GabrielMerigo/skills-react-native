import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


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
        <TouchableOpacity onPress={handleAddNewSkill} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, { marginVertical: 20, marginTop: 20 }]}>
          My Skills
        </Text>
  
        {skills.map((skill) => (
          <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
              {skill}
            </Text>
          </TouchableOpacity>
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
  },
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