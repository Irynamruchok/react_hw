import React, {useState} from 'react';
const UseToggle = (defaultValue = false) => {
    const [value, setValue] = useState(defaultValue)
    const toggle = () => {
        setValue((prevValue)=> !prevValue)
    }
    return [value, toggle]
};

export default UseToggle;