import {http} from './http'

const booksService = {
    async getAllBooks() {
        try{
            const response = await http.get('/books');
            return response.data;
        }
        catch(error){
            throw error;
        }
    },
    async getBookById(id) {
        try{
            const response = await http.get(`/books/${id}`);
            return response.data;
        }
        catch(error){
            throw error;
        }
    },
    async createBook(card) {
        try{
            const response = await http.post('/books', card);
            return response.data;
        }
        catch(error){
            throw error;
        }
    },
    async updateBook(id, body) {
        try{
            const response = await http.patch(`/books/${id}`, body);
            return response.data;
        }
        catch(error){
            throw error;
        }
    },
    async deleteBook(id) {
        try{
            await http.delete(`/books/${id}`);
        }
        catch(error){
            throw error;
        }
    }
}

export default booksService;