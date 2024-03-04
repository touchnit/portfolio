import Link from "next/link";
export default function Home() {
  return (
    <main className="p-12">
      <h1 className="font-sans font-light text-4xl md:text-9xl">
        Hi ! <span className="rotate">👋</span>
        <br />I am <span className="font-semibold">Marc Abadie</span>
      </h1>
      <p className="font-light text-lg max-w-[40rem] mt-10">
        I am a self-taught creative developer who started coding as a teenager
        and never stopped learning new things since.
        <br />
        <br /> I was born in 1991 in the South-West of France and I am based in
        Berlin since 2013.
        <br />
        <br /> I am curious, team-oriented and always looking for new
        challenges. <br />
        <br />
        <span className="font-bold">HTML</span>,{" "}
        <span className="font-bold">CSS</span> and{" "}
        <span className="font-bold">Javascript</span> have no secrets for me,
        and I'm used to code with <span className="font-bold">React </span>
        and frameworks based on it such as{" "}
        <span className="font-bold">Next.js</span>. <br />
        <br />
        For creative frontends I use visual libraries such as{" "}
        <span className="font-bold">Three.js</span> and{" "}
        <span className="font-bold">Framer Motion</span>. <br />
        <br />I am a fullstack developer, so I use{" "}
        <span className="font-bold">Typescript</span> and{" "}
        <span className="font-bold">Node.js</span> for heavy projects demanding
        solid back-end solutions. For CMS, I often work on{" "}
        <span className="font-bold">Wordpress</span> for small projects and{" "}
        <span className="font-bold">Strapi</span> or{" "}
        <span className="font-bold">Hygraph</span> for more scalable solutions.
        <br />
        <br /> I am also a{" "}
        <Link href="https://soundcloud.com/marec-music">music producer</Link>,
        sound designer, DJ and party promoter.
      </p>
      <h2 className="my-10 text-4xl">A few clients</h2>
      <ul className="font-sans text-2xl font-light">
        <li className="hover:italic">
          <Link href="https://common-ground.io">Common Ground</Link>
        </li>
        <li className="hover:italic">
          <Link href="https://europeanfilmacademy.org">
            European Film Academy
          </Link>
        </li>
        <li className="hover:italic">
          <Link href="https://petitcode.com/en">Petit Code</Link>
        </li>
        <li className="hover:italic">
          <Link href="https://onboardmusic.net">Onboard Music</Link>
        </li>
        <li className="hover:italic">
          <Link href="https://softcover.work">Soft Cover</Link>
        </li>
      </ul>

      <h3 className="mt-20 text-xl font-light">
        Don't hesitate to contact me at{" "}
        <a
          className="underline underline-offset-3 hover:italic"
          href="mailto:marc.abadie64@gmail.com"
        >
          marc.abadie64@gmail.com
        </a>
      </h3>
    </main>
  );
}
