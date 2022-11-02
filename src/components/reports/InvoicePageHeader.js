import React from 'react';
import { View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../../src/assets/img/Logo company.jpg'
import img_header from '../../../src/assets/img/header_pattern.jpg'

const styles = StyleSheet.create({
    fixedheader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    headerBackground: {
        position: "absolute",
        left: 0,
        top: 0,
        height: 70,
        width: 550,
    },
    image: {
        height: 50
    },
});


const InvoicePageHeader = () => (
    <View style={styles.fixedheader} fixed>
        <Image style={styles.headerBackground}
            src={img_header}
        />
        <Image
            style={styles.image}
            src={logo}
        />
    </View>
);

export default InvoicePageHeader