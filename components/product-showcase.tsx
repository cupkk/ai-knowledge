import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, User, Sparkles } from "lucide-react"

const products = [
  {
    author: "龍胖子",
    title: "微锻炼 App",
    demo: "https://www.barebear.cn/projects/micro-workout/app/index.html",
    article: "https://mp.weixin.qq.com/s/6eqOvWsdbqDvgQW3GWa3uQ",
    description: "独立开发者作品展示",
  },
  {
    author: "NomiLaw",
    title: "NomiLaw V1.0",
    demo: "https://www.nomilaw.com/",
    description:
      "中国首个融合法律与税务、AI 与律师/税务师的法税智能平台，内置独立法税数据库。",
    badge: "公测至 2026-01-14",
  },
  {
    author: "开源项目",
    title: "Claude-Ally-Health",
    demo: "https://github.com/huifer/Claude-Ally-Health",
    description: "开源的个人健康管理项目，让 Claude Code 与健康同行。",
    badge: "GitHub",
  },
]

export function ProductShowcase() {
  return (
    <section id="showcase" className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Badge className="border-0 bg-primary/10 text-primary">作品案例</Badge>
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">独立开发者产品展示</h2>
      </div>
      <p className="max-w-2xl text-sm text-muted-foreground">
        来自社区与开源生态的真实作品，持续更新更多案例。
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Card key={index} className="group overflow-hidden transition-all hover:border-primary/20 hover:bg-white">
            <div className="relative aspect-video overflow-hidden bg-secondary/70">
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="h-12 w-12 text-muted-foreground/30" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
            </div>

            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-3 w-3 text-primary" />
                </div>
                <span>{product.author}</span>
                {product.badge && (
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary">{product.badge}</span>
                )}
              </div>
              <CardTitle className="text-lg text-foreground">{product.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.demo && (
                  <a
                    href={product.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                  >
                    {product.demo.includes("github.com") ? "查看项目" : "在线体验"}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                {product.article && (
                  <a
                    href={product.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white"
                  >
                    产品介绍
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
