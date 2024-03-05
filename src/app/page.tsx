"use client";
import Link from "next/link";
import { motion, stagger } from "framer-motion";

const variants = {
  enter: { opacity: 1 },
};

const staggerChildren = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 3,
      staggerChildren: 0.7,
    },
  },
};

const staggeredChildren = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 3,
    },
  },
};

const noStagger = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 0.1,
    },
  },
};

const hoverAnim = {
  fontWeight: 900,
  transition: { duration: 0.3, type: "easeInOut" },
};

export default function Home() {
  return (
    <motion.main className="p-6 md:p-12 flex text-white">
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          opacity: 1,
          height: "auto",
        }}
        transition={{
          height: {
            delay: 0.2,
            duration: 8,
            type: "easeIn",
          },
          opacity: {
            duration: 0.25,
            delay: 0.15,
          },
        }}
        className="border-l-2 md:border-l-4 border-white pl-5 md:px-5 "
      ></motion.div>
      <div>
        <motion.h1
          variants={variants}
          initial={{ opacity: 0 }}
          animate="enter"
          transition={{ type: "linear", duration: 1 }}
          className="font-sans font-light text-5xl md:text-9xl tracking-tighter"
        >
          Hi !{" "}
          <motion.span
            variants={variants}
            initial={{ opacity: 0 }}
            animate="enter"
            transition={{ type: "easeIn", duration: 3 }}
            className="rotate"
          >
            👋
          </motion.span>
        </motion.h1>
        <motion.h1
          variants={variants}
          initial={{ opacity: 0 }}
          animate="enter"
          transition={{ type: "easeIn", duration: 2, delay: 1 }}
          className="font-sans font-light text-5xl md:text-9xl tracking-tighter"
        >
          <span className="block md:inline">I am</span>{" "}
          <span className="block md:inline font-semibold text-6xl">
            Marc Abadie
          </span>
        </motion.h1>
        <motion.div
          variants={variants}
          initial={{ opacity: 0 }}
          animate="enter"
          transition={{ type: "easeIn", duration: 1, delay: 2 }}
        >
          <motion.p
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="font-light text-lg leading-7 max-w-[40rem] mt-10"
          >
            <motion.span variants={staggeredChildren}>
              I am a self-taught creative developer who started coding as a
              teenager and never stopped learning new things since. I was born
              in 1991 in the South-West of France and I am based in Berlin since
              2013.
            </motion.span>
            <br />
            <br />{" "}
            <motion.span variants={staggeredChildren}>
              I am curious, team-oriented and always looking for new challenges.
            </motion.span>{" "}
            <br />
            <br />
            <motion.span variants={staggeredChildren}>
              <motion.span variants={noStagger} className="font-semibold">
                HTML
              </motion.span>
              ,{" "}
              <motion.span variants={noStagger} className="font-semibold">
                CSS
              </motion.span>{" "}
              and{" "}
              <motion.span variants={noStagger} className="font-semibold">
                Javascript
              </motion.span>{" "}
              have no secrets for me, and I'm used to code with{" "}
              <motion.span variants={noStagger} className="font-semibold">
                React{" "}
              </motion.span>
              and{" "}
              <motion.span variants={noStagger} className="font-semibold">
                Next.js
              </motion.span>
              .
            </motion.span>
            <br />
            <br />
            <motion.span variants={staggeredChildren}>
              For creative frontends I use motion and 3D libraries such as{" "}
              <motion.span variants={noStagger} className="font-semibold">
                Three.js
              </motion.span>{" "}
              and{" "}
              <motion.span variants={noStagger} className="font-semibold">
                Framer Motion
              </motion.span>
              .
            </motion.span>
            <br />
            <br />
            <motion.span variants={staggeredChildren}>
              I am a fullstack developer, so I use{" "}
              <motion.span variants={noStagger} className="font-semibold">
                Typescript
              </motion.span>{" "}
              and{" "}
              <motion.span variants={noStagger} className="font-semibold">
                Node.js
              </motion.span>{" "}
              for heavy projects demanding solid back-end solutions. For CMS, I
              often work on{" "}
              <motion.span variants={noStagger} className="font-semibold">
                Wordpress
              </motion.span>{" "}
              for small projects and{" "}
              <motion.span variants={noStagger} className="font-semibold">
                Strapi
              </motion.span>{" "}
              or{" "}
              <motion.span variants={noStagger} className="font-semibold">
                Hygraph
              </motion.span>{" "}
              for more scalable solutions.
            </motion.span>
            <br />
            <br />
            <motion.span variants={staggeredChildren}>
              I am also a{" "}
              <Link href="https://soundcloud.com/marec-music">
                music producer
              </Link>
              , sound designer, DJ and party promoter.
            </motion.span>
          </motion.p>
        </motion.div>
        <motion.h2
          variants={variants}
          initial={{ opacity: 0 }}
          animate="enter"
          transition={{ type: "easeIn", duration: 3, delay: 5 }}
          className="my-10 text-5xl tracking-tighter font-medium max-w-[40rem]"
        >
          A few clients
        </motion.h2>
        <motion.ul
          variants={variants}
          initial={{ opacity: 0 }}
          animate="enter"
          transition={{ type: "easeIn", duration: 3, delay: 5.5 }}
          className="font-sans text-2xl font-light max-w-[40rem]"
        >
          <motion.li whileHover={hoverAnim}>
            <Link href="https://common-ground.io" target="_blank">
              Common Ground
            </Link>
          </motion.li>
          <motion.li whileHover={hoverAnim}>
            <Link href="https://europeanfilmacademy.org" target="_blank">
              European Film Academy
            </Link>
          </motion.li>
          <motion.li whileHover={hoverAnim}>
            <Link href="https://petitcode.com/en" target="_blank">
              Petit Code
            </Link>
          </motion.li>
          <motion.li whileHover={hoverAnim}>
            <Link href="https://onboardmusic.net" target="_blank">
              Onboard Music
            </Link>
          </motion.li>
          <motion.li whileHover={hoverAnim}>
            <Link href="https://softcover.work" target="_blank">
              Soft Cover
            </Link>
          </motion.li>
        </motion.ul>
        <motion.h3
          variants={variants}
          initial={{ opacity: 0 }}
          animate="enter"
          transition={{ type: "easeIn", duration: 3, delay: 8 }}
          className="mt-10 text-lg font-light"
        >
          A project, an idea, a question ? Holla at{" "}
          <motion.a
            whileHover={hoverAnim}
            className="underline underline-offset-3"
            href="mailto:marc.abadie64@gmail.com"
          >
            marc.abadie64@gmail.com
          </motion.a>
        </motion.h3>
      </div>
    </motion.main>
  );
}
