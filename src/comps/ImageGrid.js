import React from 'react';
import { motion } from 'framer-motion';

import useFirestore from '../hooks/useFirestore';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  console.log(docs);

  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => {
          return (
            <motion.div
              key={doc.id}
              className='img-wrap'
              onClick={() => setSelectedImg(doc.url)}
              // *** motion ***
              layout
              whileHover={{ opacity: 1 }}
            >
              <motion.img
                src={doc.url}
                alt='images-fromFirestore'
                // *** motion ***
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
