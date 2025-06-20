<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
</head>
<body>
<h1>GlassPortfolio – Modern Portfolio with React &amp; Vite</h1>
<p><strong>GlassPortal</strong> is a modern, responsive portfolio template built with <a href="https://react.dev/" target="_blank">React</a> and <a href="https://vitejs.dev/" target="_blank">Vite</a>. It uses a glassmorphism design and offers easy navigation between the Welcome, Home, Projects, and About sections.</p>
<p><strong>Note:</strong> There is no proper mobile view. The layout is mainly optimized for desktop.</p>
<h2>Features</h2>
<ul>
<li><strong>Glassmorphism UI:</strong> Modern, transparent look with blur effects</li>
<li><strong>React Router:</strong> Navigation between multiple pages</li>
<li><strong>Responsive Design:</strong> Optimized for desktop</li>
<li><strong>Contact Modal:</strong> Email address can be copied to clipboard with one click</li>
<li><strong>Social Links:</strong> GitHub and LinkedIn links</li>
</ul>
<h2>Project Structure</h2>
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
<h2>Installation &amp; Development</h2>
<ol>
<li><strong>Clone the repository:</strong>
<pre><code>git clone &lt;REPO-URL&gt;
cd GlassPortfolio</code></pre>
</li>
<li><strong>Install dependencies:</strong>
<pre><code>npm install</code></pre>
</li>
<li><strong>Start development server:</strong>
<pre><code>npm run dev</code></pre>
</li>
<li><strong>Open the project in your browser:</strong><br>
By default at <a href="http://localhost:5173" target="_blank">http://localhost:5173</a>
</li>
</ol>
<h2>Production Build</h2>
<pre><code>npm run build</code></pre>
<p>The built project will be in the <code>dist</code> folder.</p>
<h2>Customization</h2>
<ul>
<li><strong>Images:</strong> Replace the images in the <code>public/</code> folder with your own.</li>
<li><strong>Texts &amp; Links:</strong> Edit the content in the components (<code>src/*.jsx</code>).</li>
<li><strong>Colors &amp; Styles:</strong> Change the CSS files (<code>src/App.css</code>, <code>src/index.css</code>) as you like.</li>
</ul>
<h2>License</h2>
<p>This project is licensed under the MIT License.</p>
<hr>
<p><em>Have fun personalizing your portfolio!</em></p>
