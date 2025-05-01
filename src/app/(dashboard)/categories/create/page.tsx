import PageHeading from "@/components/ui/page-heading"
import CreateCategory from '@/components/category/create'

const Page = () =>{
    return (
        <div>
           <PageHeading title="Create New Category"  />

           <CreateCategory/>
        </div>
    )
}

export default Page