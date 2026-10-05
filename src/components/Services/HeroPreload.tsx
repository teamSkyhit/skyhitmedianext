// Server Component — preloads the LCP hero image for service pages
interface ServiceHeroPreloadProps {
  deskImg: string;
  mobImg: string;
}

export default function ServiceHeroPreload({ deskImg, mobImg }: ServiceHeroPreloadProps) {
  return (
    <>
      <link
        rel="preload"
        as="image"
        fetchPriority="high"
        href={deskImg}
        media="(min-width: 768px)"
      />
      <link
        rel="preload"
        as="image"
        fetchPriority="high"
        href={mobImg}
        media="(max-width: 767px)"
      />
    </>
  );
}
