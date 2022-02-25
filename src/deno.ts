/* eslint-disable consistent-return */
import whiski from 'whiski';

export function DenoPlugin(): whiski.Plugin {
  return {
    name: 'whiski-plugin-deno',

    transformImportUrl(url: string): string {
      if (url.match(/^https?:\/\/deno\.land\//)) {
        let path = url.replace(/^https?:\/\/deno\.land\//, '');
        if (path.startsWith('x')) {
          /* x */

          path = path.replace('x/', '');

          const slices = path.split('/');
          const module = slices[0].split('@')[0];
          const version = slices[0].split('@')[1];
          const packageUrl = slices.slice(1).join('/');

          const raw = `https://cdn.deno.land/${module}/versions/${version}/raw/${packageUrl}`;

          return raw;
        }
        if (path.startsWith('std')) {
          /* std */

          const slices = path.split('/');
          const version = slices[0].split('@')[1];
          const packageUrl = slices.slice(1).join('/');

          const raw = `https://cdn.deno.land/std/versions/${version}/raw/${packageUrl}`;
          return raw;
        }
        throw new Error(`Unknown path: ${path}`);
      }
      return url;
    },
  };
}
