
import { useTranslation, Trans } from "react-i18next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const FAQ = () => {
    const { t } = useTranslation();

    const faqs = [
        {
            question: t("What is Markethub and why should I use it?"),
            answer: t("Markethub is a user-first automatically searches public listings and notifies you of new ads that match your watchlist.")
        },
        {
            question: t("Is it free?"),
            answer: t("Yes, Markethub is FREE to download and use.")
        },
        {
            question: t("Can I use Markethub without an account?"),
            answer: t("You can see a preview of collected listings without an account, but to create watchlists and receive notifications, you need to sign up.")
        },
        {
            question: t("Which platforms is it available on?"),
            answer: t("Markethub is available for iPhone and Android.")
        },
        {
            question: t("How do I get notifications for new offers?"),
            answer: t("After creating your watchlists, Markethub will automatically notify you when listings you're interested in appear. Notifications happen twice a day only, there are plans to make the frequency configurable.")
        },
        {
            question: t("Can I sell products through the app?"),
            answer: t("No. Markethub is designed to help you find listings that are already present on the web.")
        },
        {
            question: t("I found an issue. What should I do?"),
            answer: (
                <Trans
                    i18nKey="Please contact us on <twitter>X (@MarkethubRO)</twitter>, <facebook>Markethub Facebook</facebook>, or write us at <email>contact@markethub.ro</email>."
                    components={{
                        twitter: <a href="https://x.com/MarkethubRO" className="text-blue-500 hover:underline" />,
                        facebook: <a href="https://www.facebook.com/profile.php?id=61577384487528" className="text-blue-500 hover:underline" />,
                        email: <a href="mailto:contact@markethub.ro" className="text-blue-500 hover:underline" />
                    }}
                />
            )
        },
        {
            question: t("What's the difference between Markethub and Imoradar24?"),
            answer: (
                <div className="space-y-4">
                    <p>{t('Markethub is a mobile first application built with the convenience of the everyday user in mind while Imoradar24 is a website built for advanced users.')}</p>
                    <div className="w-full overflow-x-auto">
                        <Table className="min-w-[600px]">
                            <TableHeader>
                                <TableRow className="bg-gray-500 hover:bg-gray-500">
                                    <TableHead className="font-semibold text-white">{t("Feature")}</TableHead>

                                    <TableHead className="font-semibold text-white">
                                        <div className="flex items-center gap-2">
                                            <img src="/images/logo.svg" alt="Markethub Logo" className="w-7 h-7" />
                                            {t("Markethub")}
                                        </div>
                                    </TableHead>

                                    <TableHead className="font-semibold text-white">
                                        <div className="flex items-center gap-2">
                                            <img src="/images/imoradar-logo.svg" alt="Imoradar24 Logo" className="w-5 h-5" />
                                            {t("Imoradar24")}
                                        </div>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">{t("Users")}</TableCell>
                                    <TableCell className="bg-green-50">{t("designed for everyday users who want quick results without effort")}</TableCell>
                                    <TableCell>{t("built for advanced users who want full control and manual browsing")}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">{t("Platform")}</TableCell>
                                    <TableCell className="bg-green-50">{t("tailored for mobile — fast, intuitive, and always in your pocket")}</TableCell>
                                    <TableCell>{t("available only as a website")}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">{t("User experience")}</TableCell>
                                    <TableCell className="bg-green-50">{t("simple, clean interface focused on ease of use")}</TableCell>
                                    <TableCell>{t("complete interface with lots of data, but can be overwhelming")}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">{t("Search filters")}</TableCell>
                                    <TableCell className="bg-green-50">{t("basic filtering for now — more advanced filters are coming soon")}</TableCell>
                                    <TableCell>{t("advanced filtering options with granular control")}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">{t("Search automation")}</TableCell>
                                    <TableCell className="bg-green-50">{t("searches only based on your watchlist, it does not collect all public listings it finds")}</TableCell>
                                    <TableCell>{t("collects all the data it can find on the web")}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">{t("Privacy")}</TableCell>
                                    <TableCell className="bg-green-50">{t("does not collect nor store user information from public listings")}</TableCell>
                                    <TableCell>{t("collects all private user data including phone numbers")}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            )
        },
    ];

    return (
        <section className="py-24 bg-muted/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {t("Frequently Asked Questions")}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t("Find answers to common questions about Markethub and how it can help you find the best deals.")}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-border rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors"
                            >
                                <AccordionTrigger className="text-left py-6 hover:no-underline">
                                    <span className="text-lg font-semibold">{faq.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-6 pt-0">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;