// MyComponent.tsx

import React from 'react';
import { contractInfo } from './contractinfoVM'; // Import contract information from contractinfoVM.ts

const MyComponent: React.FC = () => {
    // Access contract information
    const { address, abi } = contractInfo;

    // Component logic here
    return (
        <div>
            {/* JSX content here */}
        </div>
    );
};

export default MyComponent;
