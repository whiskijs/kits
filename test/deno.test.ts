import { DenoPlugin } from '../src/deno';

const deno = DenoPlugin();

test('deno', () => {
  expect(deno.transformImportUrl('https://deno.land/std@1.0.0/foo.json')).toBe('https://cdn.deno.land/std/versions/1.0.0/raw/foo.json');
  expect(deno.transformImportUrl('https://deno.land/x/foo@1.0.0/bar.ts')).toBe('https://cdn.deno.land/foo/versions/1.0.0/raw/bar.ts');
});
