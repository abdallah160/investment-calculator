import { formatter } from "./util/investment";
import { calculateInvestmentResults } from "./util/investment";
export default function Result({ fullInput }) {
    let answersArray = calculateInvestmentResults(fullInput);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th className="left">Year</th>
                    <th className="left">Investment Value</th>
                    <th className="left">Interest (Year)</th>
                    <th className="left">Total Interest</th>
                    <th className="left">Investment Capital</th>
                </tr>

            </thead>
            <tbody>
                {
                    answersArray.map((item) => (
                        <tr key={item.year}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>{formatter.format(item.totalInterest)}</td>
                            <td>{formatter.format(item.investedCapital)}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}