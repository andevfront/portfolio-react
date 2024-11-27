import { AnimatePresence, motion } from "framer-motion";

export const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed top-0 z-[999] flex h-screen w-screen items-center justify-center bg-[#0A1527]"
        >
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-black text-main-500">Ayelén</h2>
            <div className="mt-2 flex h-1 w-40 gap-1 overflow-hidden rounded bg-[#919ea4]">
              <div className="animate-loader h-full w-20 bg-main-500"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
