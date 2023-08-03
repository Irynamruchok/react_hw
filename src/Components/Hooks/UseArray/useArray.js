import {useState} from "react";
const UseArray = (defaultValue) => {
    const [array, setArray] = useState(defaultValue)

    const add = (item)=> {
      setArray((prevArray)=> [...prevArray, item])
    }
    const remove = (id) => {
      setArray((prevArray)=> prevArray.filter((item,index) => index !==id))
    }
    return {
        array,
        add,
        remove
    }
};

export default UseArray;