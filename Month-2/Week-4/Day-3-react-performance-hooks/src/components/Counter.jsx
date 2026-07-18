import React from "react";

const Counter = ({ count, increment }) => {
    console.log("Counter Component Rendered");

    return (
        <div>
            <h2>Counter</h2>

            <p>Current Count: {count}</p>

            <button onClick={increment}>
                Increment
            </button>
        </div>
    );
};

export default React.memo(Counter);