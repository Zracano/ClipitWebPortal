// src/components/Block.js
import React, { useState, useEffect } from 'react';
import Transaction from './Transaction';

const Block = ({ blockKey, transactions, apiKey }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [blockData, setBlockData] = useState(null);
  const [loadingBlock, setLoadingBlock] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlockData = async () => {
      if (isExpanded && !blockData) {
        setLoadingBlock(true);
        try {
          const url = `https://blockchain-4ltwjgjl.uc.gateway.dev/get_block?block_hash=${blockKey}`;

          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'x-api-key': apiKey,
            },
          });

          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }

          const data = await response.json();
          setBlockData(data);
        } catch (error) {
          console.error('Error fetching block data:', error);
          setError('Failed to fetch block data.');
        } finally {
          setLoadingBlock(false);
        }
      }
    };

    fetchBlockData();
  }, [isExpanded, blockKey, blockData, apiKey]);

  return (
    <div style={{ marginBottom: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '15px' }}>
      <div 
        style={{ cursor: 'pointer', marginBottom: '10px', backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '8px' }}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <h3>Block Identifier: {blockKey}</h3>
      </div>
      {isExpanded && (
        <div>
          {loadingBlock ? (
            <p>Loading block data...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div>
              <h4>Transactions:</h4>
              {Array.isArray(blockData?.transactions) ? (
                blockData.transactions.map((transaction, idx) => (
                  <Transaction key={idx} transaction={transaction} />
                ))
              ) : (
                <p>{transactions}</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Block;