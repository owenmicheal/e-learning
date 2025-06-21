import CompanionCard from "@/components/cards/CompanionCard";
import CompanionsList from "@/components/cards/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="123"
          name="Introduction to JavaScript Language"
          topic="Learn the basics of JavaScript."
          subject="Programming"
          duration={45}
          color="#97CBFB"
        />
        <CompanionCard
          id="456"
          name="Introduction to Mechanical Engineering"
          topic="Explore the fundamentals of mechanical engineering."
          subject="Engineering"
          duration={25}
          color="#C2E1FD"
        />
        <CompanionCard
          id="234"
          name="Introduction to Vector Illustration"
          topic="Master the art of vector illustration."
          subject="Design"
          duration={48}
          color="#FFC2D9"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recent Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
