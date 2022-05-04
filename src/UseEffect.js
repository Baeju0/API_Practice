import React, { useState, useEffect } from "react";

function UseEffect() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(['']);

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
        .then((users) => {
            setUsers(users);
            setLoading(false);
        });
    });
    if (loading)
        return <div>Loading...</div>;
    return (
    <ul>
     {users.map((user) => (
      <li key={user.id}>{user.name}</li>
      ))
    }
    </ul>
  );
}

export default UseEffect;