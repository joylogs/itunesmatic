import { Text, View } from "react-native"


type CardProps =  {
    name: string
}



const CardView = (props: CardProps) => {
    return (
        <View>
            <Text>Hi ..I am {props.name}..</Text>
        </View>
    );
};

export default Cat;