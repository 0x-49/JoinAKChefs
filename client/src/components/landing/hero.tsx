import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-[72px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            The Premier Sneaker Reselling
            <span className="text-blue-600 block">Consulting Agency</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
            Join the elite community of sneaker resellers. Get access to custom monitors, industry partnerships, and 24/7 expert support.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="https://whop.com/akchefs/" target="_blank" rel="noopener noreferrer">
                Start Reselling Today <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#features">
                Learn More
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
