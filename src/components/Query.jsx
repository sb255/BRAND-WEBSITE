import { useQuery } from '@tanstack/react-query';

function Query() {
  const {
    data,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['users'],

    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      return response.json();
    },
  });

  if (isPending) {
    return <h2>Loading users...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h1>Users</h1>

      {data.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Query;