export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftrin">
        <span className="fbrand">
          Faro <small>· estudio web</small>
        </span>
        <span className="stamp">
          <span className="d"></span>webs · apps · marcas
        </span>
        <p className="fcopy">© {new Date().getFullYear()} Faro estudio web · Santiago, Chile</p>
        <a href="#inicio">volver_arriba ↑</a>
      </div>
    </footer>
  );
}
