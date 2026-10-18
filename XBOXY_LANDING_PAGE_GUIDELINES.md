# Regole per le pagine XBOXY

## Favicon browser obbligatoria
Ogni pagina HTML nuova o aggiornata — landing page, homepage, pagina legale e link-in-bio — deve includere nel `<head>` entrambi i riferimenti:

```html
<link rel="icon" type="image/png" href="/favicon.png?v=20261018-2" sizes="64x64">
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=20261018-2">
```

Usare i file `/favicon.png` e `/favicon.ico` dalla root della pubblicazione. Per la pagina link-in-bio in `go/index.html`, mantenere anche copie identiche degli asset in `go/favicon.png` e `go/favicon.ico`, così funzionano anche quando `go/` viene pubblicata come root separata. Quando il logo o l'asset cambia, aggiornare il parametro versione nell'URL per forzare il rinnovo della cache del browser. Non rimuovere o ridisegnare il logo fornito per le favicon future.
