import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log('URL? ', progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  //   return <; className='progress-bar' style={{ width: progress + `%` }} />;
  return (
    <motion.div
      className='progress-bar'
      initial={{ width: 0 }}
      animate={{ width: progress + `%` }}
    />
  );
};

export default ProgressBar;
