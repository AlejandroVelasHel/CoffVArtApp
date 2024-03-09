import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
export const CustomAppBar = () => {

    return (
        
        <View style={styles.container}>
            <View style={styles.containerIcon}>
            <TouchableOpacity style={styles.buttonI}>
                <Icon name="user" size={30} color="#900" />
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'colunm',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginLeft:-10,
        marginRight:-10,
        marginBottom: -10,
    },
    containerTop:{
        flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBlockColor: 'black',
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 0,
    borderBottomColor: '#eee',
    },
    
    containerIcon: {
        position: 'absolute',
        left: '50%',
        top: '20%',
        transform: [{ translateX: -43 }, { translateY: -50 }],
        borderRadius: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    buttonL: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderTopRightRadius: 50,
        backgroundColor: 'white',
    },
    buttonR: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderTopLeftRadius: 50,
        backgroundColor: 'white',
    },
    buttonI: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'cream',
    },
    text: {
        color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    },
});

export default CustomAppBar;
