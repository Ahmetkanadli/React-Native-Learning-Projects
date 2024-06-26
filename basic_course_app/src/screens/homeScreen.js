import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ana Ekran</Text>
      <Button
        title="Kurslarım"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Kurs Bilgileri"
        onPress={() => navigation.navigate('CourseInformation')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
