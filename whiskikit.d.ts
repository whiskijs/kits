import whiski from 'whiski';

declare module '@whiski/kit' {
  export function deno(): whiski.Plugin;
  export function github(): whiski.Plugin;
}
