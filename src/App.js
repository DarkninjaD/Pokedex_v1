import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./components/Model-Framer/Modal/Modal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.8 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Motion Button
      </motion.button>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default App;
