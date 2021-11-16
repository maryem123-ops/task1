import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { FlatList, StyleSheet, Button, View , Text,  SafeAreaView} from 'react-native';

const ItemDetails =({route,navigation}) => {
    const { item } = route.params;
    console.log({item})
    return(
        <View>
        <Text>Name : {item.fields.Name}</Text>
        <Text>ID : {item.id}</Text>
        <Text>Adress : {item.fields.adress}</Text>
        <Text>Phone Number : {item.fields.phoneNumber}</Text>

        <Button title="Go back"
        onPress={()=>navigation.navigate('Home')}
        ></Button>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    }
});

export default ItemDetails;