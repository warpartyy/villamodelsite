import OpenSeaIntegration from './OpenSeaIntegration';

import React from 'react';

const Fire: React.FC = () => {
  return (
    <div>
      <h1>NFT Page</h1>
      {/* Other content of the NFT page */}
      <OpenSeaIntegration /> {/* Include the OpenSeaIntegration component */}
    </div>
  );
};

export default Fire;
