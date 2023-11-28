import axios from 'axios';

export const Login = async ({ username, password }) => {

    if (username && password) {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: import.meta.env.VITE_LOGIN_API_KEY + 'login',
            data: {
                "email": username,
                "password": password,
            },
        }


        const dataresponse = await axios.request(config)
            .then(async (response) => {

                const { is_successful, is_user_exists, last_id, username, role } = response.data;

                if (is_successful == true && is_user_exists == true ) {  //&& role == 'admin'
                    return {
                        "success": true,
                        "message": "Logged In",
                        "last_id": last_id,
                        "name" : username,
                    }
                }
                else if (is_successful == true && is_user_exists == false) {
                    return {
                        "success": false,
                        "message": "User Not Found",
                    }
                }
                else {
                    return {
                        "success": false,
                        "message": "User Not Found",
                    }
                }


            })
            .catch((error) => {
                if (error) {

                    return {
                        "success": false,
                        "message": 'User Not Found',
                    }

                }
            });

        return dataresponse;
    }else{
        return {
            success : false,
            message: 'Invalid Credentials',
        }
    }

}