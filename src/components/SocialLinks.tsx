const networks = [
  { name: "Skoob", logo: "/logos/skoob.ico", url: "https://www.skoob.com.br/pt/book/122696536" },
  {
    name: "Goodreads",
    logo: "/logos/goodreads.svg",
    url: "https://www.goodreads.com/book/show/251203279-ocupado-demais-para-voc",
  },
  {
    name: "Instagram",
    logo: "/logos/instagram.svg",
    url: "https://www.instagram.com/ocupadoparavoce",
  },
  { name: "TikTok", logo: "/logos/tiktok.svg", url: "https://www.tiktok.com/@ocupadoparavoce" },
];

export function SocialLinks() {
  return (
    <ul className="social-links" aria-label="ODPV nas redes">
      {networks.map((network) => (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <img src={network.logo} alt="" width={20} height={20} />
            {network.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
