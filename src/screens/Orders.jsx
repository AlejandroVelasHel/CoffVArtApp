import React from 'react';
import {View, Text} from 'react-native';
import {TestComponentCard} from "../components/TestComponentCard";
import Constants from 'expo-constants';
import {AppBarTest} from "../components/AppBarCustomTest";

export const Orders = ({navigation}) => {

    return (
        <View style={{
            flex: 1,
            marginTop: Constants.statusBarHeight,
            backgroundColor: "#fff",
        }}>
            <Text style={{
                fontWeight: "bold",
                fontSize: 25,
                margin: 10,
                color: "#333333",
                textAlign: "center"
            }}>
                Solicitudes de producción
            </Text>
            <View style={{
                padding: 10,
                gap: 10
            }}>
                <TestComponentCard company={'Juan Valdéz'} process={'Tostando'} supply={'Café oscuro'} quantity={15}
                                   date={'2024-03-06T16:03:21.151Z'}/>
                <TestComponentCard company={'Starbucks'} process={'Enviado'} supply={'Café claro'} quantity={10}/>
                <TestComponentCard company={'Juan Valdéz'} process={'Cancelado'} supply={'Café oscuro'} quantity={15}/>
                <TestComponentCard company={'Starbucks'} process={'Finalizado'} supply={'Café claro'} quantity={10}/>
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
};

export default Orders;