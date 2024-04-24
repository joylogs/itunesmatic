
import React from "react";
import { FlatList, SectionList, Text, View } from "react-native";

// console.log("=>", customData.innerArray);

const AlbumList = () => {
    return (
        <View>
            <SectionList sections={[
                {title: "D", data: ['Devin', 'David']}, 
                {title: "E", data: ['Evin', 'Edward', 'Evan']}
            ]}

                renderItem={({item}) => <Text>{item}</Text>}
                renderSectionHeader={({section}) => (<Text>{section.title}</Text>)}
                keyExtractor={item => `basicListEntry-${item}`}
                >
            </SectionList>

            <FlatList data={[{key: "john"}, {key: "smith"}]} 
            renderItem = {({item}) => <Text>{item.key}</Text>} > 

            </FlatList>
        </View>
    );
}

export default AlbumList;
