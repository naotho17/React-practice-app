/*eslint-disable react-hooks/exhaustive-deps */

// 参考: https://chakra-ui.com/docs/theming/theme

import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, VFC, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickUserManagement = useCallback(
    () => history.push("/home/user_management"),
    []
  );
  const onClickSetting = useCallback(() => history.push("/home/setting"), []);
  const onClickLogout = useCallback(() => history.push("/home/logout"), []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          {/* ベースがmdサイズで、breakpointがmd以上になったらlgにする */}
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        {/* Linkはchakra-uiのもの */}
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Box pr={8}>
            <Link onClick={onClickSetting}>設定</Link>
          </Box>
          <Link onClick={onClickLogout}>ログアウト</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
        onClickLogout={onClickLogout}
      />
    </>
  );
});
