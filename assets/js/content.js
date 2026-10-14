/* =====================================================================
   CONTENT FILE: this is the only file you need to edit.
   Everything on the site (your info, projects, experience) comes from here.

   Lines marked TODO are placeholders. Replace them with your own words,
   or delete the line if you don't need it. On the live site, anything
   still marked TODO is hidden automatically.

   To add a NEW PROJECT: copy one whole { ... } block inside "projects",
   paste it at the end of the list, and change the text.
   See README.md for step-by-step instructions.
   ===================================================================== */

const SITE = {
  name: "Ariadne Colina-Valeri",
  title: "Electrical Engineering Student",
  school: "Tufts University",
  graduation: "B.S. Electrical Engineering, May 2028",
  gpa: "3.37/4.00",
  honors: ["SHPE Scholar", "HSF Scholar", "Dean's List (2024 to 2026)", "BEST Scholar", "HIFF Scholar", "QuestBridge Scholar"],
  coursework: ["Junior Design", "Embedded Systems", "Circuits and Electronics", "Linear Systems", "Modern Physics"],
  tagline: "",
  email: "ariadnecolina@gmail.com",
  schoolEmail: "ariadne.colina_valeri@tufts.edu",
  linkedin: "https://www.linkedin.com/in/ariadne-colina-valeri",
  github: "https://github.com/Acolin03",
  resume: "resume.pdf",
  portfolioPdf: "portfolio.pdf",
  url: "https://acolin03.github.io/Portfolio_Ariadne.Colina_Valeri/",
  photo: "assets/img/profile.jpg",
  contactNote: "Open to internships in embedded systems, signal processing and machine learning, in biotech or defense.",

  about: [
    "I approach engineering problems by looking beyond the expected method to find the path to the right answer. My work spans embedded systems, signal processing and machine learning, with a focus on extracting reliable information from noisy signals so that a system can act on it with confidence.",
    "This semester, my principal projects are an autonomous ESP32 robot for EE 31 Junior Design, for which I am developing the sensing logic and preparing a custom PCB, and an original electronic musical instrument for EE 95. Going forward, I intend to apply this work to biotechnology, particularly brain-computer interfaces and neural signal processing, or to defense and aerospace through RF signal processing."
  ],

  languages: ["English (fluent)", "Spanish (fluent)", "French (fluent)", "Italian (beginner)"],

  interests: ["Singing", "Rock climbing (Tufts Climbing Team)", "Artistic swimming: 2021 USA Florida Junior Champion and 2022 Olympic Trials Qualifier"],

  skills: {
    "Programming": ["C", "C++", "Python (PyTorch, pandas, CUDA)", "MATLAB", "SystemVerilog", "Arduino", "UART"],
    "Hardware and Design": ["AutoCAD", "SolidWorks", "Onshape", "PCB design"],
    "Lab Tools and Components": ["Oscilloscope", "FPGA board", "Analog Discovery 2", "STM32 microcontroller", "ESP32"],
    "Methods": ["State machines", "Signal filtering", "PID control", "Machine learning (CTGAN, PINN)"]
  },

  experience: [
    {
      group: "Engineering Experience",
      role: "Control Systems Engineer Intern",
      org: "GE Transportation / Wabtec, Erie, PA",
      date: "May 2026 to July 2026",
      points: [
        "Automated the extraction of locomotive diagnostic data in Python, reducing a process that required a full afternoon to approximately one hour.",
        "Built a Fault Analysis Module (FAM) from circuit schematics that flags failing parts across 63 locomotive devices.",
        "Conducted forced open and closed fault tests on each device, exposing an FPGA offset that skewed the data differently on each train.",
        "Authored device-specific fault analysis documentation to shorten troubleshooting time on the locomotive."
      ]
    },
    {
      group: "Engineering Experience",
      role: "Research Assistant",
      org: "Tufts Emerging Circuits and Systems Lab",
      date: "Sept. 2025 to April 2026",
      points: [
        "Replaced a published RRAM memory model (CVAE) with a CTGAN to search for higher-performing designs.",
        "Expanded the training data tenfold, to 5,000 samples, and used a physics-informed neural network (PINN) to reject physically impossible designs.",
        "Identified an Al2O3 design with 25% higher endurance and 11% lower switching energy than the published result."
      ]
    },
    {
      group: "Leadership Experience",
      role: "Residential Assistant",
      org: "Tufts Residential Life and Learning",
      date: "Jan. 2026 to Present",
      points: [
        "Respond to resident incidents and resolve issues in high-pressure situations, mediating disputes and fostering a collaborative living environment in a house of 60 residents.",
        "Serve 24-hour on-call duty shifts, addressing lockouts, noise complaints and inquiries from residents and campus police.",
        "Plan and execute three programs per month within a fixed budget, ranging from house events to neighborhood events across several residence halls.",
        "Conduct health and safety inspections and coordinate shift coverage across a staff of 18 Resident Assistants."
      ]
    },
    {
      group: "Leadership Experience",
      role: "Head Treasurer",
      org: "SOLES (Tufts chapter of SHPE) and IEEE at Tufts",
      date: "Sept. 2024 to Present, head treasurer since March 2026",
      points: [
        "Manage all purchasing requests through Tufts Treasury and maintain a spending tracker; rebuilt the annual budgets, negotiating a 10% increase in funding and preventing budget cuts.",
        "Lead the five-person SOLES treasury team within an executive board of approximately 17, coordinating with the events team so that every event is funded and supplied.",
        "Direct the logistics of the chapter's attendance at the SHPE National Convention, including flights, tickets and check-in.",
        "Prepare members for the convention, including guidance on their portfolios and LinkedIn profiles."
      ]
    }
  ],

  /* -------------------------------------------------------------------
     PROJECTS
     id:       short name with no spaces (also the image folder name)
     featured: true = shown on the Projects tab
     status:   add status: "In progress" for something you are still building.
               It goes in the "Current Projects" group at the top.
     fields:   the filter buttons on the Projects tab this project appears
               under (Embedded Systems, Signal Processing, Machine Learning,
               Digital Design, Software, Instrument Design)
     cover:    main image, inside assets/img/projects/<id>/ (leave "" for none)
               or "youtube:VIDEO_ID" to use a YouTube video's thumbnail
     sections: the story of the project, in order. Each has a heading
               and a list of paragraphs (body). A section can instead
               show a picture beside two short texts: image, missing
               (the gap it answers) and fix (the solution).
     gallery:  images and videos with captions, shown at the top of the
               project page. For a YouTube video use
               { type: "youtube", id: "VIDEO_ID", caption: "..." }
               and add vertical: true if it is a Short.
               Add wide: true to give an image the full row.
     links:    buttons under the project's title (code, report, poster)
     ------------------------------------------------------------------- */
  projects: [
    {
      id: "astrolabe",
      featured: true,
      title: "Astrolabe App",
      fields: ["Software"],
      course: "Personal project",
      date: "Aug. 2026 to Present",
      summary: "A web application that keeps students organized without the overhead of maintaining a planner.",
      tools: ["JavaScript", "HTML and CSS", "Firebase", "Google Calendar sync"],
      cover: "focus.png",
      sections: [
        { heading: "Problem", body: [
          "Students divide their schedules, coursework, finances and habits across separate tools, and keeping those tools current demands planning time of its own. Plans also rarely unfold exactly as written, so much of that effort is lost. Each component of Astrolabe addresses a gap those tools leave open."
        ]},
        { heading: "A Single Starting Point", image: "focus.png",
          missing: "Planning the day consumed more time than carrying it out.",
          fix: "The opening screen, \"Focus\", offers a single text field and three answers: what is happening now, what comes next and what is due soon. Entries written in natural language, such as \"Bio quiz Friday at 10\", are parsed for their date, time and type and filed automatically." },
        { heading: "Self-Scheduling Tasks", image: "tasks.png",
          missing: "A task list shows what is due but not when the work will be done.",
          fix: "Each task carries an estimate of the hours it requires. The \"Plan my week\" function allocates those hours to free time over the next seven days, ahead of each deadline, and limits planned work to four hours per day. Since people tend to underestimate their own workload, the app reserves more time than each estimate." },
        { heading: "A Calendar That Reflects Daily Life", image: "today.png",
          missing: "Calendars capture appointments but omit the rest of the day: sleep, meals and the time needed to prepare and travel between commitments.",
          fix: "Classes, work, commitments and sleep appear at their actual duration, and only intervals of an hour or longer count as free time." },
        { heading: "Guidance Without Restriction", image: "right-now.png",
          missing: "Applications that block distractions take the decision away from the user.",
          fix: "Astrolabe neither blocks nor locks anything. A planned session begins in one step, the app checks in at its midpoint and at its end, and a session can be moved to the next available window, so that skipping it becomes a deliberate decision with a new time attached." },
        { heading: "Self-Populating Lists", body: [
          "The shopping list assembles itself from planned meals and supplies marked as in use, and each item leaves the list once it is purchased or marked as already owned."
        ]},
        { heading: "Implementation", body: [
          "Astrolabe is built in plain HTML, CSS and JavaScript, without a framework or build step. Data is stored in the browser first and synchronized through Firebase after sign-in, keeping it consistent across devices. The interface is available in English, Spanish, French, Italian and German."
        ]}
      ],
      gallery: [],
      links: [
        { label: "Open Astrolabe", url: "https://myastrolabe.web.app" }
      ]
    },
    {
      id: "dj-board",
      featured: true,
      title: "DJ Board on an STM32",
      fields: ["Embedded Systems", "Signal Processing"],
      course: "EE 14 Embedded Systems",
      date: "Jan. 2026 to May 2026",
      summary: "A real-time audio effects processor that records sound and remixes it through seven effects, operating entirely within on-chip memory.",
      tools: ["STM32L432KC", "C", "ADC and DAC", "Oscilloscope"],
      cover: "youtube:uLtt11RuFwQ",
      sections: [
        { heading: "Problem", body: [
          "The board records audio, plays it back and applies effects including echo, reverse, pitch and speed, all within the STM32's 64KB of on-chip memory. Since every effect depends on a clean recording, the first problem to resolve was a playback marred by a high-pitched hiss and audible clicks."
        ]},
        { heading: "Solution", body: [
          "To eliminate the hiss, I implemented a timer-driven state machine that records and plays every sample at a constant rate, and allowed each microphone reading additional time to complete so that no sample was cut short.",
          "The clicks originated from abrupt jumps in the speaker signal, so I held the output at a steady resting level between clips and faded each clip in and out."
        ]},
        { heading: "Result", body: [
          "Oscilloscope measurements confirmed that playback matched the original recording, providing all seven effects with a clean signal."
        ]}
      ],
      gallery: [
        { type: "youtube", id: "uLtt11RuFwQ", caption: "Demonstration, part 1" },
        { type: "youtube", id: "Z741Z0-d_P4", vertical: true, caption: "Demonstration, part 2" }
      ],
      links: [
        { label: "View the Poster (PDF)", url: "assets/docs/EE14_DJ_Board_Poster.pdf" }
      ]
    },
    {
      id: "fpga-synth",
      featured: true,
      title: "FPGA Audio Synthesizer",
      fields: ["Digital Design"],
      course: "ES 4 Digital Logic Circuits",
      date: "Sept. 2025 to Dec. 2025",
      summary: "An eight-octave synthesizer (16Hz to 8kHz) implemented in SystemVerilog for a MIDI keyboard.",
      tools: ["SystemVerilog", "FPGA", "PWM"],
      cover: "youtube:cmLPXOcdjE4",
      sections: [
        { heading: "Problem", body: [
          "Each octave doubles a note's frequency, so the initial design computed every note through division on the chip. Division is so resource-intensive in hardware that the design required more than 250% of the FPGA's capacity."
        ]},
        { heading: "Solution", body: [
          "Since dividing by two is equivalent to a bit shift, I hand-calculated a single octave and derived the remaining octaves through bit shifts, bringing the design within the capacity of the chip.",
          "Subsequent testing revealed that chords distorted when notes combined, which I resolved by mixing the notes with PWM so that six notes play clearly at once."
        ]},
        { heading: "Result", body: [
          "The synthesizer plays a complete 12-note scale across eight octaves, with chords of up to six distinct notes."
        ]}
      ],
      gallery: [
        { type: "youtube", id: "7ZHiCPOwTYU", caption: "The synthesizer running on the board" },
        { type: "youtube", id: "cmLPXOcdjE4", vertical: true, caption: "MIDI keyboard demonstration, part 1" },
        { type: "youtube", id: "s6099okv2E0", vertical: true, caption: "MIDI keyboard demonstration, part 2" }
      ],
      links: [
        { label: "Read the Full Report (PDF)", url: "assets/docs/ES4_Synthesizer_Report.pdf" }
      ]
    },
    {
      id: "traffic-light",
      featured: true,
      title: "Smart Traffic Light",
      fields: ["Embedded Systems"],
      course: "EE 20",
      date: "Fall 2025",
      summary: "An adaptive traffic light that counts passing vehicles and adjusts the duration of its red and green phases accordingly.",
      tools: ["Arduino", "Photodiode", "Op-amp comparator", "MOSFETs", "Analog Discovery 2"],
      cover: "youtube:9rmVGDoX5m4",
      sections: [
        { heading: "Problem", body: [
          "A traffic light on a fixed timer holds drivers for the same interval on an empty road as on a busy one. The objective was a light that responds to the traffic it detects, so that heavier traffic shortens the red phase and lengthens the green, while lighter traffic does the opposite."
        ]},
        { heading: "Design", body: [
          "A light source illuminates a photodiode, and each object passing between them represents a vehicle. Since the photodiode signal is noisy, an op-amp compares it against a stable reference voltage and outputs a distinct digital pulse for each vehicle.",
          "An Arduino counts these pulses during each green phase and sets the duration of the following red phase with a timer, while MOSFETs act as electronic switches that allow the Arduino to drive all six LEDs."
        ]},
        { heading: "Result", body: [
          "In the demonstration, light traffic produced an extended red phase, and heavy traffic produced a shorter red phase and a longer green."
        ]}
      ],
      gallery: [
        { type: "youtube", id: "9rmVGDoX5m4", caption: "Demonstration with light and heavy traffic" },
        { type: "image", src: "breadboard.png", caption: "The complete circuit: photodiode and comparator, Arduino, and the LED traffic lights" }
      ],
      links: []
    },
    {
      id: "ml-research",
      featured: true,
      title: "CTGAN Design Discovery for RRAM",
      fields: ["Machine Learning"],
      course: "Tufts Emerging Circuits and Systems Lab",
      date: "Sept. 2025 to April 2026",
      summary: "An extension of a published AI framework for RRAM memory design, testing whether a more aggressive model can discover better designs without proposing ones that cannot physically exist.",
      tools: ["Python", "PyTorch", "pandas", "CUDA", "CTGAN", "PINN"],
      cover: "pareto.png",
      sections: [
        { heading: "Problem", body: [
          "The published framework relied on a CVAE, a model that averages its training data. This made it dependable for standard designs, although it also smoothed away the extreme designs where the best performance is found."
        ]},
        { heading: "Approach", body: [
          "I replaced the CVAE with a CTGAN, a model that explores those extremes more aggressively. Since an aggressive search can also generate designs that cannot physically exist, I used the framework's physics-informed neural network (PINN) as a referee to reject them."
        ]},
        { heading: "Scaling the Data", body: [
          "The CTGAN collapsed at 500 training samples and remained noisy at 2,500, so I scaled the dataset to 5,000 samples, at which point it converged across three oxide materials (Al2O3, HfO2 and TiO2)."
        ]},
        { heading: "Result", body: [
          "The best Al2O3 design achieved 25% higher endurance and 11% lower switching energy than the published result, in exchange for slightly slower switching (6.57ns versus 4.07ns). This demonstrated that the adversarial approach succeeds once it has sufficient data."
        ]}
      ],
      gallery: [
        { type: "image", src: "pareto.png", wide: true, caption: "Final results with 5,000 training samples. Each point is a generated design, and lower and further left is better. The star marks the best overall Al2O3 design." },
        { type: "image", src: "evolution.png", wide: true, caption: "Effect of dataset size: with 500 samples (left) the model collapses, and with 2,500 (right) it improves but remains noisy." }
      ],
      links: [
        { label: "Read the Paper (PDF)", url: "assets/docs/EE94_RRAM_Paper.pdf" }
      ]
    },
    {
      id: "uav-control",
      featured: true,
      title: "UAV Pitch Control and RF Signal Restoration",
      fields: ["Signal Processing"],
      course: "EE 23 Linear Systems",
      date: "Jan. 2026 to May 2026",
      summary: "A PID controller that stabilizes a UAV in pitch, paired with a Wiener filter that restores the RF signals it collects.",
      tools: ["MATLAB", "PID control", "Wiener filtering"],
      cover: "controllers.png",
      sections: [
        { heading: "Problem", body: [
          "A UAV that shakes while collecting RF signals blurs them, which makes keeping it level the first step toward clear signals."
        ]},
        { heading: "Controller Design", body: [
          "Through Routh-Hurwitz analysis, I demonstrated that P and PI controllers can never stabilize the UAV, which established the need for a full PID controller. A search across 15,625 gain combinations then produced a 52ms rise time, 2.6% overshoot and 500ms settling time, all within real UAV specifications."
        ]},
        { heading: "Signal Restoration", body: [
          "Since even a stable UAV shakes slightly and blurs the signals it receives, I restored a blurred, noisy RF signal with a Wiener filter, reducing error by 77% compared with a direct inverse (MSE 2.272 to 0.521)."
        ]}
      ],
      gallery: [
        { type: "image", src: "controllers.png", wide: true, caption: "Four controllers on the same UAV model: P-only oscillates indefinitely, PI diverges, PD settles with a steady-state error, and only the full PID (green) holds level." },
        { type: "image", src: "step-response.png", caption: "Step response of the optimal PID controller: 52ms rise time and 2.6% overshoot." },
        { type: "image", src: "cost-map.png", caption: "Cost of each gain combination. Dark regions fail the specifications, and the red star marks the optimum." },
        { type: "image", src: "wiener.png", wide: true, caption: "Wiener filter: error against the filter setting (left) and the restored RF signal over the original (right)." },
        { type: "image", src: "coupling.png", wide: true, caption: "A steadier UAV produces a shorter blur and a lower restoration error." }
      ],
      links: [
        { label: "Read the Full Report (PDF)", url: "assets/docs/EE23_UAV_Report.pdf" }
      ]
    },
    {
      id: "slam-robot",
      status: "In progress",
      featured: true,
      title: "Autonomous ESP32 Robot",
      fields: ["Embedded Systems"],
      course: "EE 31 Junior Design",
      date: "Sept. 2026 to Present",
      summary: "An autonomous robot that follows a colored lane and avoids obstacles using infrared and color sensing.",
      tools: ["ESP32", "Arduino", "IR LED and photodetector", "PCB design", "SolidWorks"],
      cover: "",
      sections: [
        { heading: "Problem", body: [
          "The robot must follow a colored lane and avoid obstacles without human input while also receiving commands from a partner team's robot, so every decision it makes depends on sensor readings it can trust."
        ]},
        { heading: "State Machine", body: [
          "I am building a seven-state state machine on the ESP32. A pushbutton interrupt advances the robot to its next state, an LED indicates the active state, and a command sent over a websocket can move the robot directly to a chosen state. Each websocket command is authenticated with a team key, and all others are rejected."
        ]},
        { heading: "Obstacle Sensing", body: [
          "An infrared LED shines forward while a photodetector measures the light reflected back from an obstacle. Since light already in the room also reaches the detector and distorts that measurement, I selected the resistor values for the LED and photodetector and subtract the ambient light from each reading."
        ]},
        { heading: "Lane Following", body: [
          "The color sensor reads light reflected from the track, and noise in those readings can cause the robot to mistake one lane color for another. I am developing detection logic that filters this noise before the robot identifies the color, so that its steering corrections act on reliable data."
        ]},
        { heading: "Physical Design", body: [
          "I am designing a ladybug-shaped body in SolidWorks and a custom ESP32 PCB to replace the breadboard wiring inside it."
        ]}
      ],
      gallery: [],
      links: []
    },
    {
      id: "midi-instrument",
      status: "In progress",
      featured: true,
      title: "MIDI Instrument Creation",
      fields: ["Instrument Design"],
      course: "EE 95",
      date: "Fall 2026",
      summary: "The design and construction of an original electronic musical instrument, from concept to working prototype.",
      tools: ["Max", "MIDI", "NN-19 sampler", "Subtractor synthesizer"],
      cover: "",
      sections: [
        { heading: "Objective", body: [
          "The objective is to design and build an electronic musical instrument that is both creative and functional for the person using it."
        ]},
        { heading: "Concept Under Consideration", body: [
          "One concept serves musicians who read sheet music on a tablet while practicing with a recorded accompaniment. With both hands occupied, a player cannot slow the recording down; the accompaniment would instead follow the passage being read, slowing down or speeding up with the player."
        ]},
        { heading: "Progress", body: [
          "To date, I have learned the fundamentals of sound programming with the NN-19 sampler and the Subtractor synthesizer, configured drum pads and a MIDI keyboard, and begun development in Max."
        ]},
        { heading: "Next Steps", body: [
          "With project teams now forming, the next steps are selecting a concept and building the instrument."
        ]}
      ],
      gallery: [],
      links: []
    }
  ]
};
