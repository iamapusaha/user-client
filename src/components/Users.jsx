import { useLoaderData } from "react-router-dom";


const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>Total no of user {users.length}</h1>
        </div>
    );
};

export default Users;