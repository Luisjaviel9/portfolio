
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
export default function Footer() {
  const { t } = useContext(LanguageContext);
  return (
    <footer className="bg-slate-900 border-t border-slate-700 mt-24">

      <div className="max-w-7xl mx-auto px-8 py-12 text-center">

        <h2 className="text-3xl font-bold text-cyan-400 mb-4">
          LuisDev
        </h2>

        <p className="text-white mb-3">
          {t.footer.profesion}
        </p>

        <p className="text-slate-300 mb-8">
          Python • Django • React • PostgreSQL
        </p>

        <div className="border-t border-slate-700 pt-6">

          <p className="text-slate-400 text-sm">
           {t.footer.derechos}
           
          </p>

        </div>

      </div>

    </footer>
  );
}