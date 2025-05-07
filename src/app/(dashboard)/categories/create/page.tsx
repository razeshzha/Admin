import PageHeading from "@/src/components/ui/page-heading"
import CreateCategory from '@/src/components/category/create'

const Page = () =>{
    return (
        <div>
           <PageHeading title="Create New Category"  />

           <CreateCategory/>
        </div>
    )
}

export default Page