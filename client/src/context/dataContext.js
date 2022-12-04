import { createContext, useContext, useEffect, useState } from "react";
import { productsData } from "../services/productsService";
import { ordersData } from "../services/ordersService";
import { infoPagesData } from "../services/infoPagesService";
import { financialSummaryData } from "../services/financialSummaryService";
import { usersData } from "../services/usersService";

export const dataContext = createContext();

export const useDataContext = () => {
  return useContext(dataContext);
};
export const DataContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [infoPages, setInfoPages] = useState([]);
  const [financialSummary, setFinancialSummaryData] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    productsData().then((res) => setProducts(res.message));
    ordersData().then((res) => setOrders(res.message));
    infoPagesData().then((res) => setInfoPages(res.message));
    financialSummaryData().then((res) => setFinancialSummaryData(res.message));
    usersData().then((res) => setUsers(res.message));
  }, []);
  return (
    <dataContext.Provider
      value={{ products, orders, infoPages, financialSummary,users }}>
      {children}
    </dataContext.Provider>
  );
};
