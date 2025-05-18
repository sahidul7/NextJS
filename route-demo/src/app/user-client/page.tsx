"use client";

import { useState, useEffect } from "react";

type User = {
    id: number;
    name: string;   
    username: string;

    email: string;
    phone: string;
};

export default function UserClient() {
        const[users, setUsers] = useState<User[]>([]);
        const[loading, setLoading] = useState(true);
        const[error, setError] = useState("");

        useEffect(() => {
            const fetchUsers = async () => {
                try {
                    const response = await fetch("https://jsonplaceholder.typicode.com/users");
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    const data = await response.json();
                    setUsers(data);
                } catch (error) {
                    if (error instanceof Error) {
                        setError(error.message);
                    } else {
                        setError("An unknown error occurred");
                    }
                } finally {
                    setLoading(false);
                }
            };
            fetchUsers();
        }, []);
        if (loading) {
            return <div>Loading...</div>;
        }
        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div>
                <h1>User List</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <h2>{user.name}</h2>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );  
    }