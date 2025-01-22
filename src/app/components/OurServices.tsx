import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from "@radix-ui/react-separator";

const services = [
  {
    id: 1,
    title: "Web Development and Design",
    description:
      "Build stunning, responsive, and user-friendly websites tailored to your needs. Our team specializes in creating custom web applications and modern designs to help your business stand out.",
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Amplify your online presence with our comprehensive digital marketing strategies, including SEO, social media management, content marketing, and pay-per-click advertising.",
  },
  {
    id: 3,
    title: "Video Production",
    description:
      "Create high-quality videos to tell your brand story, showcase your products, or engage with your audience. From scripting to post-production, we handle it all.",
  },
  {
    id: 4,
    title: "AI Services",
    description:
      "Leverage the power of Artificial Intelligence to transform your business. From machine learning models to natural language processing, we offer custom AI solutions tailored to your needs.",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
      {/* Header */}
      <header className="text-center py-5 bg-gradient-to-r bg-black text-white">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg mt-2">
          We provide top-notch solutions to help your business grow and thrive.
        </p>
      </header>

      <main className="container mx-auto px-4 py-5">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <Card key={index} className="w-full hover:scale-105 transition ease-in-out border-none hover:shadow-xl rounded-lg p-4 bg-white">
              <div className="px-7">
                <Separator />
              </div>
              <CardHeader>
                <CardTitle>
                  <h1 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h1>
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <section className="py-5 bg-gray-100 text-center mt-5 mb-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose Us?</h2>
          <p className="text-gray-600 leading-relaxed">
            We are passionate about delivering excellence and ensuring client satisfaction. Our dedicated team works closely
            with you to understand your needs and provide tailored solutions that drive results.
          </p>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
