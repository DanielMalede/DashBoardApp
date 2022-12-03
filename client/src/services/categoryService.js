export const categoryData = async () => {
  try {
    return await fetch("http://localhost:5000/category").then((res) =>
      res.json()
    );
  } catch (error) {
    console.log(error);
  }
};
