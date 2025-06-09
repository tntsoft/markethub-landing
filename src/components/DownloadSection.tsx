
import { Smartphone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const DownloadSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-12 lg:p-16 space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{t("4.8/5 Rating")}</span>
                      <span className="text-muted-foreground">• {t("50k+ Downloads")}</span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                      {t("Ready to Transform Your Shopping?")}
                    </h2>
                    
                    <p className="text-xl text-muted-foreground">
                      {t("Join thousands of satisfied users who have already discovered the power of Markethub. Download now and start your journey.")}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground py-0 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl h-auto"
                      asChild
                    >
                      <a href="#" className="block py-3">
                        <img 
                          src="/lovable-uploads/63314bc0-c1fe-44da-9116-152caedf91b7.png" 
                          alt={t("Download for iPhone")}
                          className="h-12 w-auto mx-auto"
                        />
                      </a>
                    </Button>
                    
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full group border-2 border-primary/20 hover:border-primary/40 py-0 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-primary/5 h-auto"
                      asChild
                    >
                      <a href="#" className="block py-3">
                        <img 
                          src="/lovable-uploads/d4baac3f-5b80-493e-abd3-d65cabf16734.png" 
                          alt={t("Download for Android")}
                          className="h-12 w-auto mx-auto"
                        />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{t("Free forever")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{t("No ads")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>{t("Regular updates")}</span>
                    </div>
                  </div>
                </div>
                
                {/* Visual */}
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-12 lg:p-16">
                  <div className="relative">
                    {/* Main phone */}
                    <div className="w-64 h-[480px] bg-gradient-to-b from-gray-900 to-gray-700 rounded-[2.5rem] p-2 shadow-2xl">
                      <div className="w-full h-full bg-gradient-to-br from-background to-muted/20 rounded-[2rem] relative overflow-hidden">
                        <div className="absolute inset-4 space-y-4">
                          <div className="h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                            <Smartphone className="h-6 w-6 text-primary" />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {[...Array(6)].map((_, i) => (
                              <div 
                                key={i} 
                                className="h-16 bg-gradient-to-br from-muted/10 to-muted/5 rounded-lg"
                                style={{ animationDelay: `${i * 100}ms` }}
                              ></div>
                            ))}
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 bg-muted/20 rounded w-full"></div>
                            <div className="h-3 bg-muted/20 rounded w-3/4"></div>
                            <div className="h-3 bg-muted/20 rounded w-1/2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent/20 rounded-full animate-bounce delay-500"></div>
                    <div className="absolute top-1/2 -left-12 w-6 h-6 bg-secondary/20 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
