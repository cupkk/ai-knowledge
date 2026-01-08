import { ArrowDown, ChevronRight, Search, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const highlights = [
  { title: "行业资讯", desc: "会议与榜单资料", href: "#industry" },
  { title: "独立开发者学习", desc: "资料与工具合集", href: "#developer" },
  { title: "大模型实战", desc: "Dify / RAG", href: "#llm" },
  { title: "AI 应用展示", desc: "产品上新精选", href: "#applications" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/75 px-6 py-10 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(47,107,255,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(49,198,184,0.16),transparent_45%)]" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-1.5 text-xs font-medium text-primary shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            持续更新 · AI 资料与应用
          </div>

          <h1 className="text-balance text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            AI 知识库与高质量资源
          </h1>

          <p className="max-w-2xl text-pretty text-sm text-muted-foreground md:text-base">
            汇总行业资讯、实战教程、论文与产品案例，形成可检索、可收藏的知识空间。
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="搜索资讯、教程、论文或产品"
                className="h-12 rounded-2xl border-white/70 bg-white/85 pl-9 text-sm shadow-sm backdrop-blur-xl focus-visible:ring-primary/30"
              />
            </div>
            <Button className="h-12 rounded-2xl px-6 text-sm font-semibold shadow-sm">开始探索</Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="ios-pill">行业资讯</span>
            <span className="ios-pill">独立开发者</span>
            <span className="ios-pill">大模型实战</span>
            <span className="ios-pill">AI 应用展示</span>
            <span className="ios-pill">讲座直播</span>
          </div>

          <a
            href="#industry"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" />
            向下查看行业资料
          </a>
        </div>

        <div className="space-y-3">
          {highlights.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex items-center justify-between rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm shadow-sm transition-all hover:border-primary/20 hover:bg-white"
            >
              <div>
                <div className="font-medium text-foreground">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
