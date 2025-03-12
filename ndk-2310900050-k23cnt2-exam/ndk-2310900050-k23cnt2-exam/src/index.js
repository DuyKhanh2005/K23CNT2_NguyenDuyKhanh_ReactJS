import React from "react";
import ReactDOM from "react-dom/client";
import NdkApp from "./NdkApp";

// Tìm phần tử có id="ndkRoot"
const rootElement = document.getElementById("ndkRoot");

if (rootElement) {
  // ✅ React 18 sử dụng createRoot()
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <NdkApp />
    </React.StrictMode>
  );
} else {
  console.error("Lỗi: Không tìm thấy phần tử #ndkRoot trong index.html!");
}
