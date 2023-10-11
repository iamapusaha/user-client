import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const [users, setUsers] = useState([])
    const data = useLoaderData();
    useEffect(() => {
        setUsers(data)
    }, [data])
    const handleAddUser = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('inside post response', data);
            })

    }
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" /><br />
                <input type="email" name="email" id="" /><br />
                <input type="submit" value="Add User" />
            </form>
            <h1>Total no of user {users.length}</h1>
            {
                users.map(user => <li key={user.id}>{user.id} : {user.email}</li>)
            }
        </div>
    );
};

export default Users;