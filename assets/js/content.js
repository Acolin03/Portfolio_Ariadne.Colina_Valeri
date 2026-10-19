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
  tagline: "Electrical engineering student focused on signal processing, embedded systems and machine learning.",
  email: "ariadnecolina@gmail.com",
  schoolEmail: "ariadne.colina_valeri@tufts.edu",
  linkedin: "https://www.linkedin.com/in/ariadne-colina-valeri",
  github: "https://github.com/Acolin03",
  resume: "resume.pdf",
  portfolioPdf: "portfolio.pdf",
  url: "https://acolin03.github.io/Portfolio_Ariadne.Colina_Valeri/",
  photo: "assets/img/profile.jpg",
  contactNote: "Open to internships in signal processing, embedded systems and machine learning, in biotech or defense.",

  about: [
    "I am an electrical engineer who enjoys problems that invite different perspectives. The projects I have chosen throughout my undergraduate studies have led me to signal processing, embedded systems, machine learning, networking, communications and audio.",
    "Since most of my projects center on manipulating and filtering signals, I am seeking an internship connected to that work. This semester, I am focused on the Junior Design project, in which I am building an autonomous robot, and on a MIDI instrument for Electronic Musical Instrument Design, which lets me explore how technology can be both creative and unconventional. Building on these projects, I aim to work in the biotech or defense industries, or in a related field."
  ],

  languages: ["English (fluent)", "Spanish (fluent)", "French (fluent)", "Italian (beginner)"],

  interests: ["Singing", "Rock climbing (Tufts Climbing Team)", "Artistic swimming: 2021 USA Florida Junior Champion and 2022 Olympic Trials Qualifier"],

  skills: {
    "Programming": ["C", "C++", "Python (PyTorch, pandas, CUDA)", "MATLAB", "SystemVerilog", "Arduino", "UART", "SPI", "I2C"],
    "Hardware and Design": ["AutoCAD", "SolidWorks", "Onshape", "LTspice", "PCB design"],
    "Lab Tools and Components": ["Oscilloscope", "FPGA board", "Analog Discovery 2 (logic/spectrum analyzer)", "STM32 microcontroller", "ESP32"],
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
      role: "Resident Assistant",
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
      summary: "An app I built to stay organized without spending more time planning than doing.",
      tools: ["JavaScript", "HTML and CSS", "Firebase", "Google Calendar sync"],
      cover: "focus.png",
      sections: [
        { heading: "Problem", body: [
          "I realized I was spending more time planning my day than actually doing it, and my plans rarely went the way I wrote them. The apps I used each covered one piece, a calendar for classes, a task list for homework and something else for money and habits, and none of them worked together. So I built Astrolabe, where each part answers something those apps were missing."
        ]},
        { heading: "A Single Starting Point", image: "focus.png",
          missing: "Planning my day took longer than doing what was in it.",
          fix: "The first screen, \"Focus\", has one text box and three answers: what is happening now, what is next and what is due soon. You type something the way you would say it, like \"Bio quiz Friday at 10\" or \"coffee $4.50\", and the app turns it into a task, an expense or a repeating plan, with a card to check before it saves. A sentence with several deadlines becomes separate tasks, each with its own date." },
        { heading: "Tasks That Schedule Themselves", image: "tasks.png",
          missing: "A task list tells you what is due, but not when you will actually do the work.",
          fix: "Each task has an estimate of how long it needs. Since people tend to underestimate their own work, the app adds half again to each estimate, or uses what it learns from how long your tasks actually take. One button, \"Plan my week\", fits that time into your free time before each due date and puts it on the calendar. Anything that cannot fit is named, so you find out on Monday and not the night before." },
        { heading: "A Calendar That Includes Real Life", image: "today.png",
          missing: "Calendars only hold appointments and leave out the rest of the day, like sleep, meals and work shifts.",
          fix: "Classes, office hours, shifts, meals, workouts and sleep all show up as real blocks. Free time is whatever is left, shown as actual windows like \"2 PM to 5 PM\" instead of a number of hours." },
        { heading: "Room for Self-Reflection", image: "journal.png",
          missing: "Self-reflection is something people download a whole separate app to do.",
          fix: "I based the journal on a shadow journal setup, which is meant to help with self-improvement and understanding your own identity. Each day gets a page with an optional prompt: a short quotation, mostly from Carl Jung, followed by one line to start from. The months you have written stand on a shelf, and the journal can be locked with a password and is encrypted." },
        { heading: "A Habit Tracker You Do Not Want to Lose", image: "voyage.png",
          missing: "Habit apps count streaks with points that only go up, so missing a day costs nothing.",
          fix: "Your consistency is a ship sailing through the history of navigation, from a Greek galley to Apollo landing on the Moon, with 365 levels in all. Each day you keep clears a level, a missed day damages the ship and three in a row send you back to the start of that era. A loss is felt about twice as strongly as an equal gain (Kahneman and Tversky, 1979), so something you built and could lose motivates more than a score. Two hours before bed, the app lists what is left." },
        { heading: "How I Built It", body: [
          "I wrote Astrolabe in plain HTML, CSS and JavaScript, with no framework. Everything saves in the browser first and syncs through Firebase when you sign in, so it follows you across devices, and the whole app works in English, Spanish, French, Italian and German."
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
      course: "Embedded Systems",
      date: "Jan. 2026 to May 2026",
      summary: "A real-time audio effects board that records sound and lets users remix it with seven effects, using only on-chip memory.",
      tools: ["STM32L432KC", "C", "ADC and DAC", "Oscilloscope"],
      cover: "youtube:uLtt11RuFwQ",
      sections: [
        { heading: "Problem", body: [
          "The board records sound and plays it back with effects like echo, reverse, pitch and speed, all within the STM32's 64KB of on-chip memory. Since every effect depends on a clean recording, the first problem I had to solve was that playback came out with a high-pitched hiss and clicks."
        ]},
        { heading: "Solution", body: [
          "To fix the hiss, I wrote a timer-driven state machine so every sample was recorded and played at a steady rate, and I gave each microphone reading more time to finish so no sample was cut short.",
          "The clicks came from sudden jumps in the speaker signal, so I held the speaker at a steady resting level between clips and faded each clip in and out."
        ]},
        { heading: "Result", body: [
          "An oscilloscope confirmed that the playback matched the original recording. I also checked each effect's output on the oscilloscope, such as speed and pitch, to make sure the signal processing was correct."
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
      course: "Digital Logic Circuits",
      date: "Sept. 2025 to Dec. 2025",
      summary: "An 8-octave synthesizer (16Hz to 8kHz) written in SystemVerilog for a MIDI keyboard.",
      tools: ["SystemVerilog", "FPGA", "PWM"],
      cover: "youtube:cmLPXOcdjE4",
      sections: [
        { heading: "Problem", body: [
          "Since each octave doubles a note's frequency, my first design calculated every note by dividing on the chip. Division is so costly in hardware that the design needed over 250% of the FPGA's space."
        ]},
        { heading: "Solution", body: [
          "Dividing by 2 is the same as shifting bits, so I hand-calculated one octave and used bit shifts for the rest, which brought the design within the chip's capacity.",
          "Testing the octaves then revealed that chords distorted when notes combined, so I mixed the notes with PWM, which lets 6 notes play clearly at once."
        ]},
        { heading: "Result", body: [
          "The keyboard plays a full 12-note scale across 8 octaves, with chords of up to 6 clear notes."
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
      course: "Circuits and Electronics",
      date: "Fall 2025",
      summary: "A traffic light that counts the cars passing it and adjusts how long its red and green lights last.",
      tools: ["Arduino", "Photodiode", "Op-amp comparator", "MOSFETs", "Analog Discovery 2"],
      cover: "youtube:9rmVGDoX5m4",
      sections: [
        { heading: "Problem", body: [
          "A traffic light on a fixed timer makes drivers wait just as long on an empty road as on a busy one. Our goal was a light that reacts to the traffic it sees, so more cars shorten the red light and lengthen the green, and fewer cars do the opposite."
        ]},
        { heading: "Design", body: [
          "Each car is an object passing between a light and a photodiode. Since the photodiode's signal is noisy, an op-amp compares it with a clean, stable reference voltage and turns each car into one clear digital pulse.",
          "An Arduino counts those pulses during each green light and uses a timer to set the length of the next red light, while MOSFETs act as switches so the Arduino can drive all six LEDs."
        ]},
        { heading: "Result", body: [
          "In our demo, light traffic produced a long red light, and heavy traffic produced a shorter red light and a longer green."
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
      summary: "Testing whether a more aggressive AI model could find better RRAM memory designs without inventing ones that cannot physically exist.",
      tools: ["Python", "PyTorch", "pandas", "CUDA", "CTGAN", "PINN"],
      cover: "pareto.png",
      sections: [
        { heading: "Problem", body: [
          "The published framework I extended used a CVAE, a model that averages its training data. That made it reliable for standard designs, although it also smoothed away the extreme designs where the best performance is found."
        ]},
        { heading: "Approach", body: [
          "I replaced the CVAE with a CTGAN, which searches those extremes more aggressively. Since an aggressive search can also invent designs that cannot physically exist, I used the framework's physics model (PINN) as a referee to reject them."
        ]},
        { heading: "Scaling the Data", body: [
          "The CTGAN collapsed at 500 training samples and stayed noisy at 2,500, so I grew the dataset tenfold to 5,000 samples, where it converged across 3 oxide materials (Al2O3, HfO2 and TiO2)."
        ]},
        { heading: "Result", body: [
          "The best Al2O3 design reached 25% higher endurance and 11% lower switching energy than the published result, in exchange for slightly slower switching (6.57ns vs 4.07ns). This showed that the adversarial approach works once it has enough data."
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
      course: "Linear Systems",
      date: "Jan. 2026 to May 2026",
      summary: "A PID controller that keeps a UAV level in pitch, paired with a Wiener filter that restores the RF signals it collects.",
      tools: ["MATLAB", "PID control", "Wiener filtering"],
      cover: "controllers.png",
      sections: [
        { heading: "Problem", body: [
          "A UAV that shakes while collecting RF signals blurs them, so keeping it level is the first step toward collecting clear signals from the air."
        ]},
        { heading: "Controller Design", body: [
          "Using Routh-Hurwitz analysis, I first proved that P and PI controllers can never stabilize the UAV, which meant it needed a full PID controller. To find the best PID settings, I searched 15,625 gain combinations and reached a 52ms rise time, 2.6% overshoot and 500ms settling time, all within real UAV specs."
        ]},
        { heading: "Signal Restoration", body: [
          "Since even a stable UAV shakes slightly and blurs the signals it receives, I then restored a blurred, noisy RF signal with a Wiener filter in MATLAB, cutting error by 77% compared with a direct inverse (MSE 2.272 to 0.521)."
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
      course: "Junior Design",
      date: "Sept. 2026 to Present",
      summary: "An autonomous robot that follows a colored lane and avoids obstacles using IR and color sensing.",
      tools: ["ESP32", "Arduino", "IR LED and photodetector", "PCB design", "SolidWorks"],
      cover: "",
      sections: [
        { heading: "Problem", body: [
          "The robot has to follow a colored lane and avoid obstacles without anyone controlling it, and it may only accept commands from our own team. That means every decision it makes depends on sensor readings and commands it can trust."
        ]},
        { heading: "State Machine", body: [
          "I am building a 7-state state machine on the ESP32. A pushbutton interrupt moves the robot to its next state, an LED shows which state it is in, and a websocket command can jump it straight to a chosen state. Every websocket command is authenticated with our team key, and any command without it is rejected."
        ]},
        { heading: "Obstacle Sensing", body: [
          "To detect obstacles, an IR LED shines forward and a photodetector measures the light that bounces back. Light already in the room also reaches the detector and throws off that measurement, so I chose the resistor values for the LED and photodetector and subtract the room's background light from each reading."
        ]},
        { heading: "Lane Following", body: [
          "The color sensor reads light reflected off the track, and noise in those readings can make the robot mistake one lane color for another. I am programming the sensing to filter that noise before the robot decides which color it is on, so its steering acts on reliable data."
        ]},
        { heading: "Physical Design", body: [
          "I am designing a ladybug-shaped body in SolidWorks and a custom ESP32 PCB, with parts chosen from datasheets, to replace the breadboard wiring inside it."
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
      course: "Electronic Musical Instrument Design",
      date: "Fall 2026",
      summary: "Designing and building my own electronic musical instrument from scratch.",
      tools: ["Max", "MIDI", "NN-19 sampler", "Subtractor synthesizer"],
      cover: "",
      sections: [
        { heading: "Objective", body: [
          "The goal is to build an electronic instrument that is creative and also useful to the person playing it."
        ]},
        { heading: "Concept Under Consideration", body: [
          "One idea I am considering is for musicians who read sheet music on a tablet while practicing with a recorded accompaniment. Since their hands are busy playing, they cannot slow the recording down, so the accompaniment would follow the spot they are reading and slow down or speed up with them."
        ]},
        { heading: "Progress", body: [
          "So far I have learned the basics of sound programming with the NN-19 sampler and the Subtractor synthesizer, set up drum pads and a MIDI keyboard, and started working in Max."
        ]},
        { heading: "Next Steps", body: [
          "Our teams are forming now, and the next steps are choosing a concept and building the instrument."
        ]}
      ],
      gallery: [],
      links: []
    }
  ]
};
