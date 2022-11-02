import React, { Component, Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import InvoicePage from './components/reports/Invoice'
import invoice from './data/invoice';
import './App.css';
import { Document } from "@react-pdf/renderer";

class App extends Component {
  render() {
    return (
        <Fragment>
            <PDFViewer width="1000" height="600" className="app" >
              <Document>
                <InvoicePage invoice={invoice} date='12.04.2022' filters={{property: "ID-value",value: "10"}}/>
                <InvoicePage invoice={invoice} date='08.11.1988'  filters={{property: "Nationality",value: "DOM"}}/>
                <InvoicePage invoice={invoice} date='05.08.2016' filters={{property: "Location",value: ['Ansbach','Dohren']}}/>
              </Document>
            </PDFViewer>
        </Fragment>
    );
  }
}

export default App;