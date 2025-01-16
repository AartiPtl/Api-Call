import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const App = () => {
  const [data, setData] = useState([]); // list of users

//console.log('HOME PAGE APp');

  const getAPIData = async () => {
    // api call
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    const users = await result.json()
    console.log("data----------", users.length);
    setData(users)
  }
  useEffect(() => {
    getAPIData();
  }, [])

  const singlePost = (item) => {
    return <View >
      <Text style={{ fontSize: 20 , backgroundColor: 'orange', textAlign:'center'}}>{item.id}</Text>
      <Text style={{ fontSize: 20 }}>{item.title}</Text>
      <Text style={{ fontSize: 20 }}>{item.age}</Text>
      <Text style={{ fontSize: 20 }}>{item.body}</Text>
    </View>
  }

  return (
    <View>
      <Text style={{ fontSize: 40 }}>API Call</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => singlePost(item)}
      />

    </View>)
};

export default App;