"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";

type Props = {
    chatId: string;
};

function ChatInput({chatId}: Props) {
    const [prompt, setPrompt] = useState("");
    const {data:session} = useSession();

    const sendMessage = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(!prompt)return;

        const input = prompt.trim();
        setPrompt("");

        const message: Message ={
            text : input,
            createdAt: serverTimestamp(),
            user:{
                _id:session?.user?.email!,
                name:session?.user?.email!,
                avatar:session?.user?.image!||'https://ui-avatars.com/api/?name=${session?.user?.name}',
            }
        }
    };

  return (
    <div className="bg-green-700/50 text-green-400 rounded-lg text-sm ">
        <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
            <input 
            className="bg-transparent focus:outline-none flex-1
            disabled:cursor-not-allowed disabled:text-green-300"
            disabled={!session}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            type="text" placeholder="Type your message here..."/>

            <button 
                disabled={!prompt ||!session}
                type="submit"
                className="bg-gray hover:opacity-50 text-white font-bold
                px-4 py-2 rounded disabled:bg-green-300
                disabled:cursor-not-allowed"
            >
                <PaperAirplaneIcon className="h-4 w-4 -rotate-45"/>
            </button>
        </form>

        <div>
            {/*ModelSelection*/}
        </div>
    </div>
  );
}

export default ChatInput