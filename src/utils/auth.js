// utils/useAuth.js
'use client'
import * as React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken'; // Added this import

function isTokenExpired(token) {
  try {
    const decoded = jwt.decode(token);
    if (!decoded || !decoded.exp) return true;

    const currentDate = new Date();
    const expirationDate = new Date(decoded.exp * 1000); // Convert JWT exp time to milliseconds

    return currentDate >= expirationDate;
  } catch (error) {
    return true; // If there's an error, consider the token expired
  }
}

function useAuth() {
  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    if (!token || isTokenExpired(token)) {
      router.push('/login');
    }
  }, []);
}
export default useAuth;

