import { Bell, Home, MapPin, SearchCheck, ListTodo, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: SearchCheck,
      title: t("Smart Search"),
      description: t("Markethub searches across all major platforms to find listings that match your preferences.")
    },
    {
      icon: ListTodo,
      title: t("Custom Watchlists"),
      description: t("Create personalized watchlists for cars, apartments, lands, or houses and track them all in one place.")
    },
    {
      icon: Bell,
      title: t("Instant Alerts"),
      description: t("Get notified instantly when new ads match your watchlists.")
    },
    {
      icon: Home,
      title: t("Real Estate Ready"),
      description: t("Perfect for buyers looking for houses, apartments, or land with powerful filters.")
    },
    {
      icon: Globe,
      title: t("Multiple Marketplaces"),
      description: t("Markethub brings listings from various platforms into a single, unified experience.")
    },
    {
      icon: MapPin,
      title: t("Location Based Results"),
      description: t("Find relevant listings in your selected city or province with advanced geo-filters.")
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("Why Choose Markethub?")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("Experience the future of mobile commerce with features designed to make your shopping journey effortless and enjoyable.")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
