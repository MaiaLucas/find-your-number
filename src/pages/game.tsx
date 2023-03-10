import Button from "@components/Button";
import InfoText from "@components/InfoText";
import PageHeader from "@components/PageHeader";
import { Box, Stack } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useMemo } from "react";
import { CARDS, CARDS_STEPS } from "src/constants";
import styles from "../styles/Home.module.css";

export default function Game() {
  const router = useRouter();
  const [currentCard, setCurrentCard] = useState<CARDS_STEPS>(1);
  const [findNumber, setFindNumber] = useState<number>(0);

  const renderCards = useMemo(() => {
    return CARDS[currentCard]?.map((item) => {
      return (
        <Box key={item} p={1} border={"1px solid #ccc"}>
          <InfoText text={item.toString()} variant="h6" />
        </Box>
      );
    });
  }, [currentCard]);

  const handleChange = useCallback(
    (hasNumber: boolean = false) => {
      if (hasNumber) setFindNumber((curValue) => curValue + currentCard);

      setCurrentCard((curValue) => (curValue * 2) as CARDS_STEPS);
    },
    [currentCard]
  );

  useMemo(() => {
    if (currentCard > 32) {
      router.push(`/result/${findNumber}`);
    }
  }, [currentCard, findNumber, router]);

  return (
    <>
      <Head>
        <title>Jogo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className={styles.main} px={2}>
        <PageHeader title="Seu número está aqui?" />
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          maxWidth={420}
          width="100%"
        >
          {renderCards}
        </Box>

        <Stack
          direction={"row"}
          gap={2}
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            text="Sim"
            onClick={() => {
              handleChange(true);
            }}
          />
          <Button
            text="Não"
            variant="outlined"
            color="error"
            onClick={() => {
              handleChange();
            }}
          />
        </Stack>
      </Box>
    </>
  );
}
