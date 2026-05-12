import ScrollAnimator from "../../components/scroll-animator";
import Home3Nav from "../../components/home3/Home3Nav";
import Home3Hero from "../../components/home3/Home3Hero";
import Home3WhatIDo from "../../components/home3/Home3WhatIDo";
import Home3Resume from "../../components/home3/Home3Resume";
import Home3Portfolio from "../../components/home3/Home3Portfolio";
import Home3Footer from "../../components/home3/Home3Footer";
import {
  getHomeLayoutMockProfilePayload,
  homeLayoutMockDomain,
} from "../../lib/homeLayoutMock";
import "./home3.css";

export default async function Home3Page() {
  const c = getHomeLayoutMockProfilePayload();
  const domain = homeLayoutMockDomain();
  const profile = c.data.profile;
  const education = c.data.education;
  const experience = c.data.experience;
  const skills = c.data.skills;
  const gallery = c.data.gallery;
  const social = c.data.socials;

  return (
    <div className="home3-page">
      <ScrollAnimator />
      <Home3Nav domain={domain} />
      <main>
        <Home3Hero profile={profile} gallery={gallery} />
        {skills.length > 0 && <Home3WhatIDo skills={skills} />}
        {(experience.length > 0 || education.length > 0) && (
          <Home3Resume experiences={experience} education={education} />
        )}
        {gallery.length > 0 && <Home3Portfolio gallery={gallery} />}
        <Home3Footer domain={domain} social={social} profile={profile} />
      </main>
    </div>
  );
}
