import { INavbarData } from './helpers';

export const navbarData: INavbarData[] = [
  {
    routeLink: 'home',
    icon: 'bi bi-house-door',
    label: 'Inicio'
  },
  {
    routeLink: 'catalogos',
    icon: 'bi bi-grid',
    label: 'Catálogos',
    expanded: false,
    items: [
      {
        icon: 'bi bi-people',
        label: 'Usuarios',
        expanded: false,
        items: [
          {
            icon: 'bi bi-people',
            label: 'Control Usuarios',
          },
          {
            icon: 'bi bi-people',
            label: 'Control Sucursales',
          },
          {
            icon: 'bi bi-people',
            label: 'Control Verificaciones',
          },
          {
            icon: 'bi bi-people',
            label: 'Control Trabajadores',
          }
        ]
      },
      {
        icon: 'bi bi-geo-alt',
        label: 'Estaciones',
        expanded: false,
        items: [
          {
            icon: 'bi bi-geo-alt',
            label: 'Mapa',
          },
          {
            icon: 'bi bi-geo-alt',
            label: 'Registros',
          }
        ]
      },
      {
        icon: 'bi bi-calendar-week',
        label: 'Multiplicadores',
        expanded: false,
        items: [
          {
            icon: 'bi bi-calendar-week',
            label: 'Programaciones Periódicas',
          },
          {
            icon: 'bi bi-calendar-week',
            label: 'Programaciones Diarias',
          }
        ]
      },
      {
        icon: 'bi bi-box',
        label: 'Productos',
        expanded: false,
        items: [
          {
            icon: 'bi bi-calendar-week',
            label: 'Categorías',
          },
          {
            icon: 'bi bi-calendar-week',
            label: 'Productos',
          }
        ]
      },
      {
        icon: 'bi bi-tags',
        label: 'Descuentos',
        expanded: false,
        items: [
          {
            icon: 'bi bi-tags',
            label: 'Niveles',
          },
          {
            icon: 'bi bi-tags',
            label: 'Promociones',
          }
        ]
      },
      {
        icon: 'bi bi-collection',
        label: 'Grupos'
      },
      {
        icon: 'bi bi-person-vcard',
        label: 'Clientes',
      },
      {
        icon: 'bi bi-credit-card-2-back',
        label: 'Tarjetas',
        expanded: false,
        items: [
          {
            icon: 'bi bi-credit-card-2-back',
            label: 'Diseño Tarjetas',
          },
          {
            icon: 'bi bi-credit-card-2-back',
            label: 'Tarjetas',
          }
        ]
      },
      {
        icon: 'bi bi-megaphone',
        label: 'Marketing',
        expanded: false,
        items: [
          {
            icon: 'bi bi-megaphone',
            label: 'Anuncios',
          },
          {
            icon: 'bi bi-megaphone',
            label: 'Recompensas',
          },
          {
            icon: 'bi bi-megaphone',
            label: 'Sorteos',
          },
          {
            icon: 'bi bi-megaphone',
            label: 'Encuestas',
          }
        ]
      }
    ]
  },
  {
    icon: 'bi bi-fuel-pump',
    label: 'Movimientos',
    expanded: false,
    items: [
      {
        routeLink: 'consumos',
        icon: 'bi bi-fuel-pump',
        label: 'Consumos',
      },
      {
        routeLink: 'notificaciones',
        icon: 'bi bi-bell',
        label: 'Notificaciones'
      }
    ]
  },
  {
    routeLink: 'reportes',
    icon: 'bi bi-file-earmark-richtext',
    label: 'Reportes',
    expanded: false,
    items: [
      {
        icon: 'bi bi-file-earmark-richtext',
        label: 'Estado De Cuenta',
        expanded: false
      },
      {
        icon: 'bi bi-file-earmark-richtext',
        label: 'Movimientos',
        expanded: false,
        items: [
          {
            icon: 'bi bi-file-earmark-richtext',
            label: 'Cargas Por Estación',
          },
          {
            icon: 'bi bi-file-earmark-richtext',
            label: 'Puntos Generados Por Estación',
          },
          {
            icon: 'bi bi-file-earmark-richtext',
            label: 'Redenciones Por Estación',
          },
          {
            icon: 'bi bi-file-earmark-richtext',
            label: 'Mensajes Enviados',
          }
        ]
      },
      {
        icon: 'bi bi-file-earmark-richtext',
        label: 'Tarjetas',
        expanded: false,
        items: [
          {
            icon: 'bi bi-file-earmark-richtext',
            label: 'Tarjetas Activas',
          },
          {
            icon: 'bi bi-file-earmark-richtext',
            label: 'Tarjetas Registradas',
          },
          {
            icon: 'bi bi-file-earmark-richtext',
            label: 'Tarjetas Verificadas',
          },
          {
            icon: 'bi bi-file-earmark-richtext',
            label: 'Tarjetas Sin Verificar',
          },
          {
            icon: 'bi bi-file-earmark-richtext',
            label: 'Tarjetas Con 2 O Más Operaciones Diarias',
          },
          {
            icon: 'bi bi-file-earmark-richtext',
            label: 'Tarjetas Detallado',
          }
        ]
      },
      {
        icon: 'bi bi-file-earmark-richtext',
        label: 'Vencimientos',
        expanded: false,
        items: [
          {
            icon: 'bi bi-file-earmark-richtext',
            label: 'Puntos A Vencer',
          },
          {
            icon: 'bi bi-file-earmark-richtext',
            label: 'Puntos Vencidos Sin Ocupar',
          },
          {
            icon: 'bi bi-file-earmark-richtext',
            label: 'Puntos Vencidos Mensual',
          }
        ]
      }
    ]
  },
];
