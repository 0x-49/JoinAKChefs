import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ShoppingBag, DollarSign, TrendingUp, Clock, Users, Target, Award, Zap } from "lucide-react";

const useCases = [
  {
    title: "Jordan 1 High OG 'Chicago Lost & Found'",
    profit: "$280-350",
    description: "Member secured 20 pairs using our early-access monitor system, generating over $6,000 in profit within 48 hours of release.",
    tags: ["Early Monitor Alert", "Bulk Success", "High Margin"],
    stats: { timeToProfit: "48h", successRate: "100%", roi: "320%" }
  },
  {
    title: "Nike SB x Travis Scott",
    profit: "$400-600",
    description: "Custom bot setup helped member checkout 12 pairs across multiple regions, resulting in $5,400+ pure profit.",
    tags: ["Bot Configuration", "Multi-Region", "Limited Release"],
    stats: { timeToProfit: "24h", successRate: "92%", roi: "450%" }
  },
  {
    title: "Yeezy Slide 'Onyx'",
    profit: "$120-150",
    description: "Group buy opportunity allowed members to secure 50+ pairs at retail, with guaranteed profit margins through our verified reseller network.",
    tags: ["Group Buy", "Volume Play", "Quick Flip"],
    stats: { timeToProfit: "72h", successRate: "100%", roi: "180%" }
  },
  {
    title: "Nike Dunk Low 'Panda' Restock",
    profit: "$80-120",
    description: "Advanced queue management system helped members secure 100+ pairs during surprise restock, perfect for bulk reselling strategy.",
    tags: ["Queue Strategy", "High Volume", "Steady Profit"],
    stats: { timeToProfit: "1 week", successRate: "95%", roi: "140%" }
  },
  {
    title: "Louis Vuitton x Nike AF1",
    profit: "$2000-3000",
    description: "Exclusive raffle groups and monitor alerts helped members secure 5 pairs of this ultra-limited collaboration.",
    tags: ["Premium Release", "Raffle Win", "Luxury Market"],
    stats: { timeToProfit: "Instant", successRate: "80%", roi: "900%" }
  },
  {
    title: "Jordan 4 'Military Black'",
    profit: "$150-200",
    description: "Members utilized our regional arbitrage strategy to profit from price differences across markets.",
    tags: ["Market Arbitrage", "Global Release", "Strategic Timing"],
    stats: { timeToProfit: "5 days", successRate: "88%", roi: "160%" }
  },
  {
    title: "Nike SB Dunk Low 'Street Hawker'",
    profit: "$450-600",
    description: "Early information through our Asia market connects allowed members to prepare optimal strategy weeks in advance.",
    tags: ["Early Intel", "Regional Edge", "Premium Release"],
    stats: { timeToProfit: "3 days", successRate: "90%", roi: "380%" }
  },
  {
    title: "Yeezy 700 V3 'Fade Carbon'",
    profit: "$160-200",
    description: "Members leveraged our demand prediction tools to identify unexpected market opportunity before general market awareness.",
    tags: ["Market Analysis", "Trend Prediction", "Smart Timing"],
    stats: { timeToProfit: "2 weeks", successRate: "100%", roi: "170%" }
  },
  {
    title: "Jordan 11 'Cherry'",
    profit: "$100-150",
    description: "Holiday release strategy guide helped members maximize profits during peak season with minimal competition.",
    tags: ["Seasonal Strategy", "Mass Release", "Consistent Profit"],
    stats: { timeToProfit: "1 week", successRate: "96%", roi: "130%" }
  },
  {
    title: "Nike Dunk Low 'Year of the Rabbit'",
    profit: "$200-280",
    description: "Cultural release calendar and Asian market insights provided members with perfect timing for maximum returns.",
    tags: ["Cultural Release", "Market Timing", "Regional Play"],
    stats: { timeToProfit: "4 days", successRate: "94%", roi: "240%" }
  },
  {
    title: "Jordan 1 High OG 'Dark Marina Blue'",
    profit: "$140-180",
    description: "Bulk order success through our supplier network connections, perfect for members starting with larger capital.",
    tags: ["Bulk Order", "Supplier Network", "Capital Efficiency"],
    stats: { timeToProfit: "10 days", successRate: "100%", roi: "150%" }
  },
  {
    title: "Nike SB Dunk Low 'Sandy Bodecker'",
    profit: "$300-400",
    description: "Exclusive skateshop connections through our network helped members secure pairs from limited brick-and-mortar release.",
    tags: ["Shop Connects", "Limited Release", "Network Value"],
    stats: { timeToProfit: "2 days", successRate: "85%", roi: "280%" }
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export default function UseCases() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

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
            Real Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See how our members are consistently profiting from every release
          </p>
        </motion.div>

        <div className="mt-16 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 sm:pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <ShoppingBag className="h-6 w-6 text-blue-600" />
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-5 w-5 text-green-600" />
                          <span className="text-sm font-semibold text-green-600">{useCase.profit}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                      <p className="text-gray-600 mb-4">{useCase.description}</p>

                      <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="text-gray-600">{useCase.stats.timeToProfit}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Target className="h-4 w-4 text-green-600" />
                          <span className="text-gray-600">{useCase.stats.successRate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="h-4 w-4 text-purple-600" />
                          <span className="text-gray-600">{useCase.stats.roi}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {useCase.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="mt-8 flex justify-center space-x-2">
            {useCases.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === selectedIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}