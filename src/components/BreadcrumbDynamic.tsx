import { useLocation } from "react-router-dom";
import { BreadcrumbItem, BreadcrumbPage } from "./ui/breadcrumb";

function BreadcrumbDynamic({ data }) {
  const location = useLocation();

  // Buscar el item activo en toda la estructura
  const activeItem = data
    // .flatMap((section) => section.items) // junta todos los items
    .find((item) => item.url === location.pathname);

  // Solo renderizar si hay un item activo
  if (!activeItem) return null;
  
  return (
    <BreadcrumbItem>
      <BreadcrumbPage>
        {activeItem ? activeItem.title : "Página"}
      </BreadcrumbPage>
    </BreadcrumbItem>
  );
}

export default BreadcrumbDynamic;
