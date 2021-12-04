import { ChangeEvent, memo, useState, VFC } from "react";
import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();
  const [userID, setUserID] = useState("");

  // テキストボックスのイベントの型指定は以下のように暗記で覚える
  const onChangeUserID = (e: ChangeEvent<HTMLInputElement>) =>
    setUserID(e.target.value);

  const onClickLogin = () => login(userID);

  return (
    <Flex align="center" justify="center" height="100vh">
      {/* 以下でカードっぽいデザインになるよ */}
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>

        {/* Deviderを使えばmarginのy軸を4pxずつ開けてくれる */}
        <Divider my={4} />

        <Stack spacing={5} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userID}
            onChange={onChangeUserID}
          />
          <PrimaryButton
            // userIDが空だったらdisabledを発動する
            disabled={userID === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
