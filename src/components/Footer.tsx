
import { Facebook, X, Mail, Link } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61577384487528', label: 'Facebook' },
    { icon: X, href: 'https://x.com/MarkethubRO', label: 'X' },
    // { icon: Instagram, href: '#', label: 'Instagram' },
    // { icon: Linkedin, href: '#', label: 'LinkedIn' },
    // { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-t from-primary/5 to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.svg"
                alt={t("Logo")} 
                className="w-12 h-12 rounded-md shadow-lg"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t("Markethub")}
              </h3>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              {t("Your ultimate marketplace companion. Discover amazing deals right from your phone.")}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                    <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-300 transition-colors duration-200"
                        aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                );
              })}
            </div>
            {/*<div className="flex gap-4">*/}
            {/*  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">*/}
            {/*    <span className="text-xs font-bold text-primary">f</span>*/}
            {/*  </div>*/}
            {/*  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">*/}
            {/*    <span className="text-xs font-bold text-primary">t</span>*/}
            {/*  </div>*/}
            {/*  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">*/}
            {/*    <span className="text-xs font-bold text-primary">in</span>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          
          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">{t("Contact")}</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@markethub.ro</span>
              </div>

              <div className="flex items-center gap-3">
                <Link className="h-4 w-4"/>
                <a href="/privacy-policy.txt">
                  {t('Privacy Policy')}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Link className="h-4 w-4"/>
                <a href="/terms-and-conditions.txt">
                  {t('Terms & Conditions')}
                </a>
              </div>
              {/*<div className="flex items-center gap-3">*/}
              {/*  <MapPin className="h-4 w-4 text-primary" />*/}
              {/*  <span>Ramnicu Valcea, Judet Valcea</span>*/}
              {/*</div>*/}
            </div>
          </div>

          {/* Others */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">{t("Others")}</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Link className="h-4 w-4"/>
                <a href="/privacy-policy.txt">
                  {t('Privacy Policy')}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Link className="h-4 w-4"/>
                <a href="/terms-and-conditions.txt">
                  {t('Terms & Conditions')}
                </a>
              </div>
              {/*<div className="flex items-center gap-3">*/}
              {/*  <MapPin className="h-4 w-4 text-primary" />*/}
              {/*  <span>Ramnicu Valcea, Judet Valcea</span>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {t("Markethub")}. {t("All rights reserved.")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
