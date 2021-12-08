/*eslint-disable react-hooks/exhaustive-deps */
import { Flex, Link } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { memo, useCallback, useEffect, VFC } from "react";

import { useMessage } from "../../hooks/useMessage";

export const Logout: VFC = memo(() => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const onClicktoLoginPage = useCallback(() => history.push("/"), []);

  useEffect(
    () => showMessage({ title: "ログアウトしました", status: "success" }),
    []
  );

  return (
    <Flex align="center" justify="center">
      <Link onClick={onClicktoLoginPage} mt={10} color="blue.600">
        ログインはこちら
      </Link>
    </Flex>
  );
});
