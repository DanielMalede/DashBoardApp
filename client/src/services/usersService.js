export const usersData = async () => {
  try {
    return await fetch("http://localhost:5000/users").then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
};
