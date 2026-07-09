export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftrin">
        <span className="fbrand">Faro</span>
        <span className="stamp">
          <span className="d"></span>EST. MMXXVI · Santiago / CL
        </span>
        <p className="fcopy">© {new Date().getFullYear()} Faro · sin hosting mensual</p>
        <a href="#inicio">volver_arriba ↑</a>
      </div>
    </footer>
  );
}
