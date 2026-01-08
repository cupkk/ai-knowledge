import { categories } from "@/lib/site-data"

export function CategoryNav() {
  return (
    <section className="ios-card px-5 py-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">知识导航</span>
        <span className="text-xs text-muted-foreground">点击跳转</span>
      </div>
      <div className="scrollbar-thin flex gap-3 overflow-x-auto pb-1">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="group flex min-w-[170px] flex-1 items-center gap-3 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-left shadow-sm transition-all hover:border-primary/20 hover:bg-white"
          >
            <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${category.bg}`}>
              <category.icon className={`h-4 w-4 ${category.color}`} />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-medium text-foreground">{category.label}</div>
              <div className="text-xs text-muted-foreground">{category.description}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
