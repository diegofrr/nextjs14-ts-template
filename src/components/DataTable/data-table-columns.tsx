import type { ColumnDef } from '@tanstack/react-table';

import { Avatar, AvatarImage } from '../ui/avatar';
import {
  CaretSortIcon,
  ClipboardCopyIcon,
  DotFilledIcon,
  DotsHorizontalIcon,
  EyeOpenIcon,
  Pencil2Icon,
  PersonIcon,
  TrashIcon,
} from '@radix-ui/react-icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { formatDateTime } from '@/utils/formatters';

interface IUserExample {
  id: number;
  user: string;
  email: string;
  name: string;
  avatarUrl?: string;
  created_at: string;
  updated_at: string;
}

export const columns: ColumnDef<IUserExample>[] = [
  {
    accessorKey: 'id',
    cell: ({ row }) => <div className="text-center">{row.getValue('id')}</div>,
    label: 'ID',
    header: ({ column }) => {
      return (
        <div
          className="ml-4 flex cursor-pointer items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          ID
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    filterFn: (row, columnId, value) => {
      return row.original.name.toLowerCase().includes(value.toLowerCase());
    },
    id: 'user',
    accessorKey: 'user',
    enableHiding: false,
    meta: { className: 'min-w-auto max-w-80 lg:min-w-80' },
    header: 'Usuário',
    cell: ({ row }) => (
      <div className="flex flex-row gap-2">
        <div className="bg-red rounded-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}

          <Avatar className="flex items-center justify-center bg-muted text-muted-foreground">
            {row.original.avatarUrl ? (
              <AvatarImage
                alt={row.original.name + ' - Imagem de perfil'}
                src={
                  'https://wikiback.vlibras.gov.br/download/' +
                  row.original.avatarUrl
                }
              />
            ) : (
              <PersonIcon width={18} height={18} />
            )}
          </Avatar>
        </div>

        <div className="flex flex-col">
          <span className="font-normal capitalize">
            {row.original.name.toLowerCase()}
          </span>
          <span className="text-xs text-muted-foreground">
            {row.original.email?.toLowerCase() || 'E-mail não informado'}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'qualification',
    label: 'Permissões',
    header: ({ column }) => {
      return (
        <div
          className="flex w-fit cursor-pointer items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Permissões
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center text-sm text-foreground text-green-600">
        <DotFilledIcon width={18} height={18} />
        {row.getValue('qualification') || 'Ativo'}
      </div>
    ),
  },
  {
    accessorKey: 'created_at',
    header: 'Criado em',
    label: 'Criado em',
    meta: { className: 'pt-0 table-cell' },
    cell: ({ row }) => (
      <div className="pt-0 lg:pt-2">
        {formatDateTime(row.original.created_at)}
      </div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    meta: {
      className:
        'absolute right-1 top-1 lg:right-auto lg:top-auto lg:relative lg:w-16',
    },
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              icon={<ClipboardCopyIcon />}
              onClick={() =>
                navigator.clipboard.writeText(row.original.email || '')
              }
            >
              Copiar e-mail
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              icon={<EyeOpenIcon />}
              onClick={() => console.log(row.original)}
            >
              Ver detalhes
            </DropdownMenuItem>
            <DropdownMenuItem
              icon={<Pencil2Icon />}
              onClick={() => console.log(row.original)}
            >
              Editar
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              type="warning"
              icon={<TrashIcon />}
              onClick={() => alert('Deletar: ' + row.original.name)}
            >
              Deletar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
