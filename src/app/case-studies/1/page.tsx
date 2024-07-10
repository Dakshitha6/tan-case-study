import { LampContainer } from "@/app/ui/components/aceternity/Lamp";
import { TracingBeam } from "@/app/ui/components/aceternity/TracingBeam";
import Image from "next/image";

export default function Quantumloop() {
  return (
    <TracingBeam>
      <div className=" flex flex-col justify-center text-white text-start ">
        <LampContainer />
        <p className="  text-lg md:text-3xl whitespace-pre-line pb-12">
          {`How not to create a game: Insights from our journey
         in developing a Multiplayer FPS`}
        </p>

        <p className="text-slate-400  pb-20">
          Embark on a journey through the development stages of Project
          Quantumloop, a multiplayer FPS game that taught us invaluable lessons
          in game design and development. Here’s a detailed exploration of what
          to focus on and what pitfalls to avoid:
        </p>
        <p className="text-md md:text-2xl pb-12">
          Beginning the Journey: Inception of Project Quantumloop
        </p>
        <p className="text-slate-400  pb-6">
          Project Quantumloop began with a shared passion for gaming among our
          team at Tandemloop Technologies, driven by a desire to create an
          immersive multiplayer FPS experience unlike any other.
        </p>
        <p className="text-slate-400  pb-20">
          Focus On: Starting with a clear vision and understanding of our
          capabilities, we embarked on the challenging path of game development,
          fueled by our collective enthusiasm and commitment to innovation.
        </p>
        <p className="text-md md:text-2xl pb-12">
          Embrace Market Understanding
        </p>
        <video width="1040" height="240" controls autoPlay muted>
          <source src="/videos/quantumloop/video_1.mp4" type="video/mp4" />
        </video>
        <p className="text-slate-400  pb-20 pt-12">
          Initially, we were driven by passion but overlooked the importance of
          market research. Conducting comprehensive market analysis to grasp
          player preferences, industry trends, and competitor strategies is
          crucial. Analyzing successful FPS games and player demographics
          aligned our features with market demands, enhancing appeal and
          competitiveness. This involved studying what elements made top games
          successful and understanding what players were looking for in a new
          FPS game. By doing this, we could better tailor our games mechanics,
          aesthetics, and features to meet player expectations and fill gaps in
          the market.
        </p>
        <p className="text-md md:text-2xl pb-12">
          Foster Detailed Concept Development
        </p>
        <video width="1040" height="240" controls autoPlay muted>
          <source src="/videos/quantumloop/video_2.mp4" type="video/mp4" />
        </video>
        <p className="text-slate-400  pb-20 pt-12">
          Rushing through early concepts led to unclear direction and design
          challenges. Investing time in clear, detailed game concepts using mood
          boards, sketches, and storyboarding is essential. Detailed concept
          work clarified mechanics, narrative elements, and aesthetics, laying a
          solid foundation for development. This stage involved creating a
          cohesive vision that everyone on the team could understand and follow.
          It helped in visualizing the games world, the storyline, and how
          various elements like characters, environments, and gameplay mechanics
          would come together to create a unique and engaging experience.
        </p>
        <p className="text-md md:text-2xl pb-12 ">
          Grey boxing and Gameplay Mechanics Testing
        </p>
        <video width="1040" height="240" controls autoPlay muted>
          <source src="/videos/quantumloop/video_3.mp4" type="video/mp4" />
        </video>
        <p className="text-slate-400  pb-20 pt-12">
          Creating the grey box stage and testing gameplay mechanics and map
          design were crucial early challenges. Iteratively refining gameplay
          mechanics and optimizing map layout for balance and player engagement
          ensured smooth gameplay flow and addressed potential issues before
          they became critical. Grey boxing allowed us to focus on the core
          mechanics and layout without getting distracted by detailed visuals.
          This stage was about ensuring that the gameplay felt right and that
          the map design facilitated enjoyable and strategic player
          interactions.
        </p>
        <p className="text-md md:text-2xl pb-12 ">
          Commit to Detailed Level Design
        </p>
        <video width="1040" height="240" controls autoPlay muted>
          <source src="/videos/quantumloop/video_4.mp4" type="video/mp4" />
        </video>
        <p className="text-slate-400  pb-20 pt-12">
          Neglecting detailed wireframing and block out stages resulted in
          inefficient design iterations. Spending adequate time refining level
          designs, incorporating spatial relationships, environmental
          storytelling, and ensuring gameplay clarity was vital. Collaborative
          efforts with level designers and artists ensured cohesive integration
          of visual elements and gameplay mechanics, enhancing overall immersion
          and player interaction. Detailed level design involved creating
          intricate layouts that supported varied play styles and strategies,
          ensuring that each area of the map was both visually interesting and
          functionally sound.
        </p>
        <p className="text-md md:text-2xl pb-12">
          Strategize with a Comprehensive Map Overview
        </p>
        <video width="1040" height="240" controls autoPlay muted>
          <source src="/videos/quantumloop/video_5.mp4" type="video/mp4" />
        </video>
        <p className="text-slate-400  pb-20 pt-12">
          Early development without a strategic map overview led to imbalanced
          gameplay experiences and player confusion. Creating detailed map
          overviews highlighting key areas, pathways, objectives, and
          interactive elements facilitated tactical gameplay, player navigation,
          and balanced engagement across different game modes, contributing to a
          cohesive and rewarding player experience. By having a top-down view of
          the map, we could plan routes, choke points, and key strategic
          locations, ensuring that the map offered a balanced experience for all
          players.
        </p>
        <p className="text-md md:text-2xl pb-12">
          Design and Balance Weapons Effectively
        </p>
        <video width="1040" height="240" controls autoPlay muted>
          <source src="/videos/quantumloop/video_6.mp4" type="video/mp4" />
        </video>
        <p className="text-slate-400  pb-20 pt-12">
          Initially neglecting balanced weapon design compromised gameplay
          dynamics and player satisfaction. Designing weapons with unique
          attributes, balanced statistics, and distinct roles ensured tactical
          depth and strategic variety. Iterative testing and player feedback
          integration refined weapon mechanics, enhancing gameplay balance, and
          fostering a competitive yet fair multiplayer environment. Each weapon
          had to feel distinct and satisfying to use, with strengths and
          weaknesses that encouraged players to choose weapons based on their
          playstyle and the tactical situation.
        </p>
        <p className="text-md md:text-2xl pb-12">
          Prioritize Gameplay Mechanics Over Visuals
        </p>
        <video width="1040" height="240" controls autoPlay muted>
          <source src="/videos/quantumloop/video_7.mp4" type="video/mp4" />
        </video>
        <p className="text-slate-400  pb-20 pt-12">
          Early prioritization of graphics over gameplay mechanics limited
          initial player engagement and retention. Developing robust and
          enjoyable gameplay mechanics, movement systems, and combat
          interactions as foundational pillars was crucial. Initial emphasis on
          showcasing core gameplay features in promotional materials and
          trailers bolstered player interest and retention, paving the way for
          subsequent visual enhancements and polish. While visuals are
          important, they should complement and enhance the core gameplay, not
          overshadow it. Ensuring that the gameplay is fun and engaging from the
          start is crucial for player retention.
        </p>
        <p className="text-md md:text-2xl pb-12">
          Establish a Structured Development Timeline
        </p>
        <p className="text-slate-400  pb-20">
          Without a clear development pipeline, managing milestones, deadlines,
          and resource allocation became challenging. Establishing a detailed
          development timeline with phased milestones, tasks, and dependencies
          using project management tools facilitated efficient workflow
          coordination, bug tracking, and quality assurance, ensuring timely
          delivery of game features and content updates. A well-structured
          timeline helped keep the team on track, allowed for better planning
          and resource management, and ensured that each phase of development
          was completed in a timely manner.
        </p>
      </div>
    </TracingBeam>
  );
}
