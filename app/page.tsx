// import React from 'react'
// use heroicons(import a icon package and you can use in use <the name of the icon>)
import { ChatBubbleBottomCenterTextIcon,SunIcon } from '@heroicons/react/24/outline'


function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">ChatGPT for CCRP</h1>

        <div className='flex space-x-2 text-center'>
            <div className="flex flex-col items-center justify-center mb-5">
                <ChatBubbleBottomCenterTextIcon className="h-10 w-10" />
                <h2>Maybe here is a subtitle</h2>
                <p className='infoText'>Just ask me questions about cultural relics.</p>
                <p className='infoText'>Just ask me questions about cultural relics.</p>
                <p className='infoText'>Just ask me questions about cultural relics.</p>
            </div>
            
            <div className="flex flex-col items-center justify-center mb-5">
                <SunIcon className="h-10 w-10" />
                <h2>Maybe here is a subtitle</h2>
                <p className='infoText'>Just ask me questions about cultural relics.</p>
                <p className='infoText'>Just ask me questions about cultural relics.</p>
                <p className='infoText'>Just ask me questions about cultural relics.</p>
            </div>
        </div>
    </div>
  )
}

export default HomePage