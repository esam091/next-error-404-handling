import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

export default function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Navigate</NavigationMenuTrigger>
          <NavigationMenuContent>
            <LinkButton href="/">Shop normal</LinkButton>
            <LinkButton href="/">Shop error</LinkButton>
            <LinkButton href="/">Shop 404</LinkButton>
            <LinkButton href="/">Product normal</LinkButton>
            <LinkButton href="/">Product error</LinkButton>
            <LinkButton href="/">Product 404</LinkButton>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function LinkButton(props: PropsWithChildren<LinkProps>) {
  return (
    <Link {...props} legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {props.children}
      </NavigationMenuLink>
    </Link>
  );
}
