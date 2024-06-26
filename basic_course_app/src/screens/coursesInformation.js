import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../components/Informaiton'



export default function coursesInformation() {
  return (
    <ScrollView>
      <Information
        title= 'Angular Eğitimi'
        imageSource={require('../../assets/angular.jpg')}
        desc='Kapsamlı Angular Eğitimi'
      />
      <Information
        title= 'Boostrap 5 Eğitimi'
        imageSource={require('../../assets/bootstrap5.png')}
        desc='Kapsamlı Boostrap Eğitimi'
      />
      <Information
        title= 'C Programlama Eğitimi'
        imageSource={require('../../assets/c.png')}
        desc='Kapsamlı C Programlama Eğitimi'
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})