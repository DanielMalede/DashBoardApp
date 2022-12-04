import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { categoryData } from "../services/categoryService";
import { productsData } from "../services/productsService";
import { ordersData } from "../services/ordersService";
import { infoPagesData } from "../services/infoPagesService";
import { classesData } from "../services/classesService";
import { financialSummaryData } from "../services/financialSummaryService";

export const dataContext = createContext();

export const useDataContext = () => {
  return useContext(dataContext);
};
export const DataContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [infoPages, setInfoPages] = useState([]);
  const [financialSummary, setFinancialSummaryData] = useState([]);
  useEffect(() => {
    productsData().then((res) => setProducts(res.message));
    ordersData().then((res) => setOrders(res.message));
    infoPagesData().then((res) => setInfoPages(res.message));
    financialSummaryData().then((res) => setFinancialSummaryData(res.message));
  }, []);
  return (
    <dataContext.Provider value={{ products, orders, infoPages ,financialSummary}}>
      {children}
    </dataContext.Provider>
  );
};
