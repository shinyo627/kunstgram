import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // Creating reference to a file inside default firebase storage
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snapShot) => {
        // Progress in percentage during snapshot of the time the file being uploaded
        let percentage =
          (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        // Error handler
        setError(err);
      },
      async () => {
        // Setting url with reference of the file from fireBase upon successful upload
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
