import axios from 'axios';
import { login } from './api';

jest.mock('axios');

describe('login', () => {
  it('should call login API and return data', async () => {
    const email = '123@example.com';
    const password = 'qwerty';
    const token = 'test-token';
    const responseData = { token };

    (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValueOnce({ data: responseData });

    const response = await login(email, password);

    expect(axios.post).toHaveBeenCalledWith('https://reqres.in/api/login', { email, password });
    expect(response).toEqual(responseData);
  });
});
