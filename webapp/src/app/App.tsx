import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./components/HomePage";
import { LearnPage } from "./components/LearnPage";
import { AIChatPage } from "./components/AIChatPage";
import { MealPlansPage } from "./components/MealPlansPage";
import { ResourcesPage } from "./components/ResourcesPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "learn":
        return <LearnPage />;
      case "ai-chat":
        return <AIChatPage />;
      case "meal-plans":
        return <MealPlansPage />;
      case "resources":
        return <ResourcesPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Sidebar Navigation */}
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Main Content */}
      <main className="min-h-screen pl-0 lg:pl-64">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {renderPage()}
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-200 bg-gray-50 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-center md:text-left">
                <div className="mb-1 font-bold text-[#00ACC1]">Preventable Pathways</div>
                <div className="text-sm text-gray-600">
                  Preventing Childhood Obesity, Pathway to Future Health
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 text-sm text-gray-600 md:items-end">
                <div className="flex gap-3">
                  <a href="#privacy" className="hover:text-[#00ACC1]">
                    Privacy Policy
                  </a>
                  <span>•</span>
                  <a href="#terms" className="hover:text-[#00ACC1]">
                    Terms
                  </a>
                </div>
                <div className="text-gray-500">© 2026 Preventable Pathways</div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
