import React, { useState } from "react";
import AppNavbar from "../components/AppNavbar";
import SidePannel from "../components/SidePannel";
import UserCard from "../components/UserCard";
import PostContainer from "../components/PostContainer";
import StatusContainer from "../components/StatusContainer";

const Data = [
  {
    names :'Tahir' ,
    links : 'http://t2.gstatic.com/images?q=tbn:ANd9GcTKKakWSNAt-PcRjTgYOQIcvm6m_uhzy8rSb2oyxmqWjPhTsc7VoBpCL4dTVNQlGrN7HIFUtA'
  },
  {
    names :'Sahaista' ,
    links : null
  },
  {
    names :'Jyoti' ,
    links : 'http://t2.gstatic.com/images?q=tbn:ANd9GcTKKakWSNAt-PcRjTgYOQIcvm6m_uhzy8rSb2oyxmqWjPhTsc7VoBpCL4dTVNQlGrN7HIFUtA'
  },
  {
    names :'Syed' ,
    links : 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt763bed31c4bfa2aa/655713464ba8c0040a8ba6e7/GOAL_-_Blank_WEB_-_Facebook_-_2023-11-17T071532.338.png?auto=webp&format=pjpg&width=1080&quality=60'
  },
  {
    names :'Anmol' ,
    links : 'http://t2.gstatic.com/images?q=tbn:ANd9GcTKKakWSNAt-PcRjTgYOQIcvm6m_uhzy8rSb2oyxmqWjPhTsc7VoBpCL4dTVNQlGrN7HIFUtA'
  }
]


function AppScreen() {

  const [ active , setActive ] =  useState(0) 

  // console.log(temp)



  return (
    <div className=" grid grid-cols-4 h-screen  ">
      <SidePannel />
      <div className=" col-span-3">
        <div className="relative">
          <div className=" absolute w-40 h-full bg-gradient-to-l from-white  to-transparent right-0" />
          <div className="  flex px-6 py-4 space-x-3 overflow-y-scroll  ">
              {Data.map((item ,index) => <UserCard key={index} name={item.names} img={item.links}  />)}
            
          </div>
        </div>
        <div>
          {/*
            // Imgs explore section
            // Status Section 
           */}
          { active ?  <StatusContainer /> : <PostContainer /> }

           
          
        </div>      
      </div>
      <AppNavbar ac={active} setFn ={setActive} />
    </div>
  );
}

export default AppScreen;
