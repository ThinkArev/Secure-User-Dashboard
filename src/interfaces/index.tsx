export interface UserState {
    isAuthenticated: boolean;
    token: string | null;
}

export interface ProtectedRouteProps {
    element: JSX.Element;
}

export interface InputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
    required?: boolean;
    className?: string;
}


export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}