import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Server, 
  Cpu, 
  Zap, 
  Lock, 
  Bot, 
  LineChart,
  ArrowUpRight
} from "lucide-react";

const technologies = [
  {
    name: "AI-Powered Monitors",
    description: "Our proprietary AI algorithms analyze market trends and predict profitable releases with 97% accuracy, processing millions of data points per second to give you the edge.",
    icon: Cpu,
    metric: "500ms Latency",
    highlight: "Real-time Analysis"
  },
  {
    name: "Advanced Bot Integration",
    description: "Seamless integration with industry-leading bots, featuring custom checkout optimization and advanced queue management systems.",
    icon: Bot,
    metric: "99.9% Success Rate",
    highlight: "Multi-Bot Support"
  },
  {
    name: "Real-time Analytics",
    description: "Enterprise-grade analytics platform processing millions of data points per second, providing instant insights into market movements and opportunities.",
    icon: LineChart,
    metric: "Real-time Updates",
    highlight: "Instant Insights"
  },
  {
    name: "Secure Infrastructure",
    description: "Military-grade encryption and distributed system architecture ensures your data and operations are protected at all times.",
    icon: Lock,
    metric: "Zero Downtime",
    highlight: "Bank-Level Security"
  },
  {
    name: "High-Speed Servers",
    description: "Strategically located servers providing ultra-low latency connections to all major retailers, ensuring you're always first in line.",
    icon: Server,
    metric: "Global Coverage",
    highlight: "Worldwide Network"
  },
  {
    name: "Smart Queue System",
    description: "Intelligent queue management system that maximizes success rates during high-traffic releases using advanced algorithms.",
    icon: Zap,
    metric: "100k+ Queue/sec",
    highlight: "Lightning Fast"
  }
];

export default function TechStack() {
  return (
    <section id="technology" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="grid grid-cols-12 gap-2 h-full opacity-10">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="h-8 bg-blue-500/20 rounded-sm" />
          ))}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our enterprise-grade infrastructure powers your success with millisecond precision
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 h-full group hover:bg-gray-700/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-900/50 rounded-lg group-hover:bg-blue-900/70 transition-colors duration-300">
                      <tech.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-1"
                    >
                      <span className="text-sm font-medium text-blue-400">{tech.metric}</span>
                      <ArrowUpRight className="h-4 w-4 text-blue-400" />
                    </motion.div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{tech.description}</p>
                  <div className="inline-block px-3 py-1 bg-blue-900/30 rounded-full">
                    <span className="text-xs font-medium text-blue-300">{tech.highlight}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Powered by enterprise-grade infrastructure with 99.99% uptime guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}