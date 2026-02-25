import { Globe, BookOpen, MessageSquare, UtensilsCrossed, ArrowRight } from "lucide-react";
import { ActionCard } from "../components/ActionCard";
import { StatCard } from "../components/StatCard";
import { InfoCallout } from "../components/InfoCallout";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden rounded-2xl p-12 text-center text-white shadow-lg"
        style={{
          background: "linear-gradient(135deg, #00ACC1 0%, #0097A7 100%)",
        }}
      >
        <div className="relative z-10">
          <Globe className="mx-auto mb-4 h-16 w-16" />
          <h1 className="mb-4 text-4xl text-white md:text-5xl">Preventable Pathways</h1>
          <p className="mx-auto max-w-2xl text-xl text-white/90">
            Preventing Childhood Obesity, Pathway to Future Health
          </p>
        </div>
        {/* Glassmorphism overlay */}
        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        />
      </div>

      {/* Mission Section */}
      <section>
        <h2 className="mb-4 text-[#00ACC1]">Our Mission</h2>
        <InfoCallout title="Understanding the Connection">
          <p>
            Childhood obesity is more than a weight issue—it's a pathway to serious health
            risks later in life. Research shows that children with obesity are 2-3 times more
            likely to develop pancreatic cancer as adults due to chronic inflammation, insulin
            resistance, and metabolic dysfunction.
          </p>
          <p className="mt-2">
            Our mission is to empower families with knowledge, tools, and support to prevent
            childhood obesity and break this preventable pathway to disease.
          </p>
        </InfoCallout>
      </section>

      {/* Get Started Section */}
      <section>
        <h2 className="mb-6 text-[#00ACC1]">Get Started</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <ActionCard
            icon={BookOpen}
            title="Learn More"
            description="Understand the connection between childhood obesity and pancreatic cancer risk"
            onClick={() => onNavigate("learn")}
          />
          <ActionCard
            icon={MessageSquare}
            title="Ask Our AI"
            description="Get personalized answers about nutrition, prevention, and healthy habits"
            onClick={() => onNavigate("ai-chat")}
          />
          <ActionCard
            icon={UtensilsCrossed}
            title="Meal Planning"
            description="Access family-friendly meal plans designed for healthy growth"
            onClick={() => onNavigate("meal-plans")}
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section>
        <h2 className="mb-6 text-[#00ACC1]">The Numbers Don't Lie</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            emoji="📊"
            stat="19.7%"
            label="Children with obesity in the US"
          />
          <StatCard
            emoji="⚠️"
            stat="2-3x"
            label="Increased cancer risk"
          />
          <StatCard
            emoji="🎯"
            stat="47%"
            label="Pancreatic cancer cases linked to modifiable factors"
          />
          <StatCard
            emoji="✨"
            stat="Today"
            label="Best time to start prevention"
          />
        </div>
      </section>

      {/* Progression Diagram */}
      <section>
        <h2 className="mb-6 text-[#00ACC1]">Understanding the Progression</h2>
        <div
          className="rounded-2xl p-8"
          style={{
            background: "linear-gradient(180deg, #E0F7FA 0%, #B2EBF2 100%)",
          }}
        >
          <div className="grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 text-4xl">🍔</div>
              <h3 className="mb-2 text-[#00ACC1]">Childhood Obesity</h3>
              <p className="text-sm text-gray-600">
                Excess body weight during childhood development creates long-term metabolic
                changes
              </p>
              {/* Arrow indicator */}
              <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block">
                <ArrowRight className="h-6 w-6 text-[#00ACC1]" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 text-4xl">⚡</div>
              <h3 className="mb-2 text-[#00ACC1]">Metabolic Changes</h3>
              <p className="text-sm text-gray-600">
                Insulin resistance, chronic inflammation, hormonal imbalance, and cellular
                stress develop
              </p>
              {/* Arrow indicator */}
              <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block">
                <ArrowRight className="h-6 w-6 text-[#00ACC1]" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 text-4xl">🎗️</div>
              <h3 className="mb-2 text-[#00ACC1]">Increased Risk</h3>
              <p className="text-sm text-gray-600">
                Higher likelihood of developing pancreatic cancer and other chronic diseases in
                adulthood
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
