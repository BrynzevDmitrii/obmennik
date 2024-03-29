import Layout from "../../widgets/layouts/Loyaut";
import { CurrencyConverter } from "../../widgets/CurrencyConverter/CurrencyConverter";
import { Previu } from "../../shared/Previu/Previu";
import { ResultCalculateForm } from "../../features/CalculateForm/ResultCalculateForm/ResultCalculateForm";
import { ListCurrencyToday } from "../../widgets/ListValueToday/ListValueToday";
import { useEffect } from "react";
import { fetchList } from "../../shared/ListToday/redux/currentListSlice";
import { useAppDispatch } from "../../hook";


export const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchList());
  }, []);

  return (
    <Layout>
      <Previu />
      <ListCurrencyToday />
      <CurrencyConverter />
      

    </Layout>
  );
};
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

