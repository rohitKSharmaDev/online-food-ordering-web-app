import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import Logo from "../Logo";
import { ShoppingBasket, Search, BadgePercent, User } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Offers", icon: <BadgePercent size={18} />, href: "/" },
  { label: "Search", icon: <Search size={18} />, href: "/" },
  { label: "Sign In", icon: <User size={18} />, href: "/auth" },
  { label: "Cart", icon: <ShoppingBasket size={18} />, href: "/" },
];

const Header = () => {
  return (
    <header className="flex flex-col px-5 py-2 bg-gradient-to-b from-blue-50 to-blue-100 shadow-sm">
      <div className="flex items-center justify-between w-7xl mx-auto">
        <Logo />

        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <Link
                  to={item.href}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-md font-medium text-gray-700 hover:text-blue-700 transition cursor-pointer"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

      </div>
    </header>
  );
};

export default Header;
