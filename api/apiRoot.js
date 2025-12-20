import * as contentful from 'contentful';
import nextConfig from '../next.config';

const { PUBLIC_ACCESS_TOKEN } = nextConfig;

export const apiRoot = contentful.createClient({
  space: '963e09izo0py',
  accessToken: PUBLIC_ACCESS_TOKEN,
});

/**
 * This will receive entries based on ID and sort them by their custom
 * order
 *
 * @param {*} contentId
 * @returns
 */
export function fetchContent(contentId) {
  return apiRoot
    .getEntries({ content_type: contentId })
    .then((res) => {
      const data = res.items.map((entry) => entry.fields);
      data.sort((a, b) => a.order - b.order);
      return data;
    })
    .catch((err) => console.log(err));
}
