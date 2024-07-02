import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function FoodItem({id, title, imageUrl, affordability, complexity}) {
    
    const navigation = useNavigation();

    const FoodItemHandler = () => {
        navigation.navigate('FoodDetail',{
            foodId : id
        })
    }
    
    return (
        <View style={styles.foodItem}>
            <Pressable style = {({pressed}) =>
                pressed ? styles.buttonPressed : null}
                
                onPress={FoodItemHandler}
                
                >
                <View style= {styles.innerView}>
                    <View>
                        <Image style={styles.image}
                            source = {{uri : imageUrl}}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{complexity}</Text>
                        <Text style={styles.detailItem}>{affordability}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    foodItem : {
        margin : 20,
        backgroundColor : 'white',
        elevation : 4,
        shadowColor : '#171717',
        shadowOffset : {width : -2 , height : 4},
        shadowOpacity : 0.2,
        shadowRadius : 3,
        borderRadius : 20
    },
    innerView : {},
    image : {
        width : '100%',
        height : 400,
        borderRadius : 20
    },
    title : {
        textAlign : 'center',
        fontSize : 18,
        fontWeight : 'bold',
        margin : 8
    },
    details : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        marginBottom : 10,
    },
    detailItem :{
        marginHorizontal : 4,
    },
    buttonPressed : {
        opacity : 0.5
    }
})