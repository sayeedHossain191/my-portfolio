import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "MedExpress",
      description:
        "MedExpress is a medical consultation service website. Users can add, update, and delete their own services, watch others' services, view service details, book specific services, and update service status.",
      image:
        "https://images.unsplash.com/photo-1593442257276-1895e27c8ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      tags: [
        "React",
        "TailwindCSS",
        "MongoDb",
        "Node Js",
        "Firebase",
        "Express",
      ],
      github: "https://github.com/sayeedHossain191/medExpress-Client",
      live: "https://b9a11-consultation-client.web.app/",
    },
    {
      title: "HeadRoom",
      description:
        "HeadRoom is a real estate website based on residential properties. Users can buy or rent properties based on their needs.",
      image:
        "https://images.unsplash.com/photo-1604591259403-81d6c9cf87d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      tags: [
        "React",
        "TailwindCSS",
        "MongoDb",
        "Node Js",
        "Firebase",
        "Express",
      ],
      github: "https://github.com/sayeedHossain191/headroom",
      live: "https://b9a9-real-estate-36f90.web.app",
    },
    {
      title: "EchoChamber",
      description:
        "EchoChamber is a forum-based website where people can hold conversations in the form of posted messages.",
      image:
        "https://images.unsplash.com/photo-1640963269654-3fe248c5fba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      tags: [
        "React",
        "TailwindCSS",
        "MongoDb",
        "Node Js",
        "Firebase",
        "Express",
      ],
      github: "https://github.com/sayeedHossain191/echoChamber-client",
      live: "https://b9a12-forum-client.web.app/",
    },
    {
      title: "Extra Project",
      description:
        "Add another project here to fill the 2x2 grid. You can include image, tags, live and github links.",
      image: "",
      tags: ["React", "TailwindCSS"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      ref={ref}
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          A collection of my recent work and personal projects
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass-card rounded-3xl overflow-hidden group flex flex-col"
          >
            {/* Image container with fixed height */}
            <div className="relative h-64 bg-gray-800 flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="text-gray-400 text-sm">No Image Available</div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  className="glass-card p-3 rounded-full hover:scale-110 transition-transform"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a
                  href={project.live}
                  className="glass-card p-3 rounded-full hover:scale-110 transition-transform"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-purple-300 border border-white/10"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Links below */}
              <div className="flex justify-between mt-6">
                <div className="flex items-center gap-2">
                  <ExternalLink className="text-gray-400 w-5 h-5" />
                  <a
                    href={project.live}
                    className="link link-hover text-blue-400"
                  >
                    Live Preview
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="text-gray-400 w-5 h-5" />
                  <a
                    href={project.github}
                    className="link link-hover text-blue-400"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
