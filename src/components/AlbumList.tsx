
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

            <FlatList
                data=
                {
                    [
                        { key: "customData" },
                        { key: "customData2" },
                        { key: "customData3" },
                    ]
                }
                renderItem={({item}) => <Text>{item.key}</Text>}
                keyExtractor={item2 => `<basicFlatListEntry-1>item.k</basicFlatListEntry-1>`}
            >
            </FlatList>
        </View>
    );
}

export default AlbumList;
