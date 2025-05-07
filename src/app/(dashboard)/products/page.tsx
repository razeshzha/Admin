import { ProductList } from "@/src/components/product/list"
import PageHeading from "@/src/components/ui/page-heading"


const Page = () =>{
    return (
        <div>
           <PageHeading title="Products List" link="/products/create" buttonText="Add New Product" />
           <ProductList/>
        </div>
    )
}

export default Page