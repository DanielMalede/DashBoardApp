export const ordersComingData = async () => {
  try {
    return await fetch("http://localhost:5000/ordersComing").then((res) =>
      res.json()
    );
  } catch (error) {
    console.log(error);
  }
};
