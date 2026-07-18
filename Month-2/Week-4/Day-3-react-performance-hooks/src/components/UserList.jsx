import useFetch from "../hooks/useFetch";

const UserList = () => {
    const { data, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (loading) {
        return <h2>Loading users...</h2>;
    }

    return (
        <div>
            <h2>User List</h2>

            {data.map((user) => (
                <div
                    key={user.id}
                    style={{
                        border: "1px solid #ccc",
                        margin: "10px 0",
                        padding: "10px",
                        borderRadius: "5px",
                    }}
                >
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Company: {user.company.name}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;