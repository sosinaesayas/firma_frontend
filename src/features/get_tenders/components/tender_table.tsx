import TenderTableData from "../../../data/interfaces/tender";
import React from 'react';
import "../styles/table_styles.css"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaEye } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const getStatusColor = (status  : string) => {
  switch (status) {
    case "Pending":
      return "yellow";
    case "Published":
      return "green";
    case "Cancelled":
      return "red";
    case "Closed":
      return "gray";
    case "Opened":
      return "blue";
    case "Awarded":
      return "purple";
    default:
      return "black";
  }
};

interface TenderTableProps {
  data: TenderTableData[];
}

export const TenderTable: React.FC<TenderTableProps> = ({ data }) => {
console.log("data in tender table is")
console.log(data)
  return (
    <Table className="tender-table">
      <TableCaption>A list of recent tenders.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Closing Time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
          <TableHead>View</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((tender, index) => (
          <TableRow key={tender.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
            <TableCell>{tender.title}</TableCell>
            <TableCell className="description-cell">{tender.description}</TableCell>
            <TableCell>{tender.tenderType}</TableCell>
            <TableCell>{
              // parse tender.endDate to 12 hour format,and date like June 23, 2021, 12:00 PM
              new Date(tender.endDate).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              }) + ", " + new Date(tender.endDate).toLocaleTimeString('en-US', {
                hour: 'numeric', minute: '2-digit'
              })

              }</TableCell>
            <TableCell>
              <span className="status-dot" style={{ backgroundColor: getStatusColor(tender.status) }}></span> {tender.status}
            </TableCell>
            <TableCell><Button>Edit</Button></TableCell>
            <TableCell><FaEye /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
