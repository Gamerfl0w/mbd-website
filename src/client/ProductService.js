import axios from 'axios';

const url = 'http://localhost:5000/api/products/';
const updateURL = 'http://localhost:5000/api/products/update-product/'
const showProduct = "http://localhost:5000/api/products/show-product/"
const searchURL = 'http://localhost:5000/api/products/search/'

class ProductService {

    // Get Products
    static getProducts(page, category){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}${page}/${category}`);
                const data = res.data.products;
                resolve(
                    data.map(product => ({
                        ...product,
                        totalPages: res.data.totalPages,
                        currentPage: res.data.currentPage,
                    }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }

    static async showProduct(id){
        // return await axios.get(`${showProduct}${id}`);
        const res = await axios.get(`${showProduct}${id}`);
        const data = res.data;
        return data;
    }

    // Add Product
    static insertProduct(data) {
        return axios.post(url, data, {
            
        });
    }

    // Update Product
    static updateProduct(id, data) {
        return axios.put(`${updateURL}${id}`, data, {

        });
    }

    //  Delete Product
    static deleteProduct(id){
        return axios.delete(`${url}${id}`);
    }

    // Search Products
    static search(name){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${searchURL}${name}`);
                const data = res.data;
                resolve(
                    data.map(product => ({
                        ...product,
                        
                    }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }

}

export default ProductService;