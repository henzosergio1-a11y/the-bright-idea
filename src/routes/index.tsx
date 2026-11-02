import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({ component: Index });

const services = [
  { icon: "✧", title: "Cuidado facial", text: "Limpeza e hidratação para uma pele cuidada e luminosa." },
  { icon: "❋", title: "Maquilhagem", text: "Looks suaves ou marcantes para eventos e momentos especiais." },
  { icon: "✳", title: "Unhas & manicure", text: "Acabamentos elegantes com atenção a cada detalhe." },
  { icon: "☼", title: "Cuidado capilar", text: "Um momento de cuidado pensado para o teu cabelo." },
  { icon: "♡", title: "Sobrancelhas & pestanas", text: "Realça o olhar com um resultado adaptado ao teu estilo." },
  { icon: "❀", title: "Bem-estar", text: "Abranda a rotina e reserva um tempo só para ti." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [service, setService] = useState("");
  const [notice, setNotice] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = [
      "Olá, Aura Beauty! Gostaria de pedir uma marcação.",
      "",
      `Nome: ${name}`,
      `Contacto: ${phone}`,
      `Serviço: ${service}`,
      `Data pretendida: ${date}`,
      `Detalhes: ${message || "Não indicado"}`,
    ].join("\n");
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pedido-marcacao-aura-beauty.txt";
    link.click();
    URL.revokeObjectURL(url);
    setNotice("O pedido foi preparado. Configura o WhatsApp do estúdio para receber marcações diretamente.");
  }

  return (
    <main className="aura-site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
        .aura-site{--bg:#17110f;--panel:#211916;--cream:#f8f0e8;--muted:#b9a9a0;--rose:#d9a08f;--line:rgba(248,240,232,.14);background:var(--bg);color:var(--cream);font-family:'DM Sans',Arial,sans-serif;line-height:1.6;min-height:100vh}
        .aura-site *{box-sizing:border-box}.aura-site a{color:inherit;text-decoration:none}.aura-site button,.aura-site input,.aura-site select,.aura-site textarea{font:inherit}.aura-container{width:min(1160px,calc(100% - 44px));margin:auto}
        .aura-topline{background:var(--rose);color:#211916;text-align:center;font-size:11px;letter-spacing:.12em;padding:9px 12px;text-transform:uppercase}
        .aura-header{position:sticky;top:0;z-index:20;background:rgba(23,17,15,.96);backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}
        .aura-nav{height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px}.aura-brand{font:27px/1 'Playfair Display',Georgia,serif;letter-spacing:.03em}.aura-brand span{color:var(--rose)}.aura-brand small{display:block;font:9px 'DM Sans',sans-serif;letter-spacing:.32em;text-transform:uppercase;color:var(--muted);margin-top:7px}
        .aura-links{display:flex;gap:26px;align-items:center;font-size:13px;color:#e0d4cc}.aura-links a:hover{color:var(--rose)}
        .aura-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:13px 20px;border:1px solid var(--rose);background:var(--rose);color:#211916!important;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:.2s}.aura-btn:hover{background:transparent;color:var(--rose)!important}.aura-btn-outline{background:transparent;color:var(--cream)!important;border-color:var(--line)}
        .aura-menu{display:none;background:transparent;color:var(--cream);border:1px solid var(--line);padding:6px 11px;font-size:20px}
        .aura-hero{padding:64px 0 76px;overflow:hidden}.aura-hero-grid{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:58px}.aura-eyebrow{color:var(--rose);text-transform:uppercase;letter-spacing:.2em;font-size:10px;font-weight:700;display:flex;align-items:center;gap:12px}.aura-eyebrow:before{content:'';width:28px;height:1px;background:var(--rose)}
        .aura-site h1,.aura-site h2,.aura-site h3{font-family:'Playfair Display',Georgia,serif;font-weight:500;line-height:1.13}.aura-site h1{font-size:clamp(44px,5.5vw,74px);letter-spacing:-.035em;margin:22px 0}.aura-site h1 em,.aura-site h2 em{font-weight:400;color:var(--rose)}.aura-copy{max-width:480px;color:var(--muted);font-size:14px;margin-bottom:28px}.aura-actions{display:flex;gap:12px;flex-wrap:wrap}.aura-trust{display:flex;gap:16px;align-items:center;margin-top:32px;color:var(--muted);font-size:11px}.aura-stars{color:var(--rose);letter-spacing:3px}
        .aura-visual{position:relative;min-height:510px}.aura-hero-img{position:absolute;inset:0 30px 24px 0;width:calc(100% - 30px);height:calc(100% - 24px);object-fit:cover;object-position:center;filter:saturate(.75);border-radius:180px 180px 3px 3px}.aura-frame{position:absolute;inset:15px 0 0 15px;border:1px solid rgba(217,160,143,.65);border-radius:180px 180px 3px 3px;pointer-events:none}.aura-round{position:absolute;right:0;bottom:2px;width:118px;height:118px;border-radius:50%;background:var(--rose);color:#211916;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;transform:rotate(7deg)}.aura-round strong{font:29px 'Playfair Display',Georgia,serif}.aura-round span{font-size:9px;text-transform:uppercase;letter-spacing:.08em}
        .aura-section{padding:86px 0}.aura-services{background:#201815}.aura-heading{text-align:center;max-width:650px;margin:0 auto 42px}.aura-heading .aura-eyebrow{justify-content:center}.aura-heading .aura-eyebrow:after{content:'';width:28px;height:1px;background:var(--rose)}.aura-site h2{font-size:clamp(34px,4vw,50px);margin:16px 0}.aura-heading p{color:var(--muted);font-size:13px}
        .aura-service-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.aura-card{border:1px solid var(--line);background:var(--bg);padding:27px 24px;transition:transform .2s,border-color .2s}.aura-card:hover{transform:translateY(-4px);border-color:var(--rose)}.aura-icon{width:46px;height:46px;border:1px solid rgba(217,160,143,.5);border-radius:50%;display:grid;place-items:center;color:var(--rose);font-size:21px;margin-bottom:22px}.aura-card h3{font-size:24px;margin:0 0 10px}.aura-card p{font-size:12px;color:var(--muted);min-height:52px}.aura-card-foot{border-top:1px solid var(--line);padding-top:14px;display:flex;justify-content:space-between;align-items:center;color:var(--rose);font-size:11px}.aura-card-foot button{background:none;border:0;color:var(--rose);font-weight:700;cursor:pointer}
        .aura-about-grid{display:grid;grid-template-columns:1fr 1fr;gap:68px;align-items:center}.aura-about-img-wrap{position:relative;padding:0 22px 22px 0}.aura-about-img{width:100%;height:470px;object-fit:cover;display:block;filter:saturate(.75)}.aura-about-img-wrap:after{content:'';position:absolute;right:0;bottom:0;width:78%;height:78%;border:1px solid var(--rose);z-index:0;pointer-events:none}.aura-about-img{position:relative;z-index:1}.aura-about-copy p{font-size:13px;color:var(--muted)}.aura-benefits{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin:24px 0}.aura-benefit{font-size:11px;color:#e6d9d0}.aura-benefit span{color:var(--rose);margin-right:8px}
        .aura-quote{background:#211916;padding:64px 20px;text-align:center}.aura-quote blockquote{font:clamp(24px,3.5vw,38px)/1.35 'Playfair Display',Georgia,serif;max-width:790px;margin:0 auto 20px}.aura-quote cite{font-style:normal;text-transform:uppercase;letter-spacing:.17em;font-size:10px;color:var(--rose)}
        .aura-booking{background:#201815}.aura-book-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:58px;align-items:start}.aura-book-info p{font-size:13px;color:var(--muted)}.aura-contact{display:flex;gap:13px;margin-top:21px}.aura-contact-icon{color:var(--rose);font-size:18px}.aura-contact strong{display:block;font-size:12px}.aura-contact small{font-size:11px;color:var(--muted)}.aura-form{padding:30px;background:var(--bg);border:1px solid var(--line)}.aura-form h3{font-size:27px;margin:0 0 7px}.aura-form>p{font-size:11px;color:var(--muted);margin-bottom:22px}.aura-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:15px}.aura-field{display:flex;flex-direction:column;gap:7px}.aura-field-full{grid-column:1/-1}.aura-field label{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#e7d9d1}.aura-field input,.aura-field select,.aura-field textarea{width:100%;background:#211916;border:1px solid var(--line);color:var(--cream);padding:12px;outline:none;border-radius:0}.aura-field input:focus,.aura-field select:focus,.aura-field textarea:focus{border-color:var(--rose)}.aura-field textarea{min-height:80px;resize:vertical}.aura-form .aura-btn{width:100%;margin-top:18px}.aura-notice{margin-top:14px;padding:11px;border:1px solid var(--rose);font-size:12px;color:var(--cream)}
        .aura-footer{border-top:1px solid var(--line);padding:35px 0 20px}.aura-footer-top,.aura-footer-bottom{display:flex;justify-content:space-between;align-items:center;gap:20px}.aura-footer-top{padding-bottom:24px}.aura-footer p,.aura-footer-bottom{color:var(--muted);font-size:10px}.aura-footer p{margin:8px 0 0}.aura-footer-links{display:flex;gap:20px;font-size:11px;color:var(--muted)}.aura-footer-bottom{border-top:1px solid var(--line);padding-top:17px}
        @media(max-width:850px){.aura-links{gap:13px}.aura-hero-grid{gap:32px}.aura-visual{min-height:440px}.aura-about-grid{gap:35px}.aura-book-grid{gap:28px}}
        @media(max-width:680px){.aura-container{width:calc(100% - 32px)}.aura-nav{height:68px}.aura-menu{display:block}.aura-links{display:none;position:absolute;top:68px;left:0;right:0;background:var(--bg);padding:20px 24px 24px;flex-direction:column;align-items:flex-start;border-bottom:1px solid var(--line)}.aura-links.is-open{display:flex}.aura-nav-cta{display:none}.aura-hero{padding:42px 0 52px}.aura-hero-grid,.aura-about-grid,.aura-book-grid{grid-template-columns:1fr}.aura-hero-grid{gap:34px}.aura-visual{min-height:390px;max-width:460px;width:100%;margin:auto}.aura-section{padding:62px 0}.aura-service-grid{grid-template-columns:1fr}.aura-card p{min-height:0}.aura-about-img{height:360px}.aura-about-img-wrap{max-width:470px}.aura-book-grid{gap:32px}.aura-form{padding:22px 17px}.aura-round{width:100px;height:100px}.aura-footer-top,.aura-footer-bottom{align-items:flex-start;flex-direction:column}.aura-footer-links{flex-wrap:wrap}}
        @media(prefers-reduced-motion:reduce){.aura-site *{transition:none!important}}
      `}</style>
      <div className="aura-topline">O teu momento de autocuidado começa aqui · Marca a tua visita</div>
      <header className="aura-header">
        <div className="aura-container aura-nav">
          <a className="aura-brand" href="#inicio">aura<span>.</span><small>beauty studio</small></a>
          <nav className={`aura-links ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a><a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre nós</a><a href="#marcacao" onClick={() => setMenuOpen(false)}>Marcações</a>
          </nav>
          <a className="aura-btn aura-nav-cta" href="#marcacao">Marcar sessão ↗</a>
          <button className="aura-menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>{menuOpen ? "×" : "☰"}</button>
        </div>
      </header>
      <section className="aura-hero" id="inicio"><div className="aura-container aura-hero-grid">
        <div><div className="aura-eyebrow">Beleza com intenção</div><h1>Cuida de ti.<br/>Brilha à tua <em>maneira.</em></h1><p className="aura-copy">Um espaço pensado para abrandar, renovar a tua energia e realçar aquilo que te torna única. O teu bem-estar é o nosso ritual favorito.</p><div className="aura-actions"><a className="aura-btn" href="#servicos">Descobrir serviços ↗</a><a className="aura-btn aura-btn-outline" href="#sobre">Conhecer o estúdio</a></div><div className="aura-trust"><span className="aura-stars">★★★★★</span><span>Detalhes que fazem a diferença</span></div></div>
        <div className="aura-visual"><img className="aura-hero-img" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85" alt="Produtos de beleza e maquilhagem" /><div className="aura-frame"/><div className="aura-round"><strong>100%</strong><span>dedicado a ti</span></div></div>
      </div></section>
      <section className="aura-section aura-services" id="servicos"><div className="aura-container"><div className="aura-heading"><div className="aura-eyebrow">Os nossos cuidados</div><h2>O teu ritual, <em>à tua medida.</em></h2><p>Pequenos momentos de cuidado, pensados para te fazer sentir bem por dentro e por fora.</p></div><div className="aura-service-grid">{services.map((item) => <article className="aura-card" key={item.title}><div className="aura-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p><div className="aura-card-foot"><span>Personalizado</span><button onClick={() => { setService(item.title); document.getElementById("marcacao")?.scrollIntoView({ behavior: "smooth" }); }}>Marcar ↗</button></div></article>)}</div></div></section>
      <section className="aura-section" id="sobre"><div className="aura-container aura-about-grid"><div className="aura-about-img-wrap"><img className="aura-about-img" src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85" alt="Retrato em luz suave que inspira beleza natural" loading="lazy"/></div><div className="aura-about-copy"><div className="aura-eyebrow">Um espaço para ti</div><h2>Beleza que começa com <em>bem-estar.</em></h2><p>Na Aura Beauty, acreditamos que cuidar da beleza é também criar espaço para respirar, ganhar confiança e celebrar a tua individualidade.</p><p>Queremos que cada visita seja tranquila, acolhedora e adaptada ao teu estilo. Sem pressas, sem fórmulas iguais — apenas cuidado com intenção.</p><div className="aura-benefits"><div className="aura-benefit"><span>✦</span>Atendimento atencioso</div><div className="aura-benefit"><span>✦</span>Cuidado personalizado</div><div className="aura-benefit"><span>✦</span>Ambiente acolhedor</div><div className="aura-benefit"><span>✦</span>Atenção aos detalhes</div></div><a className="aura-btn aura-btn-outline" href="#marcacao">Vamos conversar ↗</a></div></div></section>
      <section className="aura-quote"><blockquote>“A beleza não é sobre parecer outra pessoa. É sobre sentires-te bem a ser quem és.”</blockquote><cite>O espírito Aura Beauty</cite></section>
      <section className="aura-section" id="marcacao"><div className="aura-container aura-book-grid"><div className="aura-book-info"><div className="aura-eyebrow">O teu próximo momento</div><h2>Vamos reservar um tempo <em>para ti?</em></h2><p>Conta-nos o que procuras. Prepara o teu pedido de marcação e combina os detalhes com o estúdio.</p><div className="aura-contact"><span className="aura-contact-icon">⌖</span><div><strong>Localização</strong><small>Adiciona aqui a morada do teu estúdio</small></div></div><div className="aura-contact"><span className="aura-contact-icon">◷</span><div><strong>Horário</strong><small>Personaliza os dias e horários de atendimento</small></div></div><div className="aura-contact"><span className="aura-contact-icon">✉</span><div><strong>Contacto</strong><small>Configura o WhatsApp ou e-mail do estúdio</small></div></div></div>
        <form className="aura-form" onSubmit={submitBooking}><h3>Pedido de marcação</h3><p>Preenche os dados para preparar a tua mensagem.</p><div className="aura-form-grid">
          <div className="aura-field"><label htmlFor="aura-name">O teu nome</label><input id="aura-name" value={name} onChange={e => setName(e.target.value)} placeholder="Como te chamas?" required/></div>
          <div className="aura-field"><label htmlFor="aura-phone">Telefone / WhatsApp</label><input id="aura-phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+258 ..." required/></div>
          <div className="aura-field"><label htmlFor="aura-service">Serviço</label><select id="aura-service" value={service} onChange={e => setService(e.target.value)} required><option value="">Escolhe um serviço</option>{services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}<option value="Quero aconselhamento">Quero aconselhamento</option></select></div>
          <div className="aura-field"><label htmlFor="aura-date">Data pretendida</label><input id="aura-date" type="date" value={date} min={new Date().toISOString().slice(0,10)} onChange={e => setDate(e.target.value)} required/></div>
          <div className="aura-field aura-field-full"><label htmlFor="aura-message">Mais detalhes (opcional)</label><textarea id="aura-message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Conta-nos o que gostarias de fazer..."/></div>
        </div><button className="aura-btn" type="submit">Preparar pedido ↗</button>{notice && <p className="aura-notice" role="status">{notice}</p>}<p style={{fontSize:10,color:"var(--muted)",margin:"12px 0 0"}}>O envio automático requer configurar o contacto real do estúdio.</p></form>
      </div></section>
      <footer className="aura-footer"><div className="aura-container"><div className="aura-footer-top"><div><a className="aura-brand" href="#inicio">aura<span>.</span><small>beauty studio</small></a><p>O teu momento de beleza e bem-estar.</p></div><div className="aura-footer-links"><a href="#servicos">Serviços</a><a href="#sobre">Sobre nós</a><a href="#marcacao">Marcações</a></div></div><div className="aura-footer-bottom"><span>© {new Date().getFullYear()} Aura Beauty. Todos os direitos reservados.</span><span>Feito com cuidado ♡</span></div></div></footer>
    </main>
  );
}
