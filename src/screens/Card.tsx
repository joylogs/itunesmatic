import { Text, View } from "react-native"


type CatProps =  {
    name: string
}



const Cat = (props: CatProps) => {
    return (
        <View>
            <Text>Hi ..I am {props.name}..</Text>
        </View>
    );
};

export default Cat;