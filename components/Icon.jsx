import {
  Handshake,
  Warehouse,
  Truck,
  Sprout,
  FlaskConical,
  BarChart3,
  ShieldCheck,
  Leaf,
  Wheat,
  Droplets,
  Sun,
  ScrollText,
  Package,
  Tractor,
  Globe,
  Ship,
  ClipboardCheck,
  Route,
  MapPinned,
} from "lucide-react";

const map = {
  Handshake,
  Warehouse,
  Truck,
  Sprout,
  FlaskConical,
  BarChart3,
  ShieldCheck,
  Leaf,
  Wheat,
  Droplets,
  Sun,
  ScrollText,
  Package,
  Tractor,
  Globe,
  Ship,
  ClipboardCheck,
  Route,
  MapPinned,
};

export default function Icon({ name, className }) {
  const Cmp = map[name] || Wheat;
  return <Cmp className={className} strokeWidth={1.5} aria-hidden="true" />;
}
