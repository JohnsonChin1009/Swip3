"use client";

import ProfileCard, { ColorScheme } from "@/components/custom/ProfileCard";
import OurTeamHeader from "./OurTeamHeader";

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  color: ColorScheme;
  imageSrc: string;
  socialLink: string;
}

export default function OurTeam() {
  const teamMembers: TeamMember[] = [
    { name: "Joey Lau", role: "Product & AI", description: "She makes data talks and product walks", color: "purple", imageSrc: "/our-team/joey-lau.png", socialLink: "https://www.linkedin.com/in/laujoeying/" },
    { name: "Elise Chiong", role: "Product Design", description: "The woman behind this website and the app", color: "pink", imageSrc: "/our-team/elise-chiong.png", socialLink: "https://www.linkedin.com/in/elisechiong08/" },
    { name: "Nic Boey", role: "Product & Research", description: "Des", color: "blue", imageSrc: "/our-team/nic-boey.png", socialLink: "https://www.linkedin.com/in/nicboey/" },
    { name: "Weoy Yang", role: "Engineering", description: "The backend magician", color: "orange", imageSrc: "/our-team/weoy-yang.png", socialLink: "https://www.linkedin.com/in/weoy-yang-ang/" },
    { name: "Johnson Chin", role: "Engineering", description: "The frontend wizard", color: "green", imageSrc: "/our-team/johnson-chin.png", socialLink: "https://www.linkedin.com/in/johnson-chin1009/" },
  ];

  return (
    <section id="our-team">
      <div className="my-4 md:my-10 lg:my-12 xl:my-20">
        <OurTeamHeader />
        <div className="p-4 flex flex-col items-center justify-center gap-y-4">
          <div className="flex gap-4">
            {/* First 2 Members */}
            {teamMembers.slice(0, 2).map((member, index) => (
              <ProfileCard key={index} {...member} />
            ))}
          </div>
          <div className="flex gap-4">
            {/* Last 3 Members */}
            {teamMembers.slice(2, 5).map((member, index) => (
              <ProfileCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
