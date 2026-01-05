import { Zap, BookOpen, Users, ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/50 py-24 md:py-32">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,200,255,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(120,255,180,0.08),transparent)]" />

      {/* 网格背景 */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative mx-auto px-4 text-center">
        {/* 标签 */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
          <Zap className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">每日更新 AI 资讯与资源</span>
        </div>

        <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          发现 <span className="text-primary">AI</span> 的无限可能
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          精选付费课程资源，免费分享给热爱学习的你。
          <br className="hidden md:block" />
          从入门到精通，开启你的 AI 学习之旅。
        </p>

        {/* 特性标签 */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">每日更新</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 backdrop-blur-sm">
            <BookOpen className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">优质资源</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 backdrop-blur-sm">
            <Users className="h-4 w-4 text-chart-4" />
            <span className="text-sm font-medium text-foreground">完全免费</span>
          </div>
        </div>

        {/* 滚动提示 */}
        <a
          href="#news"
          className="inline-flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="text-xs">开始探索</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
