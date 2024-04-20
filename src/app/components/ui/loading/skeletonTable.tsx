import { Skeleton } from "@/components/ui/skeleton"
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


export function SkeletonInTable() {

    const skeletonArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100))

    return (
        <Table>
            <TableCaption>A list of shares.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Simbolo</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead className="text-right relative">Moneda</TableHead>
                    <TableHead className="text-right">Tipo</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {skeletonArray?.map((share: any, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium"><Skeleton className="h-4 w-16" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                        <TableCell className="text-right relative"><Skeleton className="h-4 w-16  absolute right-2" /></TableCell>
                        <TableCell className="text-right"><Skeleton className="h-4 w-28 absolute right-0" /></TableCell>
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