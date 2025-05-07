// src/app/users/page.tsx

import { UserList } from "@/src/components/users/list";
import PageHeading from "@/src/components/ui/page-heading";

const Page = () => {
  return (
    <div>
      <PageHeading title="User List" />
      <div className="mt-5">
        <UserList/>
      </div>
    </div>
  );
};

export default Page;
