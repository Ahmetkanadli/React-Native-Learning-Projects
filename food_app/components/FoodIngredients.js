import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodIngredients({data}) {
  return data.map((dataIng) => (
    <View key = {dataIng} style={styles.listItem}>
        <Text style={styles.itemText}>{dataIng}</Text>
    </View>
  ))
}

const styles = StyleSheet.create({
    listItem : {
      backgroundColor : 'orange',
      marginVertical : 5,
      marginHorizontal : 30,
      borderRadius : 20,
      paddingVertical : 5,

    },
    itemText : {
        textAlign : 'center'
    }
})