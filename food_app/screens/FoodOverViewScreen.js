import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { CATEGORIES, FOODS } from '../data/dummy-data'
import FoodItem from '../components/FoodItem'

export default function FoodOverViewScreen({ route , navigation}) {

    const categoryId = route.params.categoryId

    const displayedFoods = FOODS.filter((foodItem) =>{
       return foodItem.categoryIds.indexOf(categoryId) >= 0; 
    })

    console.log(displayedFoods);

    useLayoutEffect(()=>{
        // Sayfa Başlıını dinamik olarak değiştirmek için 

    const categoryTitle = CATEGORIES.find((category)=>
        category.id == categoryId).title    

    // Burada Yukarıda bulduğumuz title i sayfa başlığına atıyoruz
    navigation.setOptions({
        title : categoryTitle
    })
    },[navigation,categoryId] // sadece navigation ve category değiştiğinde çalışır
    );

    

   function renderFoodItem(itemData){
    console.log(itemData.item);
    const foodItemProps ={
        id : itemData.item.id,
        title : itemData.item.title,
        imageUrl : itemData.item.imageUrl,
        affordability  : itemData.item.affordability,
        complexity : itemData.item.complexity,

    }
    return <FoodItem {...foodItemProps}/>
   }

  return (
    <View>
      <FlatList 
        data={displayedFoods}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({})