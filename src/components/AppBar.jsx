import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const CustomAppBar = () => {

    return (

        <View style={styles.container}>
            <View style={styles.containerIcon}>
                <TouchableOpacity style={styles.buttonI}>
                    <Icon name="user" size={30} color="#9F212F"/>
                </TouchableOpacity>
            </View>
            <View style={styles.containerTop}>
                <TouchableOpacity style={styles.buttonL}>
                    <Text style={styles.text}>Ordenes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonR}>
                    <Text style={styles.text}>Producción</Text>
                </TouchableOpacity>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginLeft: -10,
        marginRight: -10,
        marginBottom: -10,
    },
    containerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 0,
    },

    containerIcon: {
        position: 'absolute',
        top: 0,
        transform: [{translateX: 0}, {translateY: -50}],
        borderRadius: 100,
        backgroundColor: '#ddd',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    }, buttonL: {
        paddingVertical: 15, paddingHorizontal: 40, borderTopRightRadius: 50, width: '45%', backgroundColor: 'white',
    }, buttonR: {
        paddingVertical: 15, paddingHorizontal: 40, borderTopLeftRadius: 50, width: '45%', backgroundColor: 'white',
    }, buttonI: {
        padding: 20, borderRadius: 40, backgroundColor: '#fff',
    }, text: {
        color: '#333', fontSize: 16, fontWeight: 'bold',
    },
});

export default CustomAppBar;
