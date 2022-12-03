export const productsData = async () => {
  try {
    return await fetch("http://localhost:5000/products").then((res) =>
      res.json()
    );
  } catch (error) {
    console.log(error);
  }
};
