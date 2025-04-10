"use client";
import { useState, useEffect, useRef, Fragment } from "react";
import type { User } from "@/types";
import Image from "next/image";
import UserStats from "./UserStats";
import { getName } from "@/utils";

export default function Carousel({ users }: { users: User[] }) {
  const [activeUser, setActiveUser] = useState<string | number | null>();

  const ref = useRef(null);

  useEffect(() => {
    if (!activeUser && users.length > 0) {
      setActiveUser(users[0].id);
    }
  }, [activeUser, users]);

  const handleOnMouseEnter = (
    e: React.MouseEvent<HTMLElement>,
    userId: string
  ) => {
    const target = e.target as HTMLElement;
    target.classList.add("active-item");
    setActiveUser(userId);
  };

  const handleOnMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    target.classList.remove("active-item");
    setActiveUser(null);
  };

  console.log("Active user: ", activeUser);

  return users && users.length > 0 ? (
    <Fragment>
      <h1>Carousel</h1>

      <ul className="profile-list" ref={ref}>
        {users.map((user, idx) => {
          const isActive = user.id === activeUser;
          return user.id ? (
            <li
              className={`profile`}
              key={idx}
              onMouseEnter={(e) => handleOnMouseEnter(e, user.id)}
              onMouseLeave={(e) => handleOnMouseLeave(e)}
            >
              <div className="flex flex-col w-full">
                <div className="flex">
                  {user?.image && (
                    <Image
                      alt="avatar"
                      width={isActive ? 75 : 50}
                      height={isActive ? 75 : 50}
                      src={`data:image/jpg;base64,${user.image}`}
                    />
                  )}
                  {getName(user.first_name, user.last_name)}
                </div>
                {isActive && <UserStats skills={user.stats.skills} />}
              </div>
            </li>
          ) : null;
        })}
      </ul>
    </Fragment>
  ) : null;
}
