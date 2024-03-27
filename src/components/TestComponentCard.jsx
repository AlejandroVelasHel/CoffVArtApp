import {View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button, TextInput} from "react-native";
import {StateTag} from "./StateTag";
import moment from "moment";
import {useFetch} from "../../hooks/useFetch";
import {API_URL, API_KEY} from "../../data/api";
import { statesTable } from "../utils/stateTable";
import { Picker } from '@react-native-picker/picker';
import React, { useState , useEffect} from "react";
import CustomButton from "./CustomButton";
import { center } from "@shopify/react-native-skia";
import CustomButtonA from "./CustomButton copy";

export const TestComponentCard = ({ 
                                      supply,
                                      quantity,
                                      company,
                                      process,
                                      date,
                                      number,
                                      setDataProductionRequestsModifyProcess,
                                  }) => {
 

     moment.locale('es', {
        months: [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
            "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ],
        weekdays: [
            "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
        ],
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        }});
        const [quantityModalVisible, setQuantityModalVisible] = useState(false);
        const [receivedQuantity, setReceivedQuantity] = useState('');
    const [selectedProcess, setSelectedProcess] = useState(null);
    const [orderProcess, setOrderProcess] = useState(process);
    const [modalVisible, setModalVisible] = useState(false);
    const { data: processData, get: getProcess } = useFetch(API_URL);
    const { data, loading, error: errorFetch, get, put } = useFetch(API_URL);
    const [processes, setProcesses] = useState([]);

    useEffect(() => {
        get(`productionRequests/${number}?apikey=${API_KEY}`);
    }, []);
    useEffect(() => {  
        getProcess(`processes?apikey=${API_KEY}`);
    }, []);



    useEffect(() => {
        if (processData?.processes?.rows) {
            const processOptions = processData?.processes?.rows.map((process) => ({
                label: process.name,
                value: process.id,
            }));
            setProcesses(processOptions);
        }
    }, [processData]);

    const handleOpenQuantityModal = () => {
        setQuantityModalVisible(true);
    }
    const handleAcceptReceivedQuantity = async () => {
        // Realiza cualquier acción necesaria con la cantidad recibida
        console.log('Cantidad recibida:', receivedQuantity);
    
        // Cierra el modal
        setQuantityModalVisible(false);
    }
    const handlePress = (process) => {
        setSelectedProcess(process);
        setModalVisible(true);
    }
        
    handleAccept = async ()=> {
        try{
        put(`productionRequests/${number}?apikey=${API_KEY}`, {
            processId: selectedProcess,
            })
            console.log(selectedProcess);
            
            if(selectedProcess !== 3){
                setModalVisible(false);
                 
            }
        } catch (error) {
            console.log('Error al actualizar el proceso:', error);
        }
    }



    const styles = StyleSheet.create({
        blue: {
            backgroundColor: "rgba(27, 168, 242, 0.3)",
            color: '#1BA8F2'
        },
        green: {
            backgroundColor: "rgba(46, 213, 115, 0.3)",
            color: '#2ed573'
        },
        red: {
            backgroundColor: "rgba(255, 71, 87, 0.3)",
            color: '#ff4757'
        },
        orange: {
            backgroundColor: "rgba(255, 159, 67, 0.3)",
            color: '#ff9f43'
        },
        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          },
          modalContent: {
            backgroundColor: 'rgba(299, 299, 299, 0.9)',
            padding: 20,
            borderRadius: 10,
            elevation: 5,
          },
          input: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,
          },
    })
    const stylesConditional = (process) => {
        const style = styles.red;
        if(process){
            if(statesTable.blue.includes(process.toUpperCase())) {
            return styles.blue;
        } else if(statesTable.green.includes(process.toUpperCase())) {
            return styles.green;
        } else if(statesTable.red.includes(process.toUpperCase())) {
            return styles.red;
        } else if(statesTable.orange.includes(process.toUpperCase())) {
            return styles.orange;
        }}
        return style;
    }
    useEffect(() => {
        if (data.message==="Cantidad de insumo recibida correctamente") {
             setDataProductionRequestsModifyProcess(prev=>!prev);  
        }
        console.log("data:",    data);
    }
    , [data]);
        

    return (
        <TouchableOpacity onPress={() => handlePress(process)}>
        <View style={{
            backgroundColor: "#f5f6fa",
            padding: 10,
            height: 100,
            flexDirection: "row",
            overflow: "hidden",
            borderRadius: 15,
            gap: 10,
            position: "relative",
        }}>
            <Text style={{
                position: "absolute",
                top: 10,
                right: 10,
                fontSize: 12,
                color: "#333333",
                fontWeight: "bold",

            }}>
                {moment(date).fromNow()}
            </Text>
            <View style={{
                justifyContent: "center",
                height: "100%",
                maxHeight: 100,
                width: "100%",
                maxWidth: 100,
                borderRadius: 15,
                overflow: "hidden",
            }}>
                <Image
                    src={'https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    style={{
                        height: '100%',
                        width: '100%',
                        resizeMode: 'cover',
                    }}/>
            </View>
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    flexDirection: "row",
                }}>
                    <StateTag stateText={process}/>
                </View>
                <View>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "#333333",
                    }}>{supply}</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    gap: 15,
                    alignItems: "center",
                }}>
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Text style={{
                            fontSize: 12,
                            color: "#333333",
                            fontWeight: '600'
                        }}>
                            {quantity}
                        </Text>
                        <Text style={{
                            fontSize: 10,
                            color: "#333333",
                            fontWeight: '300'
                        }}>Cantidad</Text>
                    </View>
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Text style={{
                            fontSize: 12,
                            color: "#333333",
                            fontWeight: '600'
                        }}>
                            {company}
                        </Text>
                        <Text style={{
                            fontSize: 10,
                            color: "#333333",
                            fontWeight: '300'
                        }}>Compañía</Text>
                    </View>
                    <View style={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                        marginLeft: "auto",
                    }}>
                        <Text style={{
                            fontSize: 12,
                            color: stylesConditional(process).color,
                            fontWeight: '600'
                        }}>
                            {number}
                            </Text>
                        <Text style={{
                            fontSize: 10,
                            color: "#333333",
                            fontWeight: '300'
                        }}>Nro</Text>
                    </View>
                </View>
            </View>
            <Modal
    animationType="slide"
    transparent={true}
    visible={quantityModalVisible}
    onRequestClose={() => {
        setQuantityModalVisible(false);
    }}
>
    <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: "center" }}>
                Ingresar Cantidad Recibida
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Cantidad recibida"
                value={receivedQuantity}
                onChangeText={text => setReceivedQuantity(text)}
            />
            <CustomButtonA title="Aceptar" onPress={handleAcceptReceivedQuantity} />
            <CustomButton title="Cancelar" onPress={() => setQuantityModalVisible(false)} />
        </View>
    </View>
</Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
        }}
    >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: "center" }}>
                    Cambiar Proceso
                </Text>
                <Picker
                    selectedValue={selectedProcess}
                    onValueChange={(itemValue) => setSelectedProcess(itemValue)}
                    style = {{marginBottom: 20, height: 50, width: 150, alignSelf: "center", borderRadius:10 }}
                >
                    {processes.map((process) => (
                        <Picker.Item style={{fontWeight: "bold", fontSize: 15}} key={process.value} label={process.label} value={process.value} />
                    ))}
                </Picker>
                <CustomButtonA title="Aceptar" onPress={handleAccept} />
                <CustomButton title="Cancelar" onPress={() => setModalVisible(false)}/>
            </View>
        </View>
    </Modal>    
        </View>
    </TouchableOpacity>
    )

}
