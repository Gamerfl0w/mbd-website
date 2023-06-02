import axios from 'axios';

const url = 'http://localhost:5000/api/products/';
const updateURL = 'http://localhost:5000/api/products/update-product/'
const showProduct = "http://localhost:5000/api/products/show-product/"

class ProductService {

    // Get Products
    static getProducts(){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(product => ({
                        ...product,
                        createdAt: new Date(product.createdAt)
                    }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }

    static async showProduct(id){
        return await axios.get(`${showProduct}${id}`);
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

}

export default ProductService;