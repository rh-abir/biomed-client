import React from 'react';

const SearchData = ({items}) => {
    const {companyName} = items;
    console.log(items);
    return (
        <div>
            <p>{companyName}</p>
        </div>
    );
};

export default SearchData;