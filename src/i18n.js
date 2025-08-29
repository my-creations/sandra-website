import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "sandra": "Sandra",
      "camilo": "Camilo",
      "home_description": "VIDEO | PHOTOGRAPHY | VISUAL STORYTELLING",
      "about": "About",
      "about_me_title": "About me",
      "about_me_description_1": "I'm Sandra, a content creator with an immense passion for nature, travel and the power of visual storytelling.",
      "about_me_description_2": "I believe that every moment, no matter how simple, can transform into a story with soul.",
      "about_me_description_3": "My purpose is to inspire people to discover beauty and meaning in the small things of life.",
      "portfolio": "Portfolio",
      "portfolio_description_1": `As a visual storyteller, I weave captivating narratives through
      the lens of photography, travelogues, and recipes. Whether I'm
      capturing the majestic mountains of the countryside or the
      sun-kissed beaches around the world, my work celebrates the
      vibrant tapestry of life.`,
      "portfolio_description_2": `Let's collaborate I'd love to infuse your project with
      creativity and wanderlust.`,
      "view_more_button": "View more",
      "shop": "Shop",
      "shop_description_1": "Embark on a global adventure and explore the very destinations that have left me spellbound. 🌎✨",
      "shop_description_2": "Dive into my curated collection of travel guides, brimming with insider tips, hidden gems, and practical tricks to transform your journey into an unforgettable odyssey.",
      "shop_description_3": "My guides will ensure you make the most of every moment.",
      "shop_description_4": "Ready to create memories that last a lifetime?",
      "visit_my_shop_button": "Visit my shop",
      "collaborations": "Collaborations",
      "collaboration_1_title": "Santa Maria Bejuco Home",
      "collaboration_1_description_1": `My name is Sandra and I'm a true enthusiast for travel and
      nature. Another great passion I have is cooking and that's why I
      also share some recipe videos on my page.`,
      "collaboration_2_title": "Chão do Rio",
      "view_collaboration_button": "View Collaboration",
      "contact": "Contact",
      "contact_me_title": "Contact me",
      "name_placeholder": "Your name",
      "email_placeholder": "Your email address",
      "message_placeholder": "Your message",
      "send_button": "Send it",
      "email_sent_success_message": "😁 Email Submitted!",
      "email_error_message": "😮 Email Was Not Submitted!",
      "products": "Products",
      "bundles_title": "Bundles",
      "bundles_description": "Explore our bundles combining travel guides and Lightroom presets.",
      "travel_guides_title": "Travel Guides",
      "travel_guide_1_title": "Sintra Guide",
      "travel_guide_2_title": "Lisbon Guide",
      "travel_guide_1_description": "Discover Sintra like never before with my exclusive guide! Explore magical palaces, secret gardens, and stunning trails, complete with practical tips and personalized itineraries. Enjoy gastronomic suggestions and the best viewpoints for unforgettable photos. Perfect for those seeking a unique and authentic experience. Make your visit to Sintra truly memorable!",
      "travel_guide_2_description": "Discover Lisbon like never before with my exclusive guide! Explore the city's charms, from historic neighborhoods to breathtaking viewpoints. With practical tips, gastronomic suggestions, and personalized itineraries, your visit to Lisbon will be unforgettable. Become a true connoisseur of the city and live a unique experience!",
      "lightroom_presets_title": "Lightroom Presets",
      "lightroom_presets_description": "Enhance your photos with our Lightroom presets.",
      "buy_now_button": "Buy Now"
    }
  },
  pt: {
    translation: {
      "home": "Início",
      "sandra": "Sandra",
      "camilo": "Camilo",
      "home_description": "VIDEO | PHOTOGRAPHY | VISUAL STORYTELLING",
      "about": "Sobre",
      "about_me_title": "Sobre mim",
      "about_me_description_1": "Sou a Sandra criadora de conteúdos com uma paixão imensa pela natureza, pelas viagens e pelo poder do storytelling visual.",
      "about_me_description_2": "Acredito que cada momento, por mais simples que seja, pode transformar-se numa história com alma.",
      "about_me_description_3": "O meu propósito é inspirar as pessoas a descobrirem beleza e significado nas pequenas coisas da vida.",
      "portfolio": "Portfólio",
      "portfolio_description_1": "Como contadora de histórias visuais, teço narrativas cativantes através da fotografia, relatos de viagens e receitas. Quer esteja a capturar as majestosas montanhas do campo ou as praias banhadas pelo sol em todo o mundo, o meu trabalho celebra o vibrante tecido da vida.",
      "portfolio_description_2": "Vamos colaborar. Adoraria infundir o teu projeto com criatividade e desejo de viajar.",
      "view_more_button": "Ver mais",
      "shop": "Loja",
      "shop_description_1": "Embarca numa aventura global e explora os mesmos destinos que me deixaram encantada. 🌎✨",
      "shop_description_2": "Mergulha na minha coleção curada de guias de viagem, repleta de dicas internas, joias escondidas e truques práticos para transformar a tua viagem numa odisseia inesquecível.",
      "shop_description_3": "Os meus guias vão garantir que aproveites ao máximo cada momento.",
      "shop_description_4": "Pronta para criar memórias que durem uma vida inteira?",
      "visit_my_shop_button": "Visita a minha loja",
      "collaborations": "Colaborações",
      "collaboration_1_title": "Santa Maria Bejuco Home",
      "collaboration_1_description_1": "O meu nome é Sandra e sou uma verdadeira entusiasta por viagens e natureza. Outra grande paixão que tenho é a culinária e é por isso que também partilho alguns vídeos de receitas na minha página.",
      "collaboration_2_title": "Chão do Rio",
      "view_collaboration_button": "Ver Colaboração",
      "contact": "Contacto",
      "contact_me_title": "Contacta-me",
      "name_placeholder": "O teu nome",
      "email_placeholder": "O teu endereço de email",
      "message_placeholder": "A tua mensagem",
      "send_button": "Enviar",
      "email_sent_success_message": "😁 Email Enviado!",
      "email_error_message": "😮 O Email Não Foi Enviado!",
      "products": "Produtos",
      "bundles_title": "Bundles",
      "bundles_description": "Explora os nossos bundles que combinam guias de viagem e presets do Lightroom.",
      "travel_guides_title": "Guias de Viagem",
      "travel_guide_1_title": "Guia de Sintra",
      "travel_guide_2_title": "Guia de Lisboa",
      "travel_guide_1_description": "Descobre Sintra como nunca antes com o meu guia exclusivo! Explora palácios mágicos, jardins secretos e trilhos deslumbrantes, tudo com dicas práticas e roteiros personalizados. Aproveita sugestões gastronómicas e os melhores miradouros para fotos inesquecíveis. Ideal para quem quer viver uma experiência única e autêntica. Torna a tua visita a Sintra verdadeiramente memorável!",
      "travel_guide_2_description": "Descobre Lisboa como nunca antes com o meu guia exclusivo! Explora os encantos da cidade, desde os bairros históricos até aos miradouros deslumbrantes. Com dicas práticas, sugestões gastronómicas e itinerários personalizados, a tua visita a Lisboa será inesquecível. Torna-te um verdadeiro conhecedor da cidade e vive uma experiência única!",
      "lightroom_presets_title": "Presets do Lightroom",
      "lightroom_presets_description": "Melhora as tuas fotografias com os Presets do Lightroom.",
      "buy_now_button": "Comprar Agora"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;
