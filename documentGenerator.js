// backend/src/utils/documentGenerator.js
const PDFDocument = require('pdfkit');
const fs = require('fs');

class DocumentGenerator {
  generateExportInvoice(data) {
    const doc = new PDFDocument();
    const fileName = `export_invoice_${Date.now()}.pdf`;
    const filePath = `./invoices/${fileName}`;

    doc.pipe(fs.createWriteStream(filePath));

    // Document Header
    doc.fontSize(20).text('Export Commercial Invoice', { align: 'center' });
    doc.moveDown();

    // Seller Details
    doc.fontSize(12)
       .text(`Seller: ${data.sellerName}`)
       .text(`Address: ${data.sellerAddress}`);

    // Buyer Details
    doc.text(`Buyer: ${data.buyerName}`)
       .text(`Destination: ${data.destinationCountry}`);

    // Line Items
    doc.moveDown();
    doc.text('Item Details:', { underline: true });
    data.items.forEach(item => {
      doc.text(`${item.name} - Qty: ${item.quantity} - Price: $${item.price}`);
    });

    // Totals
    doc.moveDown();
    doc.text(`Total Value: $${data.totalValue}`);
    doc.text(`Export Duties: $${data.exportDuties}`);

    doc.end();
    return fileName;
  }
}

module.exports = new DocumentGenerator();