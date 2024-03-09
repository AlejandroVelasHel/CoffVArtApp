import {Text, View, StyleSheet} from "react-native";

import {statesTable} from "../utils/stateTable";

export const StateTag = ({stateText}) => {
    const styles = StyleSheet.create({
        general: {
            paddingHorizontal: 10,
            paddingVertical: 2,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: 12,
            letterSpacing: 1,
            textAlign: "center",
        },
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

    const stylesConditional = (state) => {
        if(statesTable.green.includes(state?.toUpperCase())) {
            return styles.green
        }else if(statesTable.blue.includes(state?.toUpperCase())) {
            return styles.blue
        }else if(statesTable.red.includes(state?.toUpperCase())) {
            return styles.red
        }else if(statesTable.orange.includes(state?.toUpperCase())) {
            return styles.orange
        }
    }
    return (
        <View>
            <Text style={{
                ...styles.general,
                ...stylesConditional(stateText),
            }}>
                {stateText}
            </Text>
        </View>
    )
}