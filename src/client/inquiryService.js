import axios from 'axios';

const url = 'http://localhost:5000/api/inquiries/dashboard/inquiries';
const addUrl = 'http://localhost:5000/api/inquiries/contact-us';
const delUrl = 'http://localhost:5000/api/inquiries/dashboard/inquiries/';

class InquiryService {

    // Get Inquiries
    static getInquiries(){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}`);
                const data = res.data;
                resolve(
                    data.map(inquiries => ({
                        ...inquiries,
                    }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }

    // Add Inquiry
    static insertInquiry(firstName, lastName, email, phone, message) {
        return axios.post(addUrl,  {
            firstName,
            lastName,
            email,
            phone,
            message
        });
    }

    //  Delete Inquiry
    static deleteInquiry(id){
        return axios.delete(`${delUrl}${id}`);
    }

}

export default InquiryService;