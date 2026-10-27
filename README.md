# ZEB Ventures UG (haftungsbeschränkt) — Website

Company website for ZEB Ventures UG (haftungsbeschränkt), Bornheim: real estate development, construction and rental of residential and commercial properties. Static HTML/CSS/JS, no build step, hosted on GitHub Pages at https://zebventuresug.shop.

## Structure

```
index.html             Home: services, rental process, company details, contact
impressum.html         Legal notice (§ 5 DDG)
datenschutz.html       Privacy policy (GDPR)
assets/css/style.css   Styles (responsive)
assets/js/script.js    Mobile nav, reveal animations, mailto contact form
assets/fonts/          Self-hosted fonts (no requests to Google Fonts)
```

## Notes

- The contact form opens the visitor's email program (mailto); nothing is sent or stored by the site itself.
- No cookies, analytics or third-party embeds.
- Run locally: `python -m http.server 8000`, then open http://localhost:8000.
