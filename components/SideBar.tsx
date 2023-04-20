/* eslint-disable @next/next/no-img-element */
"use client";

import NewChat from "@/components/NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSession, signOut } from "next-auth/react";
import { collection } from "firebase/firestore";
import db from "@/firebase";

function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session.user?.email!, "chats")
  );
  console.log(chats)
  return (
    <div className="p-4 flex flex-col h-screen bg-green-200">
      <div className="flex-1">
        <div>
          {/*new chat */}
          <NewChat />
          <div>{/*selection*/}</div>
          {/* start from here */}
          {/*something more like chatrows */}
          {/* {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))} */}
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
