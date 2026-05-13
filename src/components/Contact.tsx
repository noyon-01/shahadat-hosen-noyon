"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

const Contact = () => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-[#070716] overflow-hidden"
    >
      {/* subtle grid background */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-xs tracking-[0.35em] uppercase text-gray-400 font-semibold">
          Contact
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
            Touch
          </span>
        </h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto mt-4">
          Open for collaborations, freelance work, or just a technical chat.
          Let’s build something great.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT PANEL */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-7"
        >
          {/* CONTACT CARD */}
          <motion.div
            variants={item}
            className="relative rounded-3xl p-[1px] bg-gradient-to-r from-purple-500/60 via-cyan-500/20 to-transparent"
          >
            <div className="rounded-3xl bg-[#0b0b1a]/80 backdrop-blur-xl border border-white/10 p-6 space-y-7">
              {/* EMAIL */}
              <div className="flex gap-4 items-center">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <FiMail />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 tracking-widest">
                    EMAIL
                  </p>
                  <p className="text-white text-sm font-semibold">
                    noyon.web.1@gmail.com
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-4 items-center">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FiPhone />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 tracking-widest">
                    PHONE
                  </p>
                  <p className="text-white text-sm font-semibold">
                    +880 1585735520
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex gap-4 items-center">
                <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 tracking-widest">
                    LOCATION
                  </p>
                  <p className="text-white text-sm font-semibold">
                    Chattogram, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            variants={item}
            className="relative rounded-3xl p-[1px] bg-gradient-to-r from-white/10 via-purple-500/20 to-transparent"
          >
            <div className="rounded-3xl bg-[#0b0b1a]/80 backdrop-blur-xl border border-white/10 p-5 flex justify-between items-center">
              <span className="text-xs text-gray-400 tracking-widest">
                SOCIAL
              </span>

              <div className="flex gap-4 text-gray-400 text-lg">
                <a
                  href="https://www.linkedin.com/in/shahadat-hosen-noyon/"
                  target="_blank"
                >
                  <FaLinkedinIn className="hover:text-white transition" />
                </a>
                <a href="https://github.com/noyon-01" target="_blank">
                  <FaGithub className="hover:text-white transition" />
                </a>
                <a
                  href="https://www.facebook.com/shahadathosennoyon89"
                  target="_blank"
                >
                  <FaFacebookF className="hover:text-white transition" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* STATUS */}
          <div className="rounded-2xl bg-[#0b0b1a]/70 border border-white/10 p-4 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <p className="text-xs text-green-400">
              Available for work{" "}
              <span className="text-gray-400 block">
                Response within 24 hrs
              </span>
            </p>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-purple-500/70 via-cyan-500/20 to-transparent">
            <div className="rounded-3xl bg-[#0b0b1a]/80 backdrop-blur-xl border border-white/10 p-8">
              <h2 className="text-sm tracking-widest text-gray-400 mb-6">
                SEND A MESSAGE
              </h2>

              <form className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    placeholder="YOUR NAME"
                    className="w-full px-5 py-4 rounded-2xl bg-black/30 border border-white/10 text-white text-sm outline-none focus:border-purple-500/60"
                  />

                  <input
                    placeholder="YOUR EMAIL"
                    className="w-full px-5 py-4 rounded-2xl bg-black/30 border border-white/10 text-white text-sm outline-none focus:border-purple-500/60"
                  />
                </div>

                <input
                  placeholder="SUBJECT"
                  className="w-full px-5 py-4 rounded-2xl bg-black/30 border border-white/10 text-white text-sm outline-none focus:border-purple-500/60"
                />

                <textarea
                  rows={4}
                  placeholder="MESSAGE"
                  className="w-full px-5 py-4 rounded-2xl bg-black/30 border border-white/10 text-white text-sm outline-none focus:border-purple-500/60 resize-none"
                />

                <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    //     <section  className="relative py-28 px-6 bg-[#070716] overflow-hidden">

    //   {/* subtle grid */}
    //   <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px]" />

    //   <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

    //     {/* LEFT */}
    //     <div className="space-y-6">

    //       {/* CONTACT CARD */}
    //       <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-purple-500/50 via-cyan-500/20 to-transparent">
    //         <div className="rounded-3xl bg-[#0b0b1a]/80 backdrop-blur-xl border border-white/10 p-6 space-y-6">

    //           {/* items */}
    //           {[
    //             { icon: "mail", label: "EMAIL", value: "yourmail@gmail.com", color: "purple" },
    //             { icon: "phone", label: "PHONE", value: "+880 123456789", color: "cyan" },
    //             { icon: "map", label: "LOCATION", value: "Bangladesh", color: "pink" },
    //           ].map((item, i) => (
    //             <div key={i} className="flex gap-4 items-center">
    //               <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400" />
    //               <div>
    //                 <p className="text-[10px] text-gray-400 tracking-widest">{item.label}</p>
    //                 <p className="text-white text-sm font-semibold">{item.value}</p>
    //               </div>
    //             </div>
    //           ))}

    //         </div>
    //       </div>

    //       {/* SOCIAL */}
    //       <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-white/10 via-purple-500/20 to-transparent">
    //         <div className="rounded-3xl bg-[#0b0b1a]/80 backdrop-blur-xl border border-white/10 p-5 flex justify-between">
    //           <span className="text-xs text-gray-400">SOCIAL</span>
    //           <div className="flex gap-4 text-gray-400">
    //             {/* icons */}
    //           </div>
    //         </div>
    //       </div>

    //       {/* STATUS */}
    //       <div className="rounded-2xl bg-[#0b0b1a]/70 border border-white/10 p-4 flex items-center gap-3">
    //         <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
    //         <p className="text-xs text-green-400">
    //           Available for work
    //           <span className="text-gray-400 block">Response within 24 hrs</span>
    //         </p>
    //       </div>

    //     </div>

    //     {/* RIGHT FORM */}
    //     <div className="lg:col-span-2 relative p-[1px] rounded-3xl bg-gradient-to-r from-purple-500/60 via-cyan-500/20 to-transparent">

    //       <div className="rounded-3xl bg-[#0b0b1a]/80 backdrop-blur-xl border border-white/10 p-8">

    //         <h2 className="text-xs tracking-widest text-gray-400 mb-6">
    //           SEND A MESSAGE
    //         </h2>

    //         <form className="space-y-5">

    //           <input className="input" placeholder="YOUR NAME" />
    //           <input className="input" placeholder="YOUR EMAIL" />
    //           <input className="input" placeholder="SUBJECT" />

    //           <textarea className="input h-40 resize-none" placeholder="MESSAGE" />

    //           <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white font-semibold">
    //             Send Message →
    //           </button>

    //         </form>

    //       </div>
    //     </div>

    //   </div>
    // </section>
  );
};

export default Contact;
