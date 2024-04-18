'use client'
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
import Link from 'next/link';
import { redirect } from 'next/navigation'

export function ActionsTable({ currentPageData }: any) {

    if (!currentPageData.length) {
        redirect('/?q=')
    }

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
                {currentPageData?.map((share: Share) => (
                    <TableRow key={share.symbol}>
                        <TableCell className="font-medium"><Link href='/sharesdetail' className='text-blue-600 underline decoration-1'>{share.symbol}</Link></TableCell>
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