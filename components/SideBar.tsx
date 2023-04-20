/* eslint-disable @next/next/no-img-element */
"use client";

import NewChat from "@/components/NewChat";
import { useSession, signOut } from "next-auth/react";

function SideBar() {
  const { data: session } = useSession();

  return (
    <div className="p-4 flex flex-col h-screen bg-green-200">
      <div className="flex-1">
        <div>
          {/*new chat */}
          <NewChat />
          <div>{/*selection*/}</div>
          {/*something more like chatrows */}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          src={session.user?.image!}
          alt="Profile pic"
        />
      )}
    </div>
  );
}

export default SideBar;
