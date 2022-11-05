import Layout from "../../layouts/Loyaut";
import { CurrencyConverter } from "./CurrencyConverter/CurrencyConverter";
import { Previu } from "./Previu/Previu";


export const HomePage = (): JSX.Element => {
  return (
    <Layout>
      <Previu />
      <CurrencyConverter />
      
    </Layout>
  );
};
