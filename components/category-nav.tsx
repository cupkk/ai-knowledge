"use client"

import { Newspaper, Code, Cpu, Brain, Video, Rocket } from "lucide-react"

const categories = [
  { id: "news", label: "AI新鲜事（内容过多，请查看飞书链接）", icon: Newspaper, description: "每天更新", color: "text-primary" },
  { id: "developer", label: "独立开发者", icon: Code, description: "学习资源", color: "text-accent" },
  { id: "hardware", label: "AI+硬件", icon: Cpu, description: "嵌入式开发", color: "text-chart-4" },
  { id: "llm", label: "大模型实战", icon: Brain, description: "Dify/RAG", color: "text-chart-3" },
  { id: "talks", label: "讲座直播", icon: Video, description: "干货分享", color: "text-chart-5" },
  { id: "showcase", label: "产品展示", icon: Rocket, description: "作品案例", color: "text-primary" },
]

export function CategoryNav() {
  return (
    <section className="sticky top-16 z-40 border-b border-border/50 bg-background/80 py-4 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="scrollbar-thin flex gap-2 overflow-x-auto pb-2 md:grid md:grid-cols-6 md:gap-3 md:overflow-visible md:pb-0">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="group flex min-w-[140px] flex-col items-center rounded-xl border border-border/50 bg-card/50 p-3 transition-all hover:border-primary/30 hover:bg-card md:min-w-0"
            >
              <category.icon
                className={`mb-1.5 h-6 w-6 transition-transform group-hover:scale-110 ${category.color}`}
              />
              <span className="text-sm font-medium text-foreground">{category.label}</span>
              <span className="text-[11px] text-muted-foreground">{category.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
