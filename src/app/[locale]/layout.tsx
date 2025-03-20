import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';


export const metadata: Metadata = {
  title: "Softforge Solutions",
  description: "Design, Development and Maintenance of customized software solutions",
};

export default async function LocaleLayout({children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximun-scale=1"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
        <NavBar/>
          {children}
        </NextIntlClientProvider>
        <div className="footer-container w-full">
            <Footer/>
          </div>
      </body>
    </html>
  );
}
