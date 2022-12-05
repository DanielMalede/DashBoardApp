export const financialSummaryData = async () => {
  try {
    return await fetch("http://localhost:5000/financialSummary").then((res) =>
      res.json()
    );
  } catch (error) {
    console.log(error);
  }
};
