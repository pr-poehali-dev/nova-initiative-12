import { Hero } from "@/components/Hero";
import { useState } from "react";

const AVATAR_URL = "https://cdn.poehali.dev/projects/051182bd-6895-4f0f-86b1-19f5b8f0211b/bucket/c858bb9e-e4f0-4565-9c74-6f56d2cd7ca2.jpg";

const players = [
  { nick: "xinto", role: "Star Player", faceitLvl: 10, hltvRating: "1.00", faceitColor: "#FF6600" },
  { nick: "fla1", role: "Lurker", faceitLvl: 7, hltvRating: "1.00", faceitColor: "#FF6600" },
  { nick: "Ba7ka", role: "IGL", faceitLvl: 5, hltvRating: "1.00", faceitColor: "#FFD700" },
  { nick: "mef0mu", role: "Rifler", faceitLvl: 5, hltvRating: "1.00", faceitColor: "#FFD700" },
  { nick: "grommer", role: "Support", faceitLvl: 7, hltvRating: "1.00", faceitColor: "#FF6600" },
];

function PlayerCard({ player }: { player: typeof players[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative w-40 h-52 mb-4 overflow-hidden transition-all duration-300"
        style={{
          clipPath: "polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)",
          border: hovered ? "1px solid #3B9EFF" : "1px solid rgba(255,255,255,0.1)",
          boxShadow: hovered ? "0 0 24px rgba(59,158,255,0.4)" : "none",
          background: "#0a0a0a",
        }}
      >
        <img
          src={AVATAR_URL}
          alt={player.nick}
          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="text-center">
        <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest mb-1">{player.role}</p>
        <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-primary transition-colors duration-200">
          {player.nick}
        </h3>
        <div className="flex items-center justify-center gap-3 mt-2">
          <span className="font-mono text-xs" style={{ color: player.faceitColor }}>
            FACEIT LVL {player.faceitLvl}
          </span>
          <span className="text-foreground/30">·</span>
          <span className="font-mono text-xs text-foreground/50">
            HLTV {player.hltvRating}
          </span>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ label, id }: { label: string; id: string }) {
  return (
    <div id={id} className="flex items-center gap-4 mb-12">
      <span className="font-mono text-primary text-sm uppercase tracking-widest">//</span>
      <h2 className="font-mono text-2xl md:text-3xl uppercase tracking-widest text-white">{label}</h2>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );
}

export default function Index() {
  return (
    <>
      <Hero />

      {/* ROSTER */}
      <section id="roster" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <SectionTitle label="Состав" id="roster-title" />
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {players.map((p) => (
            <PlayerCard key={p.nick} player={p} />
          ))}
        </div>
      </section>

      <div className="h-px bg-white/5 mx-8" />

      {/* NEWS */}
      <section id="news" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <SectionTitle label="Новости" id="news-title" />
        <div
          className="relative p-8 md:p-10"
          style={{
            clipPath: "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)",
            border: "1px solid rgba(59,158,255,0.2)",
            background: "rgba(59,158,255,0.04)",
          }}
        >
          <span className="font-mono text-xs text-primary uppercase tracking-widest">02.03.2026 · Официально</span>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-3 mb-4 uppercase tracking-wide">
            Состав сформирован
          </h3>
          <p className="font-mono text-sm text-foreground/60 leading-relaxed max-w-2xl">
            Рады объявить, что состав Natus Ventures полностью сформирован. К нам пришли сильные игроки, готовые бороться за победу на каждом турнире. Впереди — интенсивные тренировки и первые официальные матчи. Следите за обновлениями!
          </p>
        </div>
      </section>

      <div className="h-px bg-white/5 mx-8" />

      {/* MATCHES */}
      <section id="matches" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <SectionTitle label="Матчи" id="matches-title" />
        <div className="flex flex-col items-center justify-center py-16 gap-4">
          <span className="font-mono text-6xl text-white/10">[ ]</span>
          <p className="font-mono text-sm text-foreground/30 uppercase tracking-widest">Матчи не запланированы</p>
          <p className="font-mono text-xs text-foreground/20">Следите за обновлениями</p>
        </div>
      </section>

      <div className="h-px bg-white/5 mx-8" />

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <SectionTitle label="Достижения" id="achievements-title" />
        <div
          className="relative p-8 md:p-10 flex items-center gap-6"
          style={{
            clipPath: "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)",
            border: "1px solid rgba(255,215,0,0.3)",
            background: "rgba(255,215,0,0.04)",
          }}
        >
          <div className="text-5xl select-none">🥈</div>
          <div>
            <span className="font-mono text-xs text-yellow-400/70 uppercase tracking-widest">Турнир</span>
            <h3 className="text-xl md:text-2xl font-bold text-white mt-1 uppercase tracking-wide">
              DuoCup SaemArena
            </h3>
            <p className="font-mono text-sm text-foreground/50 mt-1">2-е место</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 border-t border-white/5 text-center">
        <p className="font-mono text-xs text-foreground/20 uppercase tracking-widest">
          © 2026 Natus Ventures · CS2 Clan
        </p>
      </footer>
    </>
  );
}
