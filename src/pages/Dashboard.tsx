import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { fetchUsers } from '../services/api';
import { User } from '../interfaces';
import { logout as logoutAction } from '../store/userSlice'


const Dashboard: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const token = useSelector((state: RootState) => state.user.token);
    const dispatch = useDispatch();

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                if (token) {
                    const response = await fetchUsers(token);
                    setUsers(response.data);
                }
            } catch (error) {
                setError('Error fetching data');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, [token]);

    // JSX Element
    return (
        <div className="max-w-4xl mx-auto mt-10">

            <div className="flex justify-between items-center">
                <h1 className="text-2xl mb-4">Dashboard</h1>
                <button type="button" onClick={() => dispatch(logoutAction())}>Logout</button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <ul>
                {users.map((user: User) => (
                    <li key={user.id} className="flex items-center border-b border-gray-300 py-2">
                        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="w-10 h-10 rounded-full mr-4" />
                        <div>
                            <p>{`${user.first_name} ${user.last_name}`}</p>
                            <p className="text-gray-500">{user.email}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
