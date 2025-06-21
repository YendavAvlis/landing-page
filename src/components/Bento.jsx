import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiTiktok, SiYoutube } from "react-icons/si";
import logo from '../assets/logo.svg'
import pic from '../assets/profile-pic.jpeg'
import { div } from "framer-motion/client";
import { skillsets } from "../constants";

export const Bento = () => {
  return (
    <div className="min-h-screen bg-pri-40 px-4 py-12 text-neu-10">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <Block className='col-span-12'>
          <h1 className="text-4xl font-bold">Skill Set</h1>
        </Block>
        <SkillsetBlock />
        <ContactBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-sec-10/25 bg-pri-30 p-6",
        className
      )}
      {...rest}
    />
  );
};

const SkillsetBlock = () => (
  <>
    {
      skillsets.map((skill) => (
        <Block key={skill.id} className={`col-span-12 sm:col-span-6 md:col-span-4 min-h-64 ${skill.title === 'Web Design' && 'row-span-2 md:row-span-1'}`}>
          <div className={`flex flex-col pt-20 ${skill.title === 'Web Design' && 'sm:pt-'}`}>
            <h3 className="py-2 text-3xl font-medium">{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
          <div className="flex py-4">
            <a href="" className="flex items-center text-sec-40 gap-1.5 text-lg">See More <FiArrowRight /></a>
          </div>

        </Block>

      ))
    }

  </>
)

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6 backdrop-blur-2xl border-[0.015rem] border-sec-10/50">
    <main>
      <img
      src={pic}
      alt="avatar"
      className="mb-4 size-20 rounded-lg"
      />
      <h1 className="mb-12 mt-8 text-4xl font-medium ">
        {'👋'} I'm Vadney Da Silva.{" "}<br />
        <span className="text-zinc-400 text-2xl">
          I fuse <span className="text-sec-10">(Web, Logo & 3D Motion) Design</span> to come up with creative solutions.
        </span>
      </h1>
      <a
        href="#"
        className="flex items-center gap-1 text-red-300 hover:underline"
      >
        Contact me <FiArrowRight />
      </a>
    </main>

  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 border-[0.025rem] border-sec-10 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiLinkedin />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-pri-40 border-[0.025rem] border-sec-10 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-neu-10"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-12 bg-zinc-50 md:col-span-6"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiTiktok />
      </a>
    </Block>

  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.
      </span>
    </p>
  </Block>
);

const Logo = () => {
  return (

    <header>
      <img
        src={logo}
        alt="Logo"
        width={64}
        className="mx-auto mb-12"
      />
    </header>

  );
};

const ContactBlock = () => {
  return(
    <Block className='col-span-12'>
      <div className="min-h-[200px] flex items-center justify-center">
        <h1 className="text-5xl font-medium">Let&apos;s Talk</h1>
      </div>
    </Block>
  )
}

const Footer = () => {
  const year = new Date()
  return (
    <footer className="mt-12">
      <p className="text-center text-neu-10 text-sm font-medium leading-relaxed">
        &copy; {year.getFullYear()} Vadney Da Silva
      </p>
    </footer>
  );
};