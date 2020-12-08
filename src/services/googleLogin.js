import axios from 'axios';

const googleLogin = async (accesstoken) => {
    let res = await axios.post(
      `${process.env.REACT_APP_LOGIN_URL}`,
      {
        access_token: accesstoken,
      }
    );
    // console.log(res)
    return await res;
  };

export default googleLogin;