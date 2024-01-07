import applyCaseMiddleware from "axios-case-converter"; // HTTPヘッダーやオブジェクトのキーを指定されたケース（例: camelCaseやsnake_case）に変換するためのミドルウェア
import axios from "axios"; // HTTPリクエスト送ることができるのでこれを使用してpostやgetなどのメソッドが使用可能に。非同期通信のためのHTTPクライアントで、レスポンスの処理も可能。Promiseベースの非同期通信も可能。
// Promiseベースの非同期通信→ promiseは非同期処理を扱うためのJavaScriptのオブジェクトです。非同期操作が成功するか失敗するかを表現します。Promiseは通常、コールバック関数を使って非同期処理を扱うよりも、より直感的で効果的な手段として利用される。
// 詳しくはこれ→ https://gyazo.com/32e821b68c277e9930a9c847522ab213

// HTTPヘッダーのキーのケース変換が無視されます。
const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  // 特定の設定を持つ新しいaxiosのインスタンスを生成している。
  axios.create({
    baseURL: process.env.REACT_APP_API_DOMAIN, // baseURLはAPI叩く際のべースとなるやつで、これは.envに入れておくのだ。ルートディレクトリであるcalendar-web配下にな！axiosエラー404の正体は、.envが読み込めていなかったことが原因だ！あと.envに空白があったり、変更した際にサーバーの再起動をしないのも原因になる可能性がある！
  }),
  options
);

export default client;

// コールバック関数は高階関数の引数に関数を打ち込む、そのブチ込まれたやつがコールバック関数かな
// https://gyazo.com/a3718fe019927acddd9fc08be159f876
// https://chancodeblog.com/javascript-callback/#toc1
