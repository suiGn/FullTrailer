// src/hocs/ProtectedRoute.js
'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Check for the token in localStorage
    const token = localStorage.getItem('jwtToken');

    // If there's no token, redirect to login or home page
    if (!token) {
      router.push('/');
    }
  }, []);

  return <>{children}</>;
}

export default ProtectedRoute;
