from scapy.all import sniff, IP, TCP, UDP
import json
import time

# Configuration Parameters
WHITELISTED_IPS = ["192.168.1.100", "10.0.0.5", "127.0.0.1"]
BANDWIDTH_THRESHOLD_MBPS = 25.0
MONITOR_DURATION = 10  # seconds

traffic_stats = {}

def packet_callback(packet):
    """
    Analyzes packet size and tracks egress flows to non-whitelisted IPs.
    """
    if IP in packet:
        src_ip = packet[IP].src
        dst_ip = packet[IP].dst
        packet_size = len(packet)

        # Monitor egress traffic (Assuming local subnet 192.168.x.x for demonstration)
        if src_ip.startswith("192.168.") and dst_ip not in WHITELISTED_IPS:
            if dst_ip not in traffic_stats:
                traffic_stats[dst_ip] = 0
            traffic_stats[dst_ip] += packet_size

def analyze_traffic():
    """
    Sniffs traffic for a set duration and flags unauthorized high-bandwidth streams.
    """
    print(f"[*] Aura-Forensic Network Engine: Monitoring egress traffic for {MONITOR_DURATION}s...")
    
    # Start sniffing
    sniff(prn=packet_callback, timeout=MONITOR_DURATION, store=0)

    alerts = []
    for ip, bytes_transferred in traffic_stats.items():
        # Convert bytes to Mbps
        mbps = (bytes_transferred * 8) / (MONITOR_DURATION * 1_000_000)
        
        if mbps > BANDWIDTH_THRESHOLD_MBPS:
            alerts.append({
                "destination_ip": ip,
                "bandwidth_mbps": round(mbps, 2),
                "protocol_suspected": "H.264/RTSP Stream",
                "status": "UNAUTHORIZED_EGRESS"
            })

    summary = {
        "network_status": "Anomalies Detected - Potential Stream Interception" if alerts else "Nominal - No unauthorized egress",
        "threat_level": "High" if alerts else "Low",
        "active_alerts": alerts
    }

    return json.dumps(summary, indent=4)

if __name__ == "__main__":
    result = analyze_traffic()
    print(result)
