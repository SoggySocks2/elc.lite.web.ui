import { useState, useEffect } from 'react';
import Axios from '../api/axios';

const Users = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const { data } = await Axios.get('/users', {
                    signal: controller.signal
                });
                if (isMounted) setUsers(data);
            } catch (err) {
                console.log(err);
            }
        }
    },[])

    return (
        <article>
            <h2>User List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?
                            .username}</li>}
                    </ul>
                ): <p>No users to display</p>
            }
        </article>
    )
};

export default Users;