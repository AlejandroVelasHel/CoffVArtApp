import {View, Text} from "react-native";
import {AppBarTest} from "../components/AppBarCustomTest";
import React from "react";

export const Production = ({navigation}) => {
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                flex: 1,
                backgroundColor: '#ddd',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Production</Text>
            </View>
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
    )
}