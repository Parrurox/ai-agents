"use client";

import AgentsTopPage from "../ui/AgentsTopPage";
import AgentCard from "../ui/AgentCard";
import { StaticImageData } from "next/image";
import Imageone from "@/app/assets/nature.jpg";

const AgentsPage = () => {
  return (
    <>
      <div className="flex w-vw flex-col p-10">
        {/* top page heading, search etc. */}
        <AgentsTopPage />

        {/* agent cards  will use map here over list of agents*/}
        <div className="w-full flex justify-center items-center flex-wrap">
          <div className=" flex lg:flex-row xs:flex-col justify-evenly  gap-5 w-full mt-10">
            <AgentCard
              name={`agent name`}
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                `}
              imageUrl={Imageone as StaticImageData}
            />
            <AgentCard
              name={`agent name 2`}
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                `}
              imageUrl={Imageone as StaticImageData}
            />

            {/* {isLoading && <p>Loading ....</p>}
            {error && <p className="text-red-500">Something went wrong!</p>} */}

            {/* {data &&
              data.length > 0 &&
              data.map((item, index) => (
                <div
                  className="flex justify-start-start items-center space-x-4 mb-4"
                  key={index}
                >
                  <AgentCard
                    name={item.login}
                    description={`lorem ipsum dolor sit amet, consectetur adipiscing elit.}
                    imageUrl={`image`}
                  />
                </div>
              ))} */}
          </div>
        </div>

        {/* {agentList.length === 0 ? <CreateAgentPage /> : <AgentsTopPage />} */}
      </div>
    </>
  );
};

export default AgentsPage;
