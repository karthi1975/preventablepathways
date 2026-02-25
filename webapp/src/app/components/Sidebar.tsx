import { Home, BookOpen, MessageSquare, UtensilsCrossed, FolderOpen, Menu, X } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const pages = [
  { id: "home", label: "Home", icon: Home },
  { id: "learn", label: "Learn", icon: BookOpen },
  { id: "ai-chat", label: "AI Chat", icon: MessageSquare },
  { id: "meal-plans", label: "Meal Plans", icon: UtensilsCrossed },
  { id: "resources", label: "Resources", icon: FolderOpen },
];

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-[#00ACC1] p-2 text-white lg:hidden"
      >
        {isCollapsed ? <Menu className="h-6 w-6" /> : <X className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen border-r border-gray-200 bg-[#FAFAFA] transition-transform ${
          isCollapsed ? "-translate-x-full lg:translate-x-0 lg:w-20" : "w-64"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="border-b border-gray-200 p-6">
            {!isCollapsed && (
              <>
                <h2 className="mb-1 text-[#00ACC1]">Preventable Pathways</h2>
                <p className="text-xs text-gray-600">
                  Preventing Childhood Obesity, Pathway to Future Health
                </p>
              </>
            )}
            {isCollapsed && (
              <div className="flex justify-center">
                <div className="h-8 w-8 rounded-full bg-[#00ACC1]" />
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {pages.map((page) => {
                const Icon = page.icon;
                const isActive = currentPage === page.id;
                return (
                  <li key={page.id}>
                    <button
                      onClick={() => onNavigate(page.id)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                        isActive
                          ? "bg-[#B2EBF2] text-[#00ACC1]"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && <span>{page.label}</span>}
                      {!isCollapsed && isActive && (
                        <div className="ml-auto h-2 w-2 rounded-full bg-[#00ACC1]" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          {!isCollapsed && (
            <div className="border-t border-gray-200 p-4">
              <div className="space-y-2 text-xs text-gray-600">
                <a
                  href="mailto:info@preventablepathways.org"
                  className="block hover:text-[#00ACC1]"
                >
                  info@preventablepathways.org
                </a>
                <div className="flex gap-2">
                  <a href="#privacy" className="hover:text-[#00ACC1]">
                    Privacy Policy
                  </a>
                  <span>•</span>
                  <a href="#terms" className="hover:text-[#00ACC1]">
                    Terms
                  </a>
                </div>
                <p className="text-gray-500">© 2026 Preventable Pathways</p>
              </div>
            </div>
          )}

          {/* Collapse toggle for desktop */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden border-t border-gray-200 p-4 text-gray-600 hover:bg-gray-100 lg:block"
          >
            {isCollapsed ? <Menu className="mx-auto h-5 w-5" /> : <X className="h-5 w-5" />}
          </button>
        </div>
      </aside>
    </>
  );
}
