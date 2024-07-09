'use client';

import { useState } from 'react';

import { ChevronDownIcon } from '@radix-ui/react-icons';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import * as Dropdown from '@/components/ui/dropdown-menu';
import * as Table from '@/components/ui/table';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { columns } from './data-table-columns';
import { DataTablePagination } from './data-table-pagination';
import { DataTableSearch } from './data-table-search';

export function DataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="mt-10 rounded-md border-[1px] border-border bg-white p-4">
      <div className="w-full">
        <div className="flex items-center gap-4 py-4">
          <DataTableSearch table={table} />
          <Dropdown.DropdownMenu>
            <Dropdown.DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Exibir <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </Dropdown.DropdownMenuTrigger>
            <Dropdown.DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <Dropdown.DropdownMenuCheckboxItem
                      key={column.id}
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.columnDef?.label}
                    </Dropdown.DropdownMenuCheckboxItem>
                  );
                })}
            </Dropdown.DropdownMenuContent>
          </Dropdown.DropdownMenu>
        </div>
        <div className="overflow-hidden rounded-md border">
          <Table.Table>
            <Table.TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <Table.TableRow
                  key={headerGroup.id}
                  className="hidden lg:table-row"
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <Table.TableHead
                        key={header.id}
                        className={cn(header.column.columnDef.meta?.className)}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </Table.TableHead>
                    );
                  })}
                </Table.TableRow>
              ))}

              <Table.TableRow>
                <Table.TableHead className="lg:hidden">
                  Usuários
                </Table.TableHead>
              </Table.TableRow>
            </Table.TableHeader>
            <Table.TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <Table.TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className="relative flex flex-col p-2 lg:table-row"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <Table.TableCell
                        key={cell.id}
                        className={cn(
                          cell.column.columnDef.meta?.className,

                          cell.id.includes('_id') &&
                            'hidden lg:table-cell lg:w-16',
                        )}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </Table.TableCell>
                    ))}
                  </Table.TableRow>
                ))
              ) : (
                <Table.TableRow>
                  <Table.TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </Table.TableCell>
                </Table.TableRow>
              )}
            </Table.TableBody>
          </Table.Table>
        </div>
        <div className="mt-4">
          <DataTablePagination table={table} />
        </div>
      </div>
    </div>
  );
}
