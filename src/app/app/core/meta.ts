import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string;
  schema?: Record<string, unknown>;
}

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private readonly siteName = 'Shubham Computers';
  private readonly siteUrl = 'https://www.shubhamcomputersahmedabad.in';
  private readonly defaultImage = '/assets/shubhamComputerLogo.png';

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  updateMeta(titleText: string, description: string, path = '', keywords = '') {
    this.updateSeo({ title: titleText, description, path, keywords });
  }

  updateSeo(config: SeoConfig) {
    const canonicalUrl = this.absoluteUrl(config.path || '');
    const imageUrl = this.absoluteUrl(config.image || this.defaultImage);

    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: this.siteName });

    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });

    this.setCanonical(canonicalUrl);

    if (config.schema) {
      this.setSchema(config.schema);
    }
  }

  getSiteUrl() {
    return this.siteUrl;
  }

  private absoluteUrl(path: string) {
    if (path.startsWith('http')) {
      return path;
    }

    return `${this.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }

  private setCanonical(url: string) {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private setSchema(schema: Record<string, unknown>) {
    const id = 'structured-data';
    let script = this.document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }
}
