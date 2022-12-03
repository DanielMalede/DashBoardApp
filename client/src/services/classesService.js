export const classesData = async () => {
  try {
    return await fetch("http://localhost:5000/classes").then((res) =>
      res.json()
    );
  } catch (error) {
    console.log(error);
  }
};
