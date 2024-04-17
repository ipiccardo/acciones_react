'use client'
import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Share } from '@/Api';

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

export function ActionsTable({ data }: any) {

    console.log(data.data, 'data')

    const itemsPerPage = 50;
    const [currentPage, setCurrentPage] = useState<number>(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.data.length);

    const currentPageData = data.data.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Table>
            <TableCaption>A list of shares.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Simbolo</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Moneda</TableHead>
                    <TableHead className="text-right">Tipo</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {currentPageData.map((share: Share) => (
                    <TableRow key={share.symbol}>
                        <TableCell className="font-medium">{share.symbol}</TableCell>
                        <TableCell>{share.name}</TableCell>
                        <TableCell>{share.currency}</TableCell>
                        <TableCell className="text-right">{share.type}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}