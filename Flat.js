import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import React from 'react'

const Flat = () => {

    const [data, setData] = useState([]);
    const getAPIData = async () => {
        const url = 'http://localhost:3000/users';
        let result = await fetch(url);
        result = result.json();
        setData(result);
        console.log(data);
    }

    useEffect(() => {
        getAPIData()
    }, []);

    return (
        <View>
            <Text style={{ fontSize: 30 }}> FlatList with API Data</Text>
            {
                data.length ?
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                            <View style={{ borderBottomColor: "orange", borderBottomWidth: 1, padding: 10 }}>
                                <Text style={{ fontSize: 30, backgroundColor: "orange" }}>{item.id}</Text>
                                <Text style={{ fontSize: 20 }}>{data.title}</Text>
                                <Text style={{ fontSize: 20 }}>{data.body}</Text>

                            </View>}
                    />
                    : null
            }
        </View>
    )
};

export default Flat