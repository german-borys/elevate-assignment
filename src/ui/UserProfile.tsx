"use client";
import { use } from "react";
import { User } from "@/types";

import Image from "next/image";
import UserStats from "./UserStats";

export default function UserProfile({
  user: userProp,
}: {
  user: Promise<User | undefined>;
}) {
  const user = use(userProp);
  return (
    <div className="profile-wrapper">
      <div className="profile-info">
        {user?.image && (
          <Image
            alt="avatar"
            width="100"
            height="100"
            src={`data:image/jpg;base64,${user.image}`}
          />
        )}
        <div className="flex flex-col">
          <h1 className="user-name">
            {user?.first_name} {user?.last_name}
          </h1>
          {user?.stats?.current_streak_in_days && (
            <h2>{`${user?.stats.current_streak_in_days}-day streak`}</h2>
          )}
          {user?.stats?.total_sessions_played && (
            <h2>{`${user?.stats.total_sessions_played} sessions`}</h2>
          )}
        </div>
      </div>
      {user?.stats?.skills && <UserStats skills={user.stats.skills} />}
    </div>
  );
}
