import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from './src/screens/homeScreen';
import CoursesScreen from './src/screens/courses';
import coursesInformation from './src/screens/coursesInformation';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="Details" component={CoursesScreen} />
        <Stack.Screen name="CourseInformation" component={coursesInformation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
