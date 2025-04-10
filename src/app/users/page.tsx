import Link from "next/link";
import { fetchUsers } from "@/lib/users";
import Image from "next/image";
import { getName } from "@/utils";

export default async function UsersPage() {
  const users = await fetchUsers();

  return users && users.length > 0 ? (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className=" flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
        <h1>Users</h1>
        <ul className="profile-list">
          {users.map((user, idx) =>
            user.id ? (
              <Link className="" href={`/users/${user.id}`} key={idx}>
                <li className="profile">
                  {user?.image ? (
                    <Image
                      alt="avatar"
                      width="50"
                      height="50"
                      src={`data:image/jpg;base64,${user.image}`}
                    />
                  ) : (
                    <div className="missing-avatar" />
                  )}
                  {getName(user.first_name, user.last_name)}
                </li>
              </Link>
            ) : null
          )}
        </ul>
      </main>
    </div>
  ) : null;
}
