import Layout from "../../widgets/layouts/Loyaut";
import { CurrencyConverter } from "../../widgets/CurrencyConverter/CurrencyConverter";
import { Previu } from "../../shared/Previu/Previu";


export const HomePage = (): JSX.Element => {
  return (
    <Layout>
      <Previu />
      <CurrencyConverter />

    </Layout>
  );
};
