import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async() => {
            try {
                //요청 시작할때 error와 users 초기화
                setError(null);
                setUsers(null);

                // loading 상태를 true로
                setLoading(true);
                const response = await axios.get(
                  'https://jsonplaceholder.typicode.com/users'
                );
                setUsers(response.data); // response.data 안에 데이터
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchUsers();
    }, []);

    if (loading) return <div>로딩중입니다......</div>;
    if (error) return <div>에러 발생!!!!</div>;
    if (!users) return null;
    return(
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.username} ({user.name}) ({user.address.city})
                </li>
            ))}
        </ul>
    );
}

export default Users;