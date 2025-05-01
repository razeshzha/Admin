import { CategoryList } from "@/components/category/list"
import PageHeading from "@/components/ui/page-heading"


const Page = () =>{
    return (
        <div>
           <PageHeading title="Category List" link="/categories/create" buttonText="Add New Category" />
           <div className='mt-5'>
            <CategoryList/>
           </div>
        </div>
    )
}

export default Page