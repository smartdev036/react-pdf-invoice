import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { TableRowStyle } from './TableRowStyle';

const borderColor = '#00000'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
        borderLeftColor: borderColor,
        borderLeftWidth: 1,
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 20,
        fontSize: 9,
    },
});


const InvoiceTableRow = ({ items }) => {
    if (!items) return null;
    const rows = items.map((item, index) =>
        <View style={styles.row} key={item.id.toString()}>
            <View style={TableRowStyle.index}>
                <Text>
                    {index + 1}
                </Text>
            </View>
            <View style={TableRowStyle.firstname}>
                <Text>
                    {item.firstname}
                </Text>
            </View>
            <View style={TableRowStyle.lastname}>
                <Text>
                    {item.lastname}
                </Text>
            </View>
            <View style={TableRowStyle.nationality}>
                <Text>
                    {item.nationality}
                </Text>
            </View>
            <View style={TableRowStyle.location}>
                <Text>
                    {(item.location)}
                </Text>
            </View>
            {
                item.avilability.map((item, index) => (
                    <View style={TableRowStyle.week} key={index}>
                        <Text>
                            {(item)}
                        </Text>
                    </View>
                ))
            }
        </View>
    )
    return (<Fragment>{rows}</Fragment>)
};

export default InvoiceTableRow