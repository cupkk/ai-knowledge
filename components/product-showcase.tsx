import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, User, Sparkles } from "lucide-react"

const products = [
  {
    author: "龍胖子",
    title: "微锻炼App",
    demo: "https://www.barebear.cn/projects/micro-workout/app/index.html",
    article: "https://mp.weixin.qq.com/s/6eqOvWsdbqDvgQW3GWa3uQ",
    description: "独立开发者作品展示",
  },
]

export function ProductShowcase() {
  return (
    <section id="showcase" className="border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-primary" />
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">独立开发者产品展示</h2>
          <Badge className="border-0 bg-primary/15 text-primary">作品案例</Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 bg-card/50 transition-all hover:border-primary/30 hover:bg-card"
            >
              {/* 产品预览图区域 */}
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="h-12 w-12 text-muted-foreground/30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-3 w-3 text-primary" />
                  </div>
                  <span>{product.author}</span>
                </div>
                <CardTitle className="text-lg text-foreground">{product.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={product.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                  >
                    在线体验
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href={product.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    产品介绍
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
