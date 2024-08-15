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
            <LinkButton href="/">Home</LinkButton>
            <LinkButton href="/shop/1">Shop normal</LinkButton>
            <LinkButton href="/shop/fail">Shop error</LinkButton>
            <LinkButton href="/shop/limbo">Shop 404</LinkButton>
            <LinkButton href="/product/1">Product normal</LinkButton>
            <LinkButton href="/product/fail">Product error</LinkButton>
            <LinkButton href="/product/limbo">Product 404</LinkButton>
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
