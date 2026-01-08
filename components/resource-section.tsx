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

const developerArticles = [
  {
    title: "用 AI 从 0 到 1 开发你的第一个 APP（新手可复制）",
    url: "https://mp.weixin.qq.com/s/r79dTFzY3JDNIj_zECG1JA",
    source: "公众号",
  },
  {
    title: "为什么你用 AI 开发的网站 AI 味儿那么浓？一个小妙招马上变高大上",
    url: "https://mp.weixin.qq.com/s/dEHOVT5f77k3iNJBfowsyQ",
    source: "公众号",
  },
  {
    title: "个人公司化：尽早建立 SOP，固定 80% 的动作",
    url: "https://mp.weixin.qq.com/s/AEs79_3Lw31GidCFyc0Xmw",
    source: "公众号",
  },
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
  {
    title: "大模型学习路线笔记",
    url: "https://pan.baidu.com/s/1JWY2cNxC2pF2vMFViXpQJA?pwd=9999",
    code: "9999",
  },
  { title: "清华大学大模型提示词", url: "https://pan.quark.cn/s/d6413aabf709" },
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
]

export function ResourceSection() {
  return (
    <div className="space-y-16">
      {/* 独立开发者资源 */}
      <section id="developer" className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="border-0 bg-accent/10 text-accent">独立开发者</Badge>
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">学习资料与工具</h2>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground">
          从课程、工具到学习路线，帮助你构建更稳固的开发基础。
        </p>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="ios-card p-5">
            <div className="mb-4 flex items-center gap-2">
              <FolderOpen className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">网盘资源</span>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {developerResources.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm transition-all hover:border-accent/20 hover:bg-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                      <Download className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.title}</span>
                  </div>
                  <Badge variant="outline" className="shrink-0 border-white/70 text-xs text-muted-foreground">
                    {item.code}
                  </Badge>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="ios-card p-5">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">在线学习</span>
              </div>
              <div className="grid gap-4">
                {webResources.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm transition-all hover:border-accent/20 hover:bg-white"
                  >
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="mb-1 text-sm font-medium text-foreground">{item.title}</h3>
                    <p className="mb-3 text-xs text-muted-foreground">{item.desc}</p>
                    <div className="flex items-center gap-1 text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      <span>访问</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="ios-card p-5">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">精选阅读</span>
              </div>
              <div className="space-y-3">
                {developerArticles.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 p-4 text-sm shadow-sm transition-all hover:border-accent/20 hover:bg-white"
                  >
                    <span className="font-medium text-foreground">{item.title}</span>
                    <Badge variant="outline" className="border-white/70 text-[10px] text-muted-foreground">
                      {item.source}
                    </Badge>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI+硬件 */}
      <section id="hardware" className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="border-0 bg-chart-4/10 text-chart-4">具身智能</Badge>
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">AI + 硬件</h2>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground">
          聚焦嵌入式与具身智能实战，覆盖工具链与项目练习。
        </p>

        <div className="ios-card grid gap-3 p-5 md:grid-cols-2">
          {hardwareResources.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm transition-all hover:border-chart-4/20 hover:bg-white"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-chart-4/10">
                  <Download className="h-5 w-5 text-chart-4" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.title}</span>
              </div>
              <Badge variant="outline" className="shrink-0 border-white/70 text-xs text-muted-foreground">
                {item.code}
              </Badge>
            </a>
          ))}
        </div>
      </section>

      {/* 大模型实战 */}
      <section id="llm" className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="border-0 bg-chart-3/10 text-chart-3">Dify/RAG</Badge>
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">大模型实战</h2>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground">
          结合 Dify、RAG 与工作流编排，快速落地大模型应用。
        </p>

        <div className="ios-card grid gap-3 p-5 md:grid-cols-2">
          {llmResources.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm transition-all hover:border-chart-3/20 hover:bg-white"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-chart-3/10">
                  <Download className="h-5 w-5 text-chart-3" />
                </div>
                <div>
                  <span className="text-sm font-medium text-foreground">{item.title}</span>
                  {item.extra && <p className="mt-0.5 text-xs text-muted-foreground">{item.extra}</p>}
                </div>
              </div>
              {item.code && (
                <Badge variant="outline" className="shrink-0 border-white/70 text-xs text-muted-foreground">
                  {item.code}
                </Badge>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* 讲座直播 */}
      <section id="talks" className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="border-0 bg-chart-5/10 text-chart-5">干货满满</Badge>
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">讲座、演讲、直播</h2>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground">
          精选直播回放与分享，快速吸收前沿观点与实践经验。
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {talkResources.map((item, index) => (
            <Card key={index} className="group transition-all hover:border-chart-5/20 hover:bg-white">
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
                  className="inline-flex items-center gap-1.5 rounded-full bg-chart-5/10 px-3 py-1.5 text-sm font-medium text-chart-5 transition-colors hover:bg-chart-5/20"
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
