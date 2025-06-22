import Companionform from "@/components/forms/Companionform";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const NewCompanion = async () => {
  const { userId } = await auth();

  // If the user is not authenticated, redirect to the sign-in page
  if (!userId) redirect("/sign-in");

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
