// ここでreact-router-domからLinkを導入している。
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// 下記でchakra UIから便利なUIを得ている。
import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  Button,
  Link as CLink,
} from "@chakra-ui/react";
import { SignIn, getUser } from "./lib/api/auth.js";
import Cookies from "js-cookie";

// アロー関数のAppを作成し中にはreturnで画面描写できるようにしている。
const App = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await SignIn({ email, password });
      Cookies.set("_access_token", res.headers["access-token"]);
      Cookies.set("_client", res.headers["client"]);
      Cookies.set("_uid", res.headers["uid"]);
      navigate("calendar");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const f = async () => {
      try {
        const res = await getUser();
	    if (res.data.isLogin) {
          navigate("calendar");
        }
      } catch (e) {
        console.log(e);
      }
    };
    f();
  }, [navigate]);

  return(
    <Flex h={"100vh"}>
      {/* 画像 */}
      <Flex
        w="50%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Image w="400px" src="calendar.svg" />
        <Text fontSize="32px" color="blue.500" fontWeight="bold">
          Googleカレンダークローンアプリ
        </Text>
      </Flex>
  
      {/* フォーム */}
      <Flex
        w="50%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box w="400px">
          {/* color="gray.700"　これは色素が濃いほど900とか上になる。 */}
          <Text fontSize="24px" color="gray.700" fontWeight="bold" mb="24px">
            ログインページ
          </Text>
          <Input 
            placeholder="メールアドレス"
            mb="16px" 
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
          <Input 
            placeholder="パスワード"
            mb="16px"
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
          <Button w="400px" colorScheme="blue" mb="8px" onClick={login}>
            ログインする
          </Button>
          <Box textAlign="right">
            <CLink color="blue.500">
              <Link to="signUp">ユーザー登録はこちら</Link>
            </CLink>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

// ほんでここで上で定義したAppを放出しているような感覚。
export default App;