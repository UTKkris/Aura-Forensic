# Aura-Forensic: Real-Time Media Integrity & Source Attribution

**Build with AI Hackathon Submission 2026**

## Overview
Aura-Forensic is a real-time media integrity platform designed to establish an unbreakable **Chain of Custody** for digital media in the era of advanced generative AI and deepfakes. By combining multimodal media forensics, steganographic watermarking, and network behavioral analysis, Aura-Forensic ensures that digital evidence remains tamper-evident from the point of capture to the courtroom.

## Core Capabilities

### 1. Multimodal Media Forensics
Scans video frames for GAN-based artifacts, temporal flickering, and lighting inconsistencies that suggest deepfake injection or frame manipulation.

### 2. Steganographic Source Attribution
Utilizes Least Significant Bit (LSB) watermarking to embed a 16-bit UserID directly into the blue channel of H.264 streams. 
*Formula:* `I_wm(x,y) = (I_raw(x,y) & 0xFE) | B_uid`
This ensures that even if metadata is stripped, the source attribution survives.

### 3. Network Behavioral Analysis
Employs Scapy-based packet sniffing to monitor local egress traffic. It flags unauthorized redistribution by detecting TCP/UDP flows that exceed 25 Mbps to non-whitelisted IP addresses, preventing real-time stream interception and exfiltration.

## Project Structure
- `/forensics/watermark.py`: Steganographic embedding and extraction logic.
- `/network/sniffer.py`: Scapy-based network egress monitoring.
- `/src/App.tsx`: The React/Vite implementation of the Security HUD (designed with Next.js portability in mind).

## The Chain of Custody
In 2026, digital evidence is presumed manipulated until proven authentic. Aura-Forensic flips this paradigm by embedding cryptographic attribution at the sensor level and monitoring the network transport layer for interception, ensuring a mathematically verifiable Chain of Custody.
