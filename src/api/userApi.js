// import { LoginPayload } from '@/models'
import axiosClient from "./axiosClient";

const userApi={
    register(data) {
        const url='/auth/signup';
        return axiosClient.post(url,data)
    },
    logout() {
        const url='/role/logout';
        return axiosClient.get(url)
    },
    login(data) {
        const url='/auth/signin';
        return axiosClient.post(url,data)
    },
    sendemail(data) {
        const url='/auth/send-password-reset-link';
        return axiosClient.post(url,data)
    },
    forgotpassword(data) {
        const url='/auth/forgot-password';
        return axiosClient.post(url,data)
    },
	
};
export default userApi;