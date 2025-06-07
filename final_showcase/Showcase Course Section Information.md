### **Semester 1: Cybersecurity Basics**

**What I Learned:**  
In this course, I learned the essential building blocks of cybersecurity like how to protect sensitive data, create secure systems, and respond when something goes wrong. I explored how strong passwords, encryption, and planning can defend against real threats. I also learned how companies respond to attacks by detecting them early, limiting the damage, and improving their systems afterward.

---

**3 Key Tools Used:**

1. **Password Hashing** – A technique to turn passwords into unreadable strings so they can't be stolen in plain text.

2. **Encryption** – Used to lock messages and files so only the right person can unlock them.

3. **Incident Classification Models** – Help decide how serious a cyberattack is and how quickly to respond.

   ---

**3 Main Projects:**

1. **Security Policy Design**  
   I created a set of rules to keep user accounts safe by using strong passwords, limiting login attempts, and adding two-factor authentication (2FA). This policy also followed the CIA Triad—Confidentiality, Integrity, and Availability—to ensure user data stays safe, accurate, and accessible.

2. **Incident Response Plan**  
   I developed a step-by-step plan for how a company like Spotify should react to a real cyberattack. The plan included detecting the attack, locking down affected accounts, warning users, and reporting the incident in line with laws like GDPR and CCPA.

3. **Encryption and Hashing Demo**  
   I demonstrated how to encrypt a secret message so only someone with the passkey can read it, and how to hash a piece of text to prove it hasn’t been changed. These are core tools used to protect data and verify its integrity.

---

### **Semester 2: Network Security**

**What I Learned:**  
In this course, I explored how computer networks work and how to protect them from threats. I learned to build network security from the ground up—setting up secure network structures, monitoring for suspicious activity, and reacting quickly when something goes wrong. I also practiced using real tools to test and secure networks, including firewalls, scanning tools, and traffic analyzers.

---

**3 Key Tools Used:**

1. **Wireshark** – Helps visualize and analyze network traffic to spot anything unusual or suspicious.

2. **Snort** – Detects and alerts on common attack patterns, like port scans or suspicious web requests.

3. **Nmap** – Scans networks to find open doors (ports) and services that attackers could exploit.

---

**3 Main Projects:**

1. **Network Security Implementation**  
   I configured a firewall to only allow safe traffic (like HTTPS), set up an intrusion detection system (IDS) to catch attacks like port scans, and wrote rules to automatically block dangerous web requests. This taught me how to build a layered defense for a real network.

2. **Network Event Monitoring and Incident Response**  
   I investigated a simulated brute-force login attack using logs and response steps. I blocked the attacker's IP address, strengthened login settings, and updated firewall and SSH settings to prevent future intrusions. This showed how real-world attacks are detected and stopped.

3. **Network Tool Exploration and Testing**  
   I used Wireshark to examine live traffic and found things like encrypted connections, service discovery attempts, and failed pings. I also used scanners to find misconfigured services and ran penetration tests to identify open ports and vulnerabilities. This helped me think like both a defender and an attacker.

### **Semester 3: Cyber Threats and Vulnerabilities**

**What I Learned:**  
 In this course, I studied how cyber attackers find weaknesses in systems and how defenders can stop them. I learned to identify threats, scan for vulnerabilities, and respond quickly to attacks. I also practiced using threat intelligence—information about real-world attackers—to improve defenses. The course taught me how to think like both an attacker and a defender, and how to prepare systems to handle threats before they become serious problems.

---

**3 Key Tools Used:**

1. **Nmap** – A scanning tool used to discover devices, open ports, and vulnerabilities in a network.

2. **Graylog** – A tool for monitoring logs and alerts, helpful for detecting unusual behavior like login attempts.

3. **OpenCTI** – A threat intelligence platform that maps attacker behavior using real-world data and the MITRE ATT\&CK framework.

---

**3 Main Projects:**

1. **Threat Intelligence with OpenCTI**  
    I used OpenCTI to study how attackers operate, what tools they use, and which vulnerabilities they target. I connected it with MITRE ATT\&CK to track attacker patterns and identify common techniques like phishing or credential theft.

2. **Security Monitoring and Incident Response with Graylog**  
    I created alerts to detect suspicious activity—like too many failed logins—and used firewalls to block threats. I also practiced responding to incidents by securing systems, writing reports, and improving defenses based on what I learned.

3. **Vulnerability and Risk Assessment**  
    I scanned networks with Nmap to find weak spots (like open ports or outdated services) and then wrote risk reports explaining how those issues could be fixed. I also classified risks by how serious they were and proposed solutions like patching, stronger passwords, and network changes.

---

### **Semester 4: Ethical Hacking**

**What I Learned:**  
In this course, I learned how ethical hackers think and work. I explored the techniques attackers use to find weak spots in systems and how to safely test those systems in a controlled environment. The course covered everything from researching targets, scanning for open doors (called “ports”), finding security holes (vulnerabilities), and even attempting to exploit those weaknesses—all while staying ethical and legal.

---

**3 Key Tools Used:**

1. **Nmap** – A tool that scans systems to find what services are running and what might be vulnerable.

2. **Metasploit** – A tool used to safely test known exploits (vulnerabilities) in a lab setup.

3. **OWASP ZAP** – A scanner used to find security issues in websites and web applications.

---

**3 Main Projects:**

1. **Ethical Hacking Lab Setup with Parrot OS**  
    I built a safe virtual lab using Parrot OS in VirtualBox and installed hacking tools like Nmap, Wireshark, and Metasploit. This gave me a private space to practice hacking techniques without affecting any real systems.

2. **Recon, Scanning, and Vulnerability Analysis**  
    I used tools like theHarvester and Nmap to gather public information about a target (like IP addresses and subdomains), scanned for open ports and services, and analyzed results using vulnerability scanners. I also reviewed risks like denial-of-service and weak web security.

3. **Web App and Exploitation Testing**  
    I tested a website using OWASP ZAP and found issues like missing security headers and open directory listings. Then, using Metasploit, I attempted to exploit a known vulnerability in an FTP service in a lab environment—demonstrating how attackers might break in, and why patching these weaknesses matters.

---

### **Semester 5: Penetration Testing**

**What I Learned:**  
 In this course, I learned how to simulate real cyberattacks in a safe and controlled environment. The goal was to think like a hacker in order to discover and fix weaknesses before they can be used by actual attackers. I followed a professional process used in the cybersecurity industry—starting with planning, then scanning systems for vulnerabilities, attempting exploitation, and finally documenting everything in a clear and ethical way.

---

**🛠 3 Key Tools Used:**

1. **Nmap** – Scans systems to find what services are running and checks for known weaknesses.

2. **Nikto** – Tests websites for risky configurations, outdated software, and exposed files.

3. **Metasploit** – A framework used to test known exploits in a controlled lab environment.

---

**✅ 3 Main Projects:**

1. **Penetration Testing Methodology Plan**  
    I developed a complete plan for how to ethically and professionally perform a penetration test. It included scoping the engagement, outlining the steps to follow, choosing tools, and documenting everything from start to finish in line with real-world standards like PTES and OSSTMM.

2. **Network and Vulnerability Testing**  
    I scanned a vulnerable machine using Nmap and Nikto to identify misconfigured services and exposed files. I discovered issues like anonymous FTP access, outdated Apache and SSH versions, and SQL injection vulnerabilities. I then documented the risks and suggested how to fix them to reduce the chance of a real attack.

3. **Initial Exploitation and Reporting**  
    I used a combination of scanning and manual testing to exploit a known weakness in SSH, successfully logging into a test machine using default credentials. I then created a professional report detailing the exploitation process, the risks involved, and the recommended fixes to prevent this kind of access in the future.

---

### **Semester 6: Digital Forensics**

**What I Learned:**  
 In this course, I learned how to investigate digital evidence after a security incident. I practiced collecting data from devices (like hard drives and memory), preserving that data without changing it, and analyzing it to find clues—just like a digital detective. I used real forensic tools to recover deleted files, examine login records, and build timelines to figure out what happened and when.

---

**3 Key Tools Used:**

1. **FTK Imager** – Used to create exact copies of hard drives and inspect them without making changes.

2. **Autopsy** – A digital forensics tool that helps explore files, deleted data, and user activity.

3. **Wireshark** – Used to capture and examine network activity to detect signs of malicious behavior.

---

**3 Main Projects:**

1. **Forensic Case Investigation: Unauthorized File Access**  
    I analyzed a school lab computer after someone accessed a restricted “Staff” folder. I collected evidence using FTK Imager, confirmed that a student copied a file they shouldn’t have accessed, and tracked their browser history to show intent. I followed forensic best practices and documented every step to preserve the chain of custody.

2. **USB Drive and Disk Image Analysis**  
    I examined a suspicious USB drive using FTK and performed data carving with Foremost to recover deleted files. I found hidden system files, suspicious executables, and unusual gaps in storage (called "unallocated space"), suggesting that files had been hidden or wiped. I also built a timeline to show when key files were last used or changed.

3. **Network Forensics and Login Timeline Reconstruction**  
    I captured encrypted network traffic during GitHub login attempts using Wireshark and matched it with system login records on macOS. Even though the traffic was encrypted, I proved multiple failed login attempts happened by matching the timing across different logs and building a full event timeline.

---

