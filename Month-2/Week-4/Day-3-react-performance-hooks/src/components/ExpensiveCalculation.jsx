import { useMemo } from "react";

const ExpensiveCalculation = ({ number }) => {

    const squared = useMemo(() => {

        console.log("Calculating Square...");

        let result = 0;

        // Simulating an expensive calculation
        for (let i = 0; i < 100000000; i++) {
            result = number * number;
        }

        return result;

    }, [number]);

    return (
        <div>
            <h2>Expensive Calculation</h2>

            <p>Number: {number}</p>

            <p>Square: {squared}</p>
        </div>
    );
};

export default ExpensiveCalculation;