import type { SiteId } from "./types";

/**
 * Configuração deste blog. O domínio é uma PROPOSTA — verifique e registre antes de publicar.
 * Desenvolvimento local: http://localhost:3000
 */
export interface SiteConfig {
  id: SiteId;
  name: string;
  locale: string;
  htmlLang: string;
  domain: string;
  hosts: string[];
  tagline: string;
  description: string;
  /** Prefixos de rota localizados */
  routes: { category: string; author: string; search: string };
  ui: Record<UiKey, string>;
}

type UiKey =
  | "skip"
  | "home"
  | "menu"
  | "search"
  | "searchPlaceholder"
  | "searchTitle"
  | "searchEmpty"
  | "searchHint"
  | "readArticle"
  | "latest"
  | "byCategory"
  | "seeAll"
  | "by"
  | "published"
  | "updated"
  | "minRead"
  | "toc"
  | "blueprint"
  | "faq"
  | "related"
  | "aboutAuthor"
  | "fictionalNote"
  | "aboutBoxTitle"
  | "aboutBoxText"
  | "aboutBoxCta"
  | "prev"
  | "next"
  | "pause"
  | "play"
  | "slide"
  | "themeToggle"
  | "footerNote"
  | "institutional"
  | "categories"
  | "notFoundTitle"
  | "notFoundText"
  | "backHome"
  | "breadcrumbHome"
  | "articlesBy"
  | "stamp";

export const SITES: Record<SiteId, SiteConfig> = {
  pt: {
    id: "pt",
    name: "Os Saco Cheio",
    locale: "pt_BR",
    htmlLang: "pt-BR",
    domain: process.env.SITE_URL ?? "https://ossacocheio.com.br",
    hosts: ["ossacocheio.com.br", "www.ossacocheio.com.br", "pt.localhost"],
    tagline: "Nada está bom.",
    description:
      "Dois aposentados digitalizados contra um mundo que não passa no controle de qualidade. Sátira, opinião e humor ácido sobre notícias, tecnologia e o absurdo de todo dia.",
    routes: { category: "tema", author: "autor", search: "busca" },
    ui: {
      skip: "Pular para o conteúdo",
      home: "Início",
      menu: "Menu",
      search: "Buscar",
      searchPlaceholder: "Procure sua reclamação…",
      searchTitle: "Busca",
      searchEmpty: "Nada encontrado. Pela primeira vez, ainda não reclamamos disso.",
      searchHint: "Procure sua reclamação. Provavelmente já reclamamos.",
      readArticle: "Ler artigo",
      latest: "Reclamações recentes",
      byCategory: "Por quadro",
      seeAll: "Ver todos",
      by: "Por",
      published: "Publicado em",
      updated: "Atualizado em",
      minRead: "min de leitura",
      toc: "Neste artigo",
      blueprint: "O gabarito",
      faq: "Perguntas frequentes",
      related: "Outras não conformidades",
      aboutAuthor: "Sobre o autor",
      fictionalNote: "Personagem fictício do universo Os Saco Cheio.",
      aboutBoxTitle: "Quem são esses dois?",
      aboutBoxText:
        "Arthur e Nico são aposentados, amigos há 31 anos e foram digitalizados pelo neto do Nico para reclamar longe do almoço de domingo. São personagens fictícios. As reclamações são reais.",
      aboutBoxCta: "Conheça a dupla",
      prev: "Anterior",
      next: "Próximo",
      pause: "Pausar destaques",
      play: "Retomar destaques",
      slide: "Destaque",
      themeToggle: "Alternar tema claro/escuro",
      footerNote: "Nenhum padrão de qualidade foi atingido na produção deste site.",
      institutional: "Institucional",
      categories: "Quadros",
      notFoundTitle: "Página não conforme",
      notFoundText: "Esta página foi para produção sem teste. Como tudo.",
      backHome: "Voltar ao início",
      breadcrumbHome: "Início",
      articlesBy: "Textos de",
      stamp: "REPROVADO",
    },
  },
};

export const SITE_IDS = Object.keys(SITES) as SiteId[];
/** Este repositório publica um único blog */
export const SITE = SITES[SITE_IDS[0]];

export function isSiteId(value: string): value is SiteId {
  return value in SITES;
}

export function getSite(id: string): SiteConfig {
  return isSiteId(id) ? SITES[id] : SITE;
}

const DEV_HOSTS = new Set(["localhost", "127.0.0.1", "[::1]"]);

/**
 * Domínio → site. Hosts desconhecidos (ex.: o domínio técnico da plataforma) retornam null:
 * lá só respondem /health e /admin. localhost serve o blog em desenvolvimento.
 */
export function siteFromHost(host: string | null): SiteId | null {
  const clean = (host ?? "").split(":")[0].toLowerCase();
  if (SITE.hosts.includes(clean) || DEV_HOSTS.has(clean)) return SITE.id;
  return null;
}
