// Route.jsx
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "../pages/HomePage";
import ArticlePage from "../pages/ArticlePage";
import BekasiPulogadungPage from "../pages/BekasiPulogadungPage";
import CempakaPutihPage from "../pages/CempakaPutihPage";
import KebonKacangRayaPage from "../pages/KebonKacangRayaPage";
import MatramanJayaPage from "../pages/MatramanJayaPage";
import PerintisKemerdekaanPage from "../pages/PerintisKemerdekaanPage";

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash && location.hash === '#kontak') {
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artikel" element={<ArticlePage />} />
        <Route path="/lokasi/bekasi-pulogadung" element={<BekasiPulogadungPage />} />
        <Route path="/lokasi/cempaka-putih" element={<CempakaPutihPage />} />
        <Route path="/lokasi/kebon-kacang-raya" element={<KebonKacangRayaPage />} />
        <Route path="/lokasi/matraman-raya" element={<MatramanJayaPage />} />
        <Route path="/lokasi/perintis-kemerdekaan" element={<PerintisKemerdekaanPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
