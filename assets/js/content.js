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
  phone: "(813) 847-5642",
  linkedin: "https://www.linkedin.com/in/ariadne-colina-valeri",
  github: "https://github.com/Acolin03",
  resume: "resume.pdf",
  portfolioPdf: "portfolio.pdf",
  url: "https://acolin03.github.io/Portfolio_Ariadne.Colina_Valeri/",
  photo: "assets/img/profile.jpg",
  contactNote: "Open to internships in signal processing, embedded systems and machine learning.",

  about: [
    "I am an electrical engineer who enjoys problems that invite different perspectives. The projects I have chosen throughout my undergraduate studies have led me to signal processing, embedded systems, machine learning, networking, communications and audio.",
    "Since most of my projects center on manipulating and filtering signals, I am seeking an internship connected to that work. This semester, I am focused on the Junior Design project, in which I am building an autonomous robot, and on a MIDI instrument for Electronic Musical Instrument Design, which lets me explore how technology can be both creative and unconventional."
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
      id: "slam-robot",
      status: "In progress",
      featured: true,
      title: "Autonomous ESP32 Robot",
      fields: ["Embedded Systems"],
      course: "Junior Design",
      date: "Sept. 2026 to Present",
      summary: "An autonomous robot that follows a colored lane and avoids obstacles using IR and color sensing.",
      tools: ["ESP32", "Arduino", "IR LED and photodetector", "Colored LEDs", "PCB design", "SolidWorks"],
      cover: "card.jpg",
      sections: [
        { heading: "Challenge", body: [
          "The robot has to follow a colored lane and avoid obstacles without anyone controlling it, and it may only accept commands from our own team. That means every decision it makes depends on sensor readings and commands it can trust."
        ]},
        { heading: "State Machine", body: [
          "I built a 7-state state machine on the ESP32. A pushbutton interrupt moves the robot to its next state, an LED blinks the number of the state it is in, and a websocket command can jump it straight to a chosen state. Every websocket command is authenticated with our team key, and any command without it is rejected."
        ]},
        { heading: "Obstacle Detection", body: [
          "An IR LED shines forward and a photodetector measures the light that bounces back. Light already in the room also reaches the detector, so I chose the resistor values for the LED and photodetector, and each reading turns the LED off and on 32 times and subtracts the off value from the on value. Only the reflected IR is left.",
          "At startup, the robot takes 50 readings with nothing in front of it to learn its normal level and how much it wobbles. It detects an object only when the signal rises 6 standard deviations above normal, and it stops the motor until the signal drops below a lower threshold, so it does not flicker between driving and stopping."
        ]},
        { heading: "Lane Color Sensing (now)", body: [
          "The robot has to know whether it is on black, yellow, red or blue. LEDs of different colors take turns lighting the track, and a photodetector measures how much of each color reflects back. Each surface reflects the colors differently. Blue reflects blue light strongly but little red, and black reflects little of anything.",
          "The detector also takes a reading with all LEDs off, and that room light is subtracted so the sensor works the same with the lights on or off. My part is the detection logic that filters the noise out of these readings before the robot decides which color it is on."
        ]},
        { heading: "Next: Assembly, Lane Following and Sound Control", image: "ladybug-body.png", body: [
          "Next, we assemble the full robot. I am designing a ladybug-shaped body in SolidWorks and a custom ESP32 PCB, with parts chosen from datasheets, to replace the breadboard wiring inside it. Then we program lane following, so the robot reads the color under it and corrects its steering whenever it starts to drift off its lane.",
          "For the go-beyond part of the project, we are using sound to control the robot's movements. Its volume and certain notes will each make the robot do something different."
        ]}
      ],
      gallery: [
        { type: "youtube", id: "9TOmrrsm1gQ", vertical: true, caption: "The robot moving on remote commands" },
        { type: "image", src: "robot.jpg", caption: "The robot so far, wired on a breadboard around the ESP32." }
      ],
      links: []
    },
    {
      id: "midi-instrument",
      status: "In progress",
      featured: true,
      title: "Hadouken MIDI Instrument",
      fields: ["Instrument Design"],
      course: "Electronic Musical Instrument Design",
      date: "Fall 2026",
      summary: "A team of four building an instrument played with the hands and feet, meant to feel like controlling concentrated energy.",
      tools: ["Max", "Reason (Subtractor, NN-19)", "MIDI", "Arduino", "Flex sensors", "IR distance sensors", "Slide potentiometers", "Laser cutting"],
      cover: "card.jpg",
      sections: [
        { heading: "Hands", body: [
          "Flex sensors on four fingers of each hand play 8 notes, a full octave. Each thumb presses a button on the pointer knuckle to shift the scale up or down, and IR distance sensors in the wristbands change the LFO intensity as the hands move closer or farther apart."
        ]},
        { heading: "Feet", body: [
          "A laser-cut floorboard holds three sliders under the left foot for volume, panning and pitch bend, and buttons under the right foot for instrument, octave, mode and sustain. A screen shows the key and the note being played."
        ]}
      ],
      gallery: [
        { type: "image", src: "floorboard.jpg", caption: "The laser-cut floorboard with its buttons, slider slots and screen opening." },
        { type: "image", src: "sketch.jpg", caption: "Our first sketch of the hands and the floorboard." },
        { type: "image", src: "max-arpeggiator.jpg", caption: "A list arpeggiator in Max, taking notes from an MPK225 keyboard and sending them to Reason." },
        { type: "image", src: "reason.jpg", caption: "Reason's Subtractor synthesizer and NN-19 sampler, the instruments the notes play on." }
      ],
      links: []
    },
    {
      id: "astrolabe",
      status: "In progress",
      featured: true,
      title: "Astrolabe App",
      fields: ["Software"],
      course: "Personal project",
      date: "Aug. 2026 to Present",
      summary: "An app I built to stay organized without spending more time planning than doing.",
      tools: ["JavaScript", "HTML and CSS", "Firebase", "Google Calendar sync"],
      cover: "card.jpg",
      sections: [
        { heading: "Problem", body: [
          "I realized I was spending more time planning my day than actually doing it, and my plans rarely went the way I wrote them. The apps I used each covered one piece, a calendar for classes, a task list for homework and something else for money and habits, and none of them worked together. So I built Astrolabe, where each part answers something those apps were missing."
        ]},
        { heading: "A Syllabus in One Paste", image: "syllabus.png",
          missing: "Every class hands out a syllabus with every deadline buried inside, and adding a class means filling out form after form.",
          fix: "Paste a syllabus or drop its PDF, and every deadline lands in the planner. The class is made from it too: when it meets, its office hours and every dated hand-in as a task." },
        { heading: "Type It Like a Text", image: "typeit.png",
          missing: "Other apps make you fill out forms and fields.",
          fix: "One message like \"pset 4 due monday, coffee 5.25, work at the library tues thurs 4-8\" becomes a task, an expense and a weekly shift, each saved for the right day. You can also ask \"what's due this week?\" or say \"move pset 4 to tuesday\"." },
        { heading: "Just 5 Minutes", image: "focus-now.png",
          missing: "Other apps give you lists you have to sort through.",
          fix: "Focus shows what is happening right now and what is due soon. If you are free, one button starts the next task, or just 5 minutes of it, which is often all it takes to begin." },
        { heading: "Plan My Week", image: "planweek.png",
          missing: "Other apps only know due dates, not when the work will actually get done.",
          fix: "You pick a task, and the app finds a free hour in your real schedule before it is due. Only the times you say yes to go on the calendar." },
        { heading: "Dinner to Shopping List",
          missing: "At the store, it is easy to forget what tonight's dinner needed.",
          fix: "Pick tonight's dinner, and its groceries go on your shopping list." },
        { heading: "A Habit Tracker That Is a Voyage", image: "voyage.png",
          missing: "Habit apps count streaks, and a good habit is easy to drop by day three.",
          fix: "Every kept day earns a star and moves a boat through the history of navigation, so there is a reason to keep going. You spend stars on zodiac signs to clear the mist ahead." },
        { heading: "Also in Astrolabe", body: [
          "Daily habits like drinking water or stretching take one tap each, and a few lines of journal each night turn every month into a book on a shelf."
        ]},
        { heading: "How I Built It", body: [
          "I wrote Astrolabe in plain HTML, CSS and JavaScript. It syncs through Firebase, can be end-to-end encrypted and works in five languages."
        ]}
      ],
      gallery: [],
      links: [
        { label: "Open Astrolabe", url: "https://myastrolabe.web.app" }
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
      cover: "card.jpg",
      sections: [
        { heading: "Challenge", body: [
          "The UAV has to stay level while it collects RF signals, and the signals blurred by its shaking have to be restored."
        ]},
        { heading: "Controller Design", body: [
          "Using Routh-Hurwitz analysis, I proved that P and PI controllers can never stabilize the UAV, which meant it needed a full PID controller. To find the best PID settings, I searched 15,625 gain combinations, refined the grid 10 times, and reached a 52ms rise time, 2.6% overshoot and 500ms settling time, all within real UAV specs. The 88.3° phase margin is well above the usual 45° guideline."
        ]},
        { heading: "Signal Restoration", body: [
          "Since even a stable UAV shakes slightly and blurs the signals it receives, I then restored a blurred RF signal made of radar, chirp and communications components with noise at 40dB SNR. A generalized Wiener filter in MATLAB cut error by 77% compared with a direct inverse (MSE 2.272 to 0.521)."
        ]},
        { heading: "Linking the Two", body: [
          "The controller's settling time sets how long the blur lasts. When I simulated a controller that settles in 2 seconds instead of 0.5, the blur grew from 11 to 44 samples and the recovery error was 1.5 times worse (MSE 0.539 to 0.827), so better control directly means cleaner RF data."
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
      id: "dj-board",
      featured: true,
      title: "DJ Board on an STM32 (Audio Recorder and Effects Processor)",
      fields: ["Embedded Systems", "Signal Processing"],
      course: "Embedded Systems",
      date: "Jan. 2026 to May 2026",
      summary: "A real-time audio effects board that records sound and lets users remix it with seven effects, using only on-chip memory.",
      tools: ["STM32L432KC", "C", "ADC and DAC", "Oscilloscope"],
      cover: "card.jpg",
      sections: [
        { heading: "Challenge", body: [
          "The board has to record sound and play it back in real time with 7 effects (echo, reverse, speed, loop size, pitch up, pitch down, volume), all within the STM32's 64KB of on-chip memory."
        ]},
        { heading: "What I Did", body: [
          "Recording at 8kHz left room for only 2 seconds of audio, so I lowered the sample rate to 4kHz, which stores 5 seconds of 12-bit audio in a 40KB buffer.",
          "Since every effect depends on a clean recording, the main problem to solve was that playback came out with a high-pitched hiss and clicks. To fix the hiss, I wrote a state machine driven by a 4kHz timer interrupt, so every sample was recorded and played at the same rate, and I lengthened the ADC sampling time to 12.5 cycles so each microphone reading had time to settle.",
          "The clicks came from sudden jumps in the speaker signal, so I held the speaker at mid-rail, its resting level, between clips and faded each clip in and out over 256 samples (64ms)."
        ]},
        { heading: "Result", body: [
          "An oscilloscope confirmed that the playback matched the original recording. I also checked each effect's output on the oscilloscope, such as speed and pitch, to make sure the signal processing was correct."
        ]}
      ],
      gallery: [
        { type: "youtube", id: "uLtt11RuFwQ", caption: "Demonstration, part 1" },
        { type: "youtube", id: "Z741Z0-d_P4", vertical: true, caption: "Demonstration, part 2" },
        { type: "image", src: "signal-chain.svg", wide: true, caption: "Signal chain: everything inside the dashed box runs on the STM32, one sample at a time on a 4kHz timer." }
      ],
      links: [
        { label: "View the Poster (PDF)", url: "assets/docs/EE14_DJ_Board_Poster.pdf" }
      ]
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
      cover: "card.jpg",
      sections: [
        { heading: "Challenge", body: [
          "The project tests whether a more aggressive AI model can find better RRAM memory designs than a published framework, without inventing designs that cannot physically exist."
        ]},
        { heading: "Approach", body: [
          "The published framework I extended used a CVAE, a model that averages its training data. That made it reliable for standard designs, although it also smoothed away the extreme designs where the best performance is found. I therefore replaced the CVAE with a CTGAN, which searches those extremes more aggressively. Since an aggressive search can also invent designs that cannot physically exist, I used the framework's physics model (PINN) as a referee to reject them."
        ]},
        { heading: "Scaling the Data", body: [
          "The CTGAN collapsed at 500 training samples and stayed noisy at 2,500, so I grew the dataset tenfold to 5,000 samples, where it converged across 3 oxide materials (Al2O3, HfO2 and TiO2). Along the way, the best design's endurance rose from 2.79×10⁸ cycles at 500 samples to 4.84×10⁹ at 5,000."
        ]},
        { heading: "Result", body: [
          "The best Al2O3 design reached 4.84×10⁹ cycles against the published 3.85×10⁹ (25% higher endurance) and 310.7pJ against 350.6pJ (11% lower switching energy), in exchange for slightly slower switching (6.57ns vs 4.07ns). This showed that the adversarial approach works once it has enough data."
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
      id: "fpga-synth",
      featured: true,
      title: "FPGA Audio Synthesizer",
      fields: ["Digital Design"],
      course: "Digital Logic Circuits",
      date: "Sept. 2025 to Dec. 2025",
      summary: "An 8-octave synthesizer (16Hz to 8kHz) written in SystemVerilog for a MIDI keyboard.",
      tools: ["SystemVerilog", "FPGA", "PWM"],
      cover: "card.jpg",
      sections: [
        { heading: "Challenge", body: [
          "The synthesizer has to play notes and chords from a MIDI keyboard across 8 octaves, using hardware written in SystemVerilog on an FPGA."
        ]},
        { heading: "What I Did", body: [
          "Calculating the frequency of every note by division required over 250% of the FPGA's space. Since each octave is exactly double the frequency of the one below it, and dividing by 2 is equivalent to shifting the bits one place, I calculated one octave by hand and derived the other seven with bit shifts, which brought the design within the chip's capacity.",
          "Testing with a tuner showed every note playing an octave too low, meaning the clock ran at twice the rate the code assumed, so we rebuilt the 12-note scale for the real clock. The lowest note the design could reach was F#2 (about 92Hz), and widening the counter that holds each note's period extended the range down to 16Hz, completing all 8 octaves.",
          "Chords of more than 2 notes, or any chord in a low octave, turned into static. Plotting C and E summed in octave 3 and octave 7 in Desmos showed the output was not following the summed wave, so I mixed the notes with PWM instead. More PWM bits made chords clearer but quieter, and a 3-bit bus gave the best balance."
        ]},
        { heading: "Result", body: [
          "The keyboard plays a full 12-note scale across 8 octaves (16Hz to 8kHz), with chords of 5 to 6 notes in the lowest octave and every note at once in the highest."
        ]}
      ],
      gallery: [
        { type: "youtube", id: "7ZHiCPOwTYU", caption: "The synthesizer running on the board" },
        { type: "youtube", id: "cmLPXOcdjE4", vertical: true, caption: "MIDI keyboard demonstration, part 1" },
        { type: "youtube", id: "s6099okv2E0", vertical: true, caption: "MIDI keyboard demonstration, part 2" },
        { type: "image", src: "fpga-chord-high.png", caption: "C and E summed in octave 7 (red), where 2-note chords played cleanly." },
        { type: "image", src: "fpga-chord-low.png", caption: "C and E summed in octave 3 (blue), where the same chord turned to static before PWM mixing." }
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
      cover: "card.jpg",
      sections: [
        { heading: "Challenge", body: [
          "The traffic light has to react to the traffic it sees, so more cars shorten the red light and lengthen the green, and fewer cars do the opposite. A light on a fixed timer makes drivers wait just as long on an empty road as on a busy one."
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
    }
  ]
};
