import axios from 'axios';

const url = 'http://localhost:5000/api/products/';
const updateURL = 'http://localhost:5000/api/products/update-product/'

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

    // Add Product
    static insertProduct(name, price) {
        return axios.post(url, {
            name,
            price
        });
    }

    // Update Product
    static updateProduct(id, name, price) {
        return axios.put(`${updateURL}${id}`, {
            name,
            price
        });
    }

    //  Delete Product
    static deleteProduct(id){
        return axios.delete(`${url}${id}`);
    }

}

export default ProductService;