import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isChatGPT = message.user._id === "chatGPT";
  //   console.log(message.text);
  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-violet-400"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar} alt="" className="h-8 w-8" />
        <p className="pt-2 text-sm"> {message.text} </p>
      </div>
    </div>
  );
}

export default Message;
