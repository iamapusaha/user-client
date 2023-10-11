import { useLoaderData } from "react-router-dom";


const Users = () => {
    const users = useLoaderData();
    const handleAddUser = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }
        console.log(user);
    }
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" /><br />
                <input type="email" name="email" id="" /><br />
                <input type="submit" value="Add User" />
            </form>
            <h1>Total no of user {users.length}</h1>
        </div>
    );
};

export default Users;