import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      home: "Home",
      sandra: "Sandra",
      camilo: "Camilo",
      home_description: "Travel · Lifestyle · Visual storytelling",
      home_headline: "Stories with soul, journeys with heart",
      home_subheadline:
        "An editorial corner for wanderlust, slow living, and the little details that make a trip unforgettable.",
      home_cta_guides: "Explore travel guides",
      home_cta_about: "Meet Sandra",
      category_travel: "Travel",
      category_lifestyle: "Lifestyle",
      category_recipes: "Recipes",
      category_guides: "Guides",
      about: "About",
      about_me_title: "About me",
      about_eyebrow: "The storyteller",
      about_me_description_1:
        "I'm Sandra, a content creator with an immense passion for nature, travel and the power of visual storytelling.",
      about_me_description_2:
        "I believe that every moment, no matter how simple, can transform into a story with soul.",
      about_me_description_3:
        "My purpose is to inspire people to discover beauty and meaning in the small things of life.",
      portfolio: "Portfolio",
      portfolio_eyebrow: "Through the lens",
      portfolio_description_1:
        "As a visual storyteller, I weave captivating narratives through photography, travelogues, and recipes. Whether capturing countryside mountains or sun-kissed beaches, my work celebrates the vibrant tapestry of life.",
      portfolio_description_2:
        "Let's collaborate — I'd love to infuse your project with creativity and wanderlust.",
      portfolio_label_1: "Golden hour",
      portfolio_label_2: "Wanderlust",
      portfolio_label_3: "Slow mornings",
      portfolio_label_4: "Coastal light",
      portfolio_label_5: "In bloom",
      portfolio_label_6: "On the road",
      view_more_button: "View collaborations",
      shop: "Guides",
      shop_eyebrow: "Digital travel guides",
      shop_description_1:
        "Embark on a global adventure and explore the destinations that left me spellbound.",
      shop_description_2:
        "Curated travel guides with insider tips, hidden gems, and practical itineraries — so every journey feels intentional.",
      shop_description_3: "Make the most of every moment.",
      shop_description_4: "Ready to create memories that last a lifetime?",
      visit_my_shop_button: "Browse guides",
      collaborations: "Collaborations",
      collaborations_eyebrow: "Brand stories",
      collaboration_1_title: "Santa Maria Bejuco Home",
      collaboration_1_description_1:
        "My name is Sandra and I'm a true enthusiast for travel and nature. Another great passion I have is cooking and that's why I also share some recipe videos on my page.",
      collaboration_2_title: "Chão do Rio",
      view_collaboration_button: "View collaboration",
      contact: "Contact",
      contact_eyebrow: "Let's connect",
      contact_me_title: "Contact me",
      contact_intro:
        "Collaborations, press, or a note about your next trip — I would love to hear from you.",
      name_placeholder: "Your name",
      email_placeholder: "Your email address",
      message_placeholder: "Your message",
      send_button: "Send message",
      email_sent_success_message: "Message sent — thank you!",
      email_error_message: "Something went wrong. Please try again.",
      products: "Shop",
      products_eyebrow: "For your next escape",
      bundles_title: "Bundles",
      bundles_description: "Explore our bundles combining travel guides and Lightroom presets.",
      travel_guides_title: "Travel Guides",
      travel_guide_1_title: "Sintra Guide",
      travel_guide_2_title: "Lisbon Guide",
      travel_guide_1_description:
        "Discover Sintra like never before — magical palaces, secret gardens, and stunning trails, with practical tips and personalized itineraries. Gastronomic suggestions and the best viewpoints for unforgettable photos.",
      travel_guide_2_description:
        "Discover Lisbon like never before — historic neighborhoods, breathtaking viewpoints, practical tips, and personalized itineraries. Become a true connoisseur of the city.",
      lightroom_presets_title: "Lightroom Presets",
      lightroom_presets_description: "Enhance your photos with our Lightroom presets.",
      planned_product_label: "Coming soon",
      featured_guides: "Featured guides",
    },
  },
  pt: {
    translation: {
      home: "Início",
      sandra: "Sandra",
      camilo: "Camilo",
      home_description: "Viagens · Lifestyle · Storytelling visual",
      home_headline: "Histórias com alma, viagens com coração",
      home_subheadline:
        "Um canto editorial para o desejo de viajar, o slow living e os pequenos detalhes que tornam uma viagem inesquecível.",
      home_cta_guides: "Explorar guias de viagem",
      home_cta_about: "Conhecer a Sandra",
      category_travel: "Viagens",
      category_lifestyle: "Lifestyle",
      category_recipes: "Receitas",
      category_guides: "Guias",
      about: "Sobre",
      about_me_title: "Sobre mim",
      about_eyebrow: "A contadora de histórias",
      about_me_description_1:
        "Sou a Sandra, criadora de conteúdos com uma paixão imensa pela natureza, pelas viagens e pelo poder do storytelling visual.",
      about_me_description_2:
        "Acredito que cada momento, por mais simples que seja, pode transformar-se numa história com alma.",
      about_me_description_3:
        "O meu propósito é inspirar as pessoas a descobrirem beleza e significado nas pequenas coisas da vida.",
      portfolio: "Portfólio",
      portfolio_eyebrow: "Através da lente",
      portfolio_description_1:
        "Como contadora de histórias visuais, teço narrativas cativantes através da fotografia, relatos de viagens e receitas. Quer esteja a capturar as montanhas do campo ou as praias banhadas pelo sol, o meu trabalho celebra o vibrante tecido da vida.",
      portfolio_description_2:
        "Vamos colaborar — adoraria infundir o teu projeto com criatividade e desejo de viajar.",
      portfolio_label_1: "Hora dourada",
      portfolio_label_2: "Desejo de viajar",
      portfolio_label_3: "Manhãs calmas",
      portfolio_label_4: "Luz costeira",
      portfolio_label_5: "Em flor",
      portfolio_label_6: "Na estrada",
      view_more_button: "Ver colaborações",
      shop: "Guias",
      shop_eyebrow: "Guias de viagem digitais",
      shop_description_1:
        "Embarca numa aventura global e explora os destinos que me deixaram encantada.",
      shop_description_2:
        "Guias de viagem curados com dicas de quem conhece, joias escondidas e itinerários práticos — para que cada viagem se sinta intencional.",
      shop_description_3: "Aproveita ao máximo cada momento.",
      shop_description_4: "Pronta para criar memórias que durem uma vida inteira?",
      visit_my_shop_button: "Ver guias",
      collaborations: "Colaborações",
      collaborations_eyebrow: "Histórias de marca",
      collaboration_1_title: "Santa Maria Bejuco Home",
      collaboration_1_description_1:
        "O meu nome é Sandra e sou uma verdadeira entusiasta por viagens e natureza. Outra grande paixão que tenho é a culinária e é por isso que também partilho alguns vídeos de receitas na minha página.",
      collaboration_2_title: "Chão do Rio",
      view_collaboration_button: "Ver colaboração",
      contact: "Contacto",
      contact_eyebrow: "Vamos conversar",
      contact_me_title: "Contacta-me",
      contact_intro:
        "Colaborações, imprensa ou uma nota sobre a tua próxima viagem — adoraria saber de ti.",
      name_placeholder: "O teu nome",
      email_placeholder: "O teu endereço de email",
      message_placeholder: "A tua mensagem",
      send_button: "Enviar mensagem",
      email_sent_success_message: "Mensagem enviada — obrigada!",
      email_error_message: "Algo correu mal. Tenta novamente.",
      products: "Loja",
      products_eyebrow: "Para a tua próxima escapadela",
      bundles_title: "Bundles",
      bundles_description:
        "Explora os nossos bundles que combinam guias de viagem e presets do Lightroom.",
      travel_guides_title: "Guias de Viagem",
      travel_guide_1_title: "Guia de Sintra",
      travel_guide_2_title: "Guia de Lisboa",
      travel_guide_1_description:
        "Descobre Sintra como nunca antes — palácios mágicos, jardins secretos e trilhos deslumbrantes, com dicas práticas e roteiros personalizados. Sugestões gastronómicas e os melhores miradouros para fotos inesquecíveis.",
      travel_guide_2_description:
        "Descobre Lisboa como nunca antes — bairros históricos, miradouros deslumbrantes, dicas práticas e itinerários personalizados. Torna-te um verdadeiro conhecedor da cidade.",
      lightroom_presets_title: "Presets do Lightroom",
      lightroom_presets_description: "Melhora as tuas fotografias com os Presets do Lightroom.",
      planned_product_label: "Em breve",
      featured_guides: "Guias em destaque",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
