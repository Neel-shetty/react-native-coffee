import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View>
      <Text style={styles.title}>Order Confirmation</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  root:{

      },
  title:{
    fontFamily:'poppins-semibold',
    fontSize:20,
      }
    })
