import { Routes, Route, Navigate } from "react-router-dom";
import RtlLayout from "./layouts/rtl";
import AdminLayout from "./layouts/admin";
import AuthLayout from "./layouts/auth";
import { useEffect, useState } from "react";
import { DocumentSnapshot, QuerySnapshot, QueryDocumentSnapshot, collection, onSnapshot, DocumentData } from "firebase/firestore";
import db from './services/firebase.config'
import { useScroll } from "framer-motion";

const App = () => {

  // data type has to match Firestore DocumentSnapshot data type
  const [subjects, setSubjects] = useState<DocumentSnapshot<DocumentData>[]>([]);

  useEffect(() => {
    //callback to unsubscribe from the snapshot listener when the component unmounts
    const unsubscribe = onSnapshot(collection(db, 'subjects'), (snapshot) => {
      const newSnapshots: DocumentSnapshot<DocumentData>[] = snapshot.docs.map((doc) => doc);
      setSubjects(newSnapshots);
      console.log(subjects[2].data())
    });
  
    return () => unsubscribe();
  }, []);
  
  return (
      <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
