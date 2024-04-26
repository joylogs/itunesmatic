/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//CUSTOM VIEWS IMPORT ->
import Card from './src/screens/Card';
import AlbumList from './src/components/AlbumList';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type Product = {
  id: string;
  title: string;
  price: string;
  thumbnail: string;
};


function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Product[]>([]);

  const isDarkMode = useColorScheme() === 'dark';
  // const numberOfCols = 2;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getAlbumList = async () => {
    try {
      //https://dummyjson.com/products
      //https://reactnative.dev/movies.json
      const response = await fetch("https://dummyjson.com/products");
      const json = await response.json();
      setData(json.products);
    }
    catch(error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAlbumList();
  }, []);

  return (
      <View>
        {/* <Card name = "Meow"></Card>
        <AlbumList></AlbumList> */}
      {isLoading ? (<ActivityIndicator></ActivityIndicator>) : 
      (      
        <FlatList 
        data={data}
        keyExtractor={({id}) => id} 
        // numColumns={numberOfCols}
        renderItem={({item, index}) => (
          <View style={styles.viewpic}>            
            <Image style={styles.image} source={{uri:item.thumbnail}}/>
            <Text>{item.title}</Text>
            
          </View>
        )}>

        </FlatList>
      ) }

      </View>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  viewpic: {
    flex: 1,
    flexWrap:'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
     backgroundColor: '#f5f5f5',
  },
  image: {
    justifyContent: 'center',
    height: 115,
    width: 115,
    margin:6,
    backgroundColor: 'red',
  },
  // app: {
  //   flex: 4, // the number of columns you want to devide the screen into
  //   marginHorizontal: "auto",
  //   width: 400,
  //   backgroundColor: "white"
  // },
  row: {
    flexDirection: "row"
  }
});

export default App;