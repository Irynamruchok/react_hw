import React from 'react';
import SubChildOneOne from "../SubChildOneOne/SubChildOneOne";
import SubChildOneTwo from "../SubChildOneTwo/SubChildOneTwo";
const ChildOne = () => {
    return (
        <div>
           <SubChildOneOne/>
           <SubChildOneTwo />
        </div>
    );
};

export default ChildOne;