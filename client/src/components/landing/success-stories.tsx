import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const successStories = [
  {
    title: "32+ Air Jordan 4 'A Ma Maniére'",
    description: "Secured multiple pairs during a highly competitive drop using our custom monitors and bot setup"
  },
  {
    title: "8 Air Jordan 1 'Lost and Found'",
    description: "Successfully cooked the Chicago release with advanced queue bypass strategies"
  },
  {
    title: "Off-White Nike Collection",
    description: "Members secured dozens of pairs across multiple retailers using our exclusive tools"
  }
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real Results from Real Members
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our members consistently secure the most hyped releases
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Trophy className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{story.title}</h3>
                  </div>
                  <p className="mt-4 text-gray-600">{story.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
