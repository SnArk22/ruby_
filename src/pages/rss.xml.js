import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const projects = await getCollection("ProjectIndex");
  return rss({
    title: 'Ruby Mykkanen | Projects',
    description: 'A collection of my projects and experiments.',
    site: context.site,
    items: posts.map((project) => ({
      title: project.data.title,
      pubDate: project.data.pubDate,
      description: project.data.description,
      link: `/projects/${project.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}