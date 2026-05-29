import {
    Table,
    TableBody,
    TableCaption, TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Button} from "@/components/ui/button.tsx";
import {useEffect, useState} from "react";
import {deleteProduct, getProducts} from "@/api/products.ts";
import type {Product} from "@/schemas/products.ts";
import {Pencil, Trash} from "lucide-react";
import {Spinner} from "@/components/ui/spinner.tsx";
import {useNavigate} from "react-router";
import {toast} from "sonner";





const ProductsListPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const handleDelete = async (id: number) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;

        try {
            await deleteProduct(id);
            setProducts((prev) =>
                prev.filter((p) => p.id !== id))
            toast.success("Product deleted!", { position: "top-right" })
        }catch  {
            toast.error("Error deleting product", { position: "top-right" })
        }
    }

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .finally(()=> setLoading(false))
        console.log(products)
    },[])

    if (loading) return (
        <div className="flex items-center text-center gap-4">
            <Spinner className="size-8"/>
        </div>)

    return (
        <>
            <div className="p-8">


                <div className="flex justify-between items center mb-4">
                    <h1 className="text-2xl font-bold">
                        Products
                    </h1>
                    <Button>+ New Product</Button>
                </div>

              <Table>
                <TableCaption>A list of your recent products.</TableCaption>
                <TableHeader className="bg-gray-200 font-bold">
                    <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell className="font-medium">{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell className="text-right space-x-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  aria-label="Edit"
                                  onClick={() => navigate(`/products/${product.id}`)}
                                >
                                    <Pencil className="w-4 h-4"/>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    aria-label="Edit"
                                    onClick={() => handleDelete(product.id)}
                                >
                                    <Trash className="w-4 h-4"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
             </Table>
            </div>
        </>
    )
}
export default ProductsListPage;