import { getProfile } from "@/lib/data";

export async function generateMetadata() {
  const c = await getProfile();
  const profile = c.data.profile;

  return {
    title: `ProfileSuite — ${profile.name} · Portfolio (alt)`,
    description: profile.introduction,
    keywords: profile.slogan,
  };
}

export default function Home2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
