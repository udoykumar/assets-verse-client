import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero shadow rounded-2xl mt-10">
      <div className="hero-content p-6 flex-col lg:flex-row-reverse gap-12">
        <motion.img
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src=""
          className="max-w-lg rounded-lg shadow-2xl w-full"
        />

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="md:text-5xl text-2xl font-bold leading-tight">
            Smart Asset Management <br />
            for Modern Companies
          </h1>
          <p className="py-6 md:text-lg text-gray-600">
            Streamline asset tracking, employee requests, package upgrades, and
            more — all in one platform designed for corporate teams.
          </p>
          <a href="/register-hr" className="btn btn-primary btn-lg">
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
