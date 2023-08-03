import React, {useCallback, useMemo, useState} from 'react';
import TestUseCallback from "../TestUseCallback/TestUseCallback";

const TestUseMemo = ({data,setData,number,setNumber}) => {
    const [users, setUsers] = useState([])

    const handleChangeData = () =>{
        setData((prevData) => prevData + 1)
    }

    const handleChangeNumber = ()=> {
        setNumber((prevNumber) => prevNumber +1)
    }

    const computeData = useMemo(() => {
        console.log("Expensive computation...");
        let result = 0
        for (let i = 1; i <= data; i++) {
        result += i
        }
        return result
    }, [data])
    const computeNumber = useMemo(() => {
        console.log("Number computation...")
        let result = 0
        for (let i = 0; i <=number ; i++) {
            result +=1
        }
        return result
    },[number])

    const addUser = useCallback(()=>{
        setUsers([...users,'New User'])
    },[users])
    return (
        <div >
            <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
            <div>
                <p> Data: {data}</p>
                <p> Computed Data: {computeData}</p>
                <button style={{width:'150px', height:'30px'}} onClick={handleChangeData}> Increase Data</button>
            </div>
            <div>
                <p> Number: {number}</p>
                <p> Compute Number: {computeNumber}</p>
                <button style={{width:'150px', height:'30px'}} onClick={handleChangeNumber}> Increase Number</button>
            </div>
            </div>
            <TestUseCallback users={users} addUser={addUser}/>
        </div>
    );
};

export default TestUseMemo;