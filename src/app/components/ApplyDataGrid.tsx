
"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { PostData } from "@/app/page";
import {Rating, Link} from '@mui/material';


type PostsTableProps = {
    postsData: PostData[];
  };

const columns: GridColDef[] = [
    

  { field: 'image', 
    headerName: 'Image',
     width: 150,
     renderCell: (params) => (
        <Link href={params.value} target="_blank" sx={{ width: 80, height: 80 }}>
          <img
            src={params.value}
            alt="Product"
            style={{ width: 80, objectFit: 'contain', height: "100%" }}
          />
        </Link>
      ) 
    
    
    },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
  },
  {
    field: 'rating' ,
    headerName: 'Rating',
    type: 'number',
    width: 110,
    renderCell: (params) => (
        <Rating value={params.value.rate} readOnly />
      )

    
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 200,
  },
];

export default function ApplyDataGrid({ postsData }: PostsTableProps) {

   
  return (

    <Box sx={{ height: 600, width: '100%' }}>


      <DataGrid
         
        rows={postsData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        rowHeight={120}
        
      />

    </Box>
  );
}
