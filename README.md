<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
</head>
<body>
<h1>GlassPortal – Modernes Portfolio mit React &amp; Vite</h1>
<p><strong>GlassPortal</strong> ist ein modernes, responsives Portfolio-Template, das mit <a href="https://react.dev/" target="_blank">React</a> und <a href="https://vitejs.dev/" target="_blank">Vite</a> entwickelt wurde. Es nutzt Glassmorphism-Design und bietet eine einfache Navigation zwischen den Bereichen Willkommen, Home, Projekte und Über mich.</p>
<h2>Features</h2>
<ul>
<li><strong>Glassmorphism UI:</strong> Moderner, transparenter Look mit Blur-Effekten</li>
<li><strong>React Router:</strong> Navigation zwischen mehreren Seiten</li>
<li><strong>Responsives Design:</strong> Optimiert für Desktop und Mobile</li>
<li><strong>Kontaktmodal:</strong> E-Mail-Adresse kann per Klick in die Zwischenablage kopiert werden</li>
<li><strong>Social Links:</strong> GitHub und LinkedIn Verlinkungen</li>
</ul>
<h2>Projektstruktur</h2>
<pre class="struktur">
├── public/
│   ├── github.png
│   ├── image.png
│   ├── info.png
│   └── linkedin.png
├── src/
│   ├── About.jsx
│   ├── App.jsx
│   ├── Home.jsx
│   ├── Project.jsx
│   ├── Welcome.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
</pre>
<h2>Installation &amp; Entwicklung</h2>
<ol>
<li><strong>Repository klonen:</strong>
<pre><code>git clone &lt;REPO-URL&gt;
cd GlassPortal</code></pre>
</li>
<li><strong>Abhängigkeiten installieren:</strong>
<pre><code>npm install</code></pre>
</li>
<li><strong>Entwicklungsserver starten:</strong>
<pre><code>npm run dev</code></pre>
</li>
<li><strong>Projekt im Browser öffnen:</strong><br>
Standardmäßig unter <a href="http://localhost:5173" target="_blank">http://localhost:5173</a>
</li>
</ol>
<h2>Build für Produktion</h2>
<pre><code>npm run build</code></pre>
<p>Das gebaute Projekt befindet sich im <code>dist</code>-Ordner.</p>
<h2>Anpassung</h2>
<ul>
<li><strong>Bilder:</strong> Ersetze die Bilder im <code>public/</code>-Ordner durch eigene.</li>
<li><strong>Texte &amp; Links:</strong> Passe die Inhalte in den Komponenten (<code>src/*.jsx</code>) an.</li>
<li><strong>Farben &amp; Styles:</strong> Ändere die CSS-Dateien (<code>src/App.css</code>, <code>src/index.css</code>) nach Wunsch.</li>
</ul>
<h2>Lizenz</h2>
<p>Dieses Projekt steht unter der MIT-Lizenz.</p>
<hr>
<p><em>Viel Spaß beim Personalisieren deines Portfolios!</em></p>
</body>
