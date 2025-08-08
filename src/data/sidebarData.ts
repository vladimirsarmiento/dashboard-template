import {
  ArrowRightLeft,
  ChartLine,
  CircleQuestionMark,
  FileText,
  LayoutPanelLeft,
  MessageSquareDot,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";

export const menuItemsGeneral = [
  {
    title: "Dashboard",
    icon: LayoutPanelLeft,
    url: "/",
    disabled: false,
  },
  {
    title: "Payment",
    icon: ArrowRightLeft,
    url: "/payment",
    disabled: false,
  },
  {
    title: "Customers",
    icon: Users,
    url: "/customers",
    disabled: false,
  },
  {
    title: "Message",
    icon: MessageSquareDot,
    url: "/message",
    disabled: false,
  },
];

export const menuItemsTools = [
  {
    title: "Product",
    icon: ShoppingBag,
    url: "/product",
    disabled: false,
  },
  {
    title: "Invoice",
    icon: FileText,
    url: "/invoice",
    disabled: false,
  },
  {
    title: "Analitics",
    icon: ChartLine,
    url: "/analitics",
    disabled: false,
  },
  {
    title: "Automation",
    icon: Sparkles,
    url: "/automation",
    disabled: false,
  },
];

export const menuItemsSupport = [
  {
    title: "Settings",
    icon: Settings,
    url: "/settings",
    disabled: true,
  },
  {
    title: "Security",
    icon: ShieldCheck,
    url: "/security",
    disabled: true,
  },
  {
    title: "Help",
    icon: CircleQuestionMark,
    url: "/help",
    disabled: true,
  },
];
