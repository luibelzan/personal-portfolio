import { useTranslations } from "next-intl";

const Footer = () => {

    const t = useTranslations('Footer');

    return (
        <footer className=" text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">{t('footerSectionTitle')}</p>
                <p className="text-xs mt-4">{t('footerSectionDescription1')} <span className="text-blue-400">♥</span> {t('footerSectionDescription2')}</p>
            </div>
        </footer>
    )
}

export default Footer;