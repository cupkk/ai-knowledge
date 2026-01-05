import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Download, Github, BookOpen, FolderOpen, Play } from "lucide-react"

const developerResources = [
  { title: "黑马新版web前后端开发", url: "https://pan.baidu.com/s/1Xrp3qVV77vH0hEnjKNvTHQ?pwd=5255", code: "5255" },
  { title: "大模型学习必备软件", url: "https://pan.baidu.com/s/1Js1SVw2eKL1g8MRMjnvKrA?pwd=8s8f", code: "8s8f" },
  { title: "AI大模型资料包", url: "https://pan.baidu.com/s/1XTEqBEBrz-BbGgXMqA8EXQ", code: "2sx5" },
  {
    title: "成品dify工作流（新手练习）",
    url: "https://pan.baidu.com/s/1lM0a549buWU7hor7A8s2MQ?pwd=8888",
    code: "8888",
  },
  { title: "聚客大模型一二三四期官方网课", url: "https://pan.baidu.com/s/1njAmF0zWCZ5Xsuv7vgY8KA", code: "8A84" },
  { title: "黑马程序员教程", url: "https://pan.baidu.com/s/1vNLMGrUgvavbv286ml3nYQ?pwd=1234", code: "1234" },
  { title: "唐宇迪深度学习", url: "https://pan.baidu.com/s/11VeMxcU8pSpFKEJhDuTkGg", code: "9ME6" },
]

const webResources = [
  { title: "Way to AGI", desc: "公开的AI学习知识库", url: "https://www.waytoagi.com/zh", icon: BookOpen },
  {
    title: "Hello-Agents",
    desc: "Agent学习最详细资料",
    url: "https://github.com/datawhalechina/Hello-Agents",
    icon: Github,
  },
  { title: "艾文AIGC知识库", desc: "综合AIGC学习资源", url: "https://gftyv.xetslk.com/s/3xkvSO", icon: BookOpen },
  {
    title: "ROCm开发者学习中心",
    desc: "Datawhale x 魔搭 x AMD",
    url: "https://www.modelscope.cn/brand/view/AMDCommunity",
    icon: BookOpen,
  },
]

const hardwareResources = [
  { title: "PCB开发：Altium从入门到精通", url: "https://pan.baidu.com/s/1GKBwZjWTlKkXQpQykcvdrg", code: "8aiv" },
  { title: "s912具身智能机器人实战", url: "https://pan.baidu.com/s/1VR6js5Y6WEYEPaseKp_Q_A?pwd=s912", code: "s912" },
]

const llmResources = [
  {
    title: "DatawhaleCoze平台实战知识库",
    url: "https://github.com/datawhalechina/coze-ai-assistant",
    extra: "在线学习: https://www.datawhale.cn/learn/summary/105",
  },
  { title: "DIFY大模型应用实战", url: "https://pan.baidu.com/s/1jFkFdtu3zU5tlP8Kh_UPPg?pwd=8vhq", code: "8vhq" },
  { title: "Dify智能应用开发实战", url: "https://pan.baidu.com/s/1Wzm2GwzdKCKRqfbGMsYBKg?pwd=4b9q", code: "4b9q" },
  { title: "工作流编排实战项目", url: "https://pan.baidu.com/s/1ssevwGQI-AwBs2iJyZpcfg", code: "asex" },
]

const talkResources = [
  {
    title: "Whale应用吐槽会",
    desc: "干货满满，Datawhale官方持续更新",
    video: "https://www.datawhale.cn/learn/summary/255",
  },
  {
    title: "CCF TF直播回放",
    desc: "多模态教育大模型的技术探索与产业应用",
    video: "https://digital.ccf.org.cn/mF/cms/none/4PMZ63risJumExgz7NU5Ag/bEqivWWjFTxZJT7uXBUvGk",
  },
  { title: "清华大学大模型提示词", url: "https://pan.quark.cn/s/d6413aabf709" },
]

function ResourceCard({
  item,
  accentColor,
}: { item: { title: string; url: string; code?: string; extra?: string }; accentColor: string }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-between rounded-xl border border-border/50 bg-card/50 p-4 transition-all hover:border-${accentColor}/30 hover:bg-card`}
    >
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-${accentColor}/10`}>
          <Download className={`h-5 w-5 text-${accentColor}`} />
        </div>
        <div>
          <span className="text-sm font-medium text-foreground">{item.title}</span>
          {item.extra && <p className="mt-0.5 text-xs text-muted-foreground">{item.extra}</p>}
        </div>
      </div>
      {item.code && (
        <Badge variant="outline" className="shrink-0 border-border/50 text-xs text-muted-foreground">
          {item.code}
        </Badge>
      )}
    </a>
  )
}

export function ResourceSection() {
  return (
    <div className="space-y-20 py-8">
      {/* 独立开发者资源 */}
      <section id="developer" className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-accent" />
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">独立开发者资源</h2>
          <Badge className="border-0 bg-accent/15 text-accent">学习必备</Badge>
        </div>

        {/* 网盘资源 */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <FolderOpen className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">网盘资源</span>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {developerResources.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border/50 bg-card/50 p-4 transition-all hover:border-accent/30 hover:bg-card"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Download className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.title}</span>
                </div>
                <Badge variant="outline" className="shrink-0 border-border/50 text-xs text-muted-foreground">
                  {item.code}
                </Badge>
              </a>
            ))}
          </div>
        </div>

        {/* 在线资源 */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">在线学习</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {webResources.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-border/50 bg-card/50 p-5 transition-all hover:border-accent/30 hover:bg-card"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-1 font-medium text-foreground">{item.title}</h3>
                <p className="mb-3 text-xs text-muted-foreground">{item.desc}</p>
                <div className="flex items-center gap-1 text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  <span>访问</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AI+硬件 */}
      <section id="hardware" className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-chart-4" />
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">AI+硬件</h2>
          <Badge className="border-0 bg-chart-4/15 text-chart-4">嵌入式</Badge>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {hardwareResources.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border/50 bg-card/50 p-4 transition-all hover:border-chart-4/30 hover:bg-card"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-4/10">
                  <Download className="h-5 w-5 text-chart-4" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.title}</span>
              </div>
              <Badge variant="outline" className="shrink-0 border-border/50 text-xs text-muted-foreground">
                {item.code}
              </Badge>
            </a>
          ))}
        </div>
      </section>

      {/* 大模型实战 */}
      <section id="llm" className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-chart-3" />
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">大模型实战</h2>
          <Badge className="border-0 bg-chart-3/15 text-chart-3">Dify/RAG</Badge>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {llmResources.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border/50 bg-card/50 p-4 transition-all hover:border-chart-3/30 hover:bg-card"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-3/10">
                  <Download className="h-5 w-5 text-chart-3" />
                </div>
                <div>
                  <span className="text-sm font-medium text-foreground">{item.title}</span>
                  {item.extra && <p className="mt-0.5 text-xs text-muted-foreground">{item.extra}</p>}
                </div>
              </div>
              {item.code && (
                <Badge variant="outline" className="shrink-0 border-border/50 text-xs text-muted-foreground">
                  {item.code}
                </Badge>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* 讲座直播 */}
      <section id="talks" className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-chart-5" />
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">讲座、演讲、直播</h2>
          <Badge className="border-0 bg-chart-5/15 text-chart-5">干货满满</Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {talkResources.map((item, index) => (
            <Card
              key={index}
              className="group border-border/50 bg-card/50 transition-all hover:border-chart-5/30 hover:bg-card"
            >
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base text-foreground">
                  {item.video && <Play className="h-4 w-4 text-chart-5" />}
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {item.desc && <p className="mb-4 text-sm text-muted-foreground">{item.desc}</p>}
                <a
                  href={item.video || item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-chart-5/10 px-3 py-1.5 text-sm font-medium text-chart-5 transition-colors hover:bg-chart-5/20"
                >
                  {item.video ? "观看视频" : "下载资源"}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
