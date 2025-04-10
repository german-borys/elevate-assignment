import { fetchUsers } from "@/lib/users";
import UserList from "@/ui/UserList";
import { Suspense } from "react";

export default function UsersPage() {
  const users = fetchUsers();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className=" flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
        <h1>Users</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <UserList users={users} />
        </Suspense>
      </main>
    </div>
  );
}
