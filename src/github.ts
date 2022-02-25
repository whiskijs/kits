import whiski from 'whiski';

export function GithubPlugin(): whiski.Plugin {
  return {
    name: 'whiski-plugin-github',

    transformImportUrl(url: string): string {
      if (url.match(/^https?:\/\/github\.com\//)) {
        return url.replace(/^https?:\/\/github\.com\//, 'https://raw.githubusercontent.com/');
      }
      return url;
    },
  };
}
