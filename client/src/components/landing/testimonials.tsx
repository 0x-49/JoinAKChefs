import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content: "Love this group! So informative and everyone is genuinely helpful with the same goal!",
    author: "Babybear",
    role: "Member"
  },
  {
    content: "The custom monitors and partnerships have completely transformed my reselling game.",
    author: "Michael R.",
    role: "Power Seller"
  },
  {
    content: "24/7 support has saved me countless times during crucial drops.",
    author: "Sarah K.",
    role: "Reseller"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Members Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Join thousands of successful resellers who trust AK CHEFS
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent className="p-6">
                    <blockquote className="space-y-6">
                      <p className="text-lg text-gray-700">{testimonial.content}</p>
                      <footer className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>
                            {testimonial.author[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
