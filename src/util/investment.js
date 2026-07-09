export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = Number(initialInvestment);

  for (let i = 0; i < Number(duration); i++) {
    let investedCapital = Number(initialInvestment) + Number(annualInvestment) + (i * Number(annualInvestment))
    const interestEarnedInYear = investmentValue * (Number(expectedReturn) / 100);
    investmentValue += interestEarnedInYear + Number(annualInvestment);
    let totalInterest;
    if (i == 0) totalInterest = interestEarnedInYear;
    else {
      totalInterest = annualData[i - 1].totalInterest + interestEarnedInYear;
    }
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      totalInterest: totalInterest,
      investedCapital: investedCapital,
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
