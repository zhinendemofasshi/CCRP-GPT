import { PlusIcon } from "@heroicons/react/24/solid"

function NewChat() {
  return (
    <div className="border-green-800 border chatRow">
        <PlusIcon className="w-4 h-4"/>
        <p>New Chat</p>
    </div>
  )
}

export default NewChat