import { FolderOpen, Download, ExternalLink, PlayCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function ResourcesPage() {
  const articles = [
    {
      title: "Childhood Obesity and Cancer Risk: What Parents Need to Know",
      source: "National Cancer Institute",
      description:
        "Comprehensive overview of the scientific evidence linking childhood obesity to increased cancer risk in adulthood, with practical prevention strategies.",
      url: "#",
    },
    {
      title: "Childhood Obesity Facts",
      source: "CDC",
      description:
        "Latest statistics, trends, and research on childhood obesity rates in the United States, including demographic breakdowns and health consequences.",
      url: "#",
    },
    {
      title: "Pancreatic Cancer Prevention",
      source: "American Cancer Society",
      description:
        "Evidence-based guidelines for reducing pancreatic cancer risk through lifestyle modifications, including weight management and dietary changes.",
      url: "#",
    },
    {
      title: "Nutrition Guidelines for Children",
      source: "Academy of Nutrition and Dietetics",
      description:
        "Age-specific nutrition recommendations, portion sizes, and meal planning tips for supporting healthy growth and development.",
      url: "#",
    },
    {
      title: "Physical Activity Guidelines for Americans",
      source: "U.S. Department of Health",
      description:
        "Official recommendations for physical activity by age group, including specific guidance for children and adolescents.",
      url: "#",
    },
  ];

  const videos = [
    {
      title: "Understanding Childhood Obesity: A Doctor's Perspective",
      duration: "12:45",
      description: "Expert explanation of obesity causes, health impacts, and prevention strategies.",
    },
    {
      title: "Healthy Cooking for Kids: Quick & Easy Recipes",
      duration: "18:30",
      description: "Family-friendly meal demonstrations focusing on nutrition and taste.",
    },
    {
      title: "Making Exercise Fun for the Whole Family",
      duration: "10:15",
      description: "Creative ways to incorporate physical activity into daily family life.",
    },
    {
      title: "The Science of Cancer Prevention",
      duration: "22:00",
      description: "Research-based overview of modifiable risk factors and prevention strategies.",
    },
  ];

  const downloads = [
    {
      title: "Childhood Obesity & Cancer Risk Infographic",
      description: "Visual guide to understanding the obesity-cancer connection",
      format: "PDF",
      size: "2.4 MB",
    },
    {
      title: "Weekly Meal Planner Template",
      description: "Printable template for organizing family meals and grocery shopping",
      format: "PDF",
      size: "450 KB",
    },
    {
      title: "30-Day Family Fitness Challenge",
      description: "Month-long activity guide with daily challenges for all ages",
      format: "PDF",
      size: "1.8 MB",
    },
    {
      title: "Parent's Guide to Healthy Eating",
      description: "Comprehensive handbook with nutrition tips, recipes, and portion guides",
      format: "PDF",
      size: "5.2 MB",
    },
    {
      title: "BMI-for-Age Growth Charts",
      description: "Official CDC growth charts for tracking children's healthy development",
      format: "PDF",
      size: "890 KB",
    },
    {
      title: "Healthy Snack Ideas List",
      description: "100+ quick, nutritious snack options kids will actually enjoy",
      format: "PDF",
      size: "320 KB",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <FolderOpen className="h-8 w-8 text-[#00ACC1]" />
        <h1 className="text-[#00ACC1]">Resources & Community</h1>
      </div>

      <p className="text-gray-600">
        Explore trusted educational materials, research articles, and practical tools to support
        your family's health journey.
      </p>

      {/* Tab Navigation */}
      <Tabs defaultValue="articles" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-100">
          <TabsTrigger
            value="articles"
            className="data-[state=active]:bg-white data-[state=active]:text-[#00ACC1]"
          >
            Articles
          </TabsTrigger>
          <TabsTrigger
            value="videos"
            className="data-[state=active]:bg-white data-[state=active]:text-[#00ACC1]"
          >
            Videos
          </TabsTrigger>
          <TabsTrigger
            value="downloads"
            className="data-[state=active]:bg-white data-[state=active]:text-[#00ACC1]"
          >
            Downloads
          </TabsTrigger>
        </TabsList>

        {/* Articles Tab */}
        <TabsContent value="articles" className="mt-6 space-y-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="flex-1 text-[#1A1C1E]">{article.title}</h3>
                <ExternalLink className="h-5 w-5 flex-shrink-0 text-gray-400 transition-colors group-hover:text-[#00ACC1]" />
              </div>
              <div className="mb-3 inline-block rounded-full bg-[#B2EBF2] px-3 py-1 text-xs text-[#00ACC1]">
                {article.source}
              </div>
              <p className="text-sm text-gray-600">{article.description}</p>
              <button className="mt-4 text-sm font-medium text-[#00ACC1] hover:text-[#0097A7]">
                Read Article →
              </button>
            </div>
          ))}
        </TabsContent>

        {/* Videos Tab */}
        <TabsContent value="videos" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-[#00ACC1] to-[#0097A7]">
                  <PlayCircle className="h-16 w-16 text-white transition-transform group-hover:scale-110" />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="flex-1 text-[#1A1C1E]">{video.title}</h3>
                  <span className="ml-2 text-sm text-gray-500">{video.duration}</span>
                </div>
                <p className="text-sm text-gray-600">{video.description}</p>
                <button className="mt-4 text-sm font-medium text-[#00ACC1] hover:text-[#0097A7]">
                  Watch Now →
                </button>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Downloads Tab */}
        <TabsContent value="downloads" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {downloads.map((download, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#B2EBF2]">
                    <Download className="h-6 w-6 text-[#00ACC1]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-[#1A1C1E]">{download.title}</h3>
                    <p className="text-sm text-gray-600">{download.description}</p>
                  </div>
                </div>
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                  <span className="rounded bg-gray-100 px-2 py-1">{download.format}</span>
                  <span>{download.size}</span>
                </div>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#00ACC1] px-4 py-2 text-white transition-colors hover:bg-[#0097A7]">
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Community Section */}
      <div className="rounded-xl bg-gradient-to-r from-[#00ACC1] to-[#0097A7] p-8 text-white">
        <h2 className="mb-3 text-white">Join Our Community</h2>
        <p className="mb-6 text-white/90">
          Connect with other families, share experiences, and get support on your journey to
          better health. Sign up for our monthly newsletter to receive tips, recipes, and the
          latest research updates.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500"
          />
          <button className="rounded-lg bg-white px-6 py-3 font-medium text-[#00ACC1] transition-transform hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
