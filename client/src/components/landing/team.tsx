import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Award, Users, Star } from "lucide-react";

const teamMembers = [
  {
    name: "Alex K.",
    role: "Founder & Lead Strategist",
    achievement: "$1M+ in Personal Sales",
    expertise: "Market Analysis & Prediction",
    description: "10+ years of sneaker reselling experience, pioneered multiple successful trading strategies",
    icon: TrendingUp
  },
  {
    name: "Sarah Chen",
    role: "Head of Community",
    achievement: "Built 1000+ Member Network",
    expertise: "Community Management & Support",
    description: "Created our signature support system ensuring member success through collaboration",
    icon: Users
  },
  {
    name: "Marcus Rodriguez",
    role: "Technical Director",
    achievement: "99.9% Bot Success Rate",
    expertise: "Automation & Tool Development",
    description: "Developed our proprietary monitoring and automation systems",
    icon: Star
  },
  {
    name: "Jordan Taylor",
    role: "Education Lead",
    achievement: "Trained 500+ Resellers",
    expertise: "Strategy & Training",
    description: "Designed our comprehensive training program with proven success rates",
    icon: Award
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Expert Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Industry veterans with proven track records in sneaker reselling
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="p-3 bg-blue-100 rounded-lg w-fit group-hover:bg-blue-200 transition-colors duration-300">
                    <member.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                  <div className="mt-4 space-y-2">
                    <p className="text-green-600 text-sm font-medium">{member.achievement}</p>
                    <p className="text-gray-600 text-sm font-medium">{member.expertise}</p>
                    <p className="text-gray-500 text-sm">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
