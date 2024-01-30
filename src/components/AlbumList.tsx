
import React from "react";
import { FlatList, Text, View } from "react-native";



// console.log("=>", customData.innerArray);


const AlbumList = ({ customData: any }) => {

    return (
        <View>
            <FlatList
                data={
                    [
                        { key: "customData" },
                        { key: "customData" },
                        { key: "customData" },
                    ]
                }
                renderItem={({ item }) => <Text>{item.key}</Text>}
            >
            </FlatList>
        </View>
    );
}

export default AlbumList;
