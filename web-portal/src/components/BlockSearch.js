// src/components/BlockSearch.js
import React, { useState } from 'react';
import Block from './Block';

const BlockSearch = ({ apiKey }) => {
  const [searchBlockHash, setSearchBlockHash] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [currentBlockHash, setCurrentBlockHash] = useState('');

  const handleSearch = () => {
    setSearchLoading(true);
    setSearchError('');
    setCurrentBlockHash(searchBlockHash);
    setSearchLoading(false);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter Block Hash to Search"
        value={searchBlockHash}
        onChange={(e) => setSearchBlockHash(e.target.value)}
        style={{ padding: '10px', width: '70%', marginRight: '10px' }}
      />
      <button onClick={handleSearch} style={{ padding: '10px' }}>Search</button>
      {searchLoading ? (
        <p>Loading block data...</p>
      ) : searchError ? (
        <p>{searchError}</p>
      ) : currentBlockHash ? (
        <Block blockKey={currentBlockHash} apiKey={apiKey} />
      ) : null}
    </div>
  );
};

export default BlockSearch;
