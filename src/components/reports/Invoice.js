import React from 'react';
import { Page, StyleSheet } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTitle'
import InvoiceNo from './InvoiceNo'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoicePageHeader from './InvoicePageHeader';
import InvoicePageFooter from './InvoicePageFooter';

const styles = StyleSheet.create({
    page: {
        paddingBottom: 120,
        paddingHorizontal: 25,
        fontSize: 11,
    }
});

const Invoice = ({ invoice, date, filters }) => {
    let items;
    if (!filters) {
        items = invoice.items;
    } else if (filters.property === 'ID-value') {
        items = invoice.items.filter(item => (Number(item.id) > Number(filters.value)));
    } else if (filters.property === 'Nationality') {
        items = invoice.items.filter(item => item.nationality === filters.value);
    } else if (filters.property === 'Location') {
        items = invoice.items.filter(item => filters.value.includes(item.location));
    }

    return (

        <Page size="A4" style={styles.page}>
            <InvoicePageHeader />

            <InvoiceTitle />
            <InvoiceNo date={date} invoice={invoice} />

            <InvoiceItemsTable items={items} />

            <InvoicePageFooter />
        </Page>
    );
}
export default Invoice