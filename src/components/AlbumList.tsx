
import React from "react";
import { FlatList, Text, View } from "react-native";


const customData = require('../utils/mockdata.json');
// console.log("=>", customData.innerArray);

const AlbumList = (customData) => {

    return (
        <View>
            <FlatList data = {
                [
                    {key: "value1"},
                    {key: "value2"},
                    {key: "value3"},
                ]
            } renderItem = {({item}) => <Text>{item.key}</Text>}
            >
            </FlatList>
        </View>
    );
}

export default AlbumList;
