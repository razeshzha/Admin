import { OrderList } from "@/src/components/orders/list";
import PageHeading from "@/src/components/ui/page-heading";

const Page = () => {
  return (
    <div>
      <PageHeading
        title="Order List"
        link="/orders/create"
        buttonText="Create Order"
      />
      <div className="mt-5">
        <OrderList />
      </div>
    </div>
  );
};

export default Page;
