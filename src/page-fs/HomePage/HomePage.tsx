import Layout from "../../widgets/layouts/Loyaut";
import { CurrencyConverter } from "../../widgets/CurrencyConverter/CurrencyConverter";
import { Previu } from "../../shared/Previu/Previu";
import { ResultCalculateForm } from "../../features/CalculateForm/ResultCalculateForm/ResultCalculateForm";
import { ListCurrencyToday } from "../../widgets/ListValueToday/ListValueToday";


export const HomePage = (): JSX.Element => {
  return (
    <Layout>
      <Previu />
      <ListCurrencyToday />
      <CurrencyConverter />
      

    </Layout>
  );
};
