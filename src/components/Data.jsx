import React, { useState, useEffect } from 'react';
import instance from '../services/axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    instance
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  return (
    <div>
      <div
        style={{
          display: 'flex',
           flexWrap: 'wrap',
           justifyContent: 'space-between',
        }}
      >
        {data.map((ele) => (
          <Link
            key={ele.id}
            to={`/user/${ele.id}`} // Dynamic route to user detail page
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Card
              style={{
               // width: 'calc(33.33% - 20px)', // 3 cards per row
                margin: '10px', // space between cards
              //  height: '250px', // fixed height
              }}
            >
              <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                  {ele.name}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                  {ele.username}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Data;



