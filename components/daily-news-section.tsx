"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, ExternalLink, ChevronDown, ChevronUp, Quote } from "lucide-react"
import { useState } from "react"

interface NewsItem {
  emoji: string
  title: string
  content: string
  links?: { label: string; url: string }[]
}

interface DayNews {
  date: string
  weekday: string
  lunar: string
  quote: string
  items: NewsItem[]
}

const allNews: DayNews[] = [
  {
    date: "2025年12月11日",
    weekday: "星期四",
    lunar: "农历十月二十二",
    quote: "选对榜样，模仿他们。你永远不会完美，但可以一直变得更好。",
    items: [
      {
        emoji: "🌍",
        title: "美团AI转向，前字节视觉模型AI平台负责人潘欣加入",
        content:
          "据知情人士透露，2025 年，美团在包括预训练、业务侧 AI 应用方面的招聘积极性并没有减少。「今年美团招聘的 AI 人才集中在模型训练方面，招聘标准也很高，人才主要来自阿里通义、Seed 以及腾讯混元团队。」2025 年至今，美团密集地发布了一系列基座模型和应用进展，如首款 AI 编程产品 Nocode、首款大语言模型 LongCat-Flash-Chat 等。报道表示，基座能力的建设，某种程度也是为美团主营业务 AI 化铺路。从 2025 年下半年开始，美团在 AI 应用侧明显提速，但更加聚焦于主线业务的 AI 化改造。",
        links: [{ label: "36氪报道", url: "https://36kr.com/newsflashes" }],
      },
      {
        emoji: "🏭",
        title: "三星与 Vidu 官宣合作",
        content:
          "三星将通过集成 Vidu API，将更灵敏的智能交互、更生动的视觉创作能力，融入全球用户手机体验。未来，用户有望在三星手机上体验到 Vidu 最新 AI 功能。",
        links: [{ label: "Vidu官网", url: "https://www.vidu.studio/" }],
      },
      {
        emoji: "🧮",
        title: "SpaceX 或明年 IPO，目标估值冲 1.5 万亿美元",
        content:
          "报道援引消息人士信息，SpaceX 预计 2025 年营收约为 150 亿美元，2026 年将进一步增至 220 亿至 240 亿美元之间，其中大部分收入将来自 Starlink 业务。若成功实施，这将成为有史以来规模最大的上市交易。",
        links: [{ label: "SpaceX官网", url: "https://www.spacex.com/" }],
      },
      {
        emoji: "🐕‍🦺",
        title: "通义实验室负责人成为阿里巴巴合伙人",
        content:
          "据了解，合伙人团队是阿里的最高集体决策机构。今年 6 月，阿里合伙人团队刚经历大幅缩编，人数降至上市以来最低的 17 人。而周靖人成为阿里合伙人的关键因素之一，是他负责的通义实验室过去一年努力保证了 Qwen 的模型领先地位。阿里管理层给了他高度肯定，评价 「这非常不容易」。",
        links: [{ label: "通义千问", url: "https://tongyi.aliyun.com/" }],
      },
      {
        emoji: "📚",
        title: "智谱 AI 输入法发布",
        content:
          "支持将语音实时转换为文字。在多场景、多语种、多口音的真实复杂环境测试中，保持行业领先的识别表现，字符错误率（CER）仅为 0.0717。向所有用户开放，并免费提供 2000 积分。",
        links: [{ label: "智谱AI官网", url: "https://www.zhipuai.cn/" }],
      },
      {
        emoji: "⌨️",
        title: "面壁智能上线新端到端 TTS 模型 VoxCPM 1.5",
        content: "目前，模型已在 Github、Hugging Face 开源。",
        links: [
          { label: "Huggingface", url: "https://huggingface.co/openbmb/VoxCPM1.5" },
          { label: "Github", url: "https://github.com/OpenBMB/VoxCPM" },
        ],
      },
      {
        emoji: "🌐",
        title: "Pebble 灵感戒指上线",
        content:
          "Index 01 由戒指部分、一枚实体按钮、麦克风、蓝牙芯片、内存以及长续航电池组成。用户只需按住按钮，对着麦克风说话，Index 01 就会将录音进行设备本地保存。",
        links: [{ label: "产品官网", url: "https://www.index.inc/" }],
      },
    ],
  },
  {
    date: "2025年12月10日",
    weekday: "星期三",
    lunar: "农历十月二十一",
    quote: "每个人都可以改变世界，只需将更多的精力放在自己的身上。",
    items: [
      {
        emoji: "🌍",
        title: "阿里巴巴成立千问C端事业群",
        content:
          "阿里巴巴在内部沟通中提及，千问C端事业群的首要目标是将千问打造成为一款超级APP，成为AI时代用户的第一入口。未来，还将进一步把千问打造成无处不在的AI助手，覆盖眼镜、PC、汽车等场景，让每一个普通人都能随时随地使用AI，并持续从中受益。",
        links: [{ label: "通义千问", url: "https://tongyi.aliyun.com/" }],
      },
      {
        emoji: "🏭",
        title: "理想汽车：L4级自动驾驶的实现将是汽车行业真正的iPhone 4时刻",
        content:
          "根据公司的规划，理想汽车将在三年内，即2028年左右，推出首款为L4级自动驾驶定义的汽车。到2030年，公司有50%的概率会推出一款人工智能超级跑车。",
        links: [{ label: "理想汽车官网", url: "https://www.lixiang.com/" }],
      },
      {
        emoji: "🧮",
        title: "英伟达回应AI芯片在华销售将获批：向商业客户供应H200是值得肯定的举措",
        content:
          "美国总统特朗普当地时间8日在社交媒体上发文宣布，美国政府将允许英伟达向中国出售其H200人工智能芯片，但对每颗芯片收取一定费用。",
        links: [{ label: "NVIDIA官网", url: "https://www.nvidia.com/" }],
      },
      {
        emoji: "🐕‍🦺",
        title: "腾讯大模型改名",
        content: "12月9日消息，腾讯宣布将其大模型品牌混元（Tencent Hunyuan）更名为更简化的Tencent HY。",
        links: [{ label: "腾讯混元", url: "https://hunyuan.tencent.com/" }],
      },
      {
        emoji: "📚",
        title: "华为2012实验室新成立基础大模型部，专注于推进基座模型开发",
        content:
          "此前，华为曾发布AI人才招募令，面向全球招募具备卓越学术背景和创新精神的年轻科研人才，拥有原创性科研成果的候选人将被优先考虑。",
        links: [{ label: "华为官网", url: "https://www.huawei.com/" }],
      },
      {
        emoji: "⌨️",
        title: "努比亚总裁与抖音副总裁回应豆包AI手机问题",
        content:
          "12月9日，努比亚技术有限公司总裁倪飞发文称，团队已收到一些问题与反馈，正在与合作伙伴积极沟通与解决。抖音集团副总裁李亮转发并配文称：AI带来的变革是真实存在的，用户的需求也是真实存在的。豆包和中兴的探索是一个开始，不论这次是否会成功，但AI一定是未来。",
        links: [{ label: "豆包", url: "https://www.doubao.com/" }],
      },
      {
        emoji: "🌐",
        title: "微软宣布230亿美元AI投资计划，175亿美元将投向印度",
        content:
          "该公司周二宣布将投资约230亿美元用于人工智能领域，其中大部分将投向印度，以加大对全球增长最快的数字市场之一的投资。",
        links: [{ label: "微软官网", url: "https://www.microsoft.com/" }],
      },
    ],
  },
  {
    date: "2025年12月9日",
    weekday: "星期二",
    lunar: "农历十月二十",
    quote: "有些人认为创新就是改变，我从来不这么看，我认为，让事情变得更好，就是创新。",
    items: [
      {
        emoji: "🌍",
        title: "抖音副总裁李亮谈AI手机助手：本质上是机主授权，与入侵、黑客、隐私都没关系",
        content:
          "他以手机AI助手打车为例，指出整个过程机主可以通过助手丝滑完成，但其中需要调用地理位置、打车软件、地图导航、路况信息、支付等多个APP及数据，本质上是机主授权助手完成了这一切，与什么所谓入侵、黑客、隐私都没有关系。",
        links: [{ label: "抖音", url: "https://www.douyin.com/" }],
      },
      {
        emoji: "🏭",
        title: "何小鹏谈拥抱AI时代：CEO要懂、多招年轻人、小步快跑",
        content:
          "我们做了三四年，失败了非常多次，总结下来我有以下三点建议：第一，CEO要真懂AI，不懂很难推进；第二，多招年轻人，因为他们天生就拥抱变化；第三，要小步快跑，趋势是肯定对的，在各行各业的落地时间是很长的，要根据每个企业的需求快速自我迭代。",
        links: [{ label: "小鹏汽车", url: "https://www.xiaopeng.com/" }],
      },
      {
        emoji: "🧮",
        title: "首款搭载Gemini的AI眼镜将于2026年推出",
        content:
          "12月9日消息，Alphabet旗下的谷歌最新宣布，公司正着手开发两种不同类别的人工智能(AI)眼镜，以在明年与Meta的产品展开竞争：一类配备显示屏，另一类则主打音频功能。",
        links: [{ label: "Google AI", url: "https://ai.google/" }],
      },
      {
        emoji: "🐕‍🦺",
        title: "OpenAI：ChatGPT目前每周服务超8亿用户",
        content:
          "OpenAI表示，人工智能正在各个领域迅速发展，但以下领域尤其势头强劲：科技、医疗保健和制造业是增长最快的行业。",
        links: [{ label: "ChatGPT", url: "https://chat.openai.com/" }],
      },
      {
        emoji: "📚",
        title: "马斯克谈每年发射100万吨AI卫星",
        content:
          "马斯克周末在社交平台X上讨论了每年向太空发射100万吨AI卫星的可能性，以实现他之前谈到的每年在太空部署100吉瓦人工智能的目标。",
        links: [{ label: "SpaceX", url: "https://www.spacex.com/" }],
      },
      {
        emoji: "⌨️",
        title: "智元第5000台人形机器人量产下线！合伙人王闯：已经具备批量出货能力",
        content:
          "智元机器人12月8日宣布第5000台通用具身智能机器人量产下线，并对外展出了公司位于上海临港工厂的约500台人形机器人产品。",
        links: [{ label: "智元机器人", url: "https://www.agibot.com/" }],
      },
      {
        emoji: "🌐",
        title: "张予彤以月之暗面总裁身份出席活动，与金沙江纠纷或已解决",
        content:
          "12月8日消息，最近多个信源显示，张予彤近期在以月之暗面总裁的身份对外出席活动，并得到月之暗面方面的确认，负责公司的整体战略与商业化，包括融资，也会参与一些新产品的开发。",
        links: [{ label: "Kimi", url: "https://kimi.moonshot.cn/" }],
      },
    ],
  },
  {
    date: "2025年12月8日",
    weekday: "星期一",
    lunar: "农历十月十九",
    quote: "创业就像嚼玻璃，凝视深渊。你必须喜欢它，否则无法坚持。",
    items: [
      {
        emoji: "🌍",
        title: "华为无网通信功能上天，可在飞机自由发消息、打电话",
        content:
          "华为官网显示，有网络时畅连无网通信也可以使用，可以接收到附近无网联系人的发送的消息或畅连通话，并在 24 小时内回复无网用户发送的消息。",
        links: [{ label: "华为官网", url: "https://consumer.huawei.com/" }],
      },
      {
        emoji: "🏭",
        title: "扎克伯格大砍元宇宙预算，转投 AI 眼镜",
        content:
          "据报道，Meta 正在开发一款代号为 Phoenix（凤凰） 的新型混合现实眼镜，但它的发布时间已从 2026 年下半年延后至 2027 年上半年。此外，根据此前报道，Meta 创始人扎克伯格计划大幅削减元宇宙项目资源。",
        links: [{ label: "Meta", url: "https://about.meta.com/" }],
      },
      {
        emoji: "🧮",
        title: "李开复：未来办公司和搭积木一样快，比谁更会用 Agent",
        content:
          "他认为，AI Agent 带来的革命不只是制造了一个工具，而是能帮助重构公司，帮助公司增效。公司以后会有越来越多的 Agent，一个 CEO 管着很多 Agent，而且这些 Agent 会一年会比一年便宜，因为推理成本在快速下降。",
        links: [{ label: "零一万物", url: "https://www.lingyiwanwu.com/" }],
      },
      {
        emoji: "🐕‍🦺",
        title: "OpenAI 高管否认 ChatGPT 投广告",
        content:
          "从用户规模看，ChatGPT 已具备广告业务的坚实基础。目前每周活跃用户量约 8 亿。OpenAI 支持的研究曾预计，到今年 7 月将有 7 亿用户每周发送 180 亿条消息，其他分析师估算月访问量达 50 亿至 60 亿次。",
        links: [{ label: "OpenAI", url: "https://openai.com/" }],
      },
      {
        emoji: "📚",
        title: "美国公司推出全球首个可扩展 DNA 数据存储解决方案，寿命长达上千年",
        content:
          "伴随此次发布，公司还对 DNA 存储的超高密度与超长耐久性作出了一系列大胆声明，并多次将其与磁带存储进行直接对比。",
      },
      {
        emoji: "⌨️",
        title: "百度集团：正就分拆昆仑芯进行上市进行评估",
        content:
          "公司谨此澄清，目前正就拟议分拆及上市进行评估。倘进行拟议分拆及上市，将须经相关监管审批程序，而本公司并不保证拟议分拆及上市将会进行。",
        links: [{ label: "百度", url: "https://www.baidu.com/" }],
      },
      {
        emoji: "🌐",
        title: "马斯克称SpaceX以8000亿美元估值融资传闻不准确",
        content:
          "他称，SpaceX多年来一直保持正现金流，并且每年进行两次股票回购，为员工和投资者提供流动性。公司估值的提升取决于星舰和星链的进展，以及获得全球直连手机网络的频谱。",
        links: [{ label: "SpaceX", url: "https://www.spacex.com/" }],
      },
    ],
  },
]

export function DailyNewsSection() {
  const [expandedDays, setExpandedDays] = useState<number[]>([0])

  const toggleDay = (index: number) => {
    setExpandedDays((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4 border-0 bg-primary/15 px-4 py-1.5 text-sm text-primary">每天更新</Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">AI新鲜事（内容过多，请查看飞书链接）</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">每天带你看AI，掌握最新的人工智能行业动态</p>
        </div>

        <div className="mx-auto max-w-5xl space-y-4">
          {allNews.map((day, dayIndex) => (
            <div key={dayIndex} className="relative">
              <button
                onClick={() => toggleDay(dayIndex)}
                className="group flex w-full items-center justify-between rounded-2xl border border-border/50 bg-card/80 p-5 text-left backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
                    <CalendarDays className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-semibold text-foreground">{day.date}</span>
                      <span className="text-sm text-muted-foreground">{day.weekday}</span>
                      {dayIndex === 0 && (
                        <Badge className="border-0 bg-accent/15 text-accent">
                          <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                          最新
                        </Badge>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{day.lunar}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
                    {day.items.length} 条资讯
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-primary/10">
                    {expandedDays.includes(dayIndex) ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    )}
                  </div>
                </div>
              </button>

              {expandedDays.includes(dayIndex) && (
                <div className="mt-4 space-y-4 pl-0 md:pl-8">
                  <div className="space-y-3">
                    {day.items.map((item, itemIndex) => (
                      <Card
                        key={itemIndex}
                        className="group overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-card/90"
                      >
                        <CardContent className="p-5">
                          <div className="flex gap-4">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/50 text-2xl shadow-sm">
                              {item.emoji}
                            </span>
                            <div className="flex-1 space-y-2">
                              <h3 className="text-base font-semibold leading-snug text-foreground">{item.title}</h3>
                              <p className="text-sm leading-relaxed text-muted-foreground">{item.content}</p>
                              {item.links && (
                                <div className="flex flex-wrap gap-2 pt-2">
                                  {item.links.map((link, linkIndex) => (
                                    <a
                                      key={linkIndex}
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                                    >
                                      {link.label}
                                      <ExternalLink className="h-3 w-3" />
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/10 to-accent/5 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20">
                      <Quote className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">每日金句</p>
                      <p className="mt-1 text-base italic text-foreground">{day.quote}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
