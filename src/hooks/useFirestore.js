import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // Fetching & Watching real time data update with Firestore
    // unsub returns function that can be used to unsubscribe when unmounted
    const unsub = projectFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapShot) => {
        const documents = [];

        // Iterating through all documents inside 'image' collection
        // Setting per image documents obj with all the fields and unique id
        snapShot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFireStore;
