import ScrollAnimator from "../../components/scroll-animator";
import Home3Nav from "../../components/home3/Home3Nav";
import Home3Hero from "../../components/home3/Home3Hero";
import Home3WhatIDo from "../../components/home3/Home3WhatIDo";
import Home3Resume from "../../components/home3/Home3Resume";
import Home3Portfolio from "../../components/home3/Home3Portfolio";
import Home3Footer from "../../components/home3/Home3Footer";
import { getDomain, getProfile, updateProfile } from "../../lib/data";
import "./home3.css";

function pickCvUrl(links: Record<string, unknown>[]) {
  if (!links?.length) return null;
  const cv = links.find((l) =>
    /cv|resume|curriculum|download/i.test(
      String(
        (l as { title?: string; label?: string; name?: string }).title ||
          (l as { label?: string }).label ||
          (l as { name?: string }).name ||
          ""
      )
    )
  );
  if (!cv) return null;
  const row = cv as { url?: string; link?: string };
  return row.url || row.link || null;
}

export default async function Home3Page() {
  await updateProfile();
  const c = await getProfile();
  const domain = getDomain();
  const profile = c.data.profile;
  const education = c.data.education;
  const experience = c.data.experience;
  const skills = c.data.skills;
  const gallery = c.data.gallery;
  const links = c.data.links;
  const social = c.data.socials;
  const cvUrl = pickCvUrl(links as Record<string, unknown>[]);

  return (
    <div className="home3-page">
      <ScrollAnimator />
      <Home3Nav domain={domain} />
      <main>
        <Home3Hero profile={profile} gallery={gallery} cvUrl={cvUrl} />
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
