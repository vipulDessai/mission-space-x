import React, { useState } from 'react';

export function App() {
    const [data, setData] = useState([{name: "falcon1"}])
    const getData = () => {
        setData([{name: "opera x"}]);
    }
    return (
        <>
            <button onClick={getData}>Data</button>
            <div>
                {
                    data.map((rocket, index) => <p key={index}>{rocket.name}</p>)
                }
            </div>
        </>
    );
}