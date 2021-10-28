import React, {useState} from 'react';
import axios from 'axios';

import {Table,
        TableCell,
        TableContainer,
        TableHead,
        TableRow,
        Paper, 
        TableBody} from '@material-ui/core';

const AxiosApi = ()=>{
  const [data, setData] = useState([]);
  function serchApi(){
    axios.get('http://3.35.107.166:8080/behavior/list')
      .then(function(response){
          setData(response.data);
            console.log("성공");
      })
      .catch(function(error){
          console.log("실패");
      })
  }
  if(data.length > 0) {
      const photo_url = 'http://3.35.107.166:8080/behavior/list/';
    return (
        <TableContainer component={Paper}>
            <Table data={data} className="table" >
                <TableHead>
                    <TableRow>
                        <TableCell align="center">No.</TableCell>
                        <TableCell align="center">CCTV Name</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Photo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
               {data.map((datas,i) => (
                   
                   <TableRow key={datas.id}>
                       <TableCell align="center">{i+1}</TableCell>
                        <TableCell align="center">{datas.cctv}</TableCell>
                        <TableCell align="center">{datas.regdate}</TableCell>
                        <TableCell align="center"><img src={photo_url+datas.file} alt="img" width="80px" height="80"/></TableCell>

                   </TableRow>
               ))}
                </TableBody>

            </Table>
        </TableContainer>
        
    );
} else { 
    return (
        <div>
            {serchApi()}
        </div>
    )
}
}
  
 


export default AxiosApi;