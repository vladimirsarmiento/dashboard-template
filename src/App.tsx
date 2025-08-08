import { Routes, Route } from "react-router-dom";

import "./App.css";
import { AppSidebar } from "./components/app-sidebar";
import { Separator } from "./components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";

// Pages
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";

// Components
import BreadcrumbDynamic from "./components/BreadcrumbDynamic";

// Import Data
import { menuItemsGeneral } from "./data/sidebarData";
import Customers from "./pages/Customers";
import Message from "./pages/Message";
import { Breadcrumb, BreadcrumbList } from "./components/ui/breadcrumb";
import Product from "./pages/Product";
import Invoice from "./pages/Invoice";
import Analitics from "./pages/Analitics";
import Automation from "./pages/Automation";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbDynamic data={menuItemsGeneral} />
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        {/* CONTENIDO CAMBIANTE SEGÚN LA RUTA */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/message" element={<Message />} />
          <Route path="/product" element={<Product />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/analitics" element={<Analitics />} />
          <Route path="/automation" element={<Automation />} />
        </Routes>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
