import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Trophy, Star, Quote, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    content: "The AI-powered monitors and advanced queue system helped me secure over 30 pairs of Travis Scott x Nike SB. Best investment ever!",
    author: "Michael R.",
    role: "Power Seller",
    metric: "$12,000+ profit"
  },
  {
    content: "Their market analysis tools are game-changing. I've increased my success rate from 40% to 95% on hyped releases.",
    author: "Sarah K.",
    role: "Advanced Reseller",
    metric: "95% Success Rate"
  },
  {
    content: "The community support and 24/7 expert guidance have been invaluable. I went from beginner to consistent profits in just 2 months.",
    author: "James L.",
    role: "Rising Star",
    metric: "8x ROI"
  }
];

const successStories = [
  {
    title: "Jordan 4 'Military Black' Group Success",
    description: "Our members collectively secured 150+ pairs using our custom monitoring system and bot configurations.",
    stats: {
      profit: "$45,000+",
      members: "32",
      timeframe: "48 hours"
    }
  },
  {
    title: "Nike SB x Travis Scott Launch",
    description: "Early information and strategic planning led to massive success across multiple regions.",
    stats: {
      profit: "$60,000+",
      members: "45",
      timeframe: "24 hours"
    }
  },
  {
    title: "Yeezy Slides Restock Domination",
    description: "Advanced queue management and multi-site strategy resulted in unprecedented success rates.",
    stats: {
      profit: "$35,000+",
      members: "28",
      timeframe: "72 hours"
    }
  }
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real Results, Real Members
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Join our community of successful resellers who consistently profit from every release
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                      <Trophy className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{story.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{story.description}</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600">Profit</p>
                      <p className="text-lg font-semibold text-green-600">{story.stats.profit}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Members</p>
                      <p className="text-lg font-semibold text-blue-600">{story.stats.members}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Time</p>
                      <p className="text-lg font-semibold text-purple-600">{story.stats.timeframe}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Member Testimonials
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-blue-600 mb-4" />
                    <p className="text-gray-600 mb-6">{testimonial.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            {testimonial.author[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-green-600">{testimonial.metric}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}