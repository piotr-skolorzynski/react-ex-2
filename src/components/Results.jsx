import { calculateInvestmentResults } from "../util/investment";

const Results = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  return <div>Results...</div>;
};

export default Results;
