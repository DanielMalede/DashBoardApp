import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { categoryData } from "../services/categoryService";
import { productsData } from "../services/productsService";
import { ordersData } from "../services/ordersService";
import { infoPagesData } from "../services/infoPagesService";
import { classesData } from "../services/classesService";

export const dataContext = createContext();

export const useDataContext = () => {
  return useContext(dataContext);
};
export const DataContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [infoPages, setInfoPages] = useState([]);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    categoryData().then((res) => setCategory(res.message));
    productsData().then((res) => setProducts(res.message));
    ordersData().then((res) => setOrders(res.message));
    infoPagesData().then((res) => setInfoPages(res.message));
    classesData().then(res=>setClasses(res.message))
  }, []);
  console.log();
  return (
    <dataContext.Provider
      value={{ category, products, orders, infoPages, classes }}
    >
      {children}
    </dataContext.Provider>
  );
};
