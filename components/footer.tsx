import { Heart, ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-card/50 py-12">
      {/* 回到顶部按钮 */}
      <a
        href="#"
        className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-lg transition-all hover:bg-secondary hover:text-foreground"
      >
        <ArrowUp className="h-4 w-4" />
      </a>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <img src="/avatar.png" alt="头像" className="h-full w-full rounded-xl object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">AI知识分享</span>
              <span className="text-[10px] text-muted-foreground">Knowledge Hub</span>
            </div>
          </div>

          {/* 说明文字 */}
          <p className="max-w-md text-center text-sm text-muted-foreground">
            会不断更新，如资源过期，请联系补发。
            <br />
            所有资源仅供学习交流使用。
          </p>

          {/* 版权信息 */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-chart-5" />
            <span>for AI learners</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
