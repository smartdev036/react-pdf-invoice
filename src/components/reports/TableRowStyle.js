import { StyleSheet } from "@react-pdf/renderer";

const borderColor = '#000000'
export const TableRowStyle = StyleSheet.create({
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
    index: {
        width: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
        borderColor: borderColor,
        borderRight: 1,
    },

    firstname: {
        width: '13%',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        textAlign: 'left',
        borderColor: borderColor,
        borderRight: 1,
        paddingLeft: 8
    },
    lastname: {
        width: '13%',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        textAlign: 'left',
        borderColor: borderColor,
        borderRight: 1,
        paddingLeft: 8
    },
    nationality: {
        width: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        textAlign: 'left',
        borderColor: borderColor,
        borderRight: 1,
        paddingLeft: 8
    },
    location: {
        width: '19%',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        textAlign: 'left',
        borderColor: borderColor,
        paddingLeft: 8,
        borderRight: 1,
    },
    week: {
        width: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
        borderColor: borderColor,
        borderRight: 1,
    },
});

