import React, {useState} from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import {useEffect} from "react";
import {useFetch} from "../../hooks/useFetch";
import {API_URL, API_KEY} from "../../data/api";
import {Card} from "react-native-paper";

const RequestsList = () => {
    const { data, loading, error, get, del } = useFetch(API_URL);
    useEffect(() => {
        get(`productionRequests?apikey=${API_KEY}`);
    }, []);
    const [dataProductionRequestsModify, setDataProductionRequestsModify] = useState([]);
    
    useEffect(() => {
        if(data?.ProductionRequests?.rows){
            console.log('Entra')
            const newProductionRequestsData = data?.ProductionRequests?.rows.map((productionRequest: any) => {
                return {
                    ...productionRequest,
                    supplie: productionRequest?.supply?.name,
                    company: productionRequest?.company?.name,
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
          
          
        },
        cardText: {
          fontSize: 14,
          marginBottom: 1,
          padding: 2,
          marginLeft:30,
          color: "black"
        },
        cardLabel: {
          fontWeight: "bold",
          fontSize: 17,
          marginBottom: 9,
          marginLeft:10,
          color: "#deb887"
        },
        cardTitle:{
            fontSize: 25,
            fontWeight: "bold",
            marginLeft:0,
            marginTop: 30,
            marginRight:10,
            color: "red",
        }
      });
      return (
        <View style={{ flex: 1, padding: 5 }}>
          <FlatList
            data={dataProductionRequestsModify}
            renderItem={({ item: request }) => (
              <Card>
                <View style={styles.cardContent}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>#{request.id}</Text>
                </View>
                  <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap" }}>

                    <Text style={styles.cardLabel}>Insumo:</Text>
                    
                    <Text style={styles.cardLabel}>Compañía:</Text>
                    
                    <Text style={styles.cardLabel}>Fecha de envío:</Text>
        
                    <Text style={styles.cardLabel}>Proceso:</Text>
                    
                  </View>
                
                
                  <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap" }}>
                    
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
      );
    };
export default RequestsList;