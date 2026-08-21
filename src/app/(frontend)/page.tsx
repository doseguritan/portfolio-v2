import ProfileSection from "@/components/sections/ProfileSection";

import SectionSeparator from "@/components/ui/SectionSeperator";
import BioSection from "@/components/sections/BioSection";
import SocialLinks from "@/components/sections/SocialLinks";
import AboutSection from "@/components/sections/AboutSection";
import TopSection from "@/components/sections/TopSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactMeSection from "@/components/sections/ContactMeSection";
import FooterSection from "@/components/sections/FooterSection";

import LandingAnimationWrapper from "@/components/LandingAnimationWrapper";

import config from '@/payload.config';
import { getPayload } from "payload";

export default async function Home() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const {docs: experiences} = await payload.find({
    collection: 'experiences',
    sort: '-createdAt',
    limit: 100,
    overrideAccess: true,
  });
  const {docs: aboutsection} = await payload.find({
    collection: 'aboutsection',
    sort: 'sortBy',
    limit: 100,
    overrideAccess: true,
  });

  return (
    <LandingAnimationWrapper>
      <TopSection />

      <ProfileSection />
      <SectionSeparator className="full-line-bottom" />

      <BioSection />
      <SectionSeparator className="" />
      <SocialLinks />
      <SectionSeparator className="full-line-bottom" />
      <AboutSection about={aboutsection} />
      <SectionSeparator className="full-line-bottom" />
      <TechStackSection />
      {/* <SectionSeparator className="full-line-bottom" /> */}
      {/* <ProjectsSection /> */}
      <SectionSeparator className="full-line-bottom" />
      <ExperienceSection experiences={experiences} />
      <SectionSeparator className="full-line-bottom" />
      <ContactMeSection />
      <SectionSeparator className="full-line-bottom" />
      <FooterSection />
      <SectionSeparator className="full-line-bottom" />
    </LandingAnimationWrapper>
  );
}
