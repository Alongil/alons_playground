import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  CircularProgress,
  Typography,
} from "@mui/material";
import type { User } from "../shared/interfaces";

interface UsersTableProps {
  users: User[];
  total: number;
  page: number;
  pageSize: number;
  loading: boolean;
  error?: string;
  onPageChange: (event: unknown, newPage: number) => void;
  onPageSizeChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({
  users,
  total,
  page,
  pageSize,
  loading,
  error,
  onPageChange,
  onPageSizeChange,
}) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", mt: 4 }}>
      {loading ? (
        <CircularProgress sx={{ m: 4 }} />
      ) : error ? (
        <Typography color="error" sx={{ m: 4 }}>
          {error}
        </Typography>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    {new Date(user.createdAt).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <TablePagination
        component="div"
        count={total}
        page={page - 1}
        onPageChange={onPageChange}
        rowsPerPage={pageSize}
        onRowsPerPageChange={onPageSizeChange}
        rowsPerPageOptions={[5, 10, 25, 50]}
      />
    </Paper>
  );
};

export default UsersTable;
