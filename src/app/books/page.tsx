"use client";

import React, { useEffect, useState } from 'react';
import booksService from '../../services/books';
import styles from './books.module.css';
import AddBook from './addBook/page';
import { FaRegWindowClose } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export interface Book {
    _id: number;
    title: string;
    price: string;
    image: string;
}

function Page() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [showAddBookForm, setShowAddBookForm] = useState<boolean>(false);

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            try {
                const data = await booksService.getAllBooks();
                setBooks(data);
                console.log(data);
                
            } catch (error: any) {
                console.log("Error fetching books:", error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, []);

    const handleAddBook = async (newBook: Book) => {
        try {
            const addedBook = await booksService.createBook(newBook);
            setBooks((prevBooks) => [...prevBooks, addedBook]);
            setShowAddBookForm(false);
        } catch (error: any) {
            console.log("Error adding book:", error.message);
        }
    };

    const toggleAddBookForm = () => {
        setShowAddBookForm(prevState => !prevState);
    };

    const handleDeleteBook = async (id: number) => {
        try {
            console.log(id);
            await booksService.deleteBook(id);
            setBooks(books => books.filter(book => book._id !== id));
        } catch (error: any) {
            console.log("Error deleting book:", error.message);
        }
    };

    return (
        <div>
            {loading ? (
                <div>
                    <p>Loading books...</p>
                </div>
            ) : (
                <div>
                    <h2 className={styles.title}>BOOKS</h2>
                    <div className={styles.prodContainer}>
                        {books.map((product) => (
                            <div key={product._id} className={styles.prod}>
                                <h4>{product.title}</h4>
                                <p>Price: ${product.price}</p>
                                <img src={product.image} alt={product.title} />
                                <button onClick={() => handleDeleteBook(product._id)}>
                                    <MdDelete />
                                </button>
                            </div>
                        ))}
                    </div>

                    <button className={styles.toggleButton} onClick={toggleAddBookForm}>
                        {showAddBookForm ? <FaRegWindowClose /> : "Add New Book"}
                    </button>

                    {showAddBookForm && <AddBook handleAddBook={handleAddBook} />}
                </div>
            )}
        </div>
    );
}

export default Page;
