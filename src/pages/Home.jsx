import React from "react";
import CodeEditorLive from "../components/CodeEditorLive";
import data from "../mocks/challenges.json"

const Home = () => {
  return (
    <div className="w-full  flex flex-col items-center  px-20 gap-x-20 mt-20">
      {data.challenger.map((challenge, index) => (
        <CodeEditorLive
          key={index}
          level={challenge.level}
          points={challenge.points}
          title={challenge.title}
          description={challenge.description}
          answer={challenge.asnwer}
          initialConfig={challenge.initialConfig}
          values={challenge.values}
        />
      ))}
    </div>
  );
};

export default Home;
