import axios from "axios";

export const http = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

export const httpFakeStore = axios.create({
  baseURL: 'https://fakestoreapi.com/products/category',
  headers: { 'Content-Type': 'application/json' },
});