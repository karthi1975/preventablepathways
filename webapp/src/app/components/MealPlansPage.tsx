import { UtensilsCrossed, Users } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface MealPlan {
  name: string;
  category: string;
  nutritionHighlights: string[];
  familyFriendly: boolean;
}

const mealPlans: { [key: string]: MealPlan[] } = {
  "3-5": [
    {
      name: "Rainbow Veggie Pancakes",
      category: "Breakfast",
      nutritionHighlights: ["Whole grains", "Hidden vegetables", "Protein-rich"],
      familyFriendly: true,
    },
    {
      name: "Banana Oat Muffins",
      category: "Breakfast",
      nutritionHighlights: ["No added sugar", "Fiber-rich", "Energy boost"],
      familyFriendly: true,
    },
    {
      name: "Turkey & Cheese Roll-Ups",
      category: "Lunch",
      nutritionHighlights: ["Lean protein", "Calcium", "Low carb"],
      familyFriendly: true,
    },
    {
      name: "Mac & Cheese with Hidden Veggies",
      category: "Lunch",
      nutritionHighlights: ["Cauliflower blend", "Calcium", "Kid-approved"],
      familyFriendly: true,
    },
    {
      name: "Mini Meatballs with Sweet Potato",
      category: "Dinner",
      nutritionHighlights: ["Protein", "Complex carbs", "Iron-rich"],
      familyFriendly: true,
    },
    {
      name: "Baked Chicken Tenders & Broccoli",
      category: "Dinner",
      nutritionHighlights: ["Lean protein", "Vitamins A & C", "Crispy not fried"],
      familyFriendly: true,
    },
    {
      name: "Apple Slices with Almond Butter",
      category: "Snacks",
      nutritionHighlights: ["Fiber", "Healthy fats", "Natural sweetness"],
      familyFriendly: true,
    },
    {
      name: "Yogurt Parfait with Berries",
      category: "Snacks",
      nutritionHighlights: ["Probiotics", "Antioxidants", "Protein"],
      familyFriendly: true,
    },
  ],
  "6-12": [
    {
      name: "Protein Power Smoothie Bowl",
      category: "Breakfast",
      nutritionHighlights: ["High protein", "Fruits & veggies", "Energy boost"],
      familyFriendly: true,
    },
    {
      name: "Whole Grain Waffles with Berries",
      category: "Breakfast",
      nutritionHighlights: ["Complex carbs", "Antioxidants", "Fiber-rich"],
      familyFriendly: true,
    },
    {
      name: "Turkey Avocado Wrap",
      category: "Lunch",
      nutritionHighlights: ["Lean protein", "Healthy fats", "Whole grain"],
      familyFriendly: true,
    },
    {
      name: "Veggie-Loaded Pizza on Whole Wheat",
      category: "Lunch",
      nutritionHighlights: ["Portion-controlled", "Veggies", "Kid-favorite"],
      familyFriendly: true,
    },
    {
      name: "Grilled Salmon with Quinoa",
      category: "Dinner",
      nutritionHighlights: ["Omega-3", "Complete protein", "Brain food"],
      familyFriendly: true,
    },
    {
      name: "Stir-Fry with Brown Rice",
      category: "Dinner",
      nutritionHighlights: ["Colorful veggies", "Lean protein", "Whole grain"],
      familyFriendly: true,
    },
    {
      name: "Trail Mix (Unsweetened)",
      category: "Snacks",
      nutritionHighlights: ["Energy", "Healthy fats", "Portable"],
      familyFriendly: true,
    },
    {
      name: "Hummus with Veggie Sticks",
      category: "Snacks",
      nutritionHighlights: ["Protein", "Fiber", "Vitamins"],
      familyFriendly: true,
    },
  ],
  "13-18": [
    {
      name: "Avocado Toast with Poached Egg",
      category: "Breakfast",
      nutritionHighlights: ["Healthy fats", "Protein", "Whole grain"],
      familyFriendly: true,
    },
    {
      name: "Greek Yogurt Parfait",
      category: "Breakfast",
      nutritionHighlights: ["High protein", "Probiotics", "Low sugar"],
      familyFriendly: true,
    },
    {
      name: "Chicken Caesar Salad (Light)",
      category: "Lunch",
      nutritionHighlights: ["Lean protein", "Greens", "Controlled portions"],
      familyFriendly: true,
    },
    {
      name: "Buddha Bowl with Chickpeas",
      category: "Lunch",
      nutritionHighlights: ["Plant protein", "Superfoods", "Balanced"],
      familyFriendly: true,
    },
    {
      name: "Grilled Chicken with Roasted Vegetables",
      category: "Dinner",
      nutritionHighlights: ["Lean protein", "Fiber-rich", "Low-carb option"],
      familyFriendly: true,
    },
    {
      name: "Turkey Meatballs with Zucchini Noodles",
      category: "Dinner",
      nutritionHighlights: ["High protein", "Low carb", "Veggie-forward"],
      familyFriendly: true,
    },
    {
      name: "Energy Balls (No-Bake)",
      category: "Snacks",
      nutritionHighlights: ["Natural sweetness", "Protein", "Pre-workout fuel"],
      familyFriendly: true,
    },
    {
      name: "Cottage Cheese with Fruit",
      category: "Snacks",
      nutritionHighlights: ["High protein", "Calcium", "Low-calorie"],
      familyFriendly: true,
    },
  ],
};

export function MealPlansPage() {
  const [ageGroup, setAgeGroup] = useState<string>("6-12");

  const currentMeals = mealPlans[ageGroup] || [];
  const breakfast = currentMeals.filter((m) => m.category === "Breakfast");
  const lunch = currentMeals.filter((m) => m.category === "Lunch");
  const dinner = currentMeals.filter((m) => m.category === "Dinner");
  const snacks = currentMeals.filter((m) => m.category === "Snacks");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="h-8 w-8 text-[#00ACC1]" />
          <h1 className="text-[#00ACC1]">Healthy Meal Plans</h1>
        </div>

        {/* Age Group Selector */}
        <div className="flex items-center gap-3">
          <label className="text-sm text-gray-600">Age Group:</label>
          <Select value={ageGroup} onValueChange={setAgeGroup}>
            <SelectTrigger className="w-[180px] border-[#00ACC1]">
              <SelectValue placeholder="Select age group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3-5">3-5 years</SelectItem>
              <SelectItem value="6-12">6-12 years</SelectItem>
              <SelectItem value="13-18">13-18 years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Info Banner */}
      <div className="rounded-lg bg-[#E0F7FA] p-4">
        <p className="text-sm text-gray-700">
          These meal plans are designed to support healthy growth and development while
          preventing childhood obesity. All meals are family-friendly and focus on whole foods,
          balanced nutrition, and portion control. Consult with a pediatrician or registered
          dietitian for personalized nutrition advice.
        </p>
      </div>

      {/* Breakfast Section */}
      <section>
        <h2 className="mb-4 text-[#00ACC1]">🌅 Breakfast</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {breakfast.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
        </div>
      </section>

      {/* Lunch Section */}
      <section>
        <h2 className="mb-4 text-[#00ACC1]">🌞 Lunch</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {lunch.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
        </div>
      </section>

      {/* Dinner Section */}
      <section>
        <h2 className="mb-4 text-[#00ACC1]">🌙 Dinner</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {dinner.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
        </div>
      </section>

      {/* Snacks Section */}
      <section>
        <h2 className="mb-4 text-[#00ACC1]">🍎 Snacks</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {snacks.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
        </div>
      </section>

      {/* Weekly Planner CTA */}
      <div className="rounded-xl bg-gradient-to-r from-[#00ACC1] to-[#0097A7] p-8 text-center text-white">
        <h2 className="mb-3 text-white">Need a Weekly Planner?</h2>
        <p className="mb-4 text-white/90">
          Download our free weekly meal planner template to organize your family's meals and
          ensure balanced nutrition every day.
        </p>
        <button className="rounded-lg bg-white px-6 py-3 font-medium text-[#00ACC1] transition-transform hover:scale-105">
          Download Template
        </button>
      </div>
    </div>
  );
}

function MealCard({ meal }: { meal: MealPlan }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-start justify-between">
        <h3 className="flex-1 text-[#1A1C1E]">{meal.name}</h3>
        {meal.familyFriendly && (
          <div className="ml-2 flex items-center gap-1 rounded-full bg-[#B2EBF2] px-2 py-1">
            <Users className="h-3 w-3 text-[#00ACC1]" />
            <span className="text-xs text-[#00ACC1]">Family</span>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {meal.nutritionHighlights.map((highlight, index) => (
          <span
            key={index}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
          >
            {highlight}
          </span>
        ))}
      </div>
    </div>
  );
}
