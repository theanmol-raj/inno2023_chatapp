import {
    Bars3Icon,
    BookmarkIcon,
    ChatBubbleOvalLeftIcon,
    HeartIcon,
    PaperAirplaneIcon,
  } from "@heroicons/react/24/outline";
  import React from "react";


const AVTRURL =
  "http://t2.gstatic.com/images?q=tbn:ANd9GcTKKakWSNAt-PcRjTgYOQIcvm6m_uhzy8rSb2oyxmqWjPhTsc7VoBpCL4dTVNQlGrN7HIFUtA";


function Status() {
  return (
    <div className=" border mt-8 mb-8 w-full py-4 pr-4 pl-2 ">
      <div className=" flex bg-white justify-between px-2 py-3 ">
        <div className=" flex items-center space-x-2">
          <img
            className="rounded-full  h-10 w-10 object-cover object-top"
            src={AVTRURL}
          />
          <p>@anmolraj_</p>
        </div>
        <Bars3Icon className=" h-8" />
      </div>
      <div className=" pl-2 border-l ml-7">
        <p className=" ">Lorem ipsum id doner su ta le</p>
      </div>
      
      <div className="flex px-4 py-3 items-center justify-between">
        <div className="flex items-center space-x-4">
          <HeartIcon className="h-7 " />
          <ChatBubbleOvalLeftIcon className="h-7 " />
          <PaperAirplaneIcon className="h-7 " />
        </div>
        <BookmarkIcon className="h-7 " />
      </div>
      
    </div>
  )
}

export default Status