import React, { useState, useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../services/axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const UserCard = 

memo(
  () => {  // Memoize to prevent unnecessary re-renders
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    instance
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <Card style={{ margin: '10px' }}>
      <CardContent>
        <Typography variant="h6">{user.name}</Typography>
        <Typography>{user.email}</Typography>
        <Typography>{user.phone}</Typography>
        <Typography>{user.website}</Typography>
        <Typography>{user.address.street}, {user.address.city}</Typography>
      </CardContent>
    </Card>
  );
}
 );

export default UserCard;

