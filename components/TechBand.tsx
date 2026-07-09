const STACK = ['Cloudflare', 'GitHub', 'NIC.cl', 'SSL / TLS', 'correo@dominio', 'SEO + sitemap'];

export default function TechBand() {
  return (
    <div className="techband">
      <div className="wrap">
        <span className="lbl">stack</span>
        {STACK.map((item) => (
          <span key={item} className="tchip">
            <span className="d"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
