import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RtlLayout from "./layouts/rtl";
import AdminLayout from "./layouts/admin";
import AuthLayout from "./layouts/auth";
// import { db } from "services/firebase";

// import {
//   getDocs,
//   collection,
//   addDoc,
//   deleteDoc,
//   updateDoc,
//   doc,
//   QuerySnapshot,
// } from "firebase/firestore";
// import { ref, uploadBytes } from "firebase/storage";


const App = () => {
  
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
