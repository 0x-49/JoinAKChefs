import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  TrendingUp, 
  AlertCircle, 
  Calendar, 
  Target,
  ShoppingBag,
  Activity,
  ArrowUpRight
} from "lucide-react";

const marketInsights = [
  {
    title: "Upcoming Releases",
    value: "23",
    trend: "+5",
    description: "High-profit potential releases tracked",
    icon: Calendar,
    color: "blue"
  },
  {
    title: "Average Resell Margin",
    value: "127%",
    trend: "+12%",
    description: "Profit margin on latest releases",
    icon: TrendingUp,
    color: "green"
  },
  {
    title: "Market Opportunities",
    value: "47",
    trend: "+8",
    description: "Current arbitrage opportunities",
    icon: Target,
    color: "purple"
  },
  {
    title: "Success Rate",
    value: "92%",
    trend: "+3%",
    description: "Member checkout success rate",
    icon: Activity,
    color: "orange"
  }
];

const upcomingReleases = [
  {
    name: "Air Jordan 1 High OG",
    date: "March 15",
    potential: "High",
    profit: "$200-300"
  },
  {
    name: "Nike Dunk Low",
    date: "March 22",
    potential: "Medium",
    profit: "$150-200"
  },
  {
    name: "Yeezy Boost 350",
    date: "April 1",
    potential: "Very High",
    profit: "$300-400"
  }
];

export default function MarketIntelligence() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real-Time Market Intelligence
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Stay ahead of the market with our advanced analytics and predictive insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketInsights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 bg-${insight.color}-100 rounded-lg`}>
                      <insight.icon className={`h-6 w-6 text-${insight.color}-600`} />
                    </div>
                    <span className="text-sm font-semibold text-green-600 flex items-center">
                      {insight.trend}
                      <ArrowUpRight className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{insight.title}</h3>
                  <p className="text-3xl font-bold text-gray-900 my-2">{insight.value}</p>
                  <p className="text-sm text-gray-600">{insight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Market Analysis</h3>
                  <BarChart3 className="h-5 w-5 text-gray-400" />
                </div>
                <div className="space-y-4">
                  <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Interactive Market Trends Chart</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600">Weekly Volume</p>
                      <p className="text-lg font-semibold text-gray-900">$1.2M</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Avg. Markup</p>
                      <p className="text-lg font-semibold text-gray-900">82%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Success Rate</p>
                      <p className="text-lg font-semibold text-gray-900">97%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Upcoming Releases</h3>
                  <ShoppingBag className="h-5 w-5 text-gray-400" />
                </div>
                <div className="space-y-4">
                  {upcomingReleases.map((release, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900">{release.name}</h4>
                        <p className="text-sm text-gray-600">Release: {release.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-blue-600">{release.potential} Potential</p>
                        <p className="text-sm text-gray-600">{release.profit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
