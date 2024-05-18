import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store';
import { ProtectedRouteProps } from '../interfaces';

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  return isAuthenticated ? element : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
