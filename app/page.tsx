// import React from 'react'
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'


function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">ChatGPT for CCRP</h1>

        <div>
            <div className="flex flex-col items-center justify-center mb-5">
                <ChatBubbleBottomCenterTextIcon className="h-10 w-10" />
                <p>Just ask me questions about cultural relics.</p>
            </div>
        </div>
    </div>
  )
}

export default HomePage