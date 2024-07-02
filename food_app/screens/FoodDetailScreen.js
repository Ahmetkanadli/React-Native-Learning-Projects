import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FOODS } from '../data/dummy-data';
import FoodIngredients from '../components/FoodIngredients';

export default function FoodDetailScreen({ route }) {

    const foodId = route.params.foodId;
    const selectedFood = FOODS.find((food) => food.id == foodId)
    console.log(selectedFood)
    return (
        <ScrollView style = {styles.rootContainer}>
            <Image
                style={styles.image}
                source={{ uri: selectedFood.imageUrl }}
            />
            <Text style={styles.title}>{selectedFood.title}</Text>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
                <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
            </View>
            <View style = {styles.listContainer}>
                <View style = {styles.subTitleContainer}>
                    <Text style = {styles.subTitle}>İçindekiler</Text>
                </View>
                <FoodIngredients data = {selectedFood.ingredients}/> 
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer : {
        marginBottom : 50,
    },
    image: {
        width: '100%',
        height: 300,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize : 15,
        color : 'grey'
    },
    title : {
        textAlign : 'center',
        fontSize  :24,
        fontWeight  : 'bold',
        marginTop : 5
    },
    listContainer : {
        width  : '100%',
        paddingHorizontal : 10
    },
    subTitleContainer : {
        alignItems : 'center',
        borderBottomWidth  : 2,
        borderBottomColor : 'black',
        marginVertical : 5
    },
    subTitle : {
        fontSize : 24,
        fontWeight : 'bold'
    }
})