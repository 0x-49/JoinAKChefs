import { motion } from "framer-motion";
import { Monitor, Users, Clock, Shield, Zap, Award } from "lucide-react";

const features = [
  {
    name: "Custom Monitors",
    description: "Get real-time alerts and updates with our in-house monitoring system",
    icon: Monitor
  },
  {
    name: "Elite Community",
    description: "Join an exclusive Discord community of successful resellers",
    icon: Users
  },
  {
    name: "24/7 Support",
    description: "Access expert guidance and technical support around the clock",
    icon: Clock
  },
  {
    name: "Industry Partnerships",
    description: "Leverage our network of premium partnerships and resources",
    icon: Shield
  },
  {
    name: "Fast Automation",
    description: "Streamline your operations with cutting-edge botting solutions",
    icon: Zap
  },
  {
    name: "Proven Success",
    description: "Follow strategies backed by years of reselling experience",
    icon: Award
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our comprehensive toolkit empowers resellers at every level
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-md">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
