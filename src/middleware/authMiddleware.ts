import { Middleware } from '@reduxjs/toolkit';
import axios from 'axios';


const authMiddleware: Middleware<{}, any> = store => next => action => {
    const state = store.getState();

    if (state.user.token) {
        // Add the token to headers for authenticated requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${state.user.token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }

    return next(action);
};

export default authMiddleware;
