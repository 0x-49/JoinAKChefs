import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { DollarSign, TrendingUp, Calculator, Clock } from "lucide-react";

export default function ROICalculator() {
  const [investment, setInvestment] = useState(1000);
  const [releases, setReleases] = useState(5);

  // Conservative ROI calculations
  const averageProfitPerRelease = 100; // $100 profit per successful release
  const successRate = 0.8; // 80% success rate
  const monthlyProfit = releases * averageProfitPerRelease * successRate;
  const annualProfit = monthlyProfit * 12;
  const roi = ((annualProfit - investment) / investment) * 100;

  return (
    <section id="roi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Calculate Your Potential Returns
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See how your investment can grow with our proven strategies and tools
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Initial Investment
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        type="number"
                        value={investment}
                        onChange={(e) => setInvestment(Number(e.target.value))}
                        className="pl-10"
                        min={500}
                        max={10000}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Releases ({releases})
                    </label>
                    <Slider
                      value={[releases]}
                      onValueChange={(value) => setReleases(value[0])}
                      min={1}
                      max={20}
                      step={1}
                      className="py-4"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <Card className="bg-blue-50">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">Monthly Profit</h3>
                <p className="text-3xl font-bold text-blue-600 mt-2">
                  ${monthlyProfit.toFixed(2)}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardContent className="p-6">
                <Calculator className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">Annual ROI</h3>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {roi.toFixed(1)}%
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">Break Even</h3>
                <p className="text-3xl font-bold text-purple-600 mt-2">
                  {Math.ceil(investment / monthlyProfit)} months
                </p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50">
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">Annual Profit</h3>
                <p className="text-3xl font-bold text-orange-600 mt-2">
                  ${annualProfit.toFixed(2)}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          * Calculations based on conservative estimates and historical data. Individual results may vary.
        </motion.div>
      </div>
    </section>
  );
}
