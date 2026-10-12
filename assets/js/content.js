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
  tagline: "I build embedded systems that turn noisy signals into reliable decisions.",
  email: "ariadnecolina@gmail.com",
  linkedin: "https://www.linkedin.com/in/ariadne-colina-valeri",
  github: "https://github.com/Acolin03",
  resume: "resume.pdf",
  portfolioPdf: "portfolio.pdf",
  url: "https://acolin03.github.io/Portfolio_Ariadne.Colina_Valeri/",
  photo: "assets/img/profile.jpg",
  contactNote: "Open to internships in embedded systems, signal processing and machine learning, in biotech or defense.",

  about: [
    "I am most engaged when a problem requires thinking beyond the expected approach to find a path to the right answer. My work spans embedded systems, signal processing and machine learning, and much of it centers on cleaning up noisy signals so a system can act on them with confidence.",
    "This semester I have two main projects: an autonomous ESP32 robot for Junior Design, where I am building the sensing logic and preparing its custom PCB, and an electronic musical instrument that I am designing from scratch. Looking ahead, I want to bring this work into biotech, especially brain-computer interfaces and neural signal processing, or into defense and aerospace through RF signal processing."
  ],

  languages: ["English (fluent)", "Spanish (fluent)", "French (fluent)", "Italian (beginner)"],

  interests: ["Tufts climbing team", "Singing lessons"],

  skills: {
    "Programming": ["C", "C++", "Python", "PyTorch", "pandas", "CUDA", "MATLAB", "SystemVerilog", "Arduino"],
    "Hardware": ["STM32", "ESP32", "FPGA", "PCB design", "Sensor circuits", "UART"],
    "Tools": ["Oscilloscope", "Analog Discovery 2", "SolidWorks", "AutoCAD", "Onshape", "Max"],
    "Methods": ["State machines", "Signal filtering", "PID control", "Machine learning (CTGAN, PINN)"]
  },

  experience: [
    {
      group: "Engineering",
      role: "Control Systems Engineer Intern",
      org: "GE Transportation / Wabtec, Erie, PA",
      date: "May 2026 to July 2026",
      points: [
        "Built a live diagnostics tool that reads current and voltage feedback from 63 locomotive devices and flags parts that are failing before they break down.",
        "Set the failure limits from the locomotive circuit schematics and real production data, then tested failure modes by forcing each device open and closed.",
        "Automated a manual check that took a full afternoon, bringing it down to about an hour of data recording.",
        "Wrote device-specific fault analysis documentation to cut troubleshooting time on the locomotive."
      ]
    },
    {
      group: "Engineering",
      role: "Research Assistant",
      org: "Tufts Emerging Circuits and Systems Lab",
      date: "Sept. 2025 to April 2026",
      points: [
        "Replaced a CVAE with a CTGAN to explore beyond conservative data toward higher-performing RRAM designs.",
        "Applied a physics-informed neural network (PINN) to keep generated designs within realistic switching bounds.",
        "Expanded the training dataset so the CTGAN could reliably distinguish top-performing designs from noise."
      ]
    },
    {
      group: "Leadership",
      role: "Resident Assistant",
      org: "Tufts Residential Life and Learning",
      date: "Jan. 2026 to Present",
      points: [
        "Respond to resident incidents and mediate disputes in a house of 60 residents.",
        "Serve 24-hour on-call duty shifts, answering lockouts, noise complaints and questions from residents and campus police.",
        "Plan and run three programs a month on a set budget, from house events to neighborhood events across several dorms.",
        "Carry out room health and safety inspections and coordinate shift coverage with a staff of 18 RAs."
      ]
    },
    {
      group: "Leadership",
      role: "Head Treasurer",
      org: "SOLES (Tufts chapter of SHPE) and IEEE at Tufts",
      date: "Sept. 2024 to Present, head treasurer since March 2026",
      points: [
        "Manage all purchasing requests through Tufts Treasury and rebuilt annual budgets, negotiating a 10% increase in funding.",
        "Lead the five-person SOLES treasury team on an executive board of about 17, working with the events team so every event has its budget and materials.",
        "Organize the chapter's trip to the SHPE National Convention: flights, tickets and check-in logistics.",
        "Help members prepare for the convention, including their portfolios and LinkedIn profiles."
      ]
    }
  ],

  /* -------------------------------------------------------------------
     PROJECTS
     id:       short name with no spaces (also the image folder name)
     featured: true = shown on the Projects tab
     status:   add status: "In progress" for something you are still building.
               It goes in the "Currently building" group at the top.
     cover:    main image, inside assets/img/projects/<id>/ (leave "" for none)
               or "youtube:VIDEO_ID" to use a YouTube video's thumbnail
     sections: the story of the project, in order. Each has a heading
               and a list of paragraphs (body). A section can instead
               show a picture beside two short texts: image, missing
               (what was missing before) and fix (what this does).
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
      course: "Personal project",
      date: "Aug. 2026 to Present",
      summary: "A web app that keeps a student organized without the work of maintaining a planner.",
      tools: ["JavaScript", "HTML and CSS", "Firebase", "Google Calendar sync"],
      cover: "focus.png",
      sections: [
        { heading: "Problem", body: [
          "Students keep their schedule, coursework, money and habits in separate tools, and keeping those tools up to date takes planning time of its own. A plan also rarely goes exactly as written, so much of that time is lost. Each part of Astrolabe answers something those tools were missing."
        ]},
        { heading: "One place to start", image: "focus.png",
          missing: "Planning the day took longer than doing what was in it.",
          fix: "The first screen, \"Focus\", has one text box and three answers: what is happening right now, what is next and what is due soon. Anything typed the way it would be said aloud, such as \"Bio quiz Friday at 10\", is read for its date, time and type and filed in the right place." },
        { heading: "Tasks that schedule themselves", image: "tasks.png",
          missing: "A task list shows what is due, not when the work will get done.",
          fix: "Each task carries an estimate of the hours it needs. A single button, \"Plan my week\", places those hours into the free time of the next seven days, ahead of each due date, with no more than four hours of planned work on any one day. People tend to underestimate how long their own work takes, so the app sets aside more time than the estimate." },
        { heading: "A calendar that includes living", image: "today.png",
          missing: "Calendars hold appointments and leave out the rest of the day: sleep, meals, and the time it takes to get ready and get from one place to the next.",
          fix: "Classes, work, plans and sleep all appear at their real length, and only stretches of an hour or more count as free time." },
        { heading: "Reminders instead of restrictions", image: "right-now.png",
          missing: "Apps that block distractions take the choice away from the person using them.",
          fix: "Astrolabe does not block or lock anything. A planned session can be started in one step, the app checks in halfway through and again at the end, and a session can be moved to the next free time so that skipping it becomes a decision with a new time attached." },
        { heading: "Lists that fill themselves", body: [
          "The shopping list builds itself from the meals that are planned and the supplies marked as in use. An item leaves the list once it is bought or marked as already owned."
        ]},
        { heading: "Implementation", body: [
          "Astrolabe is written in plain HTML, CSS and JavaScript, with no framework and no build step. Data is saved in the browser first and synced through Firebase after sign-in, so it follows the person across devices. The interface is available in English, Spanish, French, Italian and German."
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
      course: "EE 14 Embedded Systems",
      date: "Jan. 2026 to May 2026",
      summary: "A real-time audio effects board that records sound and lets users remix it with 7 effect buttons, using only on-chip memory.",
      tools: ["STM32L432KC", "C", "ADC and DAC", "Oscilloscope"],
      cover: "youtube:uLtt11RuFwQ",
      sections: [
        { heading: "Problem", body: [
          "The board records sound, plays it back and applies effects such as echo, reverse, pitch and speed, using only the chip's 64KB of on-chip memory. Every effect depends on a clean recording, and the first playback came out with a high-pitched hiss and clicks."
        ]},
        { heading: "Solution", body: [
          "To fix the hiss, I wrote a timer-driven state machine so every sample was recorded and played at a steady rate, and gave each microphone reading more time to finish so no sample was cut short.",
          "The clicks came from sudden jumps in the speaker signal, so I held the speaker at a steady resting level between clips and faded each clip in and out."
        ]},
        { heading: "Result", body: [
          "An oscilloscope confirmed that the playback matched the original recording, giving all 7 effects a clean signal to work from."
        ]}
      ],
      gallery: [
        { type: "youtube", id: "uLtt11RuFwQ", caption: "DJ Board demo, part 1" },
        { type: "youtube", id: "Z741Z0-d_P4", vertical: true, caption: "DJ Board demo, part 2" }
      ],
      links: [
        { label: "See the poster (PDF)", url: "assets/docs/EE14_DJ_Board_Poster.pdf" }
      ]
    },
    {
      id: "fpga-synth",
      featured: true,
      title: "FPGA Audio Synthesizer",
      course: "ES 4 Digital Logic Circuits",
      date: "Sept. 2025 to Dec. 2025",
      summary: "An 8-octave (16Hz to 8kHz) synthesizer in SystemVerilog for a MIDI keyboard.",
      tools: ["SystemVerilog", "FPGA", "PWM"],
      cover: "youtube:cmLPXOcdjE4",
      sections: [
        { heading: "Problem", body: [
          "Each octave doubles a note's frequency, so the first design calculated every note by dividing on the chip. Division is so costly in hardware that it needed over 250% of the FPGA's space."
        ]},
        { heading: "Solution", body: [
          "Dividing by 2 is the same as shifting bits, so I hand-calculated one octave and used bit shifts for the rest, which fit the design on the chip.",
          "Testing the octaves then revealed one more problem. Chords distorted when notes combined, so I mixed the notes with PWM to play 6 notes clearly at once."
        ]},
        { heading: "Result", body: [
          "The keyboard plays a full 12-note scale across 8 octaves, with chords of up to 6 clear notes."
        ]}
      ],
      gallery: [
        { type: "youtube", id: "7ZHiCPOwTYU", caption: "The synthesizer working on the board" },
        { type: "youtube", id: "cmLPXOcdjE4", vertical: true, caption: "MIDI keyboard, part 1" },
        { type: "youtube", id: "s6099okv2E0", vertical: true, caption: "MIDI keyboard, part 2" }
      ],
      links: [
        { label: "Read the full report (PDF)", url: "assets/docs/ES4_Synthesizer_Report.pdf" }
      ]
    },
    {
      id: "traffic-light",
      featured: true,
      title: "Smart Traffic Light",
      course: "EE 20",
      date: "Fall 2025",
      summary: "A traffic light that counts the cars passing it and adjusts how long its red and green lights last.",
      tools: ["Arduino", "Photodiode", "Op-amp comparator", "MOSFETs", "Analog Discovery 2"],
      cover: "youtube:9rmVGDoX5m4",
      sections: [
        { heading: "Problem", body: [
          "A traffic light on a fixed timer makes drivers wait as long on an empty road as on a busy one. The goal was a light that responds to the traffic it detects, so that more cars shorten the red light and lengthen the green, and fewer cars do the opposite."
        ]},
        { heading: "Design", body: [
          "A light shines on a photodiode, and each object that passes between them stands in for a car. The photodiode's signal is noisy, so an op-amp compares it with a clean, stable reference voltage and outputs one clear digital pulse for every car.",
          "An Arduino counts those pulses during each green light and uses a timer to set the length of the next red light. MOSFETs act as electronic switches so that the Arduino can drive all six LEDs."
        ]},
        { heading: "Result", body: [
          "In the demonstration, light traffic produced a long red light, and heavy traffic produced a shorter red light and a longer green."
        ]}
      ],
      gallery: [
        { type: "youtube", id: "9rmVGDoX5m4", caption: "Demonstration with light and heavy traffic" },
        { type: "image", src: "breadboard.png", caption: "The full circuit: photodiode and op-amp, Arduino, and the LED traffic lights" }
      ],
      links: []
    },
    {
      id: "ml-research",
      featured: true,
      title: "CTGAN Design Discovery for RRAM",
      course: "Tufts Emerging Circuits and Systems Lab",
      date: "Sept. 2025 to April 2026",
      summary: "Testing whether a more aggressive AI model could find better RRAM memory designs without inventing ones that cannot physically exist.",
      tools: ["Python", "PyTorch", "pandas", "CUDA", "CTGAN", "PINN"],
      cover: "pareto.png",
      sections: [
        { heading: "Problem", body: [
          "The published framework used a CVAE, a model that averages its training data. That averaging made it reliable for standard designs, although it also smoothed away the extreme designs where the best performance can be found."
        ]},
        { heading: "Approach", body: [
          "I replaced the CVAE with a CTGAN, a model that searches those extremes more aggressively. An aggressive search can also invent designs that cannot physically exist, so I used the framework's physics-informed neural network (PINN) as a referee to reject them."
        ]},
        { heading: "Scaling the data", body: [
          "The CTGAN collapsed at 500 training samples and stayed noisy at 2,500, so I scaled the dataset to 5,000 samples before it converged across 3 oxide materials (Al2O3, HfO2 and TiO2)."
        ]},
        { heading: "Result", body: [
          "The best Al2O3 design reached 25% higher endurance and 11% lower switching energy than the published result, trading slightly slower switching (6.57ns vs 4.07ns). This showed that the adversarial approach works once it has enough data."
        ]}
      ],
      gallery: [
        { type: "image", src: "pareto.png", wide: true, caption: "Final results with 5,000 training samples. Each dot is a generated design; lower and further left is better. The star marks the best overall Al2O3 design." },
        { type: "image", src: "evolution.png", wide: true, caption: "Why the data had to grow: at 500 samples (left) the model collapses, and at 2,500 (right) it improves but stays noisy." }
      ],
      links: [
        { label: "Read the paper (PDF)", url: "assets/docs/EE94_RRAM_Paper.pdf" }
      ]
    },
    {
      id: "uav-control",
      featured: true,
      title: "UAV Pitch Control and RF Signal Restoration",
      course: "EE 23 Linear Systems",
      date: "Jan. 2026 to May 2026",
      summary: "A PID controller that keeps a UAV level, paired with a Wiener filter that restores the RF signals it collects.",
      tools: ["MATLAB", "PID control", "Wiener filtering"],
      cover: "controllers.png",
      sections: [
        { heading: "Problem", body: [
          "A UAV that shakes while collecting RF signals blurs them, so keeping it level is the first step toward clear signals."
        ]},
        { heading: "Controller", body: [
          "Using Routh-Hurwitz analysis, I showed that simpler P and PI controllers can never stabilize the UAV, which meant it needed a full PID controller. To find the best PID settings, I searched 15,625 gain combinations and reached a 52ms rise time, 2.6% overshoot and 500ms settling time, all within real UAV specs."
        ]},
        { heading: "Signal restoration", body: [
          "Since even a stable UAV shakes slightly and blurs the signals it receives, I then restored a blurred, noisy RF signal with a Wiener filter, cutting error by 77% compared with a direct inverse (MSE 2.272 to 0.521)."
        ]}
      ],
      gallery: [
        { type: "image", src: "controllers.png", wide: true, caption: "Four controllers on the same UAV: P-only oscillates forever, PI diverges, PD settles with an error, and only the full PID (green) holds level." },
        { type: "image", src: "step-response.png", caption: "Step response of the optimal PID: 52ms rise time, 2.6% overshoot." },
        { type: "image", src: "cost-map.png", caption: "Cost of each gain combination. Dark regions fail the specs; the red star is the optimum." },
        { type: "image", src: "wiener.png", wide: true, caption: "Wiener filter: error against the filter setting (left) and the restored RF signal over the original (right)." },
        { type: "image", src: "coupling.png", wide: true, caption: "A steadier UAV gives a shorter blur and a lower restoration error." }
      ],
      links: [
        { label: "Read the full report (PDF)", url: "assets/docs/EE23_UAV_Report.pdf" }
      ]
    },
    {
      id: "slam-robot",
      status: "In progress",
      featured: true,
      title: "Autonomous ESP32 Robot",
      course: "EE 31 Junior Design",
      date: "Fall 2026",
      summary: "A robot that follows a colored lane and avoids obstacles on its own, using IR and color sensing.",
      tools: ["ESP32", "Arduino", "IR LED and photodetector", "PCB design", "Onshape"],
      cover: "",
      sections: [
        { heading: "Problem", body: [
          "The robot has to follow a colored lane and avoid obstacles without human input. It also has to receive commands from a partner team's robot, so every decision it makes depends on sensor readings it can trust."
        ]},
        { heading: "State machine", body: [
          "I programmed a 7-state state machine on the ESP32. A pushbutton triggers an interrupt that moves the robot to its next state, each state is signaled by its LED, and a command sent over a websocket can jump the robot directly to a chosen state."
        ]},
        { heading: "Obstacle sensing", body: [
          "To detect obstacles, an infrared LED shines forward and a photodetector measures the light reflected back. Light already in the room also reaches the detector and distorts that measurement, so I selected the LED and photodetector resistor values myself and subtract the room's background light from each reading."
        ]},
        { heading: "Lane following", body: [
          "The color sensor reads light reflected off the track, and noise in those readings can make the robot mistake one lane color for another. I am developing detection logic that filters that noise before the robot decides which color it is on, so its steering correction acts on reliable data."
        ]},
        { heading: "Physical design", body: [
          "Next, I am designing the robot's custom ESP32 PCB for its circuits and its outer body in Onshape."
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
      course: "EE 95 Electronic Musical Instrument Design",
      date: "Fall 2026",
      summary: "Designing and building a working electronic musical instrument from scratch.",
      tools: ["Max", "MIDI", "NN-19 sampler", "Subtractor synthesizer"],
      cover: "",
      sections: [
        { heading: "Objective", body: [
          "The objective is to design and build an electronic musical instrument that is creative and functional for the person using it."
        ]},
        { heading: "Concept under consideration", body: [
          "One concept is for musicians who read sheet music on a tablet while practicing with a recorded accompaniment. Their hands are busy playing, so they cannot slow the recording down. The accompaniment would instead follow the spot being read, slowing down or speeding up with the player."
        ]},
        { heading: "Progress", body: [
          "So far I have learned basic sound programming with the NN-19 sampler and the Subtractor synthesizer, set up drum pads and a MIDI keyboard, and started working in Max."
        ]},
        { heading: "Next steps", body: [
          "Project teams are being formed. The next steps are choosing the concept and building the instrument."
        ]}
      ],
      gallery: [],
      links: []
    }
  ]
};
