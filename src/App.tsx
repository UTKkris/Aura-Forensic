import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [score, setScore] = useState(87);
  const [logs, setLogs] = useState<string[]>([]);

  // Simulate real-time forensic analysis
  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prev) => {
        const fluctuation = Math.floor(Math.random() * 5) - 2;
        return Math.min(100, Math.max(0, prev + fluctuation));
      });
      
      const newLogs = [
        "> Analyzing frame buffer 0x8F2A...",
        "> LSB Watermark verified. UID: 49201",
        "> Network egress check: Nominal",
        "> Scanning for GAN artifacts...",
        "> Minor temporal flickering detected in sector 4."
      ];
      setLogs((prev) => {
        const nextLog = newLogs[Math.floor(Math.random() * newLogs.length)];
        return [...prev.slice(-4), nextLog];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] font-sans p-[30px] md:p-[50px] flex flex-col justify-between overflow-x-hidden relative selection:bg-[#00F0FF] selection:text-[#050505]">
      {/* Big Tag */}
      <div className="absolute bottom-[80px] right-[50px] text-[80px] font-[900] opacity-[0.03] pointer-events-none select-none">
        AURA
      </div>

      {/* Header */}
      <header className="flex justify-between items-end border-b border-[#222] pb-[20px]">
        <div className="flex flex-col">
          <h1 className="text-[14px] tracking-[4px] text-[#00F0FF] uppercase font-[900]">
            Aura-Forensic // Initialized
          </h1>
        </div>
        <div className="text-right font-mono text-[12px] text-[#555]">
          <div>LOC_ID: 2026-XQ-4</div>
          <div className="flex items-center justify-end gap-2 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            SYS_STABLE: TRUE
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-[60px] grow pt-[40px] z-10">
        
        {/* Left Column */}
        <div className="flex flex-col">
          {/* Score Display */}
          <div className="flex flex-col">
            <div className="text-[120px] md:text-[240px] font-[800] tracking-[-8px] md:tracking-[-14px] leading-[0.75] -ml-[10px] flex items-start">
              {score}
              <span className="text-[40px] md:text-[60px] tracking-[-2px] mt-[10px] md:mt-[30px] inline-block">%</span>
            </div>
            <div className="text-[11px] uppercase tracking-[5px] font-[600] mt-[20px] text-[#FFFFFF]">
              Authenticity Score / AI-Genesis Confidence
            </div>
            <div className="w-full h-[4px] bg-[#222] mt-[40px] relative">
              <motion.div 
                className="h-full bg-[#00F0FF] shadow-[0_0_15px_#00F0FF]"
                initial={{ width: 0 }}
                animate={{ width: `${score}%` }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Log Section (Terminal & Forensic Markers) */}
          <div className="mt-[60px] border-t border-[#222] pt-[20px] flex flex-col gap-8">
            {/* Forensic Markers */}
            <div>
              <div className="text-[10px] uppercase tracking-[2px] text-[#555] mb-[20px] flex items-center gap-[10px]">
                <div className="w-[6px] h-[6px] bg-[#00F0FF] rounded-full" />
                Forensic Markers
              </div>
              <div className="overflow-x-auto">
                <table className="w-full font-mono text-[11px] border-collapse min-w-[400px]">
                  <thead>
                    <tr>
                      <th className="text-left text-[#555] py-[10px] uppercase tracking-[1px] font-normal">Marker Type</th>
                      <th className="text-left text-[#555] py-[10px] uppercase tracking-[1px] font-normal">Details</th>
                      <th className="text-left text-[#555] py-[10px] uppercase tracking-[1px] font-normal">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-[8px] border-b border-[#111]">Temporal Flickering</td>
                      <td className="py-[8px] border-b border-[#111] text-[#aaa]">Minor inconsistencies in sector 4</td>
                      <td className="py-[8px] border-b border-[#111]"><span className="text-[#00F0FF] bg-[#00F0FF]/10 px-[6px] py-[2px] rounded-[2px] text-[9px]">DETECTED</span></td>
                    </tr>
                    <tr>
                      <td className="py-[8px] border-b border-[#111]">Edge Blending</td>
                      <td className="py-[8px] border-b border-[#111] text-[#aaa]">Facial micro-expressions align</td>
                      <td className="py-[8px] border-b border-[#111]"><span className="text-[#00F0FF] bg-[#00F0FF]/10 px-[6px] py-[2px] rounded-[2px] text-[9px]">VERIFIED</span></td>
                    </tr>
                    <tr>
                      <td className="py-[8px] border-b border-[#111]">Lighting Consistency</td>
                      <td className="py-[8px] border-b border-[#111] text-[#aaa]">Specular highlights match map</td>
                      <td className="py-[8px] border-b border-[#111]"><span className="text-[#00F0FF] bg-[#00F0FF]/10 px-[6px] py-[2px] rounded-[2px] text-[9px]">VERIFIED</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Terminal Feed */}
            <div>
              <div className="text-[10px] uppercase tracking-[2px] text-[#555] mb-[20px] flex items-center gap-[10px]">
                <div className="w-[6px] h-[6px] bg-[#00F0FF] rounded-full" />
                Live Terminal Feed
              </div>
              <div className="font-mono text-[11px] text-[#aaa] space-y-2 h-[100px] overflow-y-auto">
                {logs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={log.includes('Watermark') ? 'text-[#00F0FF]' : ''}
                  >
                    {log}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sniffer & Attribution */}
        <div className="lg:border-l lg:border-[#222] lg:pl-[40px] flex flex-col gap-[40px]">
          
          {/* Source Attribution */}
          <div>
            <div className="text-[10px] uppercase tracking-[2px] text-[#555] mb-[20px] flex items-center gap-[10px]">
              <div className="w-[6px] h-[6px] bg-[#00F0FF] rounded-full" />
              Source Attribution
            </div>
            <div className="font-mono text-[13px] text-[#aaa] leading-[1.5] bg-white/5 p-[20px] rounded-[2px] overflow-x-auto">
              {"{"}<br/>
              &nbsp;&nbsp;<span className="text-[#00F0FF]">"extracted_uid"</span>: 49201,<br/>
              &nbsp;&nbsp;<span className="text-[#00F0FF]">"watermark_integrity"</span>: "INTACT",<br/>
              &nbsp;&nbsp;<span className="text-[#00F0FF]">"channel"</span>: "BLUE_LSB"<br/>
              {"}"}
            </div>
          </div>

          {/* Network Sniffer */}
          <div>
            <div className="text-[10px] uppercase tracking-[2px] text-[#555] mb-[20px] flex items-center gap-[10px]">
              <div className="w-[6px] h-[6px] bg-[#00F0FF] rounded-full" />
              Network Sniffer Summary
            </div>
            <div className="font-mono text-[13px] text-[#aaa] leading-[1.5] bg-white/5 p-[20px] rounded-[2px] overflow-x-auto">
              {"{"}<br/>
              &nbsp;&nbsp;<span className="text-[#00F0FF]">"egress_monitor"</span>: "ACTIVE",<br/>
              &nbsp;&nbsp;<span className="text-[#00F0FF]">"threat_level"</span>: "MEDIUM",<br/>
              &nbsp;&nbsp;<span className="text-[#00F0FF]">"unauthorized_streams"</span>: [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00F0FF]">"target"</span>: "104.21.45.12",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00F0FF]">"rate"</span>: "28.4 Mbps",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00F0FF]">"protocol"</span>: "TCP-EGRESS"<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
              &nbsp;&nbsp;]<br/>
              {"}"}
            </div>
            <div className="mt-[40px] text-[#555] text-[11px] leading-[1.6]">
              Monitoring local egress traffic for unauthorized high-bandwidth streams. Forensic UID recovery active on current viewport media.
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between text-[9px] text-[#555] uppercase tracking-[2px] pt-[20px] mt-[40px] z-10 gap-2">
        <div>Forensic System 2026 © Digital Media Protection Agency</div>
        <div>Confidential Integrity Report // No External Egress Permitted</div>
      </footer>
    </div>
  );
}

