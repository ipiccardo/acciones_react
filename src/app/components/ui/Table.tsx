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

export function ActionsTable({ currentPageData }: any) {

    return (
        <Table>
            <TableCaption className="py-8">A list of shares.</TableCaption>
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
                        <TableCell className="font-medium"><Link href={`/sharesdetail/${share.symbol}`} className='text-blue-600 underline decoration-1'>{share.symbol}</Link></TableCell>
                        <TableCell>{share.name}</TableCell>
                        <TableCell>{share.currency}</TableCell>
                        <TableCell className="text-right">{share.type}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}></TableCell>
                    <TableCell className="text-right"></TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}