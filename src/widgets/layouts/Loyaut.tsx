import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../../features/Header/Header";
import { useMediaQuery } from "@react-hook/media-query";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const matches = useMediaQuery("(min-width: 767px)");
  const [widht, setWidht] = useState(matches);

  useEffect(() => {
    window.addEventListener("resize", () => {
      return setWidht(matches);
    });
  }, [matches]);
  return (
    <div className="wrapper">
      <Head>
        <title>Золотая точка</title>
        <meta name="description" content="Меняем волюты выгодно." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header widhtWindows={widht} />
      <main className="container">{children}</main>
      <footer className="footer">© 2022 DmitryBryncev.</footer>
    </div>
  );
}
