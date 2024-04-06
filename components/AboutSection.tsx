import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML", rating: "8/10" },
  { skill: "CSS", rating: "7/10" },
  { skill: "JavaScript", rating: "6/10" },
  { skill: "TypeScript", rating: "4/10" },
  { skill: "PHP", rating: "6/10" },
  { skill: "React", rating: "3/10" },
  { skill: "Next.js", rating: "4/10" },
  { skill: "Tailwind CSS", rating: "6/10" },
  { skill: "GitHub", rating: "7/10" },
  { skill: "Node.js", rating: "6/10" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Wesley Veeningen, and I am a {" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software development student based in Rotterdam, the Netherlands.
            </p>
            <br />
            <p>
              I am currently pursuing my studies at the Grafisch Lyceum Rotterdam, focusing on software development.


            </p>
            <br />
            <p>
              I have a diverse range of interests and passions that keep me engaged. Whether it's hitting the gym, attending festivals, or delving into programming during my free time, I am constantly seeking new experiences and opportunities for growth.
            </p>
            <br />
            <p>
              I firmly believe in {" "}
              <span className="font-bold text-teal-500">
                continuous growth
              </span>{" "}
              and strive to embody this principle. With a passion for technology and a desire to push the boundaries of what is possible, I am excited to explore where my career in software development will take me. I am always eager to seize new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                    <strong className="ml-2 font-bold">{item.rating}</strong>
                  </p>
                )
              })}
            </div>
            <Image
              src="/aboutme.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
