import { Padding, TabUnselected } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function ViewData() {
    useEffect(() => {
        
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setData(users=response.data)
            
        })
    })
    let [users,setData] = useState([])

  return (
    <div >
      <br />
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((value,index) => {
                return  <TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.email}</TableCell>


                </TableRow>
            })}
           
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ViewData;
