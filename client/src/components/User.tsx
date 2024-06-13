import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '@/graphql/queries/Users.ts';
interface User {
  id: string;
  name: string;
  email: string;
}

const User: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const { data, loading, error } = useQuery<{ getUser: User }>(GET_USER, {
    variables: { id: userId },
    skip: !userId, // Skip query if no userId is provided
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={userId}
        onChange={handleInputChange}
        placeholder="Enter user ID"
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>User Details</h2>
          <p>ID: {data.getUser.id}</p>
          <p>Name: {data.getUser.name}</p>
          <p>Email: {data.getUser.email}</p>
        </div>
      )}
    </div>
  );
};

export default User;
