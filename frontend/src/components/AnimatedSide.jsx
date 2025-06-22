import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const AnimatedSide = () => {
  return (
    <div className="w-full h-[40vh] md:h-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 flex items-center justify-center relative overflow-hidden text-white px-4">
      {/* Floating Chat Icon */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="bg-white/10 backdrop-blur-lg p-6 rounded-full shadow-lg"
      >
        <MessageSquare className="w-10 h-10 md:w-12 md:h-12 text-white" />
      </motion.div>

      {/* Typing text or slogan */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-4 md:bottom-10 text-center w-full"
      >
        <h2 className="text-lg md:text-2xl font-bold">Welcome to ChatSphere 🗨️</h2>
        <p className="text-sm md:text-base text-white/80 mt-1">Connect. Converse. Collaborate.</p>
      </motion.div>
    </div>
  );
};

export default AnimatedSide