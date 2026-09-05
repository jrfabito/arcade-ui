import * as React from "react"
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Filter,
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  Loader2,
  Inbox,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Checkbox } from "@/primitives/Checkbox"
import { Button } from "@/primitives/Button"
import { Input } from "@/primitives/Input"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/primitives/Popover"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/primitives/Select"

/* -------------------------------------------------------------------------- */
/* Low-Level Composable Primitives                                            */
/* -------------------------------------------------------------------------- */

interface TableRootProps extends React.ComponentProps<"table"> {
  containerClassName?: string
  bordered?: boolean
  compact?: boolean
  striped?: boolean
}

function TableRoot({
  className,
  containerClassName,
  bordered,
  compact,
  striped,
  ...props
}: TableRootProps) {
  return (
    <div
      data-slot="table-container"
      className={cn(
        "relative w-full overflow-auto rounded-lg bg-card text-card-foreground",
        bordered && "border-2 border-border shadow-[var(--card-shadow)]",
        containerClassName
      )}
    >
      <table
        data-slot="table"
        data-bordered={bordered ? "" : undefined}
        data-compact={compact ? "" : undefined}
        data-striped={striped ? "" : undefined}
        className={cn(
          "w-full caption-bottom text-sm font-sans border-collapse",
          bordered && "border-border",
          className
        )}
        {...props}
      />
    </div>
  )
}

function TableHeader({
  className,
  ...props
}: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("border-b-2 border-border bg-muted/40", className)}
      {...props}
    />
  )
}

function TableBody({
  className,
  ...props
}: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({
  className,
  ...props
}: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t-2 border-border bg-muted/40 font-medium font-sans text-sm",
        className
      )}
      {...props}
    />
  )
}

interface TableRowProps extends React.ComponentProps<"tr"> {
  selected?: boolean
}

function TableRow({
  className,
  selected,
  ...props
}: TableRowProps) {
  return (
    <tr
      data-slot="table-row"
      data-state={selected ? "selected" : undefined}
      className={cn(
        "border-b border-border transition-colors hover:bg-muted/40",
        "data-[state=selected]:bg-accent-soft data-[state=selected]:text-accent-strong",
        className
      )}
      {...props}
    />
  )
}

interface TableHeadProps extends React.ComponentProps<"th"> {
  align?: "left" | "center" | "right"
}

function TableHead({
  className,
  align = "left",
  ...props
}: TableHeadProps) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-11 px-4 align-middle font-mono text-xs uppercase font-semibold text-muted-foreground tracking-wider select-none",
        align === "center" && "text-center",
        align === "right" && "text-right",
        align === "left" && "text-left",
        "[&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

interface TableCellProps extends React.ComponentProps<"td"> {
  align?: "left" | "center" | "right"
}

function TableCell({
  className,
  align = "left",
  ...props
}: TableCellProps) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-4 align-middle font-sans text-sm text-foreground",
        align === "center" && "text-center",
        align === "right" && "text-right",
        align === "left" && "text-left",
        "[&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-xs font-mono text-muted-foreground text-center", className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/* Ant Design-Compatible Declarative Table Architecture                       */
/* -------------------------------------------------------------------------- */

export type SortOrder = "ascend" | "descend" | null

export interface SorterResult<RecordType = any> {
  column?: ColumnType<RecordType>
  order?: SortOrder
  field?: keyof RecordType | string | (string | number)[]
  columnKey?: string | number
}

export interface ColumnFilterItem {
  text: React.ReactNode
  value: any
  children?: ColumnFilterItem[]
}

export interface ColumnType<RecordType = any> {
  title?: React.ReactNode | ((props: { sortOrder?: SortOrder }) => React.ReactNode)
  key?: string | number
  dataIndex?: keyof RecordType | string | (string | number)[]
  render?: (value: any, record: RecordType, index: number) => React.ReactNode
  align?: "left" | "center" | "right"
  width?: number | string
  ellipsis?: boolean
  fixed?: "left" | "right" | boolean
  sorter?:
    | boolean
    | ((a: RecordType, b: RecordType) => number)
    | { compare?: (a: RecordType, b: RecordType) => number; multiple?: number }
  sortOrder?: SortOrder
  defaultSortOrder?: SortOrder
  sortDirections?: ("ascend" | "descend")[]
  filters?: ColumnFilterItem[]
  filteredValue?: any[] | null
  defaultFilteredValue?: any[] | null
  onFilter?: (value: any, record: RecordType) => boolean
  filterMultiple?: boolean
  filterDropdown?: (props: {
    setSelectedKeys: (selectedKeys: any[]) => void
    selectedKeys: any[]
    confirm: () => void
    clearFilters?: () => void
    close: () => void
  }) => React.ReactNode
  onCell?: (record: RecordType, index: number) => React.TdHTMLAttributes<HTMLTableCellElement>
  onHeaderCell?: (column: ColumnType<RecordType>) => React.ThHTMLAttributes<HTMLTableCellElement>
  className?: string
  children?: ColumnType<RecordType>[]
}

export interface TableRowSelection<RecordType = any> {
  type?: "checkbox" | "radio"
  selectedRowKeys?: (string | number)[]
  defaultSelectedRowKeys?: (string | number)[]
  onChange?: (selectedRowKeys: (string | number)[], selectedRows: RecordType[]) => void
  getCheckboxProps?: (record: RecordType) => { disabled?: boolean; name?: string }
  columnTitle?: React.ReactNode
  columnWidth?: number | string
  fixed?: boolean | "left" | "right"
  hideSelectAll?: boolean
}

export interface TableExpandableConfig<RecordType = any> {
  expandedRowRender?: (
    record: RecordType,
    index: number,
    indent: number,
    expanded: boolean
  ) => React.ReactNode
  rowExpandable?: (record: RecordType) => boolean
  expandedRowKeys?: (string | number)[]
  defaultExpandedRowKeys?: (string | number)[]
  onExpand?: (expanded: boolean, record: RecordType) => void
  onExpandedRowsChange?: (expandedKeys: (string | number)[]) => void
  expandRowByClick?: boolean
  indentSize?: number
  childrenColumnName?: string
}

export interface TablePaginationConfig {
  current?: number
  pageSize?: number
  defaultCurrent?: number
  defaultPageSize?: number
  total?: number
  pageSizeOptions?: number[]
  showSizeChanger?: boolean
  showTotal?: (total: number, range: [number, number]) => React.ReactNode
  onChange?: (page: number, pageSize: number) => void
  position?: ("bottomLeft" | "bottomCenter" | "bottomRight" | "topLeft" | "topRight")[]
}

export interface TableLocale {
  emptyText?: React.ReactNode
  filterConfirm?: string
  filterReset?: string
  filterEmpty?: string
  selectAll?: string
  selectInvert?: string
  filterSearchPlaceholder?: string
}

export interface TableProps<RecordType = any>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "onChange"> {
  dataSource?: RecordType[]
  columns?: ColumnType<RecordType>[]
  rowKey?: keyof RecordType | ((record: RecordType, index?: number) => string | number)
  rowSelection?: TableRowSelection<RecordType>
  expandable?: TableExpandableConfig<RecordType>
  pagination?: false | TablePaginationConfig
  loading?: boolean | React.ReactNode
  bordered?: boolean
  striped?: boolean
  size?: "default" | "compact"
  scroll?: { x?: number | string | true; y?: number | string }
  sticky?: boolean
  showHeader?: boolean
  title?: (currentPageData: readonly RecordType[]) => React.ReactNode
  footer?: (currentPageData: readonly RecordType[]) => React.ReactNode
  summary?: (currentData: readonly RecordType[]) => React.ReactNode
  locale?: TableLocale
  onRow?: (record: RecordType, index: number) => React.HTMLAttributes<HTMLTableRowElement>
  onHeaderRow?: (columns: ColumnType<RecordType>[], index: number) => React.HTMLAttributes<HTMLTableRowElement>
  rowClassName?: string | ((record: RecordType, index: number) => string)
  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, any[] | null>,
    sorter: SorterResult<RecordType> | SorterResult<RecordType>[],
    extra: { currentDataSource: RecordType[]; action: "paginate" | "sort" | "filter" }
  ) => void
}

/**
 * Resolves nested record properties (e.g. dataIndex = 'author.name' or ['author', 'name']).
 */
function getRecordValue(record: any, dataIndex?: any): any {
  if (!dataIndex) return record
  if (Array.isArray(dataIndex)) {
    return dataIndex.reduce((curr, key) => (curr != null ? curr[key] : undefined), record)
  }
  if (typeof dataIndex === "string" && dataIndex.includes(".")) {
    return dataIndex.split(".").reduce((curr, key) => (curr != null ? curr[key] : undefined), record)
  }
  return record[dataIndex]
}

/* -------------------------------------------------------------------------- */
/* Main Ant Design-Breadth Table Component                                    */
/* -------------------------------------------------------------------------- */

export function Table<RecordType extends Record<string, any> = any>({
  dataSource = [],
  columns = [],
  rowKey = "key",
  rowSelection,
  expandable,
  pagination = {},
  loading = false,
  bordered = false,
  striped = false,
  size = "default",
  scroll,
  sticky = false,
  showHeader = true,
  title,
  footer,
  summary,
  locale = {},
  onRow,
  onHeaderRow,
  rowClassName,
  onChange,
  className,
  children,
  ...restProps
}: TableProps<RecordType>) {
  // If no columns or dataSource are provided and children are present, act as composable TableRoot
  if (columns.length === 0 && dataSource.length === 0 && children) {
    return (
      <TableRoot
        bordered={bordered}
        compact={size === "compact"}
        striped={striped}
        className={className}
        {...(restProps as any)}
      >
        {children}
      </TableRoot>
    )
  }

  // --- Row Key Resolver ---
  const getRowKey = React.useCallback(
    (record: RecordType, index: number): string | number => {
      if (typeof rowKey === "function") {
        return rowKey(record, index)
      }
      if (typeof rowKey === "string" && record[rowKey] !== undefined) {
        return record[rowKey]
      }
      return record.key !== undefined ? record.key : index
    },
    [rowKey]
  )

  // --- Sorting State ---
  const [sorters, setSorters] = React.useState<{
    field?: keyof RecordType | string | (string | number)[]
    columnKey?: string | number
    order: SortOrder
    column?: ColumnType<RecordType>
  }>({
    order: null,
  })

  // --- Filter State ---
  const [filters, setFilters] = React.useState<Record<string, any[] | null>>(() => {
    const initial: Record<string, any[] | null> = {}
    columns.forEach((col, idx) => {
      const colId = String(col.key ?? col.dataIndex ?? idx)
      if (col.defaultFilteredValue) {
        initial[colId] = col.defaultFilteredValue
      } else if (col.filteredValue !== undefined) {
        initial[colId] = col.filteredValue
      }
    })
    return initial
  })

  // Sync controlled filteredValue
  React.useEffect(() => {
    columns.forEach((col, idx) => {
      if (col.filteredValue !== undefined) {
        const colId = String(col.key ?? col.dataIndex ?? idx)
        setFilters((prev) => ({ ...prev, [colId]: col.filteredValue ?? null }))
      }
    })
  }, [columns])

  // --- Selection State ---
  const isSelectionControlled = rowSelection && rowSelection.selectedRowKeys !== undefined
  const [internalSelectedKeys, setInternalSelectedKeys] = React.useState<(string | number)[]>(
    rowSelection?.defaultSelectedRowKeys || []
  )
  const selectedRowKeys = isSelectionControlled
    ? (rowSelection!.selectedRowKeys || [])
    : internalSelectedKeys

  // --- Expansion State ---
  const childrenColumnName = expandable?.childrenColumnName || "children"
  const [internalExpandedKeys, setInternalExpandedKeys] = React.useState<(string | number)[]>(
    expandable?.defaultExpandedRowKeys || []
  )
  const expandedRowKeys = expandable?.expandedRowKeys !== undefined
    ? expandable.expandedRowKeys
    : internalExpandedKeys

  // --- Pagination State ---
  const isPaginationEnabled = pagination !== false
  const [currentPage, setCurrentPage] = React.useState<number>(
    isPaginationEnabled && pagination.defaultCurrent ? pagination.defaultCurrent : 1
  )
  const [pageSize, setPageSize] = React.useState<number>(
    isPaginationEnabled && pagination.defaultPageSize
      ? pagination.defaultPageSize
      : (pagination as TablePaginationConfig)?.pageSize || 10
  )

  const activePage = isPaginationEnabled && pagination.current !== undefined
    ? pagination.current
    : currentPage
  const activePageSize = isPaginationEnabled && pagination.pageSize !== undefined
    ? pagination.pageSize
    : pageSize

  // --- Data Transformation Pipeline: 1. Filter, 2. Sort, 3. Paginate ---
  const filteredData = React.useMemo(() => {
    let result = [...dataSource]

    // Apply column filters
    columns.forEach((col, idx) => {
      const colId = String(col.key ?? col.dataIndex ?? idx)
      const selectedFilterValues = filters[colId]
      if (selectedFilterValues && selectedFilterValues.length > 0 && col.onFilter) {
        result = result.filter((record) =>
          selectedFilterValues.some((val) => col.onFilter!(val, record))
        )
      }
    })

    return result
  }, [dataSource, columns, filters])

  const sortedData = React.useMemo(() => {
    if (!sorters.order || !sorters.column?.sorter) {
      return filteredData
    }

    const result = [...filteredData]
    const sorterFn = sorters.column.sorter

    if (typeof sorterFn === "function") {
      result.sort((a, b) => {
        const cmp = sorterFn(a, b)
        return sorters.order === "ascend" ? cmp : -cmp
      })
    } else if (typeof sorterFn === "object" && sorterFn.compare) {
      result.sort((a, b) => {
        const cmp = sorterFn.compare!(a, b)
        return sorters.order === "ascend" ? cmp : -cmp
      })
    } else if (sorterFn === true && sorters.column.dataIndex) {
      result.sort((a, b) => {
        const aVal = getRecordValue(a, sorters.column!.dataIndex)
        const bVal = getRecordValue(b, sorters.column!.dataIndex)
        if (aVal === bVal) return 0
        const cmp = aVal > bVal ? 1 : -1
        return sorters.order === "ascend" ? cmp : -cmp
      })
    }

    return result
  }, [filteredData, sorters])

  const totalRecords = isPaginationEnabled && pagination.total !== undefined
    ? pagination.total
    : sortedData.length

  const paginatedData = React.useMemo(() => {
    if (!isPaginationEnabled) {
      return sortedData
    }
    // If external total is provided without slice (e.g. server-side pagination), return data as is
    if (pagination.total !== undefined && pagination.total !== sortedData.length) {
      return sortedData
    }
    const startIndex = (activePage - 1) * activePageSize
    return sortedData.slice(startIndex, startIndex + activePageSize)
  }, [sortedData, isPaginationEnabled, activePage, activePageSize, pagination ? pagination.total : undefined])

  // --- Handlers ---
  const handleSort = (column: ColumnType<RecordType>, colId: string) => {
    if (!column.sorter) return

    const directions = column.sortDirections || ["ascend", "descend"]
    let nextOrder: SortOrder = null

    if (sorters.columnKey !== colId) {
      nextOrder = directions[0]
    } else {
      const currentIndex = sorters.order ? directions.indexOf(sorters.order) : -1
      if (currentIndex === -1) {
        nextOrder = directions[0]
      } else if (currentIndex < directions.length - 1) {
        nextOrder = directions[currentIndex + 1]
      } else {
        nextOrder = null
      }
    }

    const newSorter: SorterResult<RecordType> = {
      column,
      columnKey: colId,
      field: column.dataIndex,
      order: nextOrder,
    }

    setSorters({
      field: column.dataIndex,
      columnKey: colId,
      order: nextOrder,
      column,
    })

    if (onChange) {
      onChange(
        { current: activePage, pageSize: activePageSize, total: totalRecords },
        filters,
        newSorter,
        { currentDataSource: sortedData, action: "sort" }
      )
    }
  }

  const handleFilterChange = (colId: string, selectedValues: any[]) => {
    const nextFilters = {
      ...filters,
      [colId]: selectedValues.length > 0 ? selectedValues : null,
    }
    setFilters(nextFilters)

    if (onChange) {
      onChange(
        { current: activePage, pageSize: activePageSize, total: totalRecords },
        nextFilters,
        sorters,
        { currentDataSource: sortedData, action: "filter" }
      )
    }
  }

  const handlePageChange = (page: number, newPageSize?: number) => {
    const nextSize = newPageSize || activePageSize
    setCurrentPage(page)
    if (newPageSize) setPageSize(newPageSize)

    if (isPaginationEnabled && pagination.onChange) {
      pagination.onChange(page, nextSize)
    }

    if (onChange) {
      onChange(
        { current: page, pageSize: nextSize, total: totalRecords },
        filters,
        sorters,
        { currentDataSource: sortedData, action: "paginate" }
      )
    }
  }

  // Row selection handler
  const handleRowSelect = (_record: RecordType, key: string | number, checked: boolean) => {
    if (!rowSelection) return
    const isRadio = rowSelection.type === "radio"
    let nextSelected: (string | number)[] = []

    if (isRadio) {
      nextSelected = checked ? [key] : []
    } else {
      if (checked) {
        nextSelected = [...selectedRowKeys, key]
      } else {
        nextSelected = selectedRowKeys.filter((k) => k !== key)
      }
    }

    if (!isSelectionControlled) {
      setInternalSelectedKeys(nextSelected)
    }

    if (rowSelection.onChange) {
      const selectedRecords = dataSource.filter((item, idx) =>
        nextSelected.includes(getRowKey(item, idx))
      )
      rowSelection.onChange(nextSelected, selectedRecords)
    }
  }

  // Select all handler
  const currentSelectableKeys = paginatedData
    .map((record, idx) => {
      const key = getRowKey(record, idx)
      const checkboxProps = rowSelection?.getCheckboxProps?.(record)
      return checkboxProps?.disabled ? null : key
    })
    .filter((k): k is string | number => k !== null)

  const isAllSelected =
    currentSelectableKeys.length > 0 &&
    currentSelectableKeys.every((key) => selectedRowKeys.includes(key))

  const isIndeterminate =
    !isAllSelected &&
    currentSelectableKeys.some((key) => selectedRowKeys.includes(key))

  const handleSelectAll = (checked: boolean) => {
    if (!rowSelection) return
    let nextSelected: (string | number)[] = []

    if (checked) {
      const set = new Set([...selectedRowKeys, ...currentSelectableKeys])
      nextSelected = Array.from(set)
    } else {
      nextSelected = selectedRowKeys.filter((k) => !currentSelectableKeys.includes(k))
    }

    if (!isSelectionControlled) {
      setInternalSelectedKeys(nextSelected)
    }

    if (rowSelection.onChange) {
      const selectedRecords = dataSource.filter((item, idx) =>
        nextSelected.includes(getRowKey(item, idx))
      )
      rowSelection.onChange(nextSelected, selectedRecords)
    }
  }

  // Expand handler
  const toggleRowExpansion = (key: string | number, record: RecordType) => {
    const isExpanded = expandedRowKeys.includes(key)
    const nextKeys = isExpanded
      ? expandedRowKeys.filter((k) => k !== key)
      : [...expandedRowKeys, key]

    if (expandable?.expandedRowKeys === undefined) {
      setInternalExpandedKeys(nextKeys)
    }

    expandable?.onExpand?.(!isExpanded, record)
    expandable?.onExpandedRowsChange?.(nextKeys)
  }

  // Cell padding based on density
  const cellPadding = size === "compact" ? "py-2.5 px-3" : "py-3.5 px-4"
  const headPadding = size === "compact" ? "h-9 px-3" : "h-11 px-4"

  return (
    <div
      data-slot="arcade-table-wrapper"
      className={cn("w-full space-y-3", className)}
      {...restProps}
    >
      {/* Title Slot */}
      {title && (
        <div className="px-1 py-1 font-header text-lg text-foreground">
          {title(paginatedData)}
        </div>
      )}

      {/* Main Table Shell with 2px ink border option */}
      <div
        className={cn(
          "relative w-full rounded-lg bg-card text-card-foreground",
          bordered
            ? "border-2 border-border shadow-[var(--card-shadow)]"
            : "border border-border",
          scroll?.x && "overflow-x-auto"
        )}
        style={{
          maxHeight: scroll?.y ? scroll.y : undefined,
          overflowY: scroll?.y ? "auto" : undefined,
        }}
      >
        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center gap-2 rounded-lg bg-background/70 backdrop-blur-xs">
            <Loader2 className="size-8 animate-spin text-accent-strong" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Loading Critters...
            </span>
          </div>
        )}

        <table
          className={cn(
            "w-full caption-bottom text-sm font-sans border-collapse",
            bordered && "[&_th]:border-r [&_th]:border-border [&_td]:border-r [&_td]:border-border [&_th:last-child]:border-r-0 [&_td:last-child]:border-r-0"
          )}
          style={{ minWidth: typeof scroll?.x === "number" || typeof scroll?.x === "string" ? scroll.x : undefined }}
        >
          {/* Table Header */}
          {showHeader && (
            <thead
              className={cn(
                "border-b-2 border-border bg-muted/40",
                sticky && "sticky top-0 z-30 shadow-xs"
              )}
            >
              <tr className="border-b border-border">
                {/* Row Selection Header */}
                {rowSelection && (
                  <th
                    className={cn(
                      "w-12 text-center align-middle",
                      headPadding,
                      rowSelection.fixed === "left" && "sticky left-0 z-30 bg-muted/95 backdrop-blur-xs"
                    )}
                  >
                    {rowSelection.type !== "radio" && !rowSelection.hideSelectAll && (
                      <div className="flex items-center justify-center">
                        <Checkbox
                          checked={isAllSelected ? true : isIndeterminate ? "indeterminate" : false}
                          onCheckedChange={(checked) => handleSelectAll(Boolean(checked))}
                          aria-label={locale.selectAll || "Select all rows"}
                        />
                      </div>
                    )}
                    {rowSelection.columnTitle}
                  </th>
                )}

                {/* Expandable Column Header Spacer */}
                {(expandable?.expandedRowRender ||
                  paginatedData.some((r) => Array.isArray(r[childrenColumnName]))) && (
                  <th className={cn("w-10 text-center", headPadding)} />
                )}

                {/* Columns */}
                {columns.map((column, idx) => {
                  const colId = String(column.key ?? column.dataIndex ?? idx)
                  const isSorted = sorters.columnKey === colId && sorters.order
                  const activeFilterValues = filters[colId]
                  const hasActiveFilters = Boolean(activeFilterValues && activeFilterValues.length > 0)

                  return (
                    <th
                      key={colId}
                      className={cn(
                        "font-mono text-xs uppercase font-semibold text-muted-foreground tracking-wider select-none align-middle",
                        headPadding,
                        column.align === "center" && "text-center",
                        column.align === "right" && "text-right",
                        column.align === "left" && "text-left",
                        column.fixed === "left" && "sticky left-0 z-20 bg-muted/95 backdrop-blur-xs",
                        column.fixed === "right" && "sticky right-0 z-20 bg-muted/95 backdrop-blur-xs",
                        column.sorter && "cursor-pointer hover:text-foreground hover:bg-muted/70 transition-colors",
                        column.className
                      )}
                      style={{ width: column.width }}
                      onClick={() => column.sorter && handleSort(column, colId)}
                    >
                      <div
                        className={cn(
                          "inline-flex items-center gap-1.5",
                          column.align === "center" && "justify-center w-full",
                          column.align === "right" && "justify-end w-full"
                        )}
                      >
                        {/* Column Title */}
                        <span>
                          {typeof column.title === "function"
                            ? column.title({ sortOrder: sorters.columnKey === colId ? sorters.order : null })
                            : column.title}
                        </span>

                        {/* Sort Indicator */}
                        {column.sorter && (
                          <span
                            className={cn(
                              "inline-flex items-center transition-colors",
                              isSorted ? "text-accent-strong" : "text-muted-foreground/60"
                            )}
                          >
                            {sorters.columnKey === colId && sorters.order === "ascend" ? (
                              <ArrowUp className="size-3.5 stroke-[2.5]" />
                            ) : sorters.columnKey === colId && sorters.order === "descend" ? (
                              <ArrowDown className="size-3.5 stroke-[2.5]" />
                            ) : (
                              <ArrowUpDown className="size-3.5 stroke-[2]" />
                            )}
                          </span>
                        )}

                        {/* Arcade Column Filter Dropdown using Arcade Popover primitive */}
                        {column.filters && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center"
                          >
                            {column.filterDropdown ? (
                              column.filterDropdown({
                                selectedKeys: activeFilterValues || [],
                                setSelectedKeys: (keys) => handleFilterChange(colId, keys),
                                confirm: () => {},
                                clearFilters: () => handleFilterChange(colId, []),
                                close: () => {},
                              })
                            ) : (
                              <TableColumnFilterPopover
                                column={column}
                                colId={colId}
                                selectedValues={activeFilterValues || []}
                                onApply={(values) => handleFilterChange(colId, values)}
                                onReset={() => handleFilterChange(colId, [])}
                                hasActiveFilters={hasActiveFilters}
                                locale={locale}
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </th>
                  )
                })}
              </tr>
            </thead>
          )}

          {/* Table Body */}
          <tbody className="[&_tr:last-child]:border-0">
            {paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={
                    columns.length +
                    (rowSelection ? 1 : 0) +
                    (expandable ? 1 : 0)
                  }
                  className="h-40 text-center align-middle"
                >
                  <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    <Inbox className="size-10 text-muted-foreground/50" />
                    <p className="font-mono text-xs uppercase tracking-wider">
                      {locale.emptyText || "No critter records found"}
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              paginatedData.map((record, index) => {
                const key = getRowKey(record, index)
                const isSelected = selectedRowKeys.includes(key)
                const isExpanded = expandedRowKeys.includes(key)
                const checkboxProps = rowSelection?.getCheckboxProps?.(record)
                const isRowExpandable = expandable?.rowExpandable
                  ? expandable.rowExpandable(record)
                  : true
                const hasChildren = Array.isArray(record[childrenColumnName]) && record[childrenColumnName].length > 0
                const canExpand = Boolean((expandable?.expandedRowRender && isRowExpandable) || hasChildren)

                const rowCustomProps = onRow ? onRow(record, index) : {}
                const customRowClass =
                  typeof rowClassName === "function"
                    ? rowClassName(record, index)
                    : rowClassName

                return (
                  <React.Fragment key={key}>
                    <tr
                      data-state={isSelected ? "selected" : undefined}
                      className={cn(
                        "border-b border-border transition-colors hover:bg-muted/40",
                        striped && index % 2 === 1 && "bg-muted/20",
                        "data-[state=selected]:bg-accent-soft data-[state=selected]:text-accent-strong",
                        expandable?.expandRowByClick && canExpand && "cursor-pointer",
                        customRowClass
                      )}
                      onClick={(e) => {
                        if (expandable?.expandRowByClick && canExpand) {
                          toggleRowExpansion(key, record)
                        }
                        rowCustomProps.onClick?.(e)
                      }}
                      {...rowCustomProps}
                    >
                      {/* Selection Cell */}
                      {rowSelection && (
                        <td
                          className={cn(
                            "w-12 text-center align-middle",
                            cellPadding,
                            rowSelection.fixed === "left" && "sticky left-0 z-10 bg-card backdrop-blur-xs"
                          )}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-center justify-center">
                            <Checkbox
                              checked={isSelected}
                              disabled={checkboxProps?.disabled}
                              onCheckedChange={(checked) =>
                                handleRowSelect(record, key, Boolean(checked))
                              }
                              aria-label={`Select row ${index + 1}`}
                            />
                          </div>
                        </td>
                      )}

                      {/* Expand / Tree Toggle Cell */}
                      {(expandable?.expandedRowRender || hasChildren) && (
                        <td className={cn("w-10 text-center align-middle", cellPadding)}>
                          {canExpand && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleRowExpansion(key, record)
                              }}
                              className="inline-flex size-6 items-center justify-center rounded-sm hover:bg-muted transition-transform"
                            >
                              <ChevronRight
                                className={cn(
                                  "size-4 text-muted-foreground transition-transform duration-200",
                                  isExpanded && "rotate-90 text-foreground"
                                )}
                              />
                            </button>
                          )}
                        </td>
                      )}

                      {/* Column Cells */}
                      {columns.map((column, colIdx) => {
                        const colId = String(column.key ?? column.dataIndex ?? colIdx)
                        const val = getRecordValue(record, column.dataIndex)
                        const cellContent = column.render
                          ? column.render(val, record, index)
                          : val !== undefined && val !== null
                          ? String(val)
                          : null

                        const cellProps = column.onCell ? column.onCell(record, index) : {}

                        return (
                          <td
                            key={colId}
                            className={cn(
                              "font-sans text-sm text-foreground align-middle",
                              cellPadding,
                              column.align === "center" && "text-center",
                              column.align === "right" && "text-right",
                              column.align === "left" && "text-left",
                              column.ellipsis && "truncate max-w-[200px]",
                              column.fixed === "left" && "sticky left-0 z-10 bg-card backdrop-blur-xs",
                              column.fixed === "right" && "sticky right-0 z-10 bg-card backdrop-blur-xs",
                              column.className
                            )}
                            {...cellProps}
                          >
                            {cellContent}
                          </td>
                        )
                      })}
                    </tr>

                    {/* Expandable Sub-Row Content */}
                    {isExpanded && expandable?.expandedRowRender && (
                      <tr className="border-b border-border bg-muted/20">
                        <td
                          colSpan={
                            columns.length +
                            (rowSelection ? 1 : 0) +
                            1
                          }
                          className={cn("p-4 font-sans text-sm", cellPadding)}
                        >
                          {expandable.expandedRowRender(record, index, 0, isExpanded)}
                        </td>
                      </tr>
                    )}

                    {/* Tree Children Recursive Rendering */}
                    {isExpanded && hasChildren && (
                      record[childrenColumnName].map((childRecord: any, childIdx: number) => (
                        <TreeChildRow
                          key={getRowKey(childRecord, childIdx)}
                          record={childRecord}
                          index={childIdx}
                          depth={1}
                          columns={columns}
                          getRowKey={getRowKey}
                          selectedRowKeys={selectedRowKeys}
                          rowSelection={rowSelection}
                          handleRowSelect={handleRowSelect}
                          childrenColumnName={childrenColumnName}
                          cellPadding={cellPadding}
                          indentSize={expandable?.indentSize || 20}
                        />
                      ))
                    )}
                  </React.Fragment>
                )
              })
            )}
          </tbody>

          {/* Optional Summary Footer */}
          {summary && (
            <tfoot className="border-t-2 border-border bg-muted/30 font-medium font-sans text-sm">
              {summary(paginatedData)}
            </tfoot>
          )}
        </table>
      </div>

      {/* Optional Table Outer Footer */}
      {footer && (
        <div className="px-1 py-1 font-sans text-sm text-muted-foreground">
          {footer(paginatedData)}
        </div>
      )}

      {/* Pagination Bar */}
      {isPaginationEnabled && totalRecords > 0 && (
        <TablePaginationBar
          current={activePage}
          pageSize={activePageSize}
          total={totalRecords}
          pageSizeOptions={pagination.pageSizeOptions || [5, 10, 20, 50]}
          showSizeChanger={pagination.showSizeChanger ?? true}
          showTotal={pagination.showTotal}
          onChange={handlePageChange}
        />
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Tree Child Row Component (Recursive with Indentation)                      */
/* -------------------------------------------------------------------------- */

interface TreeChildRowProps {
  record: any
  index: number
  depth: number
  columns: ColumnType[]
  getRowKey: (record: any, index: number) => string | number
  selectedRowKeys: (string | number)[]
  rowSelection?: TableRowSelection
  handleRowSelect: (record: any, key: string | number, checked: boolean) => void
  childrenColumnName: string
  cellPadding: string
  indentSize: number
}

function TreeChildRow({
  record,
  index,
  depth,
  columns,
  getRowKey,
  selectedRowKeys,
  rowSelection,
  handleRowSelect,
  childrenColumnName,
  cellPadding,
  indentSize,
}: TreeChildRowProps) {
  const key = getRowKey(record, index)
  const isSelected = selectedRowKeys.includes(key)
  const [expanded, setExpanded] = React.useState(false)
  const hasChildren = Array.isArray(record[childrenColumnName]) && record[childrenColumnName].length > 0

  return (
    <>
      <tr
        data-state={isSelected ? "selected" : undefined}
        className="border-b border-border bg-muted/10 transition-colors hover:bg-muted/40 data-[state=selected]:bg-accent-soft data-[state=selected]:text-accent-strong"
      >
        {rowSelection && (
          <td className={cn("w-12 text-center align-middle", cellPadding)}>
            <Checkbox
              checked={isSelected}
              onCheckedChange={(c) => handleRowSelect(record, key, Boolean(c))}
            />
          </td>
        )}
        <td className={cn("w-10 text-center align-middle", cellPadding)}>
          {hasChildren && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="inline-flex size-6 items-center justify-center rounded-sm hover:bg-muted"
            >
              <ChevronRight
                className={cn(
                  "size-4 text-muted-foreground transition-transform duration-200",
                  expanded && "rotate-90 text-foreground"
                )}
              />
            </button>
          )}
        </td>
        {columns.map((col, colIdx) => {
          const val = getRecordValue(record, col.dataIndex)
          const content = col.render ? col.render(val, record, index) : val
          return (
            <td
              key={String(col.key ?? col.dataIndex ?? colIdx)}
              className={cn(
                "font-sans text-sm text-foreground align-middle",
                cellPadding,
                col.align === "center" && "text-center",
                col.align === "right" && "text-right"
              )}
            >
              {colIdx === 0 ? (
                <div
                  className="flex items-center gap-2"
                  style={{ paddingLeft: `${depth * indentSize}px` }}
                >
                  <span className="text-muted-foreground">↳</span>
                  <span>{content}</span>
                </div>
              ) : (
                content
              )}
            </td>
          )
        })}
      </tr>

      {expanded &&
        hasChildren &&
        record[childrenColumnName].map((subChild: any, subIdx: number) => (
          <TreeChildRow
            key={getRowKey(subChild, subIdx)}
            record={subChild}
            index={subIdx}
            depth={depth + 1}
            columns={columns}
            getRowKey={getRowKey}
            selectedRowKeys={selectedRowKeys}
            rowSelection={rowSelection}
            handleRowSelect={handleRowSelect}
            childrenColumnName={childrenColumnName}
            cellPadding={cellPadding}
            indentSize={indentSize}
          />
        ))}
    </>
  )
}

/* -------------------------------------------------------------------------- */
/* Column Filter Popover Component (Built on Arcade Popover Primitive)        */
/* -------------------------------------------------------------------------- */

interface TableColumnFilterPopoverProps {
  column: ColumnType
  colId: string
  selectedValues: any[]
  onApply: (values: any[]) => void
  onReset: () => void
  hasActiveFilters: boolean
  locale: TableLocale
}

function TableColumnFilterPopover({
  column,
  colId: _colId,
  selectedValues,
  onApply,
  onReset,
  hasActiveFilters,
  locale,
}: TableColumnFilterPopoverProps) {
  const [open, setOpen] = React.useState(false)
  const [pendingValues, setPendingValues] = React.useState<any[]>(selectedValues)
  const [searchQuery, setSearchQuery] = React.useState("")

  React.useEffect(() => {
    setPendingValues(selectedValues)
  }, [selectedValues, open])

  const options = column.filters || []
  const filteredOptions = searchQuery
    ? options.filter((opt) =>
        String(opt.text).toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options

  const handleToggle = (val: any) => {
    if (column.filterMultiple === false) {
      setPendingValues([val])
    } else {
      if (pendingValues.includes(val)) {
        setPendingValues(pendingValues.filter((v) => v !== val))
      } else {
        setPendingValues([...pendingValues, val])
      }
    }
  }

  const handleConfirm = () => {
    onApply(pendingValues)
    setOpen(false)
  }

  const handleClear = () => {
    setPendingValues([])
    onReset()
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label="Filter column"
          className={cn(
            "inline-flex size-6 items-center justify-center rounded-sm transition-colors hover:bg-muted",
            hasActiveFilters
              ? "text-accent-strong bg-accent-soft/80"
              : "text-muted-foreground/60 hover:text-foreground"
          )}
        >
          <Filter
            className={cn(
              "size-3.5",
              hasActiveFilters ? "fill-accent-strong stroke-accent-strong" : ""
            )}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={6}
        className="w-56 p-3 space-y-3 font-sans"
      >
        {/* Optional Search if options > 6 */}
        {options.length > 6 && (
          <Input
            placeholder={locale.filterSearchPlaceholder || "Search filter..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-8 text-xs font-sans"
          />
        )}

        {/* Options List */}
        <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
          {filteredOptions.length === 0 ? (
            <p className="text-xs text-muted-foreground py-2 text-center">
              {locale.filterEmpty || "No matches"}
            </p>
          ) : (
            filteredOptions.map((opt) => {
              const isChecked = pendingValues.includes(opt.value)
              return (
                <label
                  key={String(opt.value)}
                  className="flex items-center gap-2.5 px-1 py-1 rounded-sm text-xs font-sans hover:bg-muted cursor-pointer transition-colors"
                >
                  <Checkbox
                    checked={isChecked}
                    onCheckedChange={() => handleToggle(opt.value)}
                  />
                  <span className="truncate text-foreground select-none">
                    {opt.text}
                  </span>
                </label>
              )
            })
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between border-t border-border pt-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="h-7 px-2 text-xs font-mono"
          >
            {locale.filterReset || "Reset"}
          </Button>
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={handleConfirm}
            className="h-7 px-3 text-xs font-mono"
          >
            {locale.filterConfirm || "OK"}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

/* -------------------------------------------------------------------------- */
/* Arcade Table Pagination Bar                                                */
/* -------------------------------------------------------------------------- */

interface TablePaginationBarProps {
  current: number
  pageSize: number
  total: number
  pageSizeOptions: number[]
  showSizeChanger: boolean
  showTotal?: (total: number, range: [number, number]) => React.ReactNode
  onChange: (page: number, pageSize?: number) => void
}

function TablePaginationBar({
  current,
  pageSize,
  total,
  pageSizeOptions,
  showSizeChanger,
  showTotal,
  onChange,
}: TablePaginationBarProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const startRecord = (current - 1) * pageSize + 1
  const endRecord = Math.min(current * pageSize, total)

  // Generate page numbers
  const pageNumbers = React.useMemo(() => {
    const pages: (number | string)[] = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (current > 3) pages.push("...")
      const start = Math.max(2, current - 1)
      const end = Math.min(totalPages - 1, current + 1)
      for (let i = start; i <= end; i++) pages.push(i)
      if (current < totalPages - 2) pages.push("...")
      pages.push(totalPages)
    }
    return pages
  }, [current, totalPages])

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-1 py-2 font-mono text-xs">
      {/* Total / Range Info */}
      <div className="text-muted-foreground">
        {showTotal ? (
          showTotal(total, [startRecord, endRecord])
        ) : (
          <span>
            Showing <strong className="text-foreground">{startRecord}–{endRecord}</strong> of <strong className="text-foreground">{total}</strong> items
          </span>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        {/* Page Size Changer */}
        {showSizeChanger && (
          <div className="flex items-center gap-1.5 mr-2">
            <Select
              value={String(pageSize)}
              onValueChange={(val) => onChange(1, Number(val))}
            >
              <SelectTrigger className="h-8 w-24 text-xs font-mono">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {pageSizeOptions.map((opt) => (
                  <SelectItem key={opt} value={String(opt)} className="text-xs font-mono">
                    {opt} / page
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* First Page */}
        <Button
          variant="outline"
          size="sm"
          disabled={current <= 1}
          onClick={() => onChange(1)}
          className="size-8 p-0"
          aria-label="First page"
        >
          <ChevronsLeft className="size-4" />
        </Button>

        {/* Previous Page */}
        <Button
          variant="outline"
          size="sm"
          disabled={current <= 1}
          onClick={() => onChange(current - 1)}
          className="size-8 p-0"
          aria-label="Previous page"
        >
          <ChevronLeft className="size-4" />
        </Button>

        {/* Page Buttons */}
        <div className="flex items-center gap-1">
          {pageNumbers.map((page, idx) => {
            if (page === "...") {
              return (
                <span key={`dots-${idx}`} className="px-1 text-muted-foreground select-none">
                  …
                </span>
              )
            }
            const isCurrent = page === current
            return (
              <Button
                key={page}
                variant={isCurrent ? "primary" : "outline"}
                size="sm"
                onClick={() => onChange(Number(page))}
                className={cn("size-8 p-0 font-mono text-xs", isCurrent && "font-bold")}
              >
                {page}
              </Button>
            )
          })}
        </div>

        {/* Next Page */}
        <Button
          variant="outline"
          size="sm"
          disabled={current >= totalPages}
          onClick={() => onChange(current + 1)}
          className="size-8 p-0"
          aria-label="Next page"
        >
          <ChevronRight className="size-4" />
        </Button>

        {/* Last Page */}
        <Button
          variant="outline"
          size="sm"
          disabled={current >= totalPages}
          onClick={() => onChange(totalPages)}
          className="size-8 p-0"
          aria-label="Last page"
        >
          <ChevronsRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
  TableRoot,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
}
