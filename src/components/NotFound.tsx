import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <motion.h1
        style={{ color: "black", alignContent: "center" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        style={{ color: "black", alignContent: "center", textAlign: "center" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Oops! This page doesn't exist.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link to="/">
          <button
            style={{ margin: "10% 44%", width: "200px" }}
            className="px-6 py-3  text-lg bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Back home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
