import userReducer, { login, logout } from './userSlice';

describe('userReducer', () => {
    it('should handle login', () => {
        const initialState = { isAuthenticated: false, token: null };
        const token = 'test-token';
        const action = login(token);
        const newState = userReducer(initialState, action);
        expect(newState.isAuthenticated).toBe(true);
        expect(newState.token).toBe('test-token');
    });

    it('should handle logout', () => {
        const initialState = { isAuthenticated: true, token: 'test-token' };
        const newState = userReducer(initialState, logout());
        expect(newState.isAuthenticated).toBe(false);
        expect(newState.token).toBeNull();
    });
});
