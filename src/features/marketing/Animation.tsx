import { motion } from "framer-motion";

export const Animation = () => {
  return (
    <>
      <motion.div
        initial={{
          x: 100,
          y: 100,
        }}
        animate={{
          x: 150,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
          type: "spring",
        }}
      >
        <svg
          className="my-auto z-10"
          style={{ width: 200, height: 150 }}
          viewBox="0 0 200 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="200" height="150" x="0" y="0" fill="#2563eb" />
        </svg>
      </motion.div>
      <motion.div
        initial={{
          x: -75,
          y: 125,
        }}
        animate={{
          x: -200,
          y: 225,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
          type: "spring",
        }}
      >
        <svg
          className="my-auto z-10"
          style={{ width: 200, height: 150 }}
          viewBox="0 0 200 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="200" height="150" x="0" y="0" fill="#93c5fd" />
        </svg>
      </motion.div>
      <motion.div
        initial={{
          x: -250,
          y: 150,
        }}
        animate={{
          x: -100,
          y: 225,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
          type: "spring",
        }}
      >
        <svg
          className="my-auto z-10"
          style={{ width: 200, height: 150 }}
          viewBox="0 0 200 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="200" height="150" x="0" y="0" fill="#d1d5db" />
        </svg>
      </motion.div>
      <motion.div
        initial={{ x: -445, y: 5, visibility: "hidden" }}
        animate={{ x: -445, y: 5, visibility: "visible" }}
        transition={{ delay: 2.5, duration: 0.3 }}
      >
        <span className="bg-blue-900 text-blue-50 text-xs font-medium me-2 px-2 py-1 rounded-md">
          @system_a
        </span>
      </motion.div>
      <motion.div
        initial={{ x: -685, y: 230, visibility: "hidden" }}
        animate={{ x: -685, y: 230, visibility: "visible" }}
        transition={{ delay: 3, duration: 0.3 }}
      >
        <span className="bg-blue-900 text-blue-50 text-xs font-medium me-2 px-2 py-1 rounded-md">
          @system_b
        </span>
      </motion.div>
      <motion.div
        initial={{ x: -470, y: 230, visibility: "hidden" }}
        animate={{ x: -470, y: 230, visibility: "visible" }}
        transition={{ delay: 3.5, duration: 0.3 }}
      >
        <span className="bg-blue-900 text-blue-50 text-xs font-medium me-2 px-2 py-1 rounded-md">
          @system_c
        </span>
      </motion.div>
      <motion.div
        initial={{ x: -560, y: 260, visibility: "hidden" }}
        animate={{ x: -560, y: 260, visibility: "visible" }}
        transition={{ delay: 4, duration: 0.3 }}
      >
        <span className="bg-black text-blue-50 text-xs font-medium me-2 px-2 py-1 rounded-md">
          @disabled
        </span>
      </motion.div>
      <motion.div
        initial={{ x: -650, y: 149, visibility: "hidden" }}
        animate={{ x: -650, y: 149, visibility: "visible" }}
        transition={{ delay: 2, duration: 0.3 }}
      >
        <svg
          className="my-auto z-0"
          style={{ width: 200, height: 150 }}
          viewBox="0 0 200 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L77,77"
            fill="transparent"
            stroke="#1e293b"
            strokeWidth={2.5}
          />
        </svg>
      </motion.div>
      <motion.div
        initial={{ x: -1040, y: 149, visibility: "hidden" }}
        animate={{ x: -1040, y: 149, visibility: "visible" }}
        transition={{ delay: 2, duration: 0.3 }}
      >
        <svg
          className="my-auto z-0"
          style={{ width: 200, height: 150 }}
          viewBox="0 0 200 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M77,0 L0,77"
            fill="transparent"
            stroke="#1e293b"
            strokeWidth={2.5}
          />
        </svg>
      </motion.div>
    </>
  );
};
