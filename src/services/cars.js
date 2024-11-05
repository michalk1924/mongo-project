import {http} from './http'

const carsService = {
    async getAllCars() {
        try{
            const response = await http.get('/cars');
            return response.data;
        }
        catch(error){
            throw error;
        }
    },
    async getCarById(id) {
        try{
            const response = await http.get(`/cars/${id}`);
            return response.data;
        }
        catch(error){
            throw error;
        }
    },
    async createCar(body) {
        try{
            const response = await http.post('/cars', body);
            return response.data;
        }
        catch(error){
            throw error;
        }
    },
    async updateCar(id, body) {
        try{
            const response = await http.patch(`/cars/${id}`, body);
            return response.data;
        }
        catch(error){
            throw error;
        }
    },
    async deleteCar(id) {
        try{
            await http.delete(`/cars/${id}`);
        }
        catch(error){
            throw error;
        }
    }
}

export default carsService;