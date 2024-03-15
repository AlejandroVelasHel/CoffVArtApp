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

export const RequestsList = ({navigation}) => {
    const {data, get} = useFetch(API_URL);
    useEffect(() => {
        get(`productionRequests?apikey=${API_KEY}`);
    }, []);
    const [dataProductionRequestsModify, setDataProductionRequestsModify] = useState([]);

    useEffect(() => {
        if (data?.ProductionRequests?.rows) {
            console.log('Entra')
            const newProductionRequestsData = data?.ProductionRequests?.rows.map((productionRequest) => {
                return {
                    ...productionRequest,
                    id: productionRequest?.id,
                    supplie: productionRequest?.supply?.name,
                    company: productionRequest?.company?.name,
                    quantity:productionRequest?.quantity,
                    process: productionRequest?.process?.name,
                    
                    dateOfDispatch: productionRequest.dateOfDispatch.substring(0, 10),

                }
            })
            setDataProductionRequestsModify(newProductionRequestsData)
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
                Solicitudes de producción
            </Text>
            
            <View style={{
                padding: 10,
                gap: 10,
                backgroundColor: 'white',
                marginBottom: 60,
            }}><BlurBackgroundSpheres/>
                <FlatList 

            data={dataProductionRequestsModify}

            renderItem={({item: request}) => (
                <Card style ={{marginBottom:5, backgroundColor: "white", borderRadius:30}}>
                        <View style={{
                padding: 10,
                gap: 10,
            }}>
                <TestComponentCard number={request.id} company={request.company} process={request.process} supply={request.supplie} quantity={request.quantity}
                                   date={request.dateOfDispatch}/>                    
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
    /*return (
        <View style={{flex: 1, padding: 5}}>
            <FlatList
                data={dataProductionRequestsModify}
                renderItem={({item: request}) => (
                    <Card>
                        <View style={styles.cardContent}>
                            <View style={styles.cardContent}>
                                <Text style={styles.cardTitle}>#{request.id}</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: "column", flexWrap: "wrap"}}>

                                <Text style={styles.cardLabel}>Insumo:</Text>

                                <Text style={styles.cardLabel}>Compañía:</Text>

                                <Text style={styles.cardLabel}>Fecha de envío:</Text>

                                <Text style={styles.cardLabel}>Proceso:</Text>

                            </View>


                            <View style={{flex: 1, flexDirection: "column", flexWrap: "wrap"}}>

                                <Text style={styles.cardText}>{request.id}</Text>
                                <Text style={styles.cardText}>{request.supplie}</Text>

                                <Text style={styles.cardText}>{request.company}</Text>

                                <Text style={styles.cardText}>{request.dateOfDispatch}</Text>

                                <Text style={styles.cardText}>{request.process}</Text>
                            </View>
                        </View>

                    </Card>
                )}
            />
        </View>
    );*/
};

export default RequestsList;