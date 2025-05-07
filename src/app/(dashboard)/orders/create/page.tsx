'use client';

import PageHeading from "@/src/components/ui/page-heading";
import OrderForm from "@/src/components/forms/order.form"; // Update the path if different

const CreateOrderPage = () => {
  return (
    <div className="p-4">
      <PageHeading title="Create New Order" />
      <div className="mt-5">
        <OrderForm />
      </div>
    </div>
  );
};

export default CreateOrderPage;
