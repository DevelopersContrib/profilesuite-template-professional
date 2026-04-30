import { getProfile } from "@/lib/data";

export async function generateMetadata() {
  const c = await getProfile();
  const profile = c.data.profile;

  return {
    title: `ProfileSuite — ${profile.name} · CV (Leven-style)`,
    description: profile.introduction,
    keywords: profile.slogan,
  };
}

export default function Home3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
