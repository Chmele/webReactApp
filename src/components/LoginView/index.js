import React from "react";
import GoogleLogin from "react-google-login";
import googleLogin from "../../services/googleLogin";
import { useState } from "react";
import axios from 'axios';


export default () => {
    const[resp, setResp] = useState({});

    const responseGoogle = async(response) => {
        // setProfile(response.profileObj);
        let googleResponse  = await googleLogin(response.accessToken)
        await setResp(response)
        // console.log(response.accessToken);
        // console.log(googleResponse);
        // console.log(profile);
        // localStorage.setItem('Token', response.accessToken);
        localStorage.setItem('Token', googleResponse.data.key);
        // console.log(response);
        // let token = await axios.post(
        //     `${process.env.REACT_APP_LOGIN_URL}`,
        //     {
        //       access_token: accesstoken,
        //     }
        //   );
    }
    return (
        <div>
            <GoogleLogin
                clientId="794012202704-7lef6jths2l69c4rni8sdh9uc8oetjbl.apps.googleusercontent.com"
                buttonText="Google login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        </div>
    );
}