import { Image, StyleSheet, Text, View } from "react-native"


type CardProps =  {
    name: string
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        // flex: 1,
    }
});

const Card = (props: CardProps) => {
    return (
        <View style = {styles.container}>
            <Image 
            source = {{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
            style = {{width: 200, height: 200, alignSelf: "center"}}
            />
            <Text style = {{backgroundColor: "white"}}>{props.name}
            </Text>
        </View>        
    );
};
export default Card;

