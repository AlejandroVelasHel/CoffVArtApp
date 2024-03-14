import React, {useState} from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import {useEffect} from "react";
import {useFetch} from "../../hooks/useFetch";
import {API_URL, API_KEY} from "../../data/api";
import {Card} from "react-native-paper";
import {AppBarTest} from "../components/AppBarCustomTest";
import Constants from 'expo-constants';
import { OrderCard } from "../components/ComponentOrders";



export const GetOrders = ({navigation}) => {
    const {data, loading, error, get, del} = useFetch(API_URL);
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    useEffect(() => {
        get(`orders?apikey=${API_KEY}`);
    }, []);

    const [dataOrdersModify, setDataOrdersModify] = useState([]);

    useEffect(() => {
        if (data?.orders?.rows) {
            const newOrdersData = data?.orders?.rows.map((order) => {
                const orderDetails = order?.ordersderails[0];
                const product = orderDetails?.product;
    
                return {
                    ...order,
                    id: order?.id,
                    code: order?.code,
                    total: order?.total,
                    state: order?.state,
                    customerId: order?.coustumer?.name,
                    product: product?.name, 
                    quantity: orderDetails?.quantity, 
                    value: orderDetails?.value, 
                };
            });
    
            setDataOrdersModify(newOrdersData);
        }
    }, [data]);

    const handleOrderPress = (orderId) => {
        setSelectedOrderId(orderId);
    };
    const handleUpdateOrderState = () => {
        console.log("update order state");
        get(`orders?apikey=${API_KEY}`)
            console.log("Datos actualizados:", data);
            setDataOrdersModify(data);
    };
    
    return(
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
                Pedidos
            </Text>
            <View style={{
                padding:10,
                gap:10
            }}>
            <FlatList
                data={dataOrdersModify}
                renderItem={({item: order}) => (
                    <OrderCard
                        id={order.id}
                        code={order.code}
                        total={order.total}
                        state={order.state}
                        customerId={order.customerId}
                        product={order.product}
                        quantity={order.quantity}
                        value={order.value}
                        onPress={()=>handleOrderPress(order.id)}
                        updateOrderState={handleUpdateOrderState}
                        
                    />
                )}
                keyExtractor={(order) => order.id}
            />
            </View>
            <View style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                paddingHorizontal: 10,
                paddingVertical: 10,
            }}>
            <AppBarTest navigation={navigation} />
        </View>
    </View>
    );
};
export default GetOrders;

