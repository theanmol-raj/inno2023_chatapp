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

function Post() {
  return (
    <div className=" border mt-8 mb-8 ">
      <div className=" flex bg-white justify-between px-6 py-3 ">
        <div className=" flex items-center space-x-2">
          <img
            className="rounded-full  h-10 w-10 object-cover object-top"
            src={AVTRURL}
          />
          <p>@anmolraj_</p>
        </div>
        <Bars3Icon className=" h-8" />
      </div>
      <div>
        <img
          src="https://i.pinimg.com/564x/85/d0/41/85d0417bf69fa3f155587238ef53d6a9.jpg"
          className=" w-full  "
        />
      </div>
      <div className="flex px-4 py-3 items-center justify-between">
        <div className="flex items-center space-x-4">
          <HeartIcon className="h-7 " />
          <ChatBubbleOvalLeftIcon className="h-7 " />
          <PaperAirplaneIcon className="h-7 " />
        </div>
        <BookmarkIcon className="h-7 " />
      </div>
      <div>
        <p className=" p-4"><span className=" font-semibold">anmolraj_</span> Lorem ipsum id doner su ta le</p>
      </div>
    </div>
  );
}

export default Post;
