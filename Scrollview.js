import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import React from 'react'

const Scroll = () => {

  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/comments?postId=1';
    let result = await fetch(url);
    result = result.json();
    setData(data);
  }

  useEffect(() => {
    getAPIData()
  }, []);

  return (
    <ScrollView>
      <Text style={{ fontSize: 30 }}>List with API Data</Text>
      {
        data.length ?
          data.map((item) => <View style={{ borderBottomColor: "orange", borderBottomWidth: 1, padding: 10 }}>
            <Text style={{ fontSize: 30, backgroundColor: "orange" }}>{item.id}</Text>
            <Text style={{ fontSize: 20 }}>{data.title}</Text>
            <Text style={{ fontSize: 20 }}>{data.body}</Text>
          </View>)
          :
          null
      }
    </ScrollView>
  )
};

export default Scroll