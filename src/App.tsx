import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, Sparkles, Map, Coins, Castle, BookOpen, Swords, Feather } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const characters = [
  {
    name: '수린 루먼',
    role: '제 1황녀',
    age: 23,
    gender: '女',
    imageUrl: 'https://i.postimg.cc/d3wTcGV4/IMG-1037.png',
    quote: '황제 자리에 관심은 있으나 그건 훗날 얘기이고, 지금은 왕자 놀이가 더 재밌다.',
    appearance: '181cm, 탄탄한 근육이 엿보이는 몸매, 연분홍 머리(반묶음), 푸른 눈, 날카로운 눈매, 잘생긴 용모',
    outfit: '흰색 셔츠, 검은색 조끼, 블루 넥브로치, 흰색 정장바지',
    traits: ['동성애자', '오너', '마미', '도미넌트'],
    likes: '검술 및 승마',
    mbti: 'ENTP (7w8, so/sp)',
    icon: <Swords className="w-5 h-5 text-indigo-500" />
  },
  {
    name: '세류 루먼',
    role: '제 2황녀',
    age: 22,
    gender: '女',
    imageUrl: 'https://i.postimg.cc/1XBVm48K/IMG-1038.png',
    quote: '황제라는 부담스런 직책에 오르기 싫다. 조용하고 소박하게 살고 싶다.',
    appearance: '177cm, 여리지만 곧은 몸매, 짙은 파란 머리(숏컷), 푸른 눈, 인형같은 아름답고 잘생긴 용모',
    outfit: '검은색 셔츠, 네이비색 조끼, 블루 넥브로치, 네이비색 롱치마 드레스',
    traits: ['양성애자', '바닐라', '무자각 리틀', '무자각 서브미시브'],
    likes: '책 읽고 차 마시기',
    mbti: 'ISFJ (6w5, sp/so)',
    icon: <BookOpen className="w-5 h-5 text-blue-500" />
  },
  {
    name: '유자만 루먼',
    role: '황제 (어머니)',
    age: 46,
    gender: '女',
    imageUrl: 'https://i.postimg.cc/J0xHrtsp/IMG-1039.png',
    quote: '제국을 위해 후계자를 정해야만 한다.',
    appearance: '185cm, 근육 있는 탄탄한 몸매, 회색 머리(짧은 머리, 쓸어넘긴 앞머리), 푸른색 눈, 카리스마 있는 눈매, 기가 강해보이는 잘생긴 용모',
    outfit: '검붉은 셔츠, 검은색 조끼, 레드 넥브로치, 흰색 정장바지, 붉은색 망토',
    traits: ['양성애자', '사디스트', '오너', '디그레이더', '주도적인 분위기 선호'],
    likes: '제국의 번영',
    mbti: 'ESTJ (8w9, so/sp)',
    icon: <Crown className="w-5 h-5 text-red-600" />
  },
  {
    name: '티란 치빌',
    role: '후궁 (아버지)',
    age: 43,
    gender: '男',
    imageUrl: 'https://i.postimg.cc/XqLBjXrH/IMG-1042.png',
    quote: '무엇이 되었든 우리 가족들이 건강하고 행복하기만을 바란다.',
    appearance: '173cm, 여성이라 착각될 정도로 여린 몸매와 아름다운 외모, 백금발 긴 머리(낮은 포니테일), 분홍색 눈, 순한 눈매',
    outfit: '흰색 셔츠, 분홍색 코르셋, 노란색 긴 드레스 치마, 흰색 초커',
    traits: ['이성애자', '마조히스트', '서브미시브', '싸움과 갈등을 싫어함'],
    likes: '가족의 평화',
    mbti: 'INFP (4w3, sx/so)',
    icon: <Feather className="w-5 h-5 text-amber-500" />
  }
];

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Automatically hide intro after 7.5 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 7500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1c1a19] text-stone-100 overflow-hidden cursor-pointer"
            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={() => setShowIntro(false)}
          >
            <div className="absolute bottom-8 text-stone-500 text-sm font-sans animate-pulse tracking-widest">
              화면을 클릭하여 건너뛰기
            </div>
            
            <div className="text-center flex flex-col items-center justify-center h-full absolute inset-0">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
                transition={{ duration: 2.5, times: [0, 0.2, 0.8, 1], delay: 0.5 }}
                className="text-2xl md:text-4xl font-serif text-indigo-300 absolute"
              >
                '공주'가 되고 싶은 동생,
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
                transition={{ duration: 2.5, times: [0, 0.2, 0.8, 1], delay: 2.5 }}
                className="text-2xl md:text-4xl font-serif text-rose-300 absolute"
              >
                '왕자'가 되고 싶은 언니.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, delay: 5.0, ease: "easeOut" }}
                className="absolute flex flex-col items-center"
              >
                <Crown className="w-12 h-12 md:w-16 md:h-16 text-amber-400 mb-6" />
                <h1 className="text-6xl md:text-8xl font-serif font-bold text-amber-400 tracking-widest drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                  공왕 주의보
                </h1>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen overflow-hidden selection:bg-rose-200 selection:text-rose-900">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-rose-100/40 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-100/40 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="w-full p-6 flex justify-center items-center">
          <div className="flex items-center gap-2 text-stone-800">
            <Crown className="w-6 h-6 text-amber-600" />
            <span className="font-serif font-bold text-xl tracking-widest">GONGWANG</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="px-6 py-24 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-200 bg-white/50 text-sm font-medium text-stone-600"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>로맨스 · 판타지 · 개그</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-bold text-stone-900 mb-6 tracking-tight"
          >
            공왕 주의보
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed"
          >
            제국력 632년, 레르부디 제국의 황제 ‘유자만 루먼’의 깊어가는 고민.<br/>
            <span className="font-semibold text-indigo-700">‘공주’</span>가 되고 싶은 둘째와 <span className="font-semibold text-rose-700">‘왕자’</span>가 되고 싶은 첫째!<br/>
            과연 차기 황제는 누가 될 것인가?
          </motion.p>
        </header>

        {/* Worldview Section */}
        <section className="px-6 py-20 bg-white/40 border-y border-stone-200/50">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">세계관 & 설정</h2>
                <div className="w-16 h-px bg-amber-400 mx-auto"></div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-6 text-rose-600">
                    <Castle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">레르부디 제국</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    제국력 632년. 황제 유자만 루먼이 통치하는 거대한 제국. 황궁을 중심으로 레르디 대로, 르리치 거리, 릴리시장 거리 등 다채로운 구역이 존재한다.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6 text-amber-600">
                    <Coins className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">화폐 가치</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    제국의 기본 화폐 단위는 <span className="font-semibold">'온(ON)'</span>을 사용한다.<br/>
                    <span className="inline-block mt-2 px-3 py-1 bg-stone-100 rounded-md font-mono text-xs">1온(ON) = 약 100원</span>
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600">
                    <Map className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">주요 무대</h3>
                  <ul className="text-stone-600 text-sm leading-relaxed space-y-1">
                    <li>레르부디 황궁</li>
                    <li>레르디 대로</li>
                    <li>르리치 거리</li>
                    <li>릴리시장 거리</li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Characters Section */}
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">등장인물</h2>
              <div className="w-16 h-px bg-amber-400 mx-auto"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {characters.map((char, idx) => (
              <React.Fragment key={char.name}>
                <FadeIn delay={idx * 0.1}>
                  <div className="glass-card rounded-3xl overflow-hidden flex flex-col sm:flex-row h-full group hover:shadow-lg transition-shadow duration-300">
                  {/* Image Placeholder */}
                  <div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden bg-stone-200">
                    <img 
                      src={char.imageUrl} 
                      alt={char.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-black/10"></div>
                    <div className="absolute bottom-4 left-4 sm:hidden">
                      <h3 className="text-2xl font-serif font-bold text-white">{char.name}</h3>
                      <p className="text-white/80 text-sm">{char.role}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col">
                    <div className="hidden sm:flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-stone-900">{char.name}</h3>
                        <p className="text-stone-500 text-sm font-medium">{char.role} · {char.age}세 · {char.gender}</p>
                      </div>
                      {char.icon}
                    </div>

                    <div className="sm:hidden flex items-center justify-between mb-4">
                      <p className="text-stone-500 text-sm font-medium">{char.age}세 · {char.gender}</p>
                      {char.icon}
                    </div>

                    <div className="mb-6">
                      <p className="font-serif italic text-stone-700 text-sm leading-relaxed border-l-2 border-amber-300 pl-3 py-1">
                        "{char.quote}"
                      </p>
                    </div>

                    <div className="space-y-4 flex-grow">
                      <div>
                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">외양</h4>
                        <p className="text-sm text-stone-700 leading-relaxed">{char.appearance}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">착장</h4>
                        <p className="text-sm text-stone-700 leading-relaxed">{char.outfit}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">취미/성향</h4>
                          <p className="text-sm text-stone-700">{char.likes}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">MBTI</h4>
                          <p className="text-sm text-stone-700 font-mono">{char.mbti}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {char.traits.map(trait => (
                        <span key={trait} className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-md border border-stone-200/60">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center border-t border-stone-200/50 mt-12">
          <Crown className="w-6 h-6 text-stone-300 mx-auto mb-4" />
          <p className="text-stone-400 text-sm font-serif">© 632 Rerbudi Empire. All rights reserved.</p>
        </footer>
      </div>
    </div>
    </>
  );
}
