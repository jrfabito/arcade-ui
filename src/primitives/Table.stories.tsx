import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  Table,
  TableRoot,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  type ColumnType,
} from "./Table"
import { Badge } from "./Badge"
import { Button } from "./Button"
import { Card } from "./Card"

const meta: Meta<typeof Table> = {
  title: "Primitives/Table",
  component: Table,
  tags: ["autodocs"],
}
export default meta

type Story = StoryObj<typeof Table>

interface CritterItem {
  key: string
  name: string
  code: string
  category: "Origami" | "Papercraft" | "Pop-Up"
  difficulty: "Easy" | "Medium" | "Expert"
  foldTime: number // in minutes
  sheets: number
  inStock: boolean
  downloads: number
  description?: string
  children?: CritterItem[]
}

const mockCritters: CritterItem[] = [
  {
    key: "1",
    name: "Neon Gecko",
    code: "CRT-001",
    category: "Origami",
    difficulty: "Medium",
    foldTime: 25,
    sheets: 2,
    inStock: true,
    downloads: 1420,
    description: "Sharp angular fold pattern featuring lime-tinted tail fins.",
  },
  {
    key: "2",
    name: "Cyber Mantis",
    code: "CRT-002",
    category: "Papercraft",
    difficulty: "Expert",
    foldTime: 65,
    sheets: 5,
    inStock: true,
    downloads: 890,
    description: "Articulated paper joints with snap-fit interlocking connectors.",
  },
  {
    key: "3",
    name: "Pixel Owl",
    code: "CRT-003",
    category: "Pop-Up",
    difficulty: "Easy",
    foldTime: 12,
    sheets: 1,
    inStock: false,
    downloads: 3105,
    description: "Classic card pop-up mechanism engineered for heavy cardstock.",
  },
  {
    key: "4",
    name: "Solaris Beetle",
    code: "CRT-004",
    category: "Papercraft",
    difficulty: "Medium",
    foldTime: 35,
    sheets: 3,
    inStock: true,
    downloads: 640,
    description: "Iridescent foil print template with geometric wing shields.",
  },
  {
    key: "5",
    name: "Ghost Jellyfish",
    code: "CRT-005",
    category: "Origami",
    difficulty: "Easy",
    foldTime: 18,
    sheets: 1,
    inStock: true,
    downloads: 2430,
    description: "Flowing translucent vellum tentacles with curved creases.",
  },
  {
    key: "6",
    name: "Voxel Tiger",
    code: "CRT-006",
    category: "Papercraft",
    difficulty: "Expert",
    foldTime: 90,
    sheets: 8,
    inStock: false,
    downloads: 1840,
    description: "Complex polygonized feline anatomy composed of 48 individual tabs.",
  },
  {
    key: "7",
    name: "Aero Crane",
    code: "CRT-007",
    category: "Origami",
    difficulty: "Easy",
    foldTime: 10,
    sheets: 1,
    inStock: true,
    downloads: 5120,
    description: "Modernized traditional crane with aerodynamic wingspan.",
  },
  {
    key: "8",
    name: "Chrono Chameleon",
    code: "CRT-008",
    category: "Pop-Up",
    difficulty: "Medium",
    foldTime: 40,
    sheets: 3,
    inStock: true,
    downloads: 980,
    description: "Pull-tab mechanism that rolls out a spring-loaded paper tongue.",
  },
]

// 1. Basic Ant Design-Style Table
export const BasicDataTable: Story = {
  render: () => {
    const columns: ColumnType<CritterItem>[] = [
      {
        title: "Critter Name",
        dataIndex: "name",
        key: "name",
        render: (name: string, record) => (
          <div>
            <span className="font-semibold text-foreground">{name}</span>
            <span className="block font-mono text-[11px] text-muted-foreground">
              {record.code}
            </span>
          </div>
        ),
      },
      {
        title: "Category",
        dataIndex: "category",
        key: "category",
        render: (cat: string) => <Badge variant="outline">{cat}</Badge>,
      },
      {
        title: "Difficulty",
        dataIndex: "difficulty",
        key: "difficulty",
        render: (diff: string) => {
          const variant =
            diff === "Easy" ? "soft" : diff === "Medium" ? "accent" : "danger"
          return <Badge variant={variant}>{diff}</Badge>
        },
      },
      {
        title: "Fold Time",
        dataIndex: "foldTime",
        key: "foldTime",
        align: "right",
        render: (time: number) => (
          <span className="font-mono text-xs">{time} min</span>
        ),
      },
      {
        title: "Status",
        dataIndex: "inStock",
        key: "inStock",
        render: (inStock: boolean) => (
          <span
            className={
              inStock ? "text-success font-medium text-xs" : "text-destructive font-medium text-xs"
            }
          >
            ● {inStock ? "In Stock" : "Archived"}
          </span>
        ),
      },
      {
        title: "Action",
        key: "action",
        align: "right",
        render: () => (
          <Button variant="secondary" size="sm">
            View PDF
          </Button>
        ),
      },
    ]

    return (
      <Table<CritterItem>
        dataSource={mockCritters.slice(0, 5)}
        columns={columns}
        pagination={false}
      />
    )
  },
}

// 2. Row Selection (Checkboxes, Select All, Disabled items, Action toolbar)
export const RowSelection: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = React.useState<(string | number)[]>(["1"])

    const columns: ColumnType<CritterItem>[] = [
      {
        title: "Critter",
        dataIndex: "name",
        render: (text, rec) => (
          <div>
            <div className="font-semibold">{text}</div>
            <div className="font-mono text-xs text-muted-foreground">{rec.code}</div>
          </div>
        ),
      },
      {
        title: "Category",
        dataIndex: "category",
      },
      {
        title: "Difficulty",
        dataIndex: "difficulty",
        render: (d) => <Badge variant="soft">{d}</Badge>,
      },
      {
        title: "Sheets",
        dataIndex: "sheets",
        align: "right",
        render: (s) => `${s} sheets`,
      },
    ]

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border-2 border-border bg-muted/30 p-3">
          <span className="font-mono text-xs text-muted-foreground">
            Selected: <strong className="text-foreground">{selectedKeys.length}</strong> critters
          </span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={selectedKeys.length === 0}
              onClick={() => setSelectedKeys([])}
            >
              Clear Selection
            </Button>
            <Button
              variant="hero"
              size="sm"
              disabled={selectedKeys.length === 0}
            >
              Batch Export Selected
            </Button>
          </div>
        </div>

        <Table<CritterItem>
          dataSource={mockCritters}
          columns={columns}
          rowSelection={{
            selectedRowKeys: selectedKeys,
            onChange: (newKeys) => setSelectedKeys(newKeys),
            getCheckboxProps: (record) => ({
              disabled: record.key === "3", // item 3 is disabled
            }),
          }}
          pagination={false}
        />
      </div>
    )
  },
}

// 3. Sorting & Column Filtering with Arcade Popover
export const SortingAndFiltering: Story = {
  render: () => {
    const columns: ColumnType<CritterItem>[] = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: "Category",
        dataIndex: "category",
        key: "category",
        filters: [
          { text: "Origami", value: "Origami" },
          { text: "Papercraft", value: "Papercraft" },
          { text: "Pop-Up", value: "Pop-Up" },
        ],
        onFilter: (value, record) => record.category === value,
      },
      {
        title: "Difficulty",
        dataIndex: "difficulty",
        key: "difficulty",
        filters: [
          { text: "Easy", value: "Easy" },
          { text: "Medium", value: "Medium" },
          { text: "Expert", value: "Expert" },
        ],
        onFilter: (value, record) => record.difficulty === value,
        render: (d) => <Badge variant={d === "Easy" ? "soft" : d === "Medium" ? "accent" : "danger"}>{d}</Badge>,
      },
      {
        title: "Fold Time",
        dataIndex: "foldTime",
        key: "foldTime",
        align: "right",
        sorter: (a, b) => a.foldTime - b.foldTime,
        render: (time) => <span className="font-mono text-xs">{time} min</span>,
      },
      {
        title: "Downloads",
        dataIndex: "downloads",
        key: "downloads",
        align: "right",
        sorter: (a, b) => a.downloads - b.downloads,
        render: (d) => <span className="font-mono text-xs">{d.toLocaleString()}</span>,
      },
    ]

    return (
      <Table<CritterItem>
        dataSource={mockCritters}
        columns={columns}
        bordered
        pagination={{ pageSize: 5 }}
      />
    )
  },
}

// 4. Expandable Sub-Row
export const ExpandableRows: Story = {
  render: () => {
    const columns: ColumnType<CritterItem>[] = [
      {
        title: "Critter",
        dataIndex: "name",
        render: (text) => <span className="font-semibold">{text}</span>,
      },
      {
        title: "Category",
        dataIndex: "category",
      },
      {
        title: "Fold Time",
        dataIndex: "foldTime",
        render: (t) => `${t} min`,
      },
      {
        title: "Sheets Required",
        dataIndex: "sheets",
        align: "right",
      },
    ]

    return (
      <Table<CritterItem>
        dataSource={mockCritters.slice(0, 4)}
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <div className="space-y-2 p-2">
              <h5 className="font-mono text-xs uppercase text-accent-strong tracking-wider">
                Crafting Instructions & Notes
              </h5>
              <p className="text-sm text-foreground">{record.description}</p>
              <div className="flex gap-2 pt-1">
                <Button variant="primary" size="sm">
                  Download SVG Cut File
                </Button>
                <Button variant="secondary" size="sm">
                  Print Crease Pattern
                </Button>
              </div>
            </div>
          ),
          rowExpandable: (record) => record.difficulty !== "Easy",
        }}
        pagination={false}
      />
    )
  },
}

// 5. Hierarchical Tree Data
export const TreeData: Story = {
  render: () => {
    const treeData: CritterItem[] = [
      {
        key: "c-1",
        name: "Reptiles & Amphibians",
        code: "GRP-01",
        category: "Origami",
        difficulty: "Medium",
        foldTime: 45,
        sheets: 4,
        inStock: true,
        downloads: 4500,
        children: [
          {
            key: "c-1-1",
            name: "Neon Gecko (Standard)",
            code: "CRT-001A",
            category: "Origami",
            difficulty: "Medium",
            foldTime: 25,
            sheets: 2,
            inStock: true,
            downloads: 1420,
          },
          {
            key: "c-1-2",
            name: "Chrono Chameleon (Chambered)",
            code: "CRT-008A",
            category: "Pop-Up",
            difficulty: "Medium",
            foldTime: 40,
            sheets: 3,
            inStock: true,
            downloads: 980,
          },
        ],
      },
      {
        key: "c-2",
        name: "Arthropods & Insects",
        code: "GRP-02",
        category: "Papercraft",
        difficulty: "Expert",
        foldTime: 70,
        sheets: 6,
        inStock: true,
        downloads: 2730,
        children: [
          {
            key: "c-2-1",
            name: "Cyber Mantis Prime",
            code: "CRT-002A",
            category: "Papercraft",
            difficulty: "Expert",
            foldTime: 65,
            sheets: 5,
            inStock: true,
            downloads: 890,
          },
          {
            key: "c-2-2",
            name: "Solaris Beetle (Iridescent)",
            code: "CRT-004A",
            category: "Papercraft",
            difficulty: "Medium",
            foldTime: 35,
            sheets: 3,
            inStock: true,
            downloads: 640,
          },
        ],
      },
    ]

    const columns: ColumnType<CritterItem>[] = [
      {
        title: "Group / Template",
        dataIndex: "name",
        key: "name",
        render: (name) => <span className="font-semibold">{name}</span>,
      },
      {
        title: "Code",
        dataIndex: "code",
        key: "code",
        render: (code) => <span className="font-mono text-xs">{code}</span>,
      },
      {
        title: "Category",
        dataIndex: "category",
        key: "category",
      },
      {
        title: "Total Downloads",
        dataIndex: "downloads",
        key: "downloads",
        align: "right",
        render: (d) => <span className="font-mono text-xs">{d.toLocaleString()}</span>,
      },
    ]

    return (
      <Table<CritterItem>
        dataSource={treeData}
        columns={columns}
        bordered
        pagination={false}
      />
    )
  },
}

// 6. Pagination & Size Changer
export const PaginationAndPageSize: Story = {
  render: () => {
    // Generate 24 items
    const longDataset: CritterItem[] = Array.from({ length: 24 }).map((_, i) => ({
      key: `item-${i + 1}`,
      name: `Origami Critter #${i + 1}`,
      code: `CRT-${String(i + 1).padStart(3, "0")}`,
      category: i % 2 === 0 ? "Origami" : "Papercraft",
      difficulty: i % 3 === 0 ? "Easy" : i % 3 === 1 ? "Medium" : "Expert",
      foldTime: 10 + (i * 3) % 60,
      sheets: 1 + (i % 4),
      inStock: i % 4 !== 0,
      downloads: 100 * (i + 1),
    }))

    const columns: ColumnType<CritterItem>[] = [
      { title: "ID", dataIndex: "code", render: (c) => <span className="font-mono text-xs">{c}</span> },
      { title: "Critter Name", dataIndex: "name", render: (n) => <span className="font-semibold">{n}</span> },
      { title: "Type", dataIndex: "category" },
      {
        title: "Difficulty",
        dataIndex: "difficulty",
        render: (d) => (
          <Badge variant={d === "Easy" ? "soft" : d === "Medium" ? "accent" : "danger"}>
            {d}
          </Badge>
        ),
      },
      {
        title: "Time",
        dataIndex: "foldTime",
        align: "right",
        render: (t) => <span className="font-mono text-xs">{t} min</span>,
      },
    ]

    return (
      <Table<CritterItem>
        dataSource={longDataset}
        columns={columns}
        bordered
        pagination={{
          defaultPageSize: 5,
          pageSizeOptions: [5, 10, 20],
          showSizeChanger: true,
          showTotal: (total, range) => (
            <span>
              Showing <strong className="text-foreground">{range[0]}–{range[1]}</strong> of{" "}
              <strong className="text-foreground">{total}</strong> critters
            </span>
          ),
        }}
      />
    )
  },
}

// 7. Density & Borders
export const DensityAndBorders: Story = {
  render: () => {
    const columns: ColumnType<CritterItem>[] = [
      { title: "Name", dataIndex: "name" },
      { title: "Code", dataIndex: "code", render: (c) => <span className="font-mono text-xs">{c}</span> },
      { title: "Category", dataIndex: "category" },
      { title: "Difficulty", dataIndex: "difficulty" },
      { title: "Sheets", dataIndex: "sheets", align: "right" },
    ]

    return (
      <div className="space-y-6">
        <div>
          <h4 className="font-header text-sm mb-2 text-foreground">Compact Density + Bordered Grid + Striped</h4>
          <Table<CritterItem>
            dataSource={mockCritters.slice(0, 5)}
            columns={columns}
            size="compact"
            bordered
            striped
            pagination={false}
          />
        </div>

        <div>
          <h4 className="font-header text-sm mb-2 text-foreground">Default Density + Borderless</h4>
          <Table<CritterItem>
            dataSource={mockCritters.slice(0, 4)}
            columns={columns}
            size="default"
            pagination={false}
          />
        </div>
      </div>
    )
  },
}

// 8. Fixed Columns & Horizontal Scroll
export const FixedColumnsAndScroll: Story = {
  render: () => {
    const columns: ColumnType<CritterItem>[] = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: 180,
        fixed: "left",
        render: (name) => <span className="font-bold text-foreground">{name}</span>,
      },
      { title: "Code", dataIndex: "code", width: 120 },
      { title: "Category", dataIndex: "category", width: 140 },
      { title: "Difficulty", dataIndex: "difficulty", width: 140 },
      { title: "Fold Time", dataIndex: "foldTime", width: 120, align: "right" },
      { title: "Sheets", dataIndex: "sheets", width: 120, align: "right" },
      { title: "Downloads", dataIndex: "downloads", width: 140, align: "right" },
      {
        title: "Action",
        key: "action",
        fixed: "right",
        width: 120,
        align: "center",
        render: () => (
          <Button variant="primary" size="sm">
            Edit
          </Button>
        ),
      },
    ]

    return (
      <Table<CritterItem>
        dataSource={mockCritters}
        columns={columns}
        scroll={{ x: 1000 }}
        bordered
        pagination={false}
      />
    )
  },
}

// 9. Loading & Empty State
export const LoadingAndEmpty: Story = {
  render: () => {
    const [isLoading, setIsLoading] = React.useState(true)

    const columns: ColumnType<CritterItem>[] = [
      { title: "Name", dataIndex: "name" },
      { title: "Category", dataIndex: "category" },
      { title: "Difficulty", dataIndex: "difficulty" },
    ]

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsLoading(!isLoading)}
          >
            Toggle Loading ({isLoading ? "Active" : "Off"})
          </Button>
        </div>

        <Table<CritterItem>
          dataSource={isLoading ? mockCritters.slice(0, 3) : []}
          columns={columns}
          loading={isLoading}
          locale={{ emptyText: "No Origami Critters matched your criteria!" }}
          bordered
          pagination={false}
        />
      </div>
    )
  },
}

// 10. Composable Primitives inside an Arcade Card
export const ComposablePrimitives: Story = {
  render: () => (
    <Card className="max-w-2xl">
      <div className="space-y-1">
        <h3 className="font-header text-xl text-foreground">Workshop Queue</h3>
        <p className="font-sans text-xs text-muted-foreground">
          Hand-crafted JSX table built using Arcade's low-level composable primitives.
        </p>
      </div>

      <TableRoot bordered>
        <TableHeader>
          <TableRow>
            <TableHead>Station</TableHead>
            <TableHead>Critter</TableHead>
            <TableHead>Stage</TableHead>
            <TableHead align="right">Time Remaining</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-mono text-xs">ST-01</TableCell>
            <TableCell className="font-semibold">Neon Gecko</TableCell>
            <TableCell><Badge variant="accent">Creasing</Badge></TableCell>
            <TableCell align="right" className="font-mono text-xs">04:12</TableCell>
          </TableRow>
          <TableRow selected>
            <TableCell className="font-mono text-xs">ST-02</TableCell>
            <TableCell className="font-semibold">Cyber Mantis</TableCell>
            <TableCell><Badge variant="solid">Assembling</Badge></TableCell>
            <TableCell align="right" className="font-mono text-xs">12:45</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-mono text-xs">ST-03</TableCell>
            <TableCell className="font-semibold">Pixel Owl</TableCell>
            <TableCell><Badge variant="soft">Finished</Badge></TableCell>
            <TableCell align="right" className="font-mono text-xs">00:00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Active Origami Artisans</TableCell>
            <TableCell align="right" className="font-mono text-xs">3 Folding</TableCell>
          </TableRow>
        </TableFooter>
      </TableRoot>
      <TableCaption>Live floor updates refresh every 30 seconds</TableCaption>
    </Card>
  ),
}
