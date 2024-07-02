import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FoodOverViewScreen from './screens/FoodOverViewScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';


const Stack = createNativeStackNavigator();

export default function App() { 
  return <NavigationContainer>
    <Stack.Navigator
    // Aşağıdaki işlemler ile Genel Olarak sayfalara müdahale edilebilri
      /*
      screenOptions={{
        headerStyle : {backgroundColor : 'Blue'},
        headerTintColor : {backgroundColor  : 'white'},
        contentStyle : {backgroundColor : 'lightblue'}
      }}

      Safya Bazında müdahale için options kullanılmalı
      */
    >
      <Stack.Screen 
        name='Categories' 
        component={CategoriesScreen}
        options={{
          title : 'Kategoriler'
        }}  
      >
      </Stack.Screen>
      <Stack.Screen 
        name='FoodOverView' 
        component={FoodOverViewScreen}>
      </Stack.Screen>
      <Stack.Screen
        name ='FoodDetail'
        component ={FoodDetailScreen} >
      </Stack.Screen>
      
    </Stack.Navigator>

  </NavigationContainer>


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
