import { Badge } from "@/components/ui/badge"
import { ExternalLink, Sparkles } from "lucide-react"

const featuredApplication = {
  title: "AnyGen",
  desc: "字节新出的产品，近似 Manus，覆盖 AI 幻灯片与文档编写。",
  url: "https://www.anygen.io/home?invitation_code=ETGI7RFBSUDQBK1",
  highlights: ["AI 幻灯片制作：生成到精修一站式完成", "AI 文档编写：结构化引导提问，精准需求", "支持局部更新而非全篇重写"],
}

const applicationBatches = [
  {
    label: "今日上新 · 1.5",
    items: [
      { title: "HistoryEcho", desc: "AI 导学，古人第一视角还原知识点。", url: "https://watcha.cn/products/history-echo" },
      { title: "Turix AI", desc: "AI 驱动的开源桌面自动化工具。", url: "https://watcha.cn/products/turix" },
      { title: "ContractMaker", desc: "AI 合同生成器。", url: "https://watcha.cn/products/contract-maker" },
      { title: "社研通", desc: "专注文科研究生的学术加速器。", url: "https://watcha.cn/products/she-yan-tong" },
      { title: "Lovana-AI", desc: "AI 原生 RPA 软件。", url: "https://watcha.cn/products/lovana" },
    ],
  },
  {
    label: "今日上新 · 1.6",
    items: [
      { title: "喵呜岛", desc: "AI 情感陪伴与海岛经营模拟游戏。", url: "https://watcha.cn/products/miao-wu-dao" },
      { title: "BrowserAct", desc: "基于 AI 的无代码网页自动化与数据抓取。", url: "https://watcha.cn/products/browser-act" },
      { title: "MAI AI", desc: "AI 驱动的 Google Ads 优化平台。", url: "https://watcha.cn/products/mai-ai" },
      { title: "PhotaLabs", desc: "拯救废片的 AI 摄影重构工具。", url: "https://watcha.cn/products/photalabs" },
      { title: "智写流程", desc: "捕捉网页行为生成操作文档。", url: "https://watcha.cn/products/zhi-xie-liu-cheng" },
    ],
  },
  {
    label: "今日上新 · 1.7",
    items: [
      { title: "Manio", desc: "你的 AI 说明书管家。", url: "https://watcha.cn/products/manio" },
      { title: "SceneYou.art", desc: "解决拍照难的 AI 个人影像生成工具。", url: "https://watcha.cn/products/scene-you" },
      { title: "DeepTutor", desc: "开源的 AI 个性化学习平台。", url: "https://watcha.cn/products/deep-tutor" },
      { title: "熊猫论文", desc: "AI 论文改写平台。", url: "https://watcha.cn/products/xiong-mao-lun-wen" },
      { title: "PPTalk", desc: "AI PPT 演讲家。", url: "https://watcha.cn/products/pptalk" },
    ],
  },
]

export function ApplicationShowcase() {
  return (
    <section id="applications" className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Badge className="border-0 bg-primary/10 text-primary">AI 应用展示</Badge>
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">观猹社区精选上新</h2>
        <span className="text-xs text-muted-foreground">PC 端打开体验更佳</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_80px_-60px_rgba(15,23,42,0.5)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(47,128,255,0.12),transparent_55%)]" />
          <div className="relative space-y-4">
            <div className="flex items-center gap-2 text-sm text-primary">
              <Sparkles className="h-4 w-4" />
              本周推荐
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground">{featuredApplication.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{featuredApplication.desc}</p>
            </div>
            <div className="space-y-2 text-sm text-foreground">
              {featuredApplication.highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/60" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a
              href={featuredApplication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
            >
              访问官网
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="ios-card space-y-4 p-6">
          <div className="text-sm font-semibold text-foreground">今日新品速览</div>
          <p className="text-sm text-muted-foreground">从工具、内容、办公到创意，关注效率与体验。</p>
          <div className="space-y-3">
            {applicationBatches[0].items.slice(0, 3).map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm shadow-sm transition-all hover:border-primary/20 hover:bg-white"
              >
                <div>
                  <div className="font-medium text-foreground">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {applicationBatches.map((batch) => (
          <div key={batch.label} className="ios-card p-5">
            <div className="mb-4 text-sm font-semibold text-foreground">{batch.label}</div>
            <div className="space-y-3">
              {batch.items.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between rounded-2xl border border-white/60 bg-white/80 p-4 text-sm shadow-sm transition-all hover:border-primary/20 hover:bg-white"
                >
                  <div className="space-y-1">
                    <div className="font-medium text-foreground">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                  <ExternalLink className="mt-1 h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
