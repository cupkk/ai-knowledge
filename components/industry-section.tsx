import { Badge } from "@/components/ui/badge"
import { ExternalLink, Newspaper } from "lucide-react"

const industryResources = [
  {
    title: "CES 展商信息整理",
    desc: "会议与展商资料索引",
    url: "https://ai.feishu.cn/wiki/wfdlwbveyiqngfkddpdcxyx2nlw?from=from",
    source: "飞书文档",
  },
  {
    title: "Github 2025 年度最热开源项目",
    desc: "热门项目趋势盘点",
    url: "https://ai.feishu.cn/wiki/ysgiwskvrih1erknxvncstujnid?from=from",
    source: "飞书文档",
  },
]

export function IndustrySection() {
  return (
    <section id="industry" className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Badge className="border-0 bg-primary/10 text-primary">行业资讯</Badge>
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">精选行业资料</h2>
      </div>
      <p className="max-w-2xl text-sm text-muted-foreground">
        聚焦行业会议、趋势榜单与深度资料，避免日更负担。
      </p>

      <div className="ios-card p-5">
        <div className="grid gap-3 md:grid-cols-2">
          {industryResources.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm shadow-sm transition-all hover:border-primary/20 hover:bg-white"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                  <Newspaper className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <div className="font-medium text-foreground">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                  <div className="text-[10px] text-muted-foreground">{item.source}</div>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
