"use client";

import db from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import ModelSelection from "./ModelSelection";
import useSWR from "swr";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  //TODO useSWR to fetch the model
  const { data: model } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.email!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    // toast notification to say loading
    const notification = toast.loading("ccrpGPT is thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      //Toast notification to say that the message has been sent
      toast.success("ccrpGPT has finished thinking!", {
        id: notification,
      });
    });
  };

  return (
    <div className="chatinput text-green-400 rounded-lg text-sm">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          className="bg-transparent focus:outline-none flex-1
            disabled:cursor-not-allowed disabled:text-green-300"
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message here..."
        />

        <button
          disabled={!prompt || !session}
          type="submit"
          className="chatinputbutton hover:opacity-50 text-white font-bold
                px-4 py-2 rounded disabled:bg-green-300
                disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>

      <div className="md:hidden text-white">
        <ModelSelection />
      </div>
    </div>
  );
}

export default ChatInput;
