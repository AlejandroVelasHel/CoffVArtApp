import React, {useState} from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import {useEffect} from "react";
import {useFetch} from "../../hooks/useFetch";
import {API_URL, API_KEY} from "../../data/api";
import {Card} from "react-native-paper";
import {AppBarTest} from "../components/AppBarCustomTest";
import Constants from 'expo-constants';
import { OrderCard } from "../components/ComponentOrders";
import {GradientBackground} from "../components/GradientBackground";
import {BlurBackgroundSpheres} from "../components/BlurBackgroundSpheres";




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
            padding: 10,
            gap: 10,
            backgroundColor: 'white',
            marginBottom: 60,
          }}><BlurBackgroundSpheres />
            <FlatList
              data={dataOrdersModify}
              renderItem={({ item: order }) => (
                <Card style={{ marginBottom: 5, backgroundColor: "white", borderRadius: 30 }}>
                  <View style={{
                    padding: 10,
                    gap: 10,
                  }}>
                  <OrderCard
                    id={order.id}
                    code={order.code}
                    total={order.total}
                    state={order.state}
                    customerId={order.customerId}
                    product={order.product}
                    quantity={order.quantity}
                    value={order.value}
                    onPress={() => handleOrderPress(order.id)}
                    updateOrderState={handleUpdateOrderState}
                  />
                  </View>
                </Card>
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

