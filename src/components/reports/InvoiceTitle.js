import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'column',
        marginTop: 24,
    },
    breadcrumb:{
        textAlign: 'left',
        fontSize: "9",
        paddingLeft: 20,
        paddingTop:30,
    },
    addresstitle:{
        textAlign: 'left',
        fontSize: 11,
        paddingLeft: 20,
        paddingTop:20,
        fontWeight: 'bold',
        marginBottom:10
    },
    addressdetail:{
        textAlign: 'left',
        fontSize: 10,
        paddingLeft: 20,
    },

  });


  const InvoiceTitle = ({title}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.breadcrumb}>{'Tom Schlepp - Schäringerstraße 3 - 80634 München'}</Text>
        <Text style={styles.addresstitle}>{'Disciples München-Haar'}</Text>
        <Text style={styles.addressdetail}>{'Sarah Enstone'}</Text>
        <Text style={styles.addressdetail}>{'Keferloherstraße 24'}</Text>
        <Text style={styles.addressdetail}>{'85540 Haar'}</Text>
    </View>
  );
  
  export default InvoiceTitle