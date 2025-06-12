import {Smartphone} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useTranslation} from "react-i18next";

const Hero = () => {
    const {t} = useTranslation();

    return (
        <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/85">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="container mt-10 lg:mt-0 mx-auto px-4 z-10 flex flex-col justify-center items-center">
                <div className="grid lg:grid-cols-2 gap-12 items-center lg:w-full">
                    {/* Content */}
                    <div className="text-center lg:text-left space-y-8 animate-fade-in flex flex-col items-center lg:items-start w-full">
                        <div className="space-y-4 lg:w-full">
                            {/* Logo */}
                            <div className="flex justify-center lg:justify-start mb-6">
                                <img
                                    src="/images/logo.svg"
                                    alt={t("Logo")}
                                    className="w-20 h-20 rounded-md shadow-lg"
                                />
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
                                {t("Markethub")}
                            </h1>
                            <p className="text-xl lg:text-2xl text-muted-foreground max-w-sm lg:max-w-lg mx-auto lg:mx-0">
                                {t("Markethub automatically searches marketplaces and notifies you of new ads that match your watchlist")}
                            </p>
                        </div>

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

                        <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span>{t("Free to download")}</span>
                            </div>
                        </div>
                    </div>

                    {/* Phone mockup */}
                    <div className="relative flex justify-center lg:justify-end animate-fade-in delay-300">
                        <div className="relative flex flex-row items-end gap-4">
                            {/* Left smartphone */}
                            <div
                                className="w-64 sm:w-80 h-[500px] sm:h-[600px] bg-gradient-to-b from-gray-900 to-gray-700 rounded-[3rem] p-2 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 mb-8">
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
                            {/* Right smartphone */}
                            <div
                                className="w-64 sm:w-80 h-[500px] sm:h-[600px] bg-gradient-to-b from-gray-900 to-gray-700 rounded-[3rem] p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div
                                    className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-4 bg-background/95 rounded-[2rem] backdrop-blur-sm flex items-center justify-center">
                                        <img
                                            src="/images/feed.png"
                                            alt="Screenshot of the Markethub app interface showing watchlist creation"
                                            className="w-full h-full object-cover rounded-[1.5rem]"
                                        />
                                    </div>
                                    <Smartphone className="absolute bottom-4 right-4 h-8 w-8 text-primary/30"/>
                                </div>
                            </div>
                            {/* Floating elements remain outside the flex row */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/20 rounded-full animate-bounce delay-500"></div>
                            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-accent/20 rounded-full animate-bounce delay-700"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;