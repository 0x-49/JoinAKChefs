import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Server, Cpu, Zap, Lock, Bot, LineChart } from "lucide-react";

const technologies = [
  {
    name: "AI-Powered Monitors",
    description: "Our proprietary AI algorithms analyze market trends and predict profitable releases with 97% accuracy",
    icon: Cpu,
    metric: "500ms Latency"
  },
  {
    name: "Advanced Bot Integration",
    description: "Seamless integration with industry-leading bots, featuring custom checkout optimization",
    icon: Bot,
    metric: "99.9% Success Rate"
  },
  {
    name: "Real-time Analytics",
    description: "Enterprise-grade analytics platform processing millions of data points per second",
    icon: LineChart,
    metric: "Real-time Updates"
  },
  {
    name: "Secure Infrastructure",
    description: "Military-grade encryption and distributed system architecture for unmatched reliability",
    icon: Lock,
    metric: "Zero Downtime"
  },
  {
    name: "High-Speed Servers",
    description: "Strategically located servers providing ultra-low latency connections to all major retailers",
    icon: Server,
    metric: "Global Coverage"
  },
  {
    name: "Smart Queue System",
    description: "Intelligent queue management system that maximizes success rates during high-traffic releases",
    icon: Zap,
    metric: "100k+ Queue/sec"
  }
];

export default function TechStack() {
  return (
    <section id="technology" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Card className="bg-gray-800 border-gray-700 h-full group hover:bg-gray-700/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-900/50 rounded-lg group-hover:bg-blue-900/70 transition-colors duration-300">
                      <tech.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <span className="text-sm font-medium text-blue-400">{tech.metric}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{tech.description}</p>
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
