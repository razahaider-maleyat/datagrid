"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { PostData } from "@/app/page";
import { Rating } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type PostsTableProps = {
  postsData: PostData[];
};

const getColumns = (openModal: (data: string) => void): GridColDef[] => {
  return [
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <img
          onClick={() => openModal(params?.row?.image)}
          src={params.value}
          alt="Product"
          style={{ width: 80, objectFit: "contain", height: "100%" }}
        />
      ),
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    },
    {
      field: "rating",
      headerName: "Rating",
      type: "number",
      width: 110,
      renderCell: (params) => <Rating value={params.value.rate} readOnly />,
    },
    {
      field: "description",
      headerName: "Description",
      width: 200,
    },
  ];
};

export default function ApplyDataGrid({ postsData }: PostsTableProps) {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [data, setData] = React.useState<string>(""); 



  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleClickOpen = (data: string) => {
    setIsModalOpen(true);
    setData(data);
  };

  return (
    <React.Fragment>
      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={postsData}
          columns={getColumns(handleClickOpen)}
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

      <Dialog
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={() => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: "red",
          })}
        >
          <CloseIcon />
        </IconButton>
        <img
          src={data}
          alt="image"
          style={{
            width: "200px",
            height: "200px",
            margin: "auto",
            padding: 20,
          }}
        />
      </Dialog>
    </React.Fragment>
  );
}
