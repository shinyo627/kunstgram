import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className='backdrop'
      onClick={handleClick}
      // *** motion ***
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt='enlarged-pic'
        // *** motion ***
        // y is not css prop but from motion and x, y axis base
        initial={{ y: `-100vh` }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
