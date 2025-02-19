import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SiNike, SiJordan, SiAdidas, SiNewbalance, SiDiscord } from "react-icons/si";

const partners = [
  { icon: SiNike, name: "Nike" },
  { icon: SiJordan, name: "Jordan" },
  { icon: SiAdidas, name: "Adidas" },
  { icon: SiNewbalance, name: "New Balance" },
  { icon: SiDiscord, name: "Discord" }
];

export default function Partnerships() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted Partnerships
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We work with leading brands and platforms in the sneaker industry
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {partners.map((Partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-none">
                <CardContent className="flex items-center justify-center p-6">
                  <Partner.icon className="w-12 h-12 text-gray-400" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
