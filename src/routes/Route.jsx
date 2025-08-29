// Route.jsx
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ArticlePage from "../pages/ArticlePage";
import BekasiPulogadungPage from "../pages/BekasiPulogadungPage";
import CempakaPutihPage from "../pages/CempakaPutihPage";
import KebonKacangRayaPage from "../pages/KebonKacangRayaPage";
import MatramanJayaPage from "../pages/MatramanJayaPage";
import PerintisKemerdekaanPage from "../pages/PerintisKemerdekaanPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artikel" element={<ArticlePage />} />
        <Route path="/lokasi/bekasi-pulogadung" element={<BekasiPulogadungPage />} />
        <Route path="/lokasi/cempaka-putih" element={<CempakaPutihPage />} />
        <Route path="/lokasi/kebon-kacang-raya" element={<KebonKacangRayaPage />} />
        <Route path="/lokasi/matraman-jaya" element={<MatramanJayaPage />} />
        <Route path="/lokasi/perintis-kemerdekaan" element={<PerintisKemerdekaanPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
