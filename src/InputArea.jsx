export default function InputArea({ handleInputChange }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label >Initial Investment</label>
                    <input type="number" onChange={handleInputChange} name="initialInvestment"></input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" onChange={handleInputChange} name="annualInvestment"></input>
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" onChange={handleInputChange} name="expectedReturn"></input>
                </p>
                <p>
                    <label>Duration (Years)</label>
                    <input type="number" onChange={handleInputChange} name="duration"></input>
                </p>
            </div>
        </section>
    )
}