import { BrowserRouter, Routes, Route } from "react-router";

import Navbar from "./components/navbar";
import Footer from "./components/footer.tsx";

import HomePage from "./pages/home-page";
import NotesPage from "./pages/notes-pages";
import NewNotePage from "./pages/new-note-page";
import EditNotePage from "./pages/edit-note-page";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/new" element={<NewNotePage />} />
        <Route path="/edit/:id" element={<EditNotePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
