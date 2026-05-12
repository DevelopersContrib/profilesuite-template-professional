import ScrollAnimator from "../../components/scroll-animator";
import Home2Nav from "../../components/home2/Home2Nav";
import Home2Hero from "../../components/home2/Home2Hero";
import Home2About from "../../components/home2/Home2About";
import Home2Skills from "../../components/home2/Home2Skills";
import Home2Gallery from "../../components/home2/Home2Gallery";
import Home2Biography from "../../components/home2/Home2Biography";
import Home2Footer from "../../components/home2/Home2Footer";
import {
  getHomeLayoutMockProfilePayload,
  homeLayoutMockDomain,
} from "../../lib/homeLayoutMock";
import "./home2.css";

export default async function Home2Page() {
  const c = getHomeLayoutMockProfilePayload();
  const domain = homeLayoutMockDomain();
  const profile = c.data.profile;
  const education = c.data.education;
  const experience = c.data.experience;
  const skills = c.data.skills;
  const gallery = c.data.gallery;
  const social = c.data.socials;

  return (
    <div className="home2-page">
      <ScrollAnimator />
      <Home2Nav domain={domain} />
      <main className="home2-main">
        <Home2Hero profile={profile} gallery={gallery} />
        <Home2About profile={profile} />
        {skills.length > 0 && <Home2Skills skills={skills} />}
        {gallery.length > 0 && <Home2Gallery gallery={gallery} />}
        <Home2Biography experiences={experience} education={education} />
        <Home2Footer domain={domain} social={social} />
      </main>
    </div>
  );
}
