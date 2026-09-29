// Número de WhatsApp da Neves Choperia (formato internacional, só dígitos)
export const WHATSAPP_NUMBER = "5545999228422";

// Itens do cardápio compartilhados entre o cardápio e o sistema de pedido.
// `price` é o rótulo exibido; `priceNum` é o valor numérico usado no total.
export const MENU_ITEMS = [
  {
    id: "petisco",
    name: "Petisco da Casa",
    price: "R$ 32",
    priceNum: 32,
    pairing: "Calabresa, mandioca e pão de alho — pra dividir na roda.",
    img: "https://media.base44.com/images/public/6abb38dc29f7f2f0f80b8d38/d0a8f6858_insta-stories-viewerorg_Instagram__3963154685887964858.jpg",
    tag: "Pra dividir",
  },
  {
    id: "caipirinha",
    name: "Caipirinha",
    price: "R$ 13",
    priceNum: 13,
    pairing: "Pra esquentar o rolê — limão, gelo e cachaça na medida.",
    img: "https://media.base44.com/images/public/6abb38dc29f7f2f0f80b8d38/549be12cd_insta-stories-viewerorg_Instagram__3902887970579874882.jpg",
    tag: "Da casa",
  },
];

export function findMenuItem(id) {
  return MENU_ITEMS.find((i) => i.id === id);
}

export const formatBRL = (n) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });