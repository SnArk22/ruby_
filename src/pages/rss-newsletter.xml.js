import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const letters = await getCollection("NewsletterIndex");
  return rss({
    title: 'Ruby Mykkanen | Newsletter',
    description: 'A monthly newsletter about what I\'m working on and learning.',
    site: context.site,
    items: letters.map((letter) => ({
      title: letter.data.title,
      pubDate: letter.data.pubDate,
      description: letter.data.description,
      link: `/letters/${letter.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}