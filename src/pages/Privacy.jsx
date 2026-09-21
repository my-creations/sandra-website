import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { transition1, fadeUp } from "../transitions";

const Privacy = () => {
  const { t, i18n } = useTranslation();
  const isPt = i18n.language?.startsWith("pt");

  return (
    <motion.section
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      exit={fadeUp.exit}
      transition={transition1}
      className="page-shell"
    >
      <div className="container-editorial">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow mb-4">{t("privacy_eyebrow")}</p>
          <h1 className="h1 mb-5 text-[2.85rem] sm:text-[3.5rem] lg:text-[4.5rem]">
            {t("privacy_title")}
          </h1>
          <div className="divider-line mb-6 ml-0" />
          <p className="body-copy mb-10">{t("privacy_updated")}</p>

          {isPt ? (
            <div className="space-y-6">
              <p className="body-copy">
                Este site é uma SPA estática sem contas, sem loja e sem rastreio publicitário. Os
                únicos dados pessoais tratados são os que envias no formulário de contacto (nome,
                email e mensagem), usados apenas para responder ao teu pedido através do fornecedor
                de email (EmailJS).
              </p>
              <h2 className="h3">Cookies e armazenamento local</h2>
              <p className="body-copy">
                Guardamos a tua preferência de idioma em `localStorage`/cookie e a tua escolha do
                banner de cookies (`sandra-cookie-consent`). Analytics privado (Plausible) só é
                carregado se aceitares — sem cookies de terceiros para publicidade.
              </p>
              <h2 className="h3">Os teus direitos</h2>
              <p className="body-copy">
                Podes pedir acesso, correção ou eliminação dos teus dados de contacto a qualquer
                momento através da página de contacto. Não vendemos dados nem partilhamos com
                anunciantes.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="body-copy">
                This site is a static SPA with no accounts, no shop checkout and no ad tracking. The
                only personal data processed is what you send in the contact form (name, email and
                message), used solely to reply via the email provider (EmailJS).
              </p>
              <h2 className="h3">Cookies & local storage</h2>
              <p className="body-copy">
                We store your language preference in `localStorage`/cookie and your cookie-banner
                choice (`sandra-cookie-consent`). Privacy-friendly analytics (Plausible) only loads
                if you accept — no third-party ad cookies.
              </p>
              <h2 className="h3">Your rights</h2>
              <p className="body-copy">
                You can request access, correction or deletion of your contact data at any time via
                the contact page. We never sell data or share it with advertisers.
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Privacy;
