/**
 * Este código gestiona la lógica de traducción sin librerías externas:
 * * 1. getLangFromUrl: Toma la dirección web (URL), la divide por barras "/" y extrae la primera 
 * parte (ej. de "/en/proyectos" extrae "en"). Si el idioma existe en nuestra lista lo devuelve, 
 * si no, usa el idioma por defecto (español).
 * * 2. useTranslations: Es una función que recibe el idioma actual y nos devuelve otra función 
 * (llamada 't'). Al usar t('clave'), esta busca el texto correspondiente en nuestro "diccionario" 
 * (ui.ts). Si por alguna razón no encuentra la traducción en el idioma solicitado, 
 * devuelve por seguridad el texto en el idioma por defecto para que el sitio nunca falle.
 */

import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}