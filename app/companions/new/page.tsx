import Companionform from "@/components/forms/Companionform";
import React from "react";

const NewCompanion = () => {
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>
        <Companionform />
      </article>
    </main>
  );
};

export default NewCompanion;
