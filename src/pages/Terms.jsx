import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { transition1, fadeUp } from "../transitions";

const Terms = () => {
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
          <p className="eyebrow mb-4">{t("terms_eyebrow")}</p>
          <h1 className="h1 mb-5 text-[2.85rem] sm:text-[3.5rem] lg:text-[4.5rem]">
            {t("terms_title")}
          </h1>
          <div className="divider-line mb-6 ml-0" />
          <p className="body-copy mb-10">{t("terms_updated")}</p>

          {isPt ? (
            <div className="space-y-6">
              <p className="body-copy">
                Os conteúdos deste site — textos, fotografias e previews de guias — pertencem a
                Sandra Camilo salvo indicação em contrário. Podes partilhar com crédito e link, mas
                não copiar para fins comerciais sem autorização.
              </p>
              <h2 className="h3">Guias digitais</h2>
              <p className="body-copy">
                Os guias apresentados são previews de produtos planeados, sem checkout ativo. Quando
                a venda for ativada, será através de um fornecedor externo com os seus próprios
                termos de pagamento e entrega.
              </p>
              <h2 className="h3">Contacto</h2>
              <p className="body-copy">
                Ao usar o formulário, comprometes-te a enviar apenas conteúdos lícitos e a não
                abusar do serviço (spam, sobrecarga). Podemos ignorar mensagens automatizadas.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="body-copy">
                Content on this site — copy, photography and guide previews — belongs to Sandra
                Camilo unless stated otherwise. You may share with credit and a link, but not copy
                for commercial use without permission.
              </p>
              <h2 className="h3">Digital guides</h2>
              <p className="body-copy">
                Listed guides are planned-product previews with no active checkout. When sales open,
                they will run through an external provider with its own payment and delivery terms.
              </p>
              <h2 className="h3">Contact</h2>
              <p className="body-copy">
                By using the form you agree to send only lawful content and not to abuse the service
                (spam, flooding). Automated messages may be ignored.
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Terms;
