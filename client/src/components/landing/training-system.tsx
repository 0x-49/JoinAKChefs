import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Target, 
  Users, 
  MessageSquare,
  Video,
  FileText,
  Bot,
  Award
} from "lucide-react";

const trainingModules = [
  {
    title: "Market Analysis Mastery",
    description: "Learn to identify profitable opportunities using our proprietary market analysis tools",
    icon: Target,
    duration: "4 Weeks",
    lessons: 12
  },
  {
    title: "Advanced Botting",
    description: "Master the latest botting techniques and automation strategies",
    icon: Bot,
    duration: "3 Weeks",
    lessons: 9
  },
  {
    title: "Risk Management",
    description: "Develop strategies to minimize risks and maximize profits",
    icon: Award,
    duration: "2 Weeks",
    lessons: 6
  },
  {
    title: "Community Mastery",
    description: "Learn to leverage our community for greater success",
    icon: Users,
    duration: "2 Weeks",
    lessons: 8
  }
];

const learningFeatures = [
  {
    title: "Live Training Sessions",
    description: "Weekly live sessions with industry experts",
    icon: Video,
    metric: "4+ Sessions/Week"
  },
  {
    title: "1-on-1 Mentoring",
    description: "Personal guidance from experienced resellers",
    icon: MessageSquare,
    metric: "Unlimited Access"
  },
  {
    title: "Comprehensive Guides",
    description: "Detailed documentation and strategy guides",
    icon: FileText,
    metric: "200+ Resources"
  },
  {
    title: "Certification Program",
    description: "Earn credentials as you progress",
    icon: GraduationCap,
    metric: "4 Levels"
  }
];

export default function TrainingSystem() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advanced Training System
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Transform from beginner to expert with our comprehensive training program
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Training Modules</h3>
            <div className="space-y-6">
              {trainingModules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                          <module.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900">{module.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{module.duration}</p>
                          <p className="text-sm text-gray-600">{module.lessons} Lessons</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Learning Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {learningFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="p-3 bg-blue-100 rounded-lg w-fit group-hover:bg-blue-200 transition-colors duration-300">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mt-4">{feature.title}</h4>
                      <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
                      <p className="text-sm font-medium text-blue-600 mt-4">{feature.metric}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 bg-blue-50 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Success Guarantee
              </h4>
              <p className="text-gray-600">
                Our comprehensive training system has a 97% success rate. We're so confident in our program that we offer a 30-day success guarantee.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
