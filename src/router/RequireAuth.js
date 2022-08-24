import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  if (!user) return <Navigate to='/' state={{ from: location }} />;

  return children;
};
