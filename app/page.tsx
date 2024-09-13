import Image from "next/image";
import Link from "next/link";
import { Figma, Github, Linkedin, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />
      <main className="flex-grow">
        <IntroSection />
        <FeaturesSection />
        <AboutSection />
      </main>
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Whispers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function TopNav() {
  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="/#hero" className="text-xl font-bold">
          Whispers
        </a>
        <div className="space-x-4">
          <a href="/#features" className="hover:text-gray-300">
            Features
          </a>
          <a href="/#about" className="hover:text-gray-300">
            About
          </a>
        </div>
      </nav>
    </header>
  );
}

function IntroSection() {
  return (
    <section
      id="hero"
      className="relative  h-screen flex items-center   justify-center text-white"
    >
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, white 20%, black 100%)",
        }}
        className="absolute w-screen"
      ></div>
      <Image
        src="/images/whisper-hero.png"
        alt="Whispers Cover"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 blur-sm"
      />
      <div className="absolute inset-0 bg-[#151515] opacity-50"></div>
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-6xl font-bold">Whispers</h1>
        <p className="text-2xl px-2">
          Share your thoughts, anonymously and securely
        </p>
        <Link
          href="/inbox"
          target="_blank"
          className="inline-block bg-[#06D440] text-gray-900 px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 "
        >
          Start Whispering
        </Link>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              name: "Organized Inbox",
              description:
                "Easily view messages from your inbox in a clean and organized manner.",
              image: "/images/anonymous-message.png",
            },
            {
              name: "Managing Inboxes",
              description:
                "You can create as many inboxes as you want, with each of them stramlining to specifics.",
              image: "/images/manage-inbox.png",
            },
            {
              name: "Anonymous Messaging",
              description:
                "Send messages without revealing your identity. Our platform ensures your privacy.",
              image: "/images/send-anonymous.png",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white border-white border rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={feature.image}
                alt={feature.name}
                width={400}
                height={300}
                className="w-full h-[13rem] object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-black font-semibold mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#151515] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Whispers</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8">
            Whispers was born out of a desire to create a safe space for people
            to express themselves freely. In a world where privacy is
            increasingly scarce, we believe in the power of anonymous
            communication to foster genuine connections and open dialogues.
          </p>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 py-2">Our Team</h3>
            <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-center space-x-6">
              {[
                {
                  name: "Ukeme",
                  role: "Project Lead, Backend Engineer",
                  links: [
                    "https://www.github.com/Ukeme-Edet",
                    "https://www.linkedin.com/in/ukeme-edet-12961a227",
                    "https://twitter.com/ukeme__edet",
                  ],
                },
                {
                  name: "Eniola",
                  role: "Frontend Engineer",
                  links: [
                    "https://www.github.com/Enielect",
                    "https://www.linkedin.com/in/eniola-abayomi-045605232",
                    "https://twitter.com/enielect",
                  ],
                },
              ].map((member) => (
                <div className="" key={member.name}>
                  <p>{member.name}</p>
                  <p>({member.role})</p>
                  <div className="flex justify-center py-2 space-x-2">
                    <Link
                      href={member.links[0]}
                      className="hover:text-gray-300"
                    >
                      <Github className="w-6 h-6" />
                    </Link>
                    <Link
                      href={member.links[1]}
                      className="hover:text-gray-300"
                    >
                      <Linkedin className="w-6 h-6" />
                    </Link>
                    <Link
                      href={member.links[2]}
                      className="hover:text-gray-300"
                    >
                      <Twitter className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              ))}

              <div>
                <p>Bukunmi</p>
                <p>(UI/UX Engineer)</p>
                <div className="flex justify-center py-2 space-x-2">
                  {/* link to my gmail */}
                  bukunmiogunneye0@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-3 text-lg">View on GitHub</div>

            <Link
              href="https://github.com/Enielect/anonymous"
              className="inline-block bg-white mr-4 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              Frontend
            </Link>
            <Link
              href="https://github.com/Ukeme-Edet/Whispers-Backend"
              className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              Backend
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
