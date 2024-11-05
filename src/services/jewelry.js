import {httpFakeStore} from './http'

const jewelryService = {
    async getAllJewelry() {
        try{
            const response = await httpFakeStore.get('/jewelery');
            return response.data;
        }
        catch(error){
            throw error;
        }
    },
    async getJewelryById(id) {
        try{
            const response = await httpFakeStore.get(`/jewelery/${id}`);
            return response.data;
        }
        catch(error){
            throw error;
        }
    },
    async createJewelry(card) {
        try{
            const response = await httpFakeStore.post('/jewelery', card);
            return response.data;
        }
        catch(error){
            throw error;
        }
    },
    async updateJewelry(id, body) {
        try{
            const response = await httpFakeStore.patch(`/jewelery/${id}`, body);
            return response.data
        }
        catch(error){
            throw error;
        }
    },
    async deleteJewelry(id) {
        try{
            await httpFakeStore.delete(`/jewelery/${id}`);
        }
        catch(error){
            throw error;
        }
    }
}

export default jewelryService;