import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const papers = [
  {
    title: "mHC: Manifold-Constrained Hyper-Connections",
    desc: "DeepSeek 元旦新论文，直指大模型训练的两大核心难题。",
    url: "https://arxiv.org/abs/2512.24880",
  },
]

export function PaperSection() {
  return (
    <section id="papers" className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Badge className="border-0 bg-chart-2/10 text-chart-2">论文速览</Badge>
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">精选论文摘要</h2>
        <span className="text-xs text-muted-foreground">内容持续补充</span>
      </div>

      <div className="ios-card p-5">
        <div className="space-y-3">
          {papers.map((paper) => (
            <div
              key={paper.title}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm shadow-sm"
            >
              <div>
                <div className="font-medium text-foreground">{paper.title}</div>
                <div className="text-xs text-muted-foreground">{paper.desc}</div>
              </div>
              {paper.url ? (
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-chart-2/10 px-3 py-1.5 text-xs font-medium text-chart-2"
                >
                  查看论文
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <span className="rounded-full bg-secondary px-3 py-1.5 text-xs text-muted-foreground"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
