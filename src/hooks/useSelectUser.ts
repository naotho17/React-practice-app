// こいつでやりたいこと
// ①ユーザーがクリックされたときにidからユーザーを取得する
// ②一致したユーザーの情報を返す 　というロジック

import { useCallback, useState } from "react";

import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users } = props;
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser);
  }, []);

  return { onSelectUser, selectedUser };
};
