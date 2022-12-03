export const infoPagesData = async () => {
  try {
    return await fetch("http://localhost:5000/infoPages").then((res) =>
      res.json()
    );
  } catch (error) {
    console.log(error);
  }
};
