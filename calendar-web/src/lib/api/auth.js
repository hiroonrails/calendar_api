import Cookies from 'js-cookie';
import client from './client'; // さっき定義した ./client.jsのインポート

export const signUp = (params) => {
  console.log(process.env.REACT_APP_API_DOMAIN);
  return client.post('auth', params);
};

export const SignIn = (params) => {
  return client.post('auth/sign_in', params);
};

export const getUser = () => {
    console.log(Cookies.get('_access_token'))
    if (
        !Cookies.get('_access_token') ||
        !Cookies.get('_client') ||
        !Cookies.get('_uid')
    )
      return;
    return client.get('auth/sessions',{
        headers: {
            'access_token': Cookies.get('_access_token'),
            'client': Cookies.get('_client'),
            'uid': Cookies.get('_uid')
        },
    });
};
