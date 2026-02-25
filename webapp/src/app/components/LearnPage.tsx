import { BookOpen, AlertTriangle, CheckCircle } from "lucide-react";
import { InfoCallout } from "../components/InfoCallout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function LearnPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <BookOpen className="h-8 w-8 text-[#00ACC1]" />
        <h1 className="text-[#00ACC1]">Understanding the Connection</h1>
      </div>

      {/* Tab Navigation */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-100">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-white data-[state=active]:text-[#00ACC1]"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="risk-factors"
            className="data-[state=active]:bg-white data-[state=active]:text-[#00ACC1]"
          >
            Risk Factors
          </TabsTrigger>
          <TabsTrigger
            value="prevention"
            className="data-[state=active]:bg-white data-[state=active]:text-[#00ACC1]"
          >
            Prevention
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left Column */}
            <div>
              <h2 className="mb-4 text-[#00ACC1]">How Obesity Impacts Health</h2>
              <div className="space-y-4 rounded-xl bg-white p-6 shadow-sm">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 text-2xl">🩸</div>
                  <div>
                    <h3 className="mb-1">Insulin Resistance</h3>
                    <p className="text-sm text-gray-600">
                      Excess weight causes cells to become resistant to insulin, forcing the
                      pancreas to work harder and leading to chronic stress
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 text-2xl">🔥</div>
                  <div>
                    <h3 className="mb-1">Chronic Inflammation</h3>
                    <p className="text-sm text-gray-600">
                      Obesity triggers persistent low-grade inflammation throughout the body,
                      creating an environment that can promote cancer development
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 text-2xl">⚖️</div>
                  <div>
                    <h3 className="mb-1">Hormonal Imbalance</h3>
                    <p className="text-sm text-gray-600">
                      Excess body fat disrupts normal hormone production and regulation,
                      affecting growth factors and cell division
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 text-2xl">🧬</div>
                  <div>
                    <h3 className="mb-1">Cellular Stress</h3>
                    <p className="text-sm text-gray-600">
                      Metabolic dysfunction causes oxidative stress that can damage DNA and
                      impair the body's natural cancer prevention mechanisms
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <InfoCallout title="Did You Know?">
                <p className="mb-3">
                  The pancreas is particularly vulnerable to obesity-related damage because it
                  plays a dual role in both digestion and blood sugar regulation.
                </p>
                <p className="mb-3">
                  When childhood obesity persists into adulthood, it can lead to:
                </p>
                <ul className="ml-5 list-disc space-y-1 text-sm">
                  <li>Type 2 diabetes (7x increased risk)</li>
                  <li>Fatty liver disease</li>
                  <li>Heart disease</li>
                  <li>Multiple types of cancer, including pancreatic cancer</li>
                  <li>Reduced life expectancy by 10-20 years</li>
                </ul>
                <p className="mt-3 font-medium text-[#00ACC1]">
                  The good news: These risks are largely preventable through early intervention!
                </p>
              </InfoCallout>

              <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-[#00ACC1]">Key Research Findings</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-[#00ACC1]">•</span>
                    <span>
                      Children with obesity have 2-3 times higher risk of adult cancers
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#00ACC1]">•</span>
                    <span>47% of pancreatic cancers are linked to modifiable risk factors</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#00ACC1]">•</span>
                    <span>
                      Every 5-unit increase in BMI raises pancreatic cancer risk by 10%
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#00ACC1]">•</span>
                    <span>
                      Weight loss and healthy lifestyle changes can reverse many obesity-related
                      risks
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Risk Factors Tab */}
        <TabsContent value="risk-factors" className="mt-6 space-y-6">
          <h2 className="text-[#00ACC1]">Understanding Risk Factors</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <h3 className="text-red-500">High Risk</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>BMI in the obese range during childhood</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Family history of diabetes or pancreatic cancer</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Sedentary lifestyle (less than 1 hour activity/day)</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>High intake of processed foods and sugary drinks</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Early onset of obesity (before age 5)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                <h3 className="text-orange-500">Moderate Risk</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>BMI in the overweight range</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Irregular eating patterns or skipping meals</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Limited access to fresh fruits and vegetables</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Excessive screen time (more than 2 hours/day)</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Insufficient sleep (less than recommended for age)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <h3 className="text-green-500">Lower Risk</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Healthy BMI for age and height</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Regular physical activity (60+ minutes/day)</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Balanced diet with fruits, vegetables, and whole grains</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Limited processed foods and added sugars</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Adequate sleep for age group</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-[#E0F7FA] p-6">
              <h3 className="mb-3 text-[#00ACC1]">Important Note</h3>
              <p className="text-sm text-gray-700">
                Risk factors are not deterministic. Even children with multiple risk factors can
                significantly reduce their future cancer risk through lifestyle changes,
                education, and family support. Early intervention is key!
              </p>
            </div>
          </div>
        </TabsContent>

        {/* Prevention Tab */}
        <TabsContent value="prevention" className="mt-6 space-y-6">
          <h2 className="text-[#00ACC1]">Prevention Strategies</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B2EBF2]">
                  <span className="text-xl">🥗</span>
                </div>
                <h3 className="text-[#00ACC1]">Nutrition</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Fill half the plate with fruits and vegetables</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Choose whole grains over refined grains</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Limit sugary drinks; choose water instead</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Reduce processed and ultra-processed foods</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Practice portion control and mindful eating</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B2EBF2]">
                  <span className="text-xl">🏃</span>
                </div>
                <h3 className="text-[#00ACC1]">Physical Activity</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Aim for 60+ minutes of activity daily</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Include aerobic, muscle-strengthening activities</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Make it fun: sports, dance, active play</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Limit screen time to less than 2 hours/day</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Encourage family activities and outdoor play</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B2EBF2]">
                  <span className="text-xl">😴</span>
                </div>
                <h3 className="text-[#00ACC1]">Sleep & Rest</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Ages 3-5: 10-13 hours per night</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Ages 6-12: 9-12 hours per night</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Teens: 8-10 hours per night</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Maintain consistent bedtime routines</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Remove screens from bedrooms</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B2EBF2]">
                  <span className="text-xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-[#00ACC1]">Family Support</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Eat meals together as a family</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Model healthy behaviors</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Create a supportive, positive environment</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Focus on health, not weight</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Consult healthcare providers regularly</span>
                </li>
              </ul>
            </div>
          </div>

          <InfoCallout title="Remember">
            <p>
              Small, consistent changes make the biggest difference. You don't need to implement
              all strategies at once. Start with 1-2 changes and gradually build healthy habits
              as a family. Every positive step counts!
            </p>
          </InfoCallout>
        </TabsContent>
      </Tabs>
    </div>
  );
}
