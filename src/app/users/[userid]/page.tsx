import { Suspense } from "react";
import UserProfile from "@/ui/UserProfile";
import { fetchUser } from "@/lib/users";

type ParamsType = { userid: string | number };

export default async function UserProfilePage({
  params,
}: {
  params: Promise<ParamsType>;
}) {
  const resolveParams = await params;
  const { userid } = resolveParams;
  const user = fetchUser(userid);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Suspense fallback={<div>Loading User...</div>}>
          <UserProfile user={user} />
        </Suspense>
      </main>
    </div>
  );
}
