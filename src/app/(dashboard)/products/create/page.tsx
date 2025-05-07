import PageHeading from "@/src/components/ui/page-heading"
import CreateProduct from '@/src/components/product/create'

const Page = () =>{
    return (
        <div>
           <PageHeading title="Create New Product"  />

           <CreateProduct/>
        </div>
    )
}

export default Page