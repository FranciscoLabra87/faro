const STACK = ['Next.js', 'Cloudflare Workers', 'D1 · R2', 'Resend', 'IA', 'GitHub', 'SEO'];

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
