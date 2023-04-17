import NewChat from '@/components/NewChat'
function SideBar() {
  return (
    <div className="p-4 flex flex-col h-screen bg-green-200">
        <div className="flex-1">
            <div>
                {/*new chat */}
                <NewChat/>
                <div>
                    {/*selection*/}
                </div>
                {/*something more like chatrows */}
            </div>
        </div>
    </div>
  )
}

export default SideBar