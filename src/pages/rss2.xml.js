import rss from '@astrojs/rss';
// import { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context) {
    const posts = await getCollection("blog");

    return rss({
        title: 'Boom | 博客',
        description: '我的 Astro 学习笔记 ',
        site: context.site,
        // items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.id}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}