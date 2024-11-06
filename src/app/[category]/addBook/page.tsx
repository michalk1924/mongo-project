"use client"

import React, { useState, memo } from 'react';
import styles from './addBook.module.css';
import { Book } from '../page';

interface AddBookProps {
    handleAddBook: (book: Book) => void;
}

function AddBook({ handleAddBook }: any) {
    const [newBook, setNewBook] = useState<Book>({ title: "", price: "", image: "", id: 0});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleAddBook(newBook);
        setNewBook({ title: "", price: "", image: "", id: 0 }); 
    };

    return (
        <form className={styles.addBookForm} onSubmit={handleSubmit}>
            <h3>Add New Book</h3>
            <input
                type="text"
                placeholder="Title"
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Price"
                value={newBook.price}
                onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Image URL"
                value={newBook.image}
                onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
            />
            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBook;