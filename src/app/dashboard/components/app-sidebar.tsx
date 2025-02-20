import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "./ui/sidebar";

const data = {
  user: {
    name: "Ramon Santos",
    email: "",
    avatar: "./avatars/logo-b.svg",
  },
  teams: [
    {
      name: "RaChat",
      logo: GalleryVerticalEnd,
      plan: "Empresa",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Gratuito",
    },
  ],
  navMain: [
    {
      title: "Área de Testes",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Histórico",
          url: "#",
        },
        {
          title: "Favoritos",
          url: "#",
        },
        {
          title: "Configurações",
          url: "#",
        },
      ],
    },
    {
      title: "Modelos",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Gênesis",
          url: "#",
        },
        {
          title: "Explorador",
          url: "#",
        },
        {
          title: "Quântico",
          url: "#",
        },
      ],
    },
    {
      title: "Documentação",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introdução",
          url: "#",
        },
        {
          title: "Primeiros Passos",
          url: "#",
        },
        {
          title: "Tutoriais",
          url: "#",
        },
        {
          title: "Registro de Alterações",
          url: "#",
        },
      ],
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Geral",
          url: "#",
        },
        {
          title: "Equipe",
          url: "#",
        },
        {
          title: "Faturamento",
          url: "#",
        },
        {
          title: "Limites",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Engenharia de Design",
      url: "#",
      icon: Frame,
    },
    {
      name: "Vendas & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Viagens",
      url: "#",
      icon: Map,
    },
  ],
};
