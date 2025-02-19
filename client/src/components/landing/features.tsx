import { motion } from "framer-motion";
import { Monitor, Users, Clock, Shield, Zap, Award, DollarSign, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    name: "Custom Monitors",
    description: "Get instant alerts for high-profit releases with our proprietary monitoring system. Never miss a profitable drop again.",
    icon: Monitor,
    stat: "100+ Monitors"
  },
  {
    name: "Elite Community",
    description: "Join an exclusive Discord community of successful resellers. Share strategies, tips, and success stories.",
    icon: Users,
    stat: "1000+ Members"
  },
  {
    name: "24/7 Support",
    description: "Access expert guidance and technical support around the clock. Our team is always here to help you succeed.",
    icon: Clock,
    stat: "< 5min Response"
  },
  {
    name: "Industry Partnerships",
    description: "Leverage our network of premium partnerships and resources. Get exclusive access to tools and early information.",
    icon: Shield,
    stat: "10+ Partners"
  },
  {
    name: "Advanced Automation",
    description: "Streamline your operations with cutting-edge botting solutions. Automate your way to higher profits.",
    icon: Bot,
    stat: "5+ Bot Support"
  },
  {
    name: "Proven Success",
    description: "Follow strategies backed by years of reselling experience. Our members consistently secure the most profitable releases.",
    icon: Award,
    stat: "97% Success Rate"
  },
  {
    name: "ROI Focus",
    description: "Maximize your return on investment with data-driven strategies and market analysis.",
    icon: DollarSign,
    stat: "$500+ Avg. Profit"
  },
  {
    name: "Lightning Speed",
    description: "Beat the competition with our high-speed tools and infrastructure. Speed is crucial in this game.",
    icon: Zap,
    stat: "< 1s Latency"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Tools for Success
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our all-in-one platform provides everything you need to dominate the sneaker reselling market
          </p>
        </motion.div>

        <motion.div 
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-md group-hover:bg-blue-200 transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </span>
                    <span className="text-sm font-semibold text-blue-600">{feature.stat}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}