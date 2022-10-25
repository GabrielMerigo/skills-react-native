import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import { NewCard } from '../components/NewCard'
import { Button } from '../components/Button'

type SkillData = {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setSkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setSkills(skills.filter(skill => skill.id !== id));
  }


  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good Morning')
    } else if (currentHour >= 12 && currentHour <= 18) {
      setGreeting('Good Afternoon')
    } else {
      setGreeting('Good Night')
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.space}>
        <Text style={styles.title}>Welcome, Gabriel</Text>
        <Text style={styles.greetins}>
          {greeting}
        </Text>
        <TextInput
          testID="input-new"
          onChangeText={(e) => setNewSkill(e)}
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
        />

        <Button testID="button-add" title="Add" onPress={handleAddSkill} />
        <Text style={[styles.title, { marginVertical: 20, marginTop: 20 }]}>
          My Skills
        </Text>

        <FlatList
          testID="skills"
          keyboardShouldPersistTaps="never"
          data={skills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <NewCard skill={item.name} onPress={() => handleRemoveSkill(item.id)} />
          )}
        />
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
  greetins: {
    color: '#FFF'
  }
})