import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, Button } from "react-native";
import { StateTag } from "./StateTag";
import moment from "moment";
import {useFetch} from "../../hooks/useFetch";
import {API_URL, API_KEY} from "../../data/api";
import { Picker } from '@react-native-picker/picker';


export const OrderCard = ({
  id,
  code,
  total,
  state,
  customerId,
  product,
  quantity,
  value,
  date,
  onPress,
  updateOrderState
}) => {
  const [orderState, setOrderState] = useState(state);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedState, setSelectedState] = useState(orderState);
  const {data, loading, error: errorFetch, get, put} = useFetch(API_URL)


  moment.locale("es", {
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
    }
  });

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleAccept = () => {
    try{
    const request ={
      state: selectedState
    }
    
    console.log("esto mando", request);
    put(`orders/${id}?apikey=${API_KEY}`, request)
    if(!errorFetch){
      console.log("se actualizo el estado")
      setOrderState(selectedState);
      setModalVisible(false);
      updateOrderState();

    }else{
      console.error("Error al actualizar el estado:", errorFetch);
    }
  }catch (error) {
    console.error("Error en la operación:", error);
  }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
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
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'cover',
            }} />
        </View>
        <View style={{
          flex: 1
        }}>
          <View style={{
            flexDirection: "row",
          }}>
            <StateTag stateText={state} />
          </View>
          <View>
            <Text style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "#333333",
            }}>{product}</Text>
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
                {code}
              </Text>
              <Text style={{
                fontSize: 10,
                color: "#333333",
                fontWeight: '300'
              }}>Code</Text>
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
                {customerId}
              </Text>
              <Text style={{
                fontSize: 10,
                color: "#333333",
                fontWeight: '300'
              }}>Cliente</Text>
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
                {total}
              </Text>
              <Text style={{
                fontSize: 10,
                color: "#333333",
                fontWeight: '300'
              }}>Total</Text>
            </View>
            {/* Resto de los datos */}
          </View>
        </View>

        {/* Modal de selección */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Cambiar Estado
      </Text>
              <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue) => setSelectedState(itemValue)}
              >
                <Picker.Item label="Pendiente" value="Pendiente" />
                <Picker.Item label="Enviado" value="Enviado" />
                <Picker.Item label="Entregado" value="Entregado"/>
              </Picker>
              <Button title="Aceptar" onPress={handleAccept} />
            </View>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  )
};


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
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
});

export default OrderCard;
