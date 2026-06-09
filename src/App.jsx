import RecruitPage, { EntryRecruitPage } from "./components.jsx";

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  return path === "/entry" ? <EntryRecruitPage /> : <RecruitPage />;
}
