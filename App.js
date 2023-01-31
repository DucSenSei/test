import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,textInput, TextInput, FlatList,Image } from 'react-native';
import { useState } from 'react';
export default function App() {

  const[showState , changeshowState] = useState(false);
    const [items, setItems] = useState([]);
    const [name, setName] = useState([]);
    const [DSC, setDSC] = useState([]);
    const [link, setLink] = useState([]);
  
  const [data,setdata] = useState([]);

  const addItem = () => {
    setItems([...items, { name, DSC, link }]);
    setName('');
    setDSC('');
    setLink('');
  };
  return (
    <View style={styles.container}>
      <Text>Họ Tên: Phạm Xuân Đức</Text>
      <Text> MSV: PH25531</Text>
      <Button 
      title="Thêm Mới" 
      onPress={() => changeshowState(true)}/>
      {showState ? (
        <>
      
        <TextInput style = {styles.text1} onChangeText={textInput => setName(textInput)} placeholder  = 'HoTen:'/>
        <TextInput style = {styles.text1} onChangeText={textInput => setDSC(textInput)} placeholder  = 'DSC:'/>
        <TextInput style = {styles.text1} onChangeText={textInput => setLink(textInput)} placeholder  = 'linkAnh:'/>
        <View style = {{flexDirection:"row"}}>
        <Button title='Hủy'
        onPress={() => changeshowState(!showState)}/>
        <Button
        title='Thêm'
        onPress={addItem}
        />
        </View>
        
 
       
        </>
      ):(null)}

<FlatList
        data={items}
        renderItem={({ item }) => (
          <>
          <View style = {{flexDirection:"row"}}>
          <Image style = {styles.imagee} source={{uri: item.link}}/>
          <View style = {styles.text}>
          <Text>Tên: {item.name}</Text>
          <Text>DSC: {item.DSC}</Text>
          </View>
          </View>
          
          </>
          
        )}
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },imagee:{
    width:100,
    height:100,
    borderRadius:10,
  },text:{
    marginTop:30,
    fontSize:20,
    color:'#000',
    fontWeight:'bold',
  },text1:{
    width:400,
    height:70,
    borderWidth:1,
    marginTop:10,
    fontSize:20,
    color:'#f9f',
    fontWeight:'bold',
  }
});
