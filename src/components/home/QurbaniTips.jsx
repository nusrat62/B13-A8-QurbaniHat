import { Heart, TrendingUp, Calendar } from "lucide-react";

const QurbaniTips = () => {
  const tips = [
    {
      id: 1,
      icon: Heart,
      title: "Choose a Healthy Animal",
      description:
        "Look for bright eyes, clean coat, and active behavior. A healthy animal should be alert, have good appetite, and show no signs of illness or injury. Check for proper weight and body condition.",
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Understand Weight & Pricing",
      description:
        "Fair pricing is based on weight, breed, and age. Compare market rates and verify the animal's weight before purchase. Premium breeds and well-maintained livestock naturally cost more.",
    },
    {
      id: 3,
      icon: Calendar,
      title: "Book Early for Best Selection",
      description:
        "Demand increases closer to Eid, leading to higher prices and limited availability. Early booking ensures better selection, competitive pricing, and peace of mind during the busy season.",
    },
  ];

  return (
    <section className="bg-surface py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="xl:container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-14">
          {/* Overline Label */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-gradient-accent" />
            <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
              Expert Advice
            </span>
            <div className="w-8 h-0.5 bg-gradient-accent" />
          </div>

          {/* Main Heading */}
          <h2 className="font-heading text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-heading mb-3 tracking-tight">
            Qurbani Tips & Guidelines
          </h2>

          {/* Supporting Description */}
          <p className="font-body text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Follow these important guidelines to ensure a meaningful and
            successful Qurbani experience
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tips.map((tip) => {
            const IconComponent = tip.icon;
            return (
              <div
                key={tip.id}
                className="group relative bg-background border border-border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 shadow-primary hover:border-accent/40"
              >
                {/* Icon Container */}
                <div className="mb-5">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-accent-soft rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <IconComponent
                      className="w-7 h-7 text-accent"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl lg:text-[22px] font-bold text-heading mb-3 group-hover:text-primary transition-colors duration-300">
                  {tip.title}
                </h3>

                {/* Description */}
                <p className="font-body text-[15px] text-muted leading-relaxed">
                  {tip.description}
                </p>

                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-accent opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Optional Bottom CTA or Note */}
        <div className="mt-10 lg:mt-12 text-center">
          <p className="font-body text-sm text-muted italic">
            Need more guidance?{" "}
            <a
              href="#"
              className="text-primary font-semibold hover:text-accent transition-colors duration-200 underline decoration-primary/30 hover:decoration-accent"
            >
              Contact our experts
            </a>{" "}
            for personalized advice
          </p>
        </div>
      </div>
    </section>
  );
};

export default QurbaniTips;
