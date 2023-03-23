import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [people,setPeople]=useState([
    { name:'a',id:'1'},
    { name:'b',id:'2'},
    { name:'c',id:'3'},
    { name:'d',id:'4'},
    { name:'e',id:'5'},
    { name:'f',id:'6'},
    { name:'g',id:'7'},
    { name:'h',id:'8'},
    { name:'i',id:'9'},
    { name:'j',id:'10'},
  ]);

  const pressHandler=(id)=>{
    console.log(id);
    setPeople((filterpeople)=>{
      return filterpeople.filter(person=>person.id!=id)
    });
  }

  return (
    <View style={styles.container}>
       {/* <ScrollView>
          { people.map(item=>(
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))}
       </ScrollView> */}
       <FlatList 
       numColumns={2}
       keyExtractor={(item)=>item.id}
       data={people}
       renderItem={({item})=> (
        <TouchableOpacity onPress={()=>pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
        
       )}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    fontSize:24,
    backgroundColor:'pink',
    padding:30,
    marginTop:24,
    marginHorizontal:10,
    //marginTop:24,
  },
});
