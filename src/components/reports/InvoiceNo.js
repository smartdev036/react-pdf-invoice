import React, {  } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontSize: 11,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 20,
    },
    invoiceDate: {
        fontSize: 12,
        fontStyle: 'bold',
        marginBottom: 30,
    },
    invoiceNoContainer: {
        fontSize: 10,
        marginLeft: 20, 
        marginTop: 30,  
    },
    greetings: {
        fontSize: 10,
        marginTop: 15,
        marginBottom: 15
    }, 
    greetingsDetail: {
        fontSize: 10,
        marginTop: 2,
    }
  });


  const InvoiceNo = ({invoice, date}) => (
        <>
            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Date: </Text>
                <Text >{date}</Text>
            </View >
            <View style={styles.invoiceNoContainer}>
                <Text style={styles.invoiceDate}>{`Subject: Staff availibility at ${new Date(date).getMonth()}/${new Date(date).getFullYear()}`}</Text>
                <Text style={styles.greetings}>
                    Dear Disciples München-Haar,
                </Text>
                <Text style={styles.greetingsDetail}>
                    Hearby I inform you about the availibity of our staff by location and nationality for the current week
                </Text>
                <Text style={styles.greetingsDetail}>
                    If you are interested in getting in touch with us, feel free to contact us. 
                </Text>
                <Text style={styles.greetingsDetail}>
                    {invoice.company} is looking forward to support your event    
                </Text>
                <Text style={styles.greetings}>
                    With best regards,  
                </Text>
                <Text style={styles.greetings}>
                    Tom Schlepp
                </Text>
            </View >
        </>
  );
  
  export default InvoiceNo