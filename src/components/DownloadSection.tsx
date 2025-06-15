
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
                      <span>{t("5/5 Rating")}</span>
                      {/*<span className="text-muted-foreground">• {t("50k+ Downloads")}</span>*/}
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                      {t("Ready to Transform Your Shopping?")}
                    </h2>
                    
                    <p className="text-xl text-muted-foreground">
                      {t("Join thousands of satisfied users, download now and start your journey.")}
                    </p>
                  </div>
                  
                  <div className="space-y-4 justify-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start lg:w-full">
                      <a
                          href="https://apps.apple.com/app/id6745069070"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-none"
                      >
                        <Button
                            size="lg"
                            className="px-0 py-0 h-auto bg-transparent shadow-none hover:shadow-none hover:scale-105 focus:ring-0 focus:outline-none"
                        >
                          <img
                              src="/images/appstore.png"
                              alt={t("Download for iPhone")}
                              className="h-14 w-auto"
                          />
                        </Button>
                      </a>
                      <a
                          href="https://play.google.com/store/apps/details?id=com.markethub.gen"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-none"
                      >
                        <Button
                            size="lg"
                            className="px-0 py-0 h-auto bg-transparent shadow-none hover:shadow-none hover:scale-105 focus:ring-0 focus:outline-none"
                        >
                          <img
                              src="/images/googleplay.png"
                              alt={t("Download for Android")}
                              className="h-14 w-auto"
                          />
                        </Button>
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-start gap-6 text-sm text-muted-foreground">
                    <div className="flex whitespace-pre-wrap items-center gap-2">
                      <div className="w-3 aspect-square bg-green-500 rounded-full inline-block"></div>
                      <span>{t("Free")}</span>
                    </div>
                    <div className="flex whitespace-nowrap items-center gap-2">
                      <div className="w-3 aspect-square bg-blue-500 rounded-full inline-block"></div>
                      <span>{t("No ads")}</span>
                    </div>
                    <div className="flex whitespace-nowrap items-center gap-2">
                      <div className="w-3 aspect-square bg-purple-500 rounded-full inline-block"></div>
                      <span>{t("Regular updates")}</span>
                    </div>
                  </div>
                </div>
                
                {/* Visual */}
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-12 lg:p-16">
                  <div className="relative">
                    {/* Main phone */}
                    <div
                        className="w-64 sm:w-80 h-[500px] sm:h-[600px] bg-gradient-to-b from-gray-900 to-gray-700 rounded-[3rem] p-2 shadow-2xl transform transition-transform duration-500 mb-8">
                      <div
                          className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-4 bg-background/95 rounded-[2rem] backdrop-blur-sm flex items-center justify-center">
                          <img
                              src="/images/watchlist-creation.png"
                              alt="Screenshot of the Markethub app feed"
                              className="w-full h-full object-cover rounded-[1.5rem]"
                          />
                        </div>
                        <Smartphone className="absolute bottom-4 right-4 h-8 w-8 text-primary/30"/>
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
