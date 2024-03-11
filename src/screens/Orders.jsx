import React, {useState} from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import {useEffect} from "react";
import {useFetch} from "../../hooks/useFetch";
import {API_URL, API_KEY} from "../../data/api";
import {Card} from "react-native-paper";
import {TestComponentCard} from "../components/TestComponentCard";
import Constants from 'expo-constants';
import {AppBarTest} from "../components/AppBarCustomTest";
import {GradientBackground} from "../components/GradientBackground";
import {BlurBackgroundSpheres} from "../components/BlurBackgroundSpheres";

export const Orders = ({navigation}) => {
    const {data, get} = useFetch(API_URL);
    useEffect(() => {
        get(`productionOrders?apikey=${API_KEY}`);
    }, []);
    const [dataProductionOrdersModify, setDataProductionOrdersModify] = useState([]);

    useEffect(() => {
        if (data?.productionOrders?.rows) {
            console.log('Entra')
            const newProductionOrdersData = data?.productionOrders?.rows.map((productionOrder) => {
                return {
                    ...productionOrder,
                    id: productionOrder?.id,
                    supplie: productionOrder?.supply?.name,
                    quantity:productionOrder?.quantity,
                    process: productionOrder?.process?.name,

                }
            })
            setDataProductionOrdersModify(newProductionOrdersData)
        }
    }, [data]);
    const styles = StyleSheet.create({
        cardContent: {
            flexDirection: "row",
            padding: 10,
            backgroundColor: 'rgba(243, 231, 215, 0.1)',
            borderRadius: 20,
            backDropFilter: "blur(10px)",
        },
        cardText: {
            fontSize: 14,
            marginBottom: 1,
            padding: 2,
            marginLeft: 30,
            color: "black"
        },
        cardLabel: {
            fontWeight: "bold",
            fontSize: 17,
            marginBottom: 9,
            marginLeft: 10,
            color: "#deb887"
        },
        cardTitle: {
            fontSize: 25,
            fontWeight: "bold",
            marginLeft: 0,
            marginTop: 30,
            marginRight: 10,
            color: "red",
        }
    });
    return (
        
        <View style={{
            flex: 1,
            marginTop: Constants.statusBarHeight,
            backgroundColor: "#f5f5f5",
        }}>
            <Text style={{
                fontWeight: "300",
                fontSize: 24,
                margin: 5,
                color: "#333",
                textAlign: "center"
            }}>
                Ordenes de producción
            </Text>
            
            <View style={{
                padding: 10,
                gap: 10,
                backgroundColor: 'white',
                marginBottom: 60,
            }}><BlurBackgroundSpheres/>
                <FlatList 

            data={dataProductionOrdersModify}

            renderItem={({item: order}) => (
                <Card style ={{marginBottom:5, backgroundColor: "white", borderRadius:30}}>
                        <View style={{
                padding: 10,
                gap: 10,
            }}>
                <TestComponentCard number={order.id} process={order.process} supply={order.supplie} quantity={order.quantity}/>                    
            </View>

                    </Card>
            )}  
        />
                
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
    );
};

export default Orders;