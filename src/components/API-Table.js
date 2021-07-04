import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const APITable = () => {
  const [allUsers, setAllUsers] = useState([]);
  const url = 'https://randomuser.me/api/?results=20';
  const fetchData = async () => {
    return await axios
      .get(url)
      .then(res => {
        setAllUsers(res.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TableContainer style={{ width: '60vw' }} component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers.map((user, index) => {
              return (
                <TableRow key={index}>
                  <TableCell key={index + 1}>{user.name.first}</TableCell>
                  <TableCell key={index + 2}>{user.name.last}</TableCell>
                  <TableCell key={index + 3}>{user.gender}</TableCell>
                  <TableCell key={index + 4}>{user.cell}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default APITable;
