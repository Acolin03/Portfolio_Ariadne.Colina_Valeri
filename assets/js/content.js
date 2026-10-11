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
  contactNote: "Open to internships in embedded systems, signal processing and machine learning, in biotech or defense.",

  about: [
    "I am an electrical engineering student at Tufts University, and I am most engaged when a problem requires thinking beyond the expected approach to find a path to the right answer. My work spans embedded systems, signal processing and machine learning, and much of it centers on cleaning up noisy signals so a system can act on them with confidence.",
    "Currently, I am building the sensing logic for an autonomous ESP32 robot in Junior Design and preparing to design its custom PCB. Looking ahead, I want to bring this work into biotech, especially brain-computer interfaces and neural signal processing, or into defense and aerospace through RF signal processing."
  ],

  languages: ["English (fluent)", "Spanish (fluent)", "French (fluent)", "Italian (beginner)"],

  skills: {
    "Programming": ["C", "C++", "Python", "PyTorch", "pandas", "CUDA", "MATLAB", "SystemVerilog", "Arduino"],
    "Hardware": ["STM32", "ESP32", "FPGA", "PCB design", "Sensor circuits", "UART"],
    "Tools": ["Oscilloscope", "Analog Discovery 2", "SolidWorks", "AutoCAD", "Onshape", "Max"],
    "Methods": ["State machines", "Signal filtering", "PID control", "Machine learning (CTGAN, PINN)"]
  },

  experience: [
    {
      role: "Control Systems Engineer Intern",
      org: "GE Transportation / Wabtec, Erie, PA",
      date: "May 2026 to July 2026",
      points: [
        "Automated locomotive diagnostic data extraction by developing Python scripts, reducing manual analysis time.",
        "Built a Fault Analysis Module (FAM) from circuit schematics to isolate fault causes and find failing parts.",
        "Executed failure mode testing by manually triggering faults to validate and refine the threshold data feeding the FAM."
      ]
    },
    {
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
      role: "Resident Assistant",
      org: "Tufts Residential Life and Learning",
      date: "Jan. 2026 to Present",
      points: [
        "Respond to resident incidents and mediate disputes in a house of 60 residents."
      ]
    },
    {
      role: "Treasurer",
      org: "IEEE / SHPE at Tufts",
      date: "Sept. 2024 to Present",
      points: [
        "Manage all purchasing requests through Tufts Treasury and rebuilt annual budgets, negotiating a 10% increase in funding."
      ]
    }
  ],

  /* -------------------------------------------------------------------
     PROJECTS
     id:       short name with no spaces (also the image folder name)
     featured: true = shown on the home page grid
     cover:    main image, inside assets/img/projects/<id>/
     sections: the story of the project, in order. Each has a heading
               and a list of paragraphs.
     gallery:  extra images and videos with captions
     links:    buttons at the bottom (code, report, video)
     ------------------------------------------------------------------- */
  projects: [
    {
      id: "slam-robot",
      featured: true,
      title: "Autonomous ESP32 Robot",
      course: "EE 31 Junior Design",
      date: "Fall 2026",
      summary: "A robot that follows a colored lane and avoids obstacles on its own, using IR and color sensing.",
      role: "One of two engineers on the logic side of a four-person team, responsible for the state machine, the sensing and the custom PCB.",
      tools: ["ESP32", "Arduino", "IR LED and photodetector", "PCB design", "Onshape"],
      cover: "cover.jpg",
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
        ]},
        { heading: "Result", body: ["TODO: what worked at the demo, with numbers if you have them."] }
      ],
      gallery: [
        { type: "image", src: "schematic.png", caption: "TODO: IR sensing circuit schematic" },
        { type: "video", src: "demo.mp4", caption: "TODO: robot following the lane" }
      ],
      links: [
        { label: "Code on GitHub", url: "TODO" }
      ]
    },
    {
      id: "ml-research",
      featured: true,
      title: "CTGAN Design Discovery for RRAM",
      course: "Tufts Emerging Circuits and Systems Lab",
      date: "Sept. 2025 to April 2026",
      summary: "Testing whether a more aggressive AI model could find better RRAM memory designs without inventing ones that cannot physically exist.",
      role: "Research assistant extending a published physics-informed AI framework (PIGen).",
      tools: ["Python", "PyTorch", "pandas", "CUDA", "CTGAN", "PINN"],
      cover: "cover.jpg",
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
        { type: "image", src: "pareto.png", caption: "TODO: final Pareto front across the three oxides (Figure 3 of the paper)" }
      ],
      links: [
        { label: "Read the paper (PDF)", url: "TODO" }
      ]
    },
    {
      id: "dj-board",
      featured: true,
      title: "DJ Board on an STM32",
      course: "EE 14 Embedded Systems",
      date: "Jan. 2026 to May 2026",
      summary: "A real-time audio effects board that records sound and lets users remix it with 7 effect buttons, using only on-chip memory.",
      role: "Team of four. I wrote the state machine and made the recorded audio play back clean.",
      tools: ["STM32L432KC", "C", "ADC and DAC", "Oscilloscope"],
      cover: "cover.jpg",
      sections: [
        { heading: "Problem", body: [
          "The board records sound, plays it back and applies effects such as echo, reverse, pitch and speed, using only the chip's 64KB of on-chip memory. Every effect depends on a clean recording, and the first playback came out with a high-pitched hiss and clicks."
        ]},
        { heading: "My part", body: [
          "To fix the hiss, I wrote a timer-driven state machine so every sample was recorded and played at a steady rate, and gave each microphone reading more time to finish so no sample was cut short.",
          "The clicks came from sudden jumps in the speaker signal, so I held the speaker at a steady resting level between clips and faded each clip in and out."
        ]},
        { heading: "Result", body: [
          "An oscilloscope confirmed that the playback matched the original recording, giving all 7 effects a clean signal to work from."
        ]}
      ],
      gallery: [],
      links: []
    },
    {
      id: "fpga-synth",
      featured: true,
      title: "FPGA Audio Synthesizer",
      course: "ES 4 Digital Logic Circuits",
      date: "Sept. 2025 to Dec. 2025",
      summary: "An 8-octave (16Hz to 8kHz) synthesizer in SystemVerilog for a MIDI keyboard.",
      role: "Team of four, working on making the keyboard sound like a real keyboard.",
      tools: ["SystemVerilog", "FPGA", "PWM"],
      cover: "cover.jpg",
      sections: [
        { heading: "Problem", body: [
          "Each octave doubles a note's frequency, so the first design calculated every note by dividing on the chip. Division is so costly in hardware that it needed over 250% of the FPGA's space."
        ]},
        { heading: "My part", body: [
          "Dividing by 2 is the same as shifting bits, so I hand-calculated one octave and used bit shifts for the rest, which fit the design on the chip.",
          "Testing the octaves then revealed one more problem. Chords distorted when notes combined, so I mixed the notes with PWM to play 6 notes clearly at once."
        ]},
        { heading: "Result", body: [
          "The keyboard plays a full 12-note scale across 8 octaves, with chords of up to 6 clear notes."
        ]}
      ],
      gallery: [],
      links: []
    },
    {
      id: "uav-control",
      featured: true,
      title: "UAV Pitch Control and RF Signal Restoration",
      course: "EE 23 Linear Systems",
      date: "Jan. 2026 to May 2026",
      summary: "A PID controller that keeps a UAV level, paired with a Wiener filter that restores the RF signals it collects.",
      role: "Individual project, designed and simulated in MATLAB.",
      tools: ["MATLAB", "PID control", "Wiener filtering"],
      cover: "cover.jpg",
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
      gallery: [],
      links: [
        { label: "Read the report (PDF)", url: "TODO" }
      ]
    },
    {
      id: "gestures-sensors",
      featured: false,
      title: "Gesture-Controlled Music",
      course: "Gestures + Sensors",
      date: "Fall 2026",
      summary: "Mapping body gestures and sensor data to musical parameters in Max.",
      role: "TODO",
      tools: ["Max", "Sensors"],
      cover: "cover.jpg",
      sections: [
        { heading: "Problem", body: ["TODO"] },
        { heading: "My part", body: ["TODO"] },
        { heading: "Result", body: ["TODO"] }
      ],
      gallery: [],
      links: []
    }
  ]
};
