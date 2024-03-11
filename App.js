import React from 'react';
import Main from './src/screens/Main';
import {Ventas} from './src/screens/Ventas';
import {Orders} from './src/screens/Orders';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Login} from "./src/screens/Login";
import {AuthProvider} from "./src/context/AuthContext";
import {RequestsList} from "./src/screens/requestsList";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={'Login'} component={Login} options={{headerShown: false}}/>
                    <Stack.Screen name={'Main'} component={Main} options={{headerShown: false}}/>
                    <Stack.Screen name={'Ventas'} component={Ventas} options={{headerShown: false}}/>
                    <Stack.Screen name={'Ordenes'} component={Orders} options={{headerShown: false}}/>
                    <Stack.Screen name={'requestList'} component={RequestsList} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    )
};

