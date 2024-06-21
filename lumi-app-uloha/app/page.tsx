"use client"
import React, { useState, useEffect } from "react";
import Sessions from "../components/Sessions";
import AddSession from "../components/AddSession";
import { Session } from "../components/models";
import {
  loadSessions,
  saveSession,
  defaultSession,
} from "../components/mockData";

const App: React.FC = () => {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const loadedSessions = loadSessions();
    if (loadedSessions.length === 0) {
      saveSession(defaultSession);
      setSessions([defaultSession]);
    } else {
      setSessions(loadedSessions);
    }
  }, []);

  const handleAddSession = (newSession: Session) => {
    saveSession(newSession);
    setSessions(loadSessions());
  };

  return (
    <div>
      <nav className="fixed border-b-2 w-full h-[80px] flex items-center z-10 bg-white border-b-[#3369FF]">
        <img src="/logo.webp" alt="" />
      </nav>
      <div className="min-h-screen flex justify-center items-center flex-col pt-32 bg-gray-100 p-4">
        <AddSession onAddSession={handleAddSession} />
        <Sessions sessions={sessions} />
      </div>
    </div>
  );
};

export default App;
