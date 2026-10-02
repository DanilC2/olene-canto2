// Renders Schema.org structured data. Invisible to visitors; read by search engines.
export default function JsonLd({ data }) {
  // Escape "<" so the JSON can never close the script tag early.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
