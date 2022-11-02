import React from 'react';
import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import logo_locality from '../../../src/assets/img/logo locality.jpg'
import logo_handshake from '../../../src/assets/img/logo handshake.jpg'
import logo_focus from '../../../src/assets/img/logo focus.jpg'

const styles = StyleSheet.create({
    fixedfooterWrapper : {
        border: "1px solid red",
        position: 'absolute',
        fontSize: 12,
        bottom: 20,
        left: 25,
        right: 0,
        width: '100%',
      },
      horizonLine: {
        backgroundColor: '#000000',
        height: 2,
        width: "100%",
        margin: 0,
        position: "absolute",
      },
      fixedfooter:  {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 50,
        color: 'grey',  
        marginTop: "15"
      },
      footerItem: {
        flexDirection: 'column',
        alignItems: "center"
      },
      footerText: {
      }, 
      image_sm: {
        height: 32,
        width: 30,
        marginBottom: 10
      },
  
});


const InvoicePageFooter = () => (
    <View style={ styles.fixedfooterWrapper} fixed>
    <View style={styles.horizonLine}>      
    </View>
    <View style={styles.fixedfooter} >
      <View style={styles.footerItem}>
        <Image
          style={styles.image_sm}
          src={logo_locality}
        />
        <Text style={styles.footerText} >
          Schäringerstraße 3                
        </Text>
        <Text style={styles.footerText} >
          80634 München
        </Text>
      </View>
      <View style={styles.footerItem}>
        <Image
          style={styles.image_sm}
          src={logo_handshake}
          />
        <Text style={styles.footerText} >
         089 127 38 676
        </Text>
      </View>
      <View style={styles.footerItem}>
        <Image
          style={styles.image_sm}
          src={logo_focus}
          />
        <Text style={styles.footerText} >
          info@arrimo-digital.de               
        </Text>
      </View>
    </View>
  </View>
);

export default InvoicePageFooter