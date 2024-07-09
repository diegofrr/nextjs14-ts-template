import { Table } from '@tanstack/react-table';
import { Input } from '@/components/ui/input';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

interface DataTableSearchProps<TData> {
  table: Table<TData>;
}

export function DataTableSearch<TData>({ table }: DataTableSearchProps<TData>) {
  return (
    <div className="relative w-full max-w-sm">
      <Input
        placeholder="Pesquisar usuário..."
        value={(table.getColumn('user')?.getFilterValue() as string) ?? ''}
        onChange={(event) => {
          table.getColumn('user')?.setFilterValue(event.target.value);
        }}
        className="w-full pl-8"
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}
