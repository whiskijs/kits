import { GithubPlugin } from '../src/github';

const github = GithubPlugin();

test('github', () => {
  expect(github.transformImportUrl('https://github.com/foo/bar/blob/main/index.ts')).toBe(
    'https://raw.githubusercontent.com/foo/bar/blob/main/index.ts'
  );
});
