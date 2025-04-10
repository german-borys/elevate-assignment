"use client";
import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import type { User } from "@/types";
import { getName } from "@/utils";

export default function UserList({ users }: { users: Promise<User[]> }) {
  const allUsers = use(users);

  return (
    <ul className="profile-list">
      {allUsers.map((user, idx) =>
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
  );
}
