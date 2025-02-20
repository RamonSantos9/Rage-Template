import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import * as React from "react";
import { cn } from "@/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alerta de Dialogo",
    href: "/",
    description:
      "Uma caixa de diálogo modal que interrompe o usuário com conteúdo importante e espera uma resposta.",
  },
  {
    title: "Cartão flutuante",
    href: "/",
    description:
      "Para que usuários com visão visualizem o conteúdo disponível por trás de um link.",
  },
  {
    title: "Progresso",
    href: "/",
    description:
      "Exibe um indicador que mostra o progresso da conclusão de uma tarefa, normalmente exibido como uma barra de progresso.",
  },
  {
    title: "Scroll-area",
    href: "/",
    description: "Separa o conteúdo visual ou semanticamente.",
  },
  {
    title: "Tabs",
    href: "/",
    description:
      "Um conjunto de seções de conteúdo em camadas, conhecidas como painéis de guias, que são exibidas uma de cada vez.",
  },
  {
    title: "Dica",
    href: "/",
    description:
      "Um pop-up que exibe informações relacionadas a um elemento quando o elemento recebe o foco do teclado ou o mouse passa sobre ele.",
  },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-2 bg-white/100 backdrop-blur">
      <div className="flex justify-between items-center container">
        <a
          title="Logotipo da marca"
          className="relative mr-6 flex items-center space-x-2"
          href="/"
        >
          <LogoIcon className="h-[33px]" />
          <span className="font-bold text-xl">Rage</span>
        </a>

        <div className="hidden lg:block">
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Começando</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            title="Logotipo da marca"
                            className="relative mr-6 flex items-center space-x-2"
                            href="/"
                          >
                            <LogoIcon className="h-[33px]" />
                            <span className="font-bold text-xl">Rage</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/" title="Introdução">
                        Componentes reutilizáveis ​​criados usando Rage UI e
                        Tailwind CSS.
                      </ListItem>
                      <ListItem href="/" title="Instalação">
                        Como instalar dependências e estruturar seu aplicativo.
                      </ListItem>
                      <ListItem href="/" title="Tipografia">
                        Estilos para títulos, parágrafos, listas...etc.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Componentes</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Documentação
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="gap-2 flex">
              <a
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                href="/login"
              >
                Conecte-se
              </a>
              <Link
                className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0000FF] hover:bg-[#0000FF]/90 h-10 px-4 py-2 w-full sm:w-auto text-background flex gap-2"
                href="/login"
              >
                <svg
                  viewBox="0 0 122 122"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    d="M25.5307 119.454C-9.11045 74.3812 -5.18447 29.5418 25.5307 11.8139C45.3147 0.395007 84.7356 -4.69648 105.615 10.3026C118.935 19.871 125.118 37.9112 115.28 47.7499C99.5489 63.4828 50.587 50.5005 46.7024 58.4971C41.6028 68.9975 125.581 92.324 120.804 107.363C117.75 116.977 78.2184 123.867 64.8825 113.409C41.4578 95.0376 113.327 34.4687 92.7279 19.7064C80.0594 10.6284 34.4481 20.3294 23.9198 39.6895C8.70603 67.6608 72.2903 105.568 58.2088 118.446C52.6512 123.529 25.5307 119.454 25.5307 119.454Z"
                    fill="white"
                    stroke="white"
                    strokeMiterlimit="10"
                  />
                </svg>
                Comece gratuitamente
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-2 cursor-pointer block lg:hidden">
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="menu"
          >
            <MenuIcon className="text-2xl" />
          </button>
        </div>
      </div>
      <hr className="absolute w-full bottom-0 transition-opacity duration-300 ease-in-out opacity-100" />
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
