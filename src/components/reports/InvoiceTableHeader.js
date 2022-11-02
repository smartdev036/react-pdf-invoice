import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { TableRowStyle } from './TableRowStyle';

const borderColor = '#000000'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderColor: borderColor,
        borderWidth: 1,
        alignItems: 'center',
        height: 20,
        fontSize: 10,
        backgroundColor: "#DDD"
    },
});


const InvoiceTableHeader = () => {
    const rows =
        <View style={styles.row} key="0">
            <View style={TableRowStyle.index}>
                <Text>
                    No
                </Text>
            </View>
            <View style={TableRowStyle.firstname}>
                <Text>
                    Firstname
                </Text>
            </View>
            <View style={TableRowStyle.lastname}>
                <Text>
                    Lastname
                </Text>
            </View>
            <View style={TableRowStyle.nationality}>
                <Text>
                    Nationality
                </Text>
            </View>
            <View style={TableRowStyle.location}>
                <Text>
                    Location
                </Text>
            </View>
            {
                ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(item => (
                    <View style={TableRowStyle.week} key={item}>
                        <Text>
                            {(item)}
                        </Text>
                    </View>
                ))
            }
        </View>;
    return (<>{rows}</>)
};
export default InvoiceTableHeader