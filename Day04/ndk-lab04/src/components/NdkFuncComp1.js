import React from 'react';

export default function NdkFuncComp1({ renderInfo }) {
    return (
        <div>
            <h2>Props is Object</h2>
            <p><b>Infor:</b></p>
            <p>Full Name: {renderInfo.fullName}</p>
            <p>Age: {renderInfo.age}</p>
            <p>Phone: {renderInfo.phone}</p>
        </div>
    );
}
