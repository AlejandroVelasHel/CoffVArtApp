import {View, Text, TouchableOpacity} from "react-native";

import Icon from 'react-native-vector-icons/Feather';

export const AppBarTest = ({navigation}) => {
    return (
        <View style={{
            width: '100%',
            backgroundColor: 'rgba(0,0,0,.5)',
            paddingVertical: 5,
            paddingHorizontal: 10,
            flexDirection: 'row',
            borderRadius: 50,
            justifyContent: 'space-around',
        }}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Main')
            }}>
                <View style={{
                    alignItems: 'center',
                }}>
                    <Icon name={'home'} size={20} color={'white'}/>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 10,
                    }}>Inicio</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Ventas')
            }}>
                <View style={{
                    alignItems: 'center',
                }}>
                    <Icon name={'shopping-bag'} size={20} color={'white'}/>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 10,
                    }}>Ventas</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Ordenes')
            }}>
                <View style={{
                    alignItems: 'center',
                }}>
                    <Icon name={'package'} size={20} color={'white'}/>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 10,
                    }}>Ordenes</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Production')
            }}>
                <View style={{
                    alignItems: 'center',
                }}>
                    <Icon name={'briefcase'} size={20} color={'white'}/>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 10,
                    }}>Producción</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Pedidos')
            }}>
                <View style={{
                    alignItems: 'center',
                }}>
                    <Icon name={'briefcase'} size={20} color={'white'}/>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 10,
                    }}>Pedidos</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}