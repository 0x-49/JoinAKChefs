import { motion } from "framer-motion";
import { Shield, Target, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const visionPoints = [
  {
    title: "Our Mission",
    description: "To empower sneaker resellers with expert resources and insights, helping them generate sustainable profits in the competitive reselling market.",
    icon: Target
  },
  {
    title: "Our Values",
    description: "We believe in transparency, community support, and continuous innovation to keep our members ahead of market trends.",
    icon: Shield
  },
  {
    title: "Our Community",
    description: "Building a supportive network of successful resellers who share knowledge and grow together.",
    icon: Users
  },
  {
    title: "Our Commitment",
    description: "Ensuring our members stay ahead of trends, maximize profits, and remain confident in their success journey.",
    icon: Award
  }
];

export default function Vision() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Vision for Success
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Since 2017, we've been dedicated to transforming sneaker reselling into a profitable venture for our community
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {visionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <point.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {point.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
