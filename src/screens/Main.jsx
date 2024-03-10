import React from "react";
import { Text, View, useColorScheme} from 'react-native';
import {AppBarTest} from "../components/AppBarCustomTest";

const Main = ({navigation}) => {

    const colorScheme = useColorScheme()

  return (
    
    <View style={{
        flex: 1,
    }}>
        <View style={{
            flex: 1,
            // backgroundColor: darkMode ? '#1f1f1f' : '#f1f1f1',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Inicio</Text>
            <Text>The color preference is {colorScheme}</Text>
        </View>
      {/*<CustomAppBar/>*/}
        <View style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            paddingHorizontal: 10,
            paddingVertical: 10,
        }}>
            <AppBarTest navigation={navigation}/>
        </View>
    </View>
  );
}

export default Main;