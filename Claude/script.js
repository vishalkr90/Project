const subjects = {
  java: {
    name: "Java",
    color: "#2364aa",
    summary: "OOP, exceptions, collections, threads, JVM, and core syntax.",
    topics: [
      "Class and object", "JVM JRE JDK", "Inheritance", "Polymorphism", "Encapsulation",
      "Abstraction", "Interface", "Abstract class", "Constructor", "Method overloading",
      "Method overriding", "Static keyword", "Final keyword", "Packages", "Access modifiers",
      "Exception handling", "Checked exception", "Unchecked exception", "String", "StringBuilder",
      "ArrayList", "LinkedList", "HashMap", "HashSet", "Iterator", "Generics", "Wrapper class",
      "Autoboxing", "Multithreading", "Thread lifecycle", "Synchronization", "Volatile",
      "File handling", "Serialization", "Lambda expression", "Stream API", "Functional interface",
      "Garbage collection", "this keyword", "super keyword", "Object class", "equals method",
      "hashCode method", "Comparable", "Comparator", "Enum", "Annotations", "JDBC", "MVC idea", "Unit testing"
    ],
    noteBullets: [
      ["Java basics", "Java is platform independent because source code compiles into bytecode, which the JVM runs on any supported machine.", "Use classes for blueprints, objects for real data, and methods for behavior.", "Main method signature is public static void main(String[] args)."],
      ["OOP principles", "Encapsulation hides data using private fields and public methods.", "Inheritance reuses behavior using extends; Java supports single class inheritance.", "Polymorphism lets the same method call behave differently through overloading and overriding.", "Abstraction exposes essential behavior through abstract classes and interfaces."],
      ["Exceptions", "Checked exceptions are verified at compile time, such as IOException.", "Unchecked exceptions occur at runtime, such as NullPointerException.", "Use try, catch, finally, throw, and throws to manage errors."],
      ["Collections", "ArrayList is good for fast index access, LinkedList is better for frequent insert/delete near ends.", "HashMap stores key-value pairs and requires stable equals/hashCode behavior.", "Generics improve type safety by catching wrong types during compilation."],
      ["Threads", "A thread moves through new, runnable, running, blocked/waiting, and terminated states.", "Synchronization protects shared data from race conditions.", "Prefer higher-level concurrency utilities for real projects."]
    ]
  },
  cn: {
    name: "Computer Networks",
    color: "#1d8a68",
    summary: "OSI/TCP-IP models, protocols, addressing, routing, and network security.",
    topics: [
      "OSI model", "TCP IP model", "Physical layer", "Data link layer", "Network layer",
      "Transport layer", "Application layer", "MAC address", "IP address", "Subnetting",
      "IPv4", "IPv6", "ARP", "ICMP", "DNS", "DHCP", "HTTP", "HTTPS", "FTP", "SMTP",
      "POP3", "IMAP", "TCP", "UDP", "Three way handshake", "Flow control", "Congestion control",
      "Sliding window", "Error detection", "CRC", "Checksum", "Hamming code", "Switch",
      "Router", "Hub", "Bridge", "Gateway", "Routing", "RIP", "OSPF", "BGP", "NAT",
      "Firewall", "VPN", "LAN", "WAN", "MAN", "Bandwidth", "Latency", "Packet switching", "Circuit switching"
    ],
    noteBullets: [
      ["Models", "OSI has seven layers: physical, data link, network, transport, session, presentation, application.", "TCP/IP is practical and commonly described as link, internet, transport, and application layers."],
      ["Addressing", "MAC address identifies a network interface on the local network.", "IP address identifies a device logically across networks.", "Subnetting divides a network into smaller networks for better management."],
      ["Transport", "TCP is connection-oriented, reliable, ordered, and uses acknowledgements.", "UDP is connectionless, faster, and useful for streaming, gaming, DNS, and VoIP.", "Flow control protects the receiver; congestion control protects the network."],
      ["Core protocols", "DNS converts domain names to IP addresses.", "DHCP automatically assigns IP configuration.", "ARP maps IPv4 addresses to MAC addresses inside a LAN."],
      ["Devices and security", "Switches forward frames using MAC addresses; routers forward packets using IP addresses.", "Firewalls filter traffic using rules.", "VPN creates encrypted tunnels over public networks."]
    ]
  },
  dsa: {
    name: "DSA in C",
    color: "#8a5a16",
    summary: "Arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching in C.",
    topics: [
      "Algorithm", "Time complexity", "Space complexity", "Big O", "Array", "Pointer",
      "Structure", "Dynamic memory", "Linked list", "Singly linked list", "Doubly linked list",
      "Circular linked list", "Stack", "Queue", "Circular queue", "Deque", "Recursion",
      "Linear search", "Binary search", "Bubble sort", "Selection sort", "Insertion sort",
      "Merge sort", "Quick sort", "Heap sort", "Hashing", "Collision", "Chaining",
      "Open addressing", "Tree", "Binary tree", "BST", "AVL tree", "Heap", "Graph",
      "Adjacency matrix", "Adjacency list", "BFS", "DFS", "Dijkstra", "Minimum spanning tree",
      "Prim", "Kruskal", "Topological sort", "Greedy", "Dynamic programming", "Backtracking",
      "File handling", "Memory leak", "Segmentation fault"
    ],
    noteBullets: [
      ["Complexity", "Time complexity estimates how running time grows with input size.", "Space complexity estimates extra memory use.", "Big O describes the upper growth trend, such as O(1), O(log n), O(n), O(n log n), and O(n^2)."],
      ["C foundations", "Pointers store addresses and are essential for dynamic structures.", "malloc allocates memory and free releases it.", "A structure groups related data fields into one custom type."],
      ["Linear structures", "Array uses contiguous memory and gives O(1) index access.", "Linked list grows dynamically but needs traversal for access.", "Stack follows LIFO; queue follows FIFO."],
      ["Trees and graphs", "BST keeps left values smaller and right values larger than the root.", "BFS explores level by level using a queue.", "DFS explores deeply using recursion or a stack."],
      ["Sorting and searching", "Binary search needs sorted data and runs in O(log n).", "Merge sort is stable and O(n log n).", "Quick sort is fast on average but can degrade to O(n^2)."]
    ]
  },
  os: {
    name: "Operating System",
    color: "#c24141",
    summary: "Processes, memory, scheduling, deadlock, files, synchronization, and virtual memory.",
    topics: [
      "Operating system", "Kernel", "System call", "Process", "Thread", "Program vs process",
      "Process states", "PCB", "Context switch", "Scheduling", "FCFS", "SJF", "Round Robin",
      "Priority scheduling", "Multilevel queue", "CPU utilization", "Throughput", "Turnaround time",
      "Waiting time", "Response time", "IPC", "Semaphore", "Mutex", "Monitor", "Critical section",
      "Race condition", "Deadlock", "Deadlock prevention", "Deadlock avoidance", "Banker's algorithm",
      "Memory management", "Contiguous allocation", "Paging", "Segmentation", "Virtual memory",
      "Demand paging", "Page fault", "FIFO replacement", "LRU replacement", "Thrashing", "File system",
      "Directory structure", "Disk scheduling", "FCFS disk", "SSTF", "SCAN", "C-SCAN", "I/O management",
      "Protection", "Security", "Booting"
    ],
    noteBullets: [
      ["OS basics", "An operating system manages hardware, programs, files, memory, and user interaction.", "The kernel is the core part that controls CPU, memory, and devices.", "System calls are the interface between user programs and the kernel."],
      ["Processes", "A process is a program in execution with its own address space.", "A thread is a lighter execution unit inside a process.", "Context switching saves one process state and loads another."],
      ["Scheduling", "FCFS is simple but may cause convoy effect.", "SJF can minimize waiting time but needs burst-time prediction.", "Round Robin gives each process a time quantum and is common in time-sharing systems."],
      ["Synchronization and deadlock", "Mutex allows one owner; semaphore is a counter-based synchronization tool.", "Deadlock needs mutual exclusion, hold and wait, no preemption, and circular wait.", "Banker's algorithm avoids unsafe allocation states."],
      ["Memory", "Paging divides memory into fixed-size pages and frames.", "Virtual memory lets programs run even when fully loaded memory is unavailable.", "Page replacement algorithms choose which page to remove after a page fault."]
    ]
  }
};

const store = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const state = {
  quizAnswers: [],
  currentQuiz: [],
  currentSubject: "java",
  sessions: store.get("studySessions", []),
  goal: store.get("studyGoal", 600),
  noteDone: store.get("noteDone", {}),
  quizStats: store.get("quizStats", {})
};

const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));

function buildQuestion(subjectKey, topic, index) {
  const subject = subjects[subjectKey];
  const otherTopics = subject.topics.filter(item => item !== topic);
  const options = shuffle([
    topic,
    otherTopics[(index + 7) % otherTopics.length],
    otherTopics[(index + 16) % otherTopics.length],
    otherTopics[(index + 25) % otherTopics.length]
  ]);

  const stems = [
    `In ${subject.name}, which option best matches "${topic}"?`,
    `Which concept is most directly connected with "${topic}" in ${subject.name}?`,
    `Identify the correct topic for this ${subject.name} clue: "${topic}".`,
    `A question mentions "${topic}". Which answer should you revise?`
  ];

  return {
    id: `${subjectKey}-${index}`,
    question: stems[index % stems.length],
    answer: topic,
    options,
    explanation: explainTopic(subjectKey, topic)
  };
}

function getQuestionBank(subjectKey) {
  return subjects[subjectKey].topics.map((topic, index) => buildQuestion(subjectKey, topic, index));
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function explainTopic(subjectKey, topic) {
  const explanations = {
    java: `${topic} is a core Java topic. Connect it with object-oriented design, type safety, runtime behavior, and clean code examples.`,
    cn: `${topic} is a networking topic. Revise its layer, purpose, data unit, and how it affects reliability, addressing, speed, or security.`,
    dsa: `${topic} is a DSA in C topic. Focus on data representation, pointer or memory behavior, operations, and time complexity.`,
    os: `${topic} is an operating-system topic. Link it with process control, memory management, synchronization, files, or resource allocation.`
  };
  return explanations[subjectKey];
}

function init() {
  populateSubjectSelects();
  renderDashboard();
  renderNotes("java");
  renderTracker();
  renderChat();
  bindEvents();
  updateStats();
}

function populateSubjectSelects() {
  const options = Object.entries(subjects)
    .map(([key, item]) => `<option value="${key}">${item.name}</option>`)
    .join("");
  $("#quizSubject").innerHTML = options;
  $("#studySubject").innerHTML = options;
}

function bindEvents() {
  $$(".nav-btn").forEach(button => {
    button.addEventListener("click", () => showView(button.dataset.view));
  });

  $$("[data-jump]").forEach(button => {
    button.addEventListener("click", () => showView(button.dataset.jump));
  });

  $("#startQuiz").addEventListener("click", startQuiz);
  $("#studyForm").addEventListener("submit", addStudySession);
  $("#goalMinutes").addEventListener("change", event => {
    state.goal = Number(event.target.value) || 600;
    store.set("studyGoal", state.goal);
    renderTracker();
    updateStats();
  });

  $("#aiForm").addEventListener("submit", askAI);
  $$(".suggestions button").forEach(button => {
    button.addEventListener("click", () => {
      $("#aiInput").value = button.dataset.question;
      $("#aiForm").requestSubmit();
    });
  });
}

function showView(view) {
  $$(".view").forEach(section => section.classList.toggle("active", section.id === view));
  $$(".nav-btn").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  $("#pageTitle").textContent = view === "ai" ? "AI Explainer" : titleCase(view);
}

function titleCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function renderDashboard() {
  $("#subjectCards").innerHTML = Object.entries(subjects).map(([key, subject]) => {
    const stat = state.quizStats[key] || { attempted: 0, correct: 0 };
    const accuracy = stat.attempted ? Math.round((stat.correct / stat.attempted) * 100) : 0;
    return `
      <article class="subject-card">
        <h3>${subject.name}</h3>
        <p>${subject.summary}</p>
        <div class="mini-progress"><span style="width:${accuracy}%; background:${subject.color}"></span></div>
        <p><strong>${accuracy}%</strong> quiz accuracy • 50 questions</p>
      </article>
    `;
  }).join("");
}

function startQuiz() {
  const subjectKey = $("#quizSubject").value;
  const count = Number($("#questionCount").value);
  state.currentSubject = subjectKey;
  state.currentQuiz = shuffle(getQuestionBank(subjectKey)).slice(0, count);
  state.quizAnswers = new Array(state.currentQuiz.length).fill(null);

  $("#quizArea").classList.remove("empty-state");
  $("#quizArea").innerHTML = `
    ${state.currentQuiz.map((item, index) => `
      <article class="question-card" data-index="${index}">
        <h3>${index + 1}. ${item.question}</h3>
        <div class="options">
          ${item.options.map(option => `
            <label class="option">
              <input type="radio" name="q${index}" value="${option}">
              <span>${option}</span>
            </label>
          `).join("")}
        </div>
        <p class="explanation" hidden>${item.explanation}</p>
      </article>
    `).join("")}
    <div class="quiz-actions">
      <button id="submitQuiz" class="primary-btn">Submit Quiz</button>
      <span id="quizResult" class="result"></span>
    </div>
  `;

  $$(".question-card input").forEach(input => {
    input.addEventListener("change", event => {
      const card = event.target.closest(".question-card");
      state.quizAnswers[Number(card.dataset.index)] = event.target.value;
    });
  });

  $("#submitQuiz").addEventListener("click", submitQuiz);
}

function submitQuiz() {
  let correct = 0;
  $$(".question-card").forEach(card => {
    const index = Number(card.dataset.index);
    const question = state.currentQuiz[index];
    const selected = state.quizAnswers[index];
    card.querySelectorAll(".option").forEach(option => {
      const value = option.querySelector("input").value;
      option.classList.toggle("correct", value === question.answer);
      option.classList.toggle("wrong", selected === value && selected !== question.answer);
    });
    card.querySelector(".explanation").hidden = false;
    if (selected === question.answer) correct++;
  });

  const subjectKey = state.currentSubject;
  const previous = state.quizStats[subjectKey] || { attempted: 0, correct: 0 };
  state.quizStats[subjectKey] = {
    attempted: previous.attempted + state.currentQuiz.length,
    correct: previous.correct + correct
  };
  store.set("quizStats", state.quizStats);

  $("#quizResult").textContent = `Score: ${correct}/${state.currentQuiz.length}`;
  renderDashboard();
  updateStats();
}

function askAI(event) {
  event.preventDefault();
  const input = $("#aiInput");
  const question = input.value.trim();
  if (!question) return;

  const messages = store.get("chatMessages", []);
  messages.push({ role: "user", text: question });
  messages.push({ role: "bot", text: generateAIAnswer(question) });
  store.set("chatMessages", messages);
  input.value = "";
  renderChat();
}

function renderChat() {
  const messages = store.get("chatMessages", [
    { role: "bot", text: "Hi! Ask me any topic from Java, Computer Networks, DSA in C, or Operating System. I will explain it in exam-friendly language with key points." }
  ]);

  $("#chatLog").innerHTML = messages.map(item => `
    <div class="message ${item.role}">${item.text}</div>
  `).join("");
  $("#chatLog").scrollTop = $("#chatLog").scrollHeight;
}

function generateAIAnswer(question) {
  const lower = question.toLowerCase();
  const subjectKey = Object.keys(subjects).find(key => {
    const subject = subjects[key];
    return lower.includes(subject.name.toLowerCase()) || subject.topics.some(topic => lower.includes(topic.toLowerCase()));
  }) || detectSubject(lower);

  const subject = subjects[subjectKey];
  const matchedTopic = subject.topics.find(topic => lower.includes(topic.toLowerCase())) || subject.topics[0];
  const note = subject.noteBullets.find(section => section.join(" ").toLowerCase().includes(matchedTopic.toLowerCase())) || subject.noteBullets[0];

  return `<strong>${matchedTopic} (${subject.name})</strong><br>${note.slice(1).join("<br>")}<br><br><strong>Exam tip:</strong> Write definition, purpose, one example, and one advantage or limitation.`;
}

function detectSubject(text) {
  if (text.includes("tcp") || text.includes("udp") || text.includes("network") || text.includes("ip")) return "cn";
  if (text.includes("process") || text.includes("deadlock") || text.includes("memory") || text.includes("page")) return "os";
  if (text.includes("array") || text.includes("pointer") || text.includes("tree") || text.includes("sort")) return "dsa";
  return "java";
}

function addStudySession(event) {
  event.preventDefault();
  const minutes = Number($("#studyMinutes").value);
  if (!minutes) return;

  state.sessions.unshift({
    subject: $("#studySubject").value,
    minutes,
    topic: $("#studyTopic").value.trim() || "General revision",
    date: new Date().toLocaleDateString()
  });
  store.set("studySessions", state.sessions);
  $("#studyTopic").value = "";
  renderTracker();
  updateStats();
}

function renderTracker() {
  $("#goalMinutes").value = state.goal;
  const total = state.sessions.reduce((sum, item) => sum + item.minutes, 0);
  const percent = Math.min(100, Math.round((total / state.goal) * 100));
  $("#goalFill").style.width = `${percent}%`;
  $("#goalText").textContent = `${total} / ${state.goal} minutes`;

  $("#historyList").innerHTML = state.sessions.length
    ? state.sessions.map(item => `
        <div class="history-item">
          <strong>${subjects[item.subject].name}</strong>
          <span>${item.minutes} min</span>
          <span>${item.date}: ${item.topic}</span>
        </div>
      `).join("")
    : `<p class="empty-state">No study sessions logged yet.</p>`;
}

function renderNotes(activeKey) {
  $("#notesTabs").innerHTML = Object.entries(subjects).map(([key, subject]) => `
    <button class="${key === activeKey ? "active" : ""}" data-note="${key}">${subject.name}</button>
  `).join("");

  const subject = subjects[activeKey];
  $("#notesContent").innerHTML = `
    <h2>${subject.name} Notes</h2>
    ${subject.noteBullets.map((section, index) => {
      const noteId = `${activeKey}-${index}`;
      return `
        <section class="note-section">
          <h3>${section[0]}</h3>
          <ul>${section.slice(1).map(point => `<li>${point}</li>`).join("")}</ul>
          <label class="note-check">
            <input type="checkbox" data-note-check="${noteId}" ${state.noteDone[noteId] ? "checked" : ""}>
            Mark complete
          </label>
        </section>
      `;
    }).join("")}
  `;

  $$("#notesTabs button").forEach(button => {
    button.addEventListener("click", () => renderNotes(button.dataset.note));
  });

  $$("[data-note-check]").forEach(input => {
    input.addEventListener("change", event => {
      state.noteDone[event.target.dataset.noteCheck] = event.target.checked;
      store.set("noteDone", state.noteDone);
      updateStats();
    });
  });
}

function updateStats() {
  const totalMinutes = state.sessions.reduce((sum, item) => sum + item.minutes, 0);
  const totalAttempted = Object.values(state.quizStats).reduce((sum, item) => sum + item.attempted, 0);
  const totalCorrect = Object.values(state.quizStats).reduce((sum, item) => sum + item.correct, 0);
  const accuracy = totalAttempted ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
  const doneNotes = Object.values(state.noteDone).filter(Boolean).length;

  $("#totalMinutes").textContent = totalMinutes;
  $("#overallAccuracy").textContent = `${accuracy}%`;
  $("#completedNotes").textContent = doneNotes;
}

init();