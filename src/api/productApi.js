import axios from "axios";
import axiosClient from "./axiosClient";

const productApi={
    getAll(page, pages, products) {
        const url='/api/products';
        return axiosClient.get(url, page, pages, products);
    },

    get(id){
        const url=`/products/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const url=`/products`;
        return axiosClient.post(url,data);
    },
    update(data){
        const url=`/products/${data.id}`;
        return axiosClient.patch(url,data);
    },
    get(id){
        const url=`/products/${id}`;
        return axiosClient.delete(url);
    },

};
export default productApi;