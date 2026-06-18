function ResultCard({ fahrenheit }) {

    return (
        <div className="result-card">

            <h2>Converted Temperature</h2>

            <h1>{fahrenheit} °F</h1>

        </div>
    );
}

export default ResultCard;