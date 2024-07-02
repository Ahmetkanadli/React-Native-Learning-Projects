import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FoodOverViewScreen from './screens/FoodOverViewScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import { MaterialIcons } from '@expo/vector-icons';
import FavoritesContextProvider from './strore/favoritesContext';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (
    <Drawer.Navigator
    // appBar a müdahale  diyoruz burada
      screenOptions={{
        headerStyle : {backgroundColor : 'white'},
        headerTintColor : 'black'
      }}
    >
      <Drawer.Screen
        name='Categories' component={CategoriesScreen}
        options={{
          title : 'Tüm Kategoriler',
          drawerIcon : () => (
            <MaterialIcons name="list" size={24} color="black" />
          )
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name='Favorites' component={FavoriteScreen}
        options={{
          title : 'Favoriler',
          drawerIcon : () =>(
            <MaterialIcons name="favorite-outline" size={24} color="black" />
          )
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() { 
  return <NavigationContainer>
    <FavoritesContextProvider>
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
        name='Drawer' 
        component={DrawerNavigator}
        options={{
          headerShown : false
        }}  
      >
      </Stack.Screen>
      
      <Stack.Screen 
        name='FoodOverView' 
        component={FoodOverViewScreen}>
      </Stack.Screen>
      <Stack.Screen
        name ='FoodDetail'
        component ={FoodDetailScreen}
        options={{
          title : 'İçerik'
        }}
      >
      </Stack.Screen>
      
    </Stack.Navigator>
    </FavoritesContextProvider>

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
