import { NdkThemeProvider } from "./context/NdkThemeContext";
import NdkTodoList from "./components/NdkTodoList";
import NdkThemeToggle from "./components/NdkThemeToggle";
import "./index.css";
import React from 'react';

export default function NdkApp() {
  return (
    <NdkThemeProvider>
      <div className="ndk-app">
        <h1>Quản Lý Công Việc</h1>
        <NdkThemeToggle />
        <NdkTodoList />
      </div>
    </NdkThemeProvider>
  );
}
