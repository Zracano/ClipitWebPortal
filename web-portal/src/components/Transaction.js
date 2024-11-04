// src/components/Transaction.js
import React, { useState, useEffect } from 'react';

const Transaction = ({ transaction }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    console.log("Transaction isExpanded state updated:", isExpanded);
    console.log("Transaction data:", transaction);
  }, [isExpanded, transaction]);

  return (
    <div style={{ marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px', padding: '10px' }}>
      <div 
        style={{ cursor: 'pointer', backgroundColor: '#e8e8e8', padding: '8px', borderRadius: '8px' }}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <p><strong>Transaction Type:</strong> {transaction.type}</p>
        <p><strong>Created By:</strong> {transaction.createdBy}</p>
        <p><strong>Total Budget:</strong> {transaction.totalBudget}</p>
      </div>
      {isExpanded && (
        <div style={{ marginTop: '10px', paddingLeft: '10px' }}>
          <p><strong>Beginning:</strong> {transaction.beginning}</p>
          <p><strong>Created Timestamp:</strong> {transaction.createdTimestamp}</p>
          <p><strong>Email:</strong> {transaction.email}</p>
          <p><strong>Discounts:</strong></p>
          <ul>
            <li><strong>Bronze:</strong> {transaction.discountBronze}</li>
            <li><strong>Silver:</strong> {transaction.discountSilver}</li>
            <li><strong>Gold:</strong> {transaction.discountGold}</li>
            <li><strong>Free:</strong> {transaction.discountFree}</li>
          </ul>
          <p><strong>Primary Purchase EANs:</strong> {transaction.primary_purchase_eans}</p>
          <p><strong>Primary Purchase GTINs:</strong> {transaction.primary_purchase_gtins}</p>
          <p><strong>Primary Purchase Requirements:</strong> {transaction.primary_purchase_requirements}</p>
          <p><strong>Sender:</strong> {transaction.sender}</p>
          <p><strong>Receiver:</strong> {transaction.receiver}</p>
          <p><strong>Secret:</strong> {transaction.test1}</p>
        </div>
      )}
    </div>
  );
};

export default Transaction;
