import React from 'react';
import Main from './src/screens/Main';
import {Ventas} from './src/screens/Ventas';
import {Orders} from './src/screens/Orders';
import {Production} from './src/screens/Production';
import {GetOrders} from './src/screens/Pedidos'
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Login} from "./src/screens/Login";
import {AuthProvider} from "./src/context/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Stack.Navigator>
                     {/* <Stack.Screen name={'Login'} component={Login} options={{headerShown: false}}/>*/}
                    <Stack.Screen name={'Main'} component={Main} options={{headerShown: false}}/>
                    <Stack.Screen name={'Ventas'} component={Ventas} options={{headerShown: false}}/>
                    <Stack.Screen name={'Ordenes'} component={Orders} options={{headerShown: false}}/>
                    <Stack.Screen name={'Production'} component={Production} options={{headerShown: false}}/>
                    <Stack.Screen name={'Pedidos'} component={GetOrders} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    )
};

