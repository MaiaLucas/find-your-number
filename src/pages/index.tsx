import Head from "next/head";
import styles from "../styles/Home.module.css";
import PageHeader from "@components/PageHeader";
import InfoText from "@components/InfoText";
import Button from "@components/Button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PageHeader title="Pense em um número entre 1 e 63" />
        <InfoText
          variant="h6"
          text="Que eu vou advinhar o número que você está pensando."
        />
        <Button
          text="Começar"
          onClick={() => {
            router.push("/game");
          }}
        />
      </main>
    </>
  );
}