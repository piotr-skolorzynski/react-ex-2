import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id="result">
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
      <tbody>
        {resultsData.map((yearData) => {
          const { year, interest, annualInvestment, valueEndOfYear } = yearData;
          const totalInterest =
            valueEndOfYear - annualInvestment * year - initialInvestment;

          const totalAmountInvested = valueEndOfYear - totalInterest;

          return (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
