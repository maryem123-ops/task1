import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { FlatList, StyleSheet, Button, View ,  SafeAreaView, Text} from 'react-native';


const HomeScreen = ({ navigation }) => {
  

  const [data, setData]= useState([])

   const FetchData=()=>{
      fetch('https://api.airtable.com/v0/appsj9zuYjK3lOA4t/Table%201?api_key=keylmCWgiJV84sW8D')
        .then(res => res.json())
        .then(dt => {
           setData(dt.records)
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
      FetchData();
    }, [])
   console.log({data})

const Item = ({ details}) => (
 
  <View style={styles.item}>
    <Button style={styles.title} title={details.fields.Name}
    onPress={()=>
      navigation.navigate('ItemDetails', {
        item:details,
      })
    }></Button>
    
  </View>
);
  const renderItem = ({ item }) => (
    <Item details={item}/>
  );

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Task1:  Create an airtable db and connect your app to it </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    textTransform: 'capitalize',
    marginVertical: "1em",
  },
  
});
export default HomeScreen;