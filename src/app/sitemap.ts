import { mcs, news, battles } from "@/types/mock";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://batalhaderima.com.br"; // Exemplo

    const mcUrls = mcs.map((mc) => ({
        url: `${baseUrl}/mc/${mc.slug}`,
        lastModified: new Date(),
    }));

    const newsUrls = news.map((article) => ({
        url: `${baseUrl}/noticias/${article.slug}`,
        lastModified: new Date(article.createdAt),
    }));

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/noticias`, lastModified: new Date() },
        { url: `${baseUrl}/ranking`, lastModified: new Date() },
        { url: `${baseUrl}/batalhas`, lastModified: new Date() },
        ...mcUrls,
        ...newsUrls,
    ];
}
