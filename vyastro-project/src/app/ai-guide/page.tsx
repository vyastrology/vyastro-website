"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Star, Home, Compass, RotateCcw } from "lucide-react";
import { AuroraOrb, StarField, SectionBadge } from "@/components/ui";

type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const QUICK_QUESTIONS = [
  { icon: Star, label: "Astrology", questions: ["What does my rising sign mean?", "Which dasha am I currently in?", "What career suits my chart?", "When is my next lucky period?"] },
  { icon: Home, label: "Vastu", questions: ["Which direction should I sleep?", "Is my home Vastu compliant?", "Best direction for my office desk?", "How to fix negative energy at home?"] },
  { icon: Sparkles, label: "Yantra", questions: ["Which Yantra is best for me?", "How do I activate a Yantra?", "Which Yantra for business growth?", "Difference between Shri & Kuber Yantra?"] },
  { icon: Compass, label: "Guidance", questions: ["What does today's horoscope say?", "Should I start a business now?", "How to strengthen my weak Moon?", "What remedies for Sade Sati?"] },
];

const SAMPLE_RESPONSES: Record<string, string> = {
  default: "Thank you for your question! I'm VyAstro's AI Guide, powered by Vedic Intelligence. I can help you with astrology, Vastu, Yantra selection, and personalized guidance. For the most accurate insights, I'd need your birth details (date, time, and place). What would you like to explore today?",
  sleep: "According to Vastu Shastra, the ideal sleeping direction is **South** — head pointing South, feet pointing North. This aligns your body's magnetic field with Earth's, promoting deep sleep and positive health. **East** is the second-best option, especially for students and those seeking mental clarity. Avoid sleeping with your head toward **North**, as it creates a repelling magnetic force that can disrupt sleep quality and energy levels over time.",
  yantra: "The best Yantra for you depends on your birth chart and current intentions. Generally: **Shri Yantra** for overall prosperity and abundance, **Kuber Yantra** for business and financial growth, **Mahamrityunjaya Yantra** for health and longevity, and **Gayatri Yantra** for wisdom and clarity. For a personalized recommendation, share your birth details and I'll analyze your chart's planetary positions to suggest the most resonant Yantra for your specific goals.",
  horoscope: "Today's planetary energies show Mercury trine Jupiter, bringing excellent energy for communication, negotiations, and learning. The Moon's current position supports emotional clarity and intuitive decision-making. This is a favorable time for initiating new projects, particularly those involving writing, teaching, or travel. However, be mindful of Saturn's ongoing square to the Sun — avoid rushing major financial commitments. Evening hours (after 6 PM) are particularly auspicious for meditation and spiritual practices.",
  vastu: "For a comprehensive Vastu compliance check, I'd need your home's floor plan and the direction your entrance faces. However, here are the most critical Vastu points to verify: **Kitchen** should be in the South-East (fire zone), **Master bedroom** in the South-West for stability, **Puja room** in the North-East, and **Main entrance** ideally facing East or North. Toilets in the North-East or South-West are the most common Vastu doshas. Would you like to describe your home layout for a more specific analysis?",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("sleep") || lower.includes("direction")) return SAMPLE_RESPONSES.sleep;
  if (lower.includes("yantra")) return SAMPLE_RESPONSES.yantra;
  if (lower.includes("horoscope") || lower.includes("today") || lower.includes("planetary")) return SAMPLE_RESPONSES.horoscope;
  if (lower.includes("vastu") || lower.includes("home") || lower.includes("compliant")) return SAMPLE_RESPONSES.vastu;
  return SAMPLE_RESPONSES.default;
}

export default function AIGuidePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Namaste! 🙏 I'm your VyAstro AI Guide — an intelligent assistant trained on 5,000+ years of Vedic wisdom. I can answer questions about your astrology chart, Vastu for your home or office, Yantra selection, and provide personalized guidance. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", content: text, timestamp: new Date() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200 + Math.random() * 800));
    const response = getResponse(text);
    setMessages((m) => [...m, { role: "assistant", content: response, timestamp: new Date() }]);
    setLoading(false);
  };

  const resetChat = () => {
    setMessages([
      { role: "assistant", content: "Chat reset. Namaste! How can I guide you today?", timestamp: new Date() },
    ]);
  };

  return (
    <div className="bg-cosmic-950 min-h-screen">
      <section className="relative pt-24 pb-6 overflow-hidden">
        <div className="absolute inset-0 bg-cosmic-radial" />
        <StarField />
        <AuroraOrb size={400} top="0" left="50%" opacity={0.1} color="purple" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-8">
          <SectionBadge>AI Guide</SectionBadge>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white mt-4 mb-3 leading-tight">
            Your Vedic <span className="text-gradient-aurora">AI Guide</span>
          </h1>
          <p className="text-white/45 text-sm sm:text-base max-w-lg mx-auto">
            Ask anything about astrology, Vastu, or Yantras. Powered by ancient Vedic knowledge and modern AI.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Questions Panel */}
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              {QUICK_QUESTIONS.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                    activeTab === i
                      ? "border-aurora-500/50 bg-aurora-500/20 text-aurora-300"
                      : "border-white/10 text-white/40 hover:text-white/60"
                  }`}
                >
                  <cat.icon size={10} />
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="glass rounded-2xl p-4 border border-white/8 space-y-2">
              <p className="text-white/35 text-xs uppercase tracking-wider mb-3">Try asking:</p>
              {QUICK_QUESTIONS[activeTab].questions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="w-full text-left text-xs text-white/55 hover:text-white/80 py-2.5 px-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/8 transition-all"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Capabilities */}
            <div className="glass rounded-2xl p-5 border border-white/8 space-y-3">
              <p className="text-white/35 text-xs uppercase tracking-wider">Capabilities</p>
              {[
                "Kundli & chart analysis",
                "Daily horoscope guidance",
                "Vastu compliance checks",
                "Yantra recommendations",
                "Planetary dasha insights",
                "Remedies & gemstones",
                "Auspicious timing (Muhurta)",
                "Compatibility analysis",
              ].map((cap) => (
                <div key={cap} className="flex items-center gap-2 text-xs text-white/50">
                  <span className="w-1 h-1 rounded-full bg-aurora-400" />
                  {cap}
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Header */}
            <div className="glass rounded-2xl px-5 py-4 border border-white/8 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-aurora-500 to-gold-400 flex items-center justify-center">
                <Sparkles size={14} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">VyAstro AI Guide</p>
                <p className="text-white/35 text-xs">Vedic Intelligence Engine · Demo Mode</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/35 text-xs">Online</span>
              </div>
              <button
                onClick={resetChat}
                className="text-white/30 hover:text-white/60 transition-colors"
                title="Reset chat"
              >
                <RotateCcw size={14} />
              </button>
            </div>

            {/* Messages */}
            <div className="glass rounded-2xl border border-white/8 flex flex-col h-[500px]">
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 items-start ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.role === "assistant"
                          ? "bg-gradient-to-br from-aurora-500 to-gold-400"
                          : "bg-white/10"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        <Bot size={13} className="text-white" />
                      ) : (
                        <User size={13} className="text-white/60" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "assistant"
                          ? "glass-purple text-white/80 rounded-tl-sm"
                          : "glass text-white/75 rounded-tr-sm"
                      }`}
                    >
                      {msg.content.split("**").map((part, j) =>
                        j % 2 === 1 ? (
                          <strong key={j} className="text-white font-semibold">
                            {part}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                      <p className="text-white/25 text-xs mt-1.5">
                        {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-aurora-500 to-gold-400 flex items-center justify-center flex-shrink-0">
                      <Bot size={13} className="text-white" />
                    </div>
                    <div className="glass-purple rounded-2xl rounded-tl-sm px-4 py-3">
                      <div className="flex gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-aurora-400 animate-bounce"
                            style={{ animationDelay: `${i * 150}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/5">
                <div className="flex gap-3 items-center glass rounded-xl px-4 py-3 border border-white/10 focus-within:border-aurora-500/30 transition-colors">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                    placeholder="Ask about your chart, home, Yantras..."
                    className="flex-1 bg-transparent text-white/70 text-sm outline-none placeholder-white/25"
                  />
                  <button
                    onClick={() => sendMessage(input)}
                    disabled={!input.trim() || loading}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-aurora-600 to-aurora-500 flex items-center justify-center disabled:opacity-40 transition-opacity hover:opacity-90 flex-shrink-0"
                  >
                    <Send size={13} className="text-white" />
                  </button>
                </div>
                <p className="text-white/20 text-xs text-center mt-2">
                  Demo mode — full AI launches with VyAstro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
