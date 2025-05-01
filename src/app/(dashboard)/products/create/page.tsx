import PageHeading from "@/components/ui/page-heading"
import CreateProduct from '@/components/product/create'

const Page = () =>{
    return (
        <div>
           <PageHeading title="Create New Product"  />

           <CreateProduct/>
        </div>
    )
}

export default Page