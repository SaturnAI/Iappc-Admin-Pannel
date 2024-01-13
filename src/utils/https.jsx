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

                const { is_successful, is_user_exists, last_id, username, role, refresh_token, customer_id } = response.data;

                if (is_successful == true && is_user_exists == true && role == 'admin') {
                    return {
                        "success": true,
                        "message": "Logged In",
                        "last_id": last_id,
                        "name": username,
                        "refresh_token": refresh_token,
                        "customer_id": customer_id,
                        "role": role,
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
    } else {
        return {
            success: false,
            message: 'Invalid Credentials',
        }
    }

}

export const SignUp = async ({ first_name, last_name, email, password, setRoleForAddCust, SaleOrder, Enquiry }) => {



    if (first_name && last_name && email && password && setRoleForAddCust ) {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: import.meta.env.VITE_LOGIN_API_KEY + 'signup',
            data: {
                "first_name": first_name,
                "last_name": last_name,
                "email": email,
                "password": password,
                "role": setRoleForAddCust,
                "is_enquiry": Enquiry,
                "is_sales_order": SaleOrder,

            },
        }

        const dataresponse = await axios.request(config)
            .then(async (response) => {

                const { is_successful, is_user_exists, error } = response.data;

                if (is_successful == true && is_user_exists == true) {
                    return {
                        "success": true,
                        "message": "User already exists",
                    }
                }
                else if (is_successful == true) {
                    return {
                        "success": true,
                        "message": "User Created",
                    }
                }
                else {
                    return {
                        "success": false,
                        "message": "error",
                    }
                }


            })
            .catch((error) => {
                if (error) {

                    return {
                        "success": false,
                        "message": error,
                    }

                }
            });

        return dataresponse;
    } else {
        return {
            success: false,
            message: 'Invalid Credentials',
        }
    }

}

export const getUser = async (token, email) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: import.meta.env.VITE_LOGIN_API_KEY + 'get_access_token',
        data: {
            "email": email,
            "refresh_token": token
        },
    }

    const dataresponse = await axios.request(config)
        .then((response) => {
            const { is_expired, is_successful, jwt_token } = response.data;
            if (!is_expired && is_successful) {
                return {
                    success: true,
                    jwtToken: jwt_token,
                }
            }
            else if (is_expired) {
                return {
                    success: false,
                    message: "Session Expired"
                }
            }
            else {
                return {
                    success: false,
                    message: "Session Expired"
                }
            }
        })
        .catch((error) => {
            if (error) {
                return {
                    success: false,
                    message: "Something went wrong"
                }
            }
        });

    return dataresponse;

}

export const fetchSignUpData = async (role, jwtToken) => {

    if (role && jwtToken) {

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: import.meta.env.VITE_LOGIN_API_KEY + 'fetch/signedup_data',
            data: {
                "role": role,
                "jwt_token": jwtToken,
            },
        }

        const dataresponse = await axios.request(config)
            .then((response) => {
                const { is_successful, data } = response.data;

                if (is_successful) {
                    return {
                        "success": true,
                        "data": data,
                    }
                } else {
                    return {
                        "success": false,
                        "message": "Not Found",
                    }
                }

            })
            .catch((error) => {
                if (error) {
                    return {
                        "success": false,
                        "message": "Something went wrong",
                    }
                }
            })

        return dataresponse;

    } else {
        return {
            success: false,
            message: 'Not Found',
        }
    }


}

export const fetchAPIData = async (id, jwtToken) => {

    if (id && jwtToken) {

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: import.meta.env.VITE_LOGIN_API_KEY + 'fetch/api_details',
            data: {
                "customer_id": id,
                "jwt_token": jwtToken,
            },
        }

        const dataresponse = await axios.request(config)
            .then((response) => {
                const { is_successful, api_details } = response.data;

                if (is_successful) {
                    return {
                        "success": true,
                        "data": api_details,
                    }
                } else {
                    return {
                        "success": false,
                        "message": "Not Found",
                    }
                }

            })
            .catch((error) => {
                if (error) {
                    return {
                        "success": false,
                        "message": "Something went wrong",
                    }
                }
            })

        return dataresponse;

    } else {
        return {
            success: false,
            message: 'Not Found',
        }
    }


}

export const AddApiData = async (data, id, token) => {
   

    const {ApiName, Type, Environment,  ClientID, ClientSecret, LoginKey, Scope, DataUrl } = data;

    if (ApiName && Type &&  Environment &&  Scope  && ClientID && ClientSecret && LoginKey && DataUrl  ) {

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: import.meta.env.VITE_LOGIN_API_KEY + 'store/api_details',
            data: {
                "api_details": [
                    {
                        "customer_id": id,
                        "api_name" : ApiName,
                        "type": Type,
                        "environment": Environment,
                        "login_url": LoginKey,
                        "client_id": ClientID,
                        "client_secret": ClientSecret,
                        "scope"  : Scope,
                        "data_url": DataUrl
                    }
                ],

                "jwt_token": token,
            },
        }


        const dataresponse = await axios.request(config)
            .then((response) => {
                const { is_successful } = response.data;

                if (is_successful) {
                    return {
                        success: true,
                        message: "Api Saved Successfully",
                    }
                }
                else {
                    return {
                        success: false,
                        message: "Api Saved Failure",
                    }
                }
            })
            .catch((error) => {
                if (error) {
                    return {
                        success: false,
                        message: "Server has Some Issue Api Not Saved",
                    }
                }
            })

        return dataresponse

    } else {
        return {
            success: false,
            message: "Enter All Credentials"
        }
    }
}