/**
 * Build image src for profile/gallery items. Supports absolute URLs (mock / CDN)
 * or legacy keys resolved with NEXT_PUBLIC_S3_URL.
 */
export function resolveMediaSrc(filename) {
  if (filename == null || filename === "") return null;
  const s = String(filename).trim();
  if (/^https?:\/\//i.test(s)) return s;
  const base = process.env.NEXT_PUBLIC_S3_URL;
  if (!base) return s;
  return `${base.replace(/\/$/, "")}/${s.replace(/^\//, "")}`;
}

/** Matches Home2/Home3 profile_image handling for stored keys vs absolute URLs */
export function resolveProfileImageSrc(profile) {
  if (!profile?.profile_image) return null;
  const p = String(profile.profile_image).trim();
  if (/^https?:\/\//i.test(p)) return p;
  const base = process.env.NEXT_PUBLIC_S3_URL;
  if (!base) return null;
  return p.includes("profile")
    ? `${base}/${p}`
    : `${base}/profile/${p}`;
}
