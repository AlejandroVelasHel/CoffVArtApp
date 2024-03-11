import {View, Text, Image, StyleSheet} from "react-native";
import {StateTag} from "./StateTag";
import moment from "moment";
import { statesTable } from "../utils/stateTable";

export const TestComponentCard = ({
                                      supply,
                                      quantity,
                                      company,
                                      process,
                                      date,
                                      number
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
        }
        
    })
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
    })
    const stylesConditional = (process) => {
        if(statesTable.blue.includes(process?.toUpperCase())) {
            return styles.blue;
        } else if(statesTable.green.includes(process?.toUpperCase())) {
            return styles.green;
        } else if(statesTable.red.includes(process?.toUpperCase())) {
            return styles.red;
        } else if(statesTable.orange.includes(process?.toUpperCase())) {
            return styles.orange;
        }
    }
    
    return (
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
        </View>

    )

}
