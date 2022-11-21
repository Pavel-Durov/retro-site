import { Resources } from 'model'

const resources: Resources[] = [
  {
    url: 'https://refactoring.guru/design-patterns',
    title: 'Design patterns',
    description:
      'Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular design problem in your code.',
    tags: ['design-patterns', 'architecture', 'software-engineering']
  },
  {
    url: 'http://wiki.c2.com/?SeparationOfConcerns',
    title: 'Separation of Concerns',
    description:
      'The key concept for SoftwareEngineering and the basis of ObjectOrientedProgramming, AspectOrientedProgramming, SubjectOrientedProgramming and HyperSpace programming.',
    tags: ['design', 'principle']
  },
  {
    url: 'https://arxiv.org/abs/2209.15369',
    title: 'Towards effective assessment of steady state performance in Java software: Are we there yet?',
    description:
      'Microbenchmarking is a widely used form of performance testing in Java software. A microbenchmark repeatedly executes a small chunk of code while collecting measurements related to its performance. Due to Java Virtual Machine optimizations, microbenchmarks are usually subject to severe performance fluctuations in the first phase of their execution (also known as warmup). For this reason, software developers typically discard measurements of this phase and focus their analysis when benchmarks reach a steady state of performance. Developers estimate the end of the warmup phase based on their expertise, and configure their benchmarks accordingly. Unfortunately, this approach is based on two strong assumptions: (i) benchmarks always reach a steady state of performance and (ii) developers accurately estimate warmup. In this paper, we show that Java microbenchmarks do not always reach a steady state, and often developers fail to accurately estimate the end of the warmup phase. We found that a considerable portion of studied benchmarks do not hit the steady state, and warmup estimates provided by software developers are often inaccurate (with a large error). This has significant implications both in terms of results quality and time-effort. Furthermore, we found that dynamic reconfiguration significantly improves warmup estimation accuracy, but still it induces suboptimal warmup estimates and relevant side-effects. We envision this paper as a starting point for supporting the introduction of more sophisticated automated techniques that can ensure results quality in a timely fashion.',
    tags: ['research', 'java', 'microbenchmarking', 'performance', 'warmup']
  },
  {
    url: 'https://github.com/cue-lang/cue',
    title: 'The CUE Data Constraint Language',
    description: 'CUE is an open source data constraint language which aims to simplify tasks involving defining and using data.',
    tags: ['cue', 'data', 'language']
  },
  {
    url: 'https://go.dev/blog/waza-talk',
    title: 'Concurrency is not parallelism',
    description:
      'If there’s one thing most people know about Go, is that it is designed for concurrency. No introduction to Go is complete without a demonstration of its goroutines and channels. But when people hear the word concurrency they often think of parallelism, a related but quite distinct concept. In programming, concurrency is the composition of independently executing processes, while parallelism is the simultaneous execution of (possibly related) computations. Concurrency is about dealing with lots of things at once. Parallelism is about doing lots of things at once.',
    tags: ['go', 'concurrency', 'parallelism']
  },
  {
    url: 'http://paulgraham.com/avg.html',
    title: 'Andrew Lee',
    description:
      "If you do everything the way the average startup does it, you should expect average performance. The problem here is, average performance means that you'll go out of business. The survival rate for startups is way less than fifty percent. So if you're running a startup, you had better be doing something odd. If not, you're in trouble.",
    tags: ['list', 'startup']
  },

  {
    url: 'https://go.dev/blog/slices',
    title: 'Arrays, slices (and strings): The mechanics of append',
    description: 'Arrays, slices (and strings): The mechanics of append',
    tags: ['go', 'append', 'slice', 'internals']
  },

  {
    url: 'https://aosabook.org/en/llvm.html',
    title: 'The Architecture of Open Source Applications: LLVM',
    description:
      'This chapter discusses some of the design decisions that shaped LLVM1, an umbrella project that hosts and develops a set of close-knit low-level toolchain components (e.g., assemblers, compilers, debuggers, etc.), which are designed to be compatible with existing tools typically used on Unix systems. The name "LLVM" was once an acronym, but is now just a brand for the umbrella project. While LLVM provides some unique capabilities, and is known for some of its great tools (e.g., the Clang compiler2, a C/C++/Objective-C compiler which provides a number of benefits over the GCC compiler), the main thing that sets LLVM apart from other compilers is its internal architecture.',
    tags: ['llvm', 'compiler']
  },
  {
    url: 'https://martinfowler.com/bliki/DarkLaunching.html',
    title: 'Dark Launching',
    description:
      "Dark launching a feature means taking a new or changed back-end behavior and calling it from existing users without the users being able to tell it's being called. It's done to assess the additional load and performance impacts upon the system before making a public announcement of the new capability.",
    tags: ['dark launching', 'feature', 'back-end', 'release']
  },
  {
    url: 'https://www.youtube.com/watch?v=OH5I3V-FVTo&ab_channel=Confluent',
    title: 'If Streaming Is the Answer, Why Are We Still Doing Batch? ',
    description:
      'In this episode, Kris talks to a panel of industry experts with decades of experience building and implementing data systems. They discuss the state of streaming adoption today, if streaming will ever fully replace batch, and whether it even could (or should). Is micro batching the natural stepping stone between batch and streaming? Will there ever be a unified understanding on how data should be processed over time? Is the lack of agreement on best practices for data streaming an insurmountable obstacle to widespread adoption? What exactly is holding teams back from fully adopting a streaming model? ',
    tags: ['kafka', 'streaming', 'batch']
  },
  {
    url: 'https://alistair.cockburn.us/hexagonal-architecture/',
    title: 'The Pattern: Ports and Adapters (Object Structural)',
    description: 'Overview of the pattern - hexagonal-architecture',
    tags: ['hexagonal-architecture', 'ports-and-adapters', 'architecture']
  },
  {
    url: 'https://dl.acm.org/doi/10.1145/359576.359585',
    title: 'Communicating sequential processes',
    description:
      "This paper suggests that input and output are basic primitives of programming and that parallel composition of communicating sequential processes is a fundamental program structuring method. When combined with a development of Dijkstra's guarded command, these concepts are surprisingly versatile. Their use is illustrated by sample solutions of a variety of a familiar programming exercises.",
    tags: ['communication', 'concurrency', 'processes', 'research']
  },
  {
    url: 'https://dev.to/karanpratapsingh/csp-vs-actor-model-for-concurrency-1cpg',
    title: 'CSP vs Actor model for concurrency ',
    description: 'CSP vs Actor model for concurrency ',
    tags: ['csp', 'actor model', 'concurrency']
  },
  {
    url: 'https://go.dev/talks/2012/concurrency.slide#1',
    title: 'Go Concurrency Patterns',
    description: 'Presentation on Go Concurrency Patterns',
    tags: ['go', 'concurrency', 'slides']
  },
  {
    url: 'https://learning.codefresh.io/path-player?courseid=gitops-with-argo&unit=gitops-with-argo_6177da00c04a0Unit',
    title: 'Andrew Lee',
    description:
      'GitOps is a set of best practices where the entire code delivery process is controlled via Git, including infrastructure and application definition as code and automation to complete updates and rollbacks.',
    tags: ['ci/cd', 'gitops', 'argo', 'kubernetes']
  },

  {
    url: 'https://go.dev/blog/defer-panic-and-recover',
    title: 'Defer, Panic, and Recover',
    description:
      'Go has the usual mechanisms for control flow: if, for, switch, goto. It also has the go statement to run code in a separate goroutine. Here I’d like to discuss some of the less common ones: defer, panic, and recover.',
    tags: ['go', 'golang', 'programming', 'software development', 'error handling', 'control flow', 'defer', 'panic', 'recover']
  },
  {
    url: 'https://tratt.net/laurie/research/pubs/html/bolz_tratt__the_impact_of_metatracing_on_vm_design_and_implementation/',
    title: 'The Impact of Meta-Tracing on VM Design and Implementation',
    description:
      'Most modern languages are implemented using Virtual Machines (VMs). While the best VMs use Just-In-Time (JIT) compilers to achieve good performance, JITs are costly to implement, and few VMs therefore come with one. The RPython language allows tracing JIT VMs to be automatically created from an interpreter, changing the economics of VM implementation. In this paper, we explain, through two concrete VMs, how meta-tracing RPython VMs can be designed and optimised, and, experimentally, the performance levels one might reasonably expect from them. ',
    tags: ['rpython', 'jit', 'vm', 'meta-tracing', 'pypy', 'research']
  },
  {
    url: 'https://spidermonkey.dev/',
    title: 'SpiderMonkey',
    description:
      'SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox, Servo and various other projects. It is written in C++, Rust and JavaScript. You can embed it into C++ and Rust projects, and it can be run as a stand-alone shell. It can also be compiled to WASI; see our online demo.',
    tags: ['JavaScript', 'WebAssembly', 'Rust', 'C++', 'SpiderMonkey']
  },
  {
    url: 'http://www.learnyouahaskell.com/',
    title: 'Learn You a Haskell for Great Good!',
    description:
      "This tutorial is aimed at people who have experience in imperative programming languages (C, C++, Java, Python …) but haven't programmed in a functional language before (Haskell, ML, OCaml …). Although I bet that even if you don't have any significant programming experience, a smart person such as yourself will be able to follow along and learn Haskell.",
    tags: ['haskell', 'functional programming', 'programming']
  },
  {
    url: 'https://arxiv.org/abs/2201.09268',
    title: 'Two-level Just-in-Time Compilation with One Interpreter and One Engine',
    description:
      'Modern, powerful virtual machines such as those running Java or JavaScript support multi-tier JIT compilation and optimization features to achieve their high performance. However, implementing and maintaining several compilers/optimizers that interact with each other requires hard-working VM developers. In this paper, we propose a technique to realize two-level JIT compilation in RPython without implementing several interpreters or compilers from scratch. As a preliminary realization, we created adaptive RPython, which performs both baseline JIT compilation based on threaded code and tracing JIT compilation. We also implemented a small programming language with it. Furthermore, we preliminarily evaluated the performance of that small language, and our baseline JIT compilation ran 1.77x faster than the interpreter-only execution. Furthermore, we observed that when we apply an optimal JIT compilation for different target methods, the performance was mostly the same as the one optimizing JIT compilation strategy, saving about 40 % of the compilation code size. ',
    tags: ['jit', 'rpython', 'python', 'compiler', 'optimization', 'research']
  },
  {
    url: 'https://www.jayconrod.com/posts/52/a-tour-of-v8-object-representation',
    title: 'A tour of V8: object representation',
    description: 'A tour of V8: object representation',
    tags: ['v8', 'compiler', 'javascript', 'nodejs', 'internals']
  },
  {
    url: 'https://www.jayconrod.com/posts/51/a-tour-of-v8-full-compiler',
    title: 'A tour of V8: full compiler',
    description: 'A tour of V8: full compiler',
    tags: ['v8', 'compiler', 'javascript', 'nodejs', 'internals']
  },
  {
    url: 'https://www.youtube.com/watch?v=qH0eeh-4XE8&ab_channel=EuroPythonConference',
    title: "Ronan Lamy - Adventures in compatibility emulating CPython's C API in PyPy",
    description:
      "PyPy is a fast and compliant implementation of Python. In other words, it's an interpreter for the Python language that can act as a full replacement for the reference interpreter, CPython. It's optimised to enable efficient just-in-time compilation of Python code to machine code, and has releases matching versions 2.7, 3.5 and soon(ish) 3.6. The PyPy project also developed cffi as a clean and efficient way of interfacing with C code.",
    tags: ['python', 'pypy', 'cffi', 'cpython', 'c api']
  },

  {
    url: 'https://www.youtube.com/watch?v=BE77h7dmoQU&ab_channel=Honeypot',
    title: 'Kubernetes: The Documentary [PART 1]',
    description:
      'Inspired by the open source success of Docker in 2013 and seeing the need for innovation in the area of large-scale cloud computing, a handful of forward-thinking Google engineers set to work on the container orchestrator that would come to be known as Kubernetes– this new tool would forever change the way the internet is built.',
    tags: ['kubernetes', 'docker', 'google', 'cloud', 'containers', 'history']
  },

  {
    url: 'https://www.youtube.com/watch?v=tc4ROCJYbm0&ab_channel=AT%26TTechChannel',
    title: ' AT&T Archives: The UNIX Operating System ',
    description:
      'In the late 1960s, Bell Laboratories computer scientists Dennis Ritchie and Ken Thompson started work on a project that was inspired by an operating system called Multics, a joint project of MIT, GE, and Bell Labs. The host and narrator of this film, Victor Vyssotsky, also had worked on the Multics project. Ritchie and Thompson, recognizing some of the problems with the Multics OS, set out to create a more useful, flexible, and portable system for programmers to work with.',
    tags: ['unix', 'operating system', 'history']
  },
  {
    url: 'https://www.youtube.com/watch?v=6avJHaC3C2U&ab_channel=NDCConferences',
    title: 'The Art of Code - Dylan Beattie',
    description:
      'Software and technology has changed every aspect of the world we live in. At one extreme are the ‘mission critical’ applications - the code that runs our banks, our hospitals, our airports and phone networks. Then there’s the code we all use every day to browse the web, watch movies, create spreadsheets… not quite so critical, but still code that solves problems and delivers services.',
    tags: ['code', 'software', 'technology', 'Dylan Beattie']
  },
  {
    url: 'https://unexpected-go.com/',
    title: 'unexpected-go',
    description: 'This small site is oriented to developers learning golang that want to see the unexpected, at least for a newcomer, behaviors in the language.',
    tags: ['golang', 'go']
  },
  {
    url: 'https://www.youtube.com/watch?v=dO1zf4RXsTg&t=5s&ab_channel=ShashikantRai',
    title: 'Introduction of Node JS by Ryan Dahl (Creator of Node Js)',
    description: 'Introduction of Node JS by Ryan Dahl (Creator of Node Js)',
    tags: ['nodejs', 'introduction', 'internals']
  },

  {
    url: 'https://www.youtube.com/watch?v=OzGdYPFfimM&ab_channel=TKSJa',
    title: ' MikroTik Tutorial 77',
    description: 'Limiting the download speeds of certain file types ',
    tags: ['mikrotik', 'tutorial', 'networking']
  },
  {
    url: 'https://www.youtube.com/watch?v=udbA7u1zYfc&ab_channel=LowByteProductions',
    title: 'Making WAVs',
    description: 'Understanding, Parsing, and Creating WAV Files in JavaScript',
    tags: ['audio', 'wav', 'javascript']
  },
  {
    url: 'https://www.youtube.com/watch?v=7OZLImVRvro&t=533s&ab_channel=EncodeClub',
    title: ' Intro to libp2p with Filecoin ',
    description:
      'libp2p is a modular system of protocols, specifications and libraries that enable the development of peer-to-peer network applications. Find out more here: https://libp2p.io/',
    tags: ['libp2p', 'p2p', 'filecoin']
  },
  {
    url: 'https://blog.ipfs.tech/2021-06-10-guide-to-ipfs-connectivity-in-browsers/',
    title: 'IPFS intro.',
    description:
      "We see a lot of questions about how to get started with using js-ipfs in the browser. This post demonstrates a minimal chat example in js-ipfs entirely in the browser. It uses WebRTC to achieve browser-to-browser connectivity where possible, and a circuit relay to connect browser nodes where not. Message passing is done with libp2p's pubsub.",
    tags: ['ipfs', 'js-ipfs', 'libp2p', 'pubsub', 'webrtc', 'circuit-relay']
  },
  {
    url: 'https://proto.school/introduction-to-libp2p/01',
    title: 'Why do we need libp2p?',
    description: 'libp2p is a modular network stack that evolved out of IPFS to become an independent project.',
    tags: ['libp2p', 'ipfs', 'protocol', 'networking']
  },
  {
    url: 'https://www.youtube.com/watch?v=kBdfcR-8hEY&ab_channel=HarvardUniversity',
    title: 'Justice: What\'s The Right Thing To Do? Episode 01 "THE MORAL SIDE OF MURDER" ',
    description:
      'If you had to choose between (1) killing one person to save the lives of five others and (2) doing nothing even though you knew that five people would die right before your eyes if you did nothing—what would you do?  What would be the right thing to do?  ',
    tags: ['philosophy', 'ethics', 'harvard']
  },
  {
    url: 'https://www.youtube.com/watch?v=PFQnNFe27kU&ab_channel=Devoxx',
    title: 'Principles Of Microservices by Sam Newman.',
    description: 'Principles Of Microservices by Sam Newman.',
    tags: ['microservices', 'architecture', 'Sam Newman']
  },
  {
    url: 'https://www.youtube.com/watch?v=I8LbkfSSR58&list=PLbgaMIhjbmEnaH_LTkxLI7FMa2HsnawM_&ab_channel=BartoszMilewski',
    title: 'Bartosz Milewski - Category Theory series',
    description: 'Category Theory. A series of lectures by Bartosz Milewski.',
    tags: ['category theory', 'mathematics', 'functional programming', 'Bartosz Milewski']
  },
  {
    url: 'https://boris-marinov.gitbooks.io/category-theory-illustrated/content/02_more_sets/text.html',
    title: 'Introduction · Category Theory Illustrated',
    description:
      'This book is a product of my own endeavour of understanding category theory from a more non-mathematical viewpoint - it is just that as I am explaining something, I am understanding it better.',
    tags: ['category-theory', 'mathematics', 'functional-programming', 'book']
  },
  {
    url: 'https://martinfowler.com/bliki/MonolithFirst.html',
    title: 'MonolithFirst',
    description:
      "This pattern has led many of my colleagues to argue that you shouldn't start a new project with microservices, even if you're sure your application will be big enough to make it worthwhile.",
    tags: ['microservices', 'monolith']
  },
  {
    url: 'https://www.youtube.com/watch?v=A_mstzRGfIE&ab_channel=DevoxxPoland',
    title: 'Event-Driven Architectures Done Right, Apache Kafka • Tim Berglund • Devoxx Poland 2021',
    description:
      "Far from a controversial choice, Kafka is now a technology developers and architects are adopting with enthusiasm. And it’s often not just a good choice, but a technology enabling meaningful improvements in complex, evolvable systems that need to respond to the world in real time. But surely it's possible to do wrong! In this talk, we'll look at common mistakes in event-driven systems built on top of Kafka.",
    tags: ['kafka', 'event-driven', 'architecture']
  },
  {
    url: 'https://martinfowler.com/articles/scaling-architecture-conversationally.html',
    title: 'Scaling the Practice of Architecture, Conversationally',
    description:
      'Architecture need not be a monologue; delivered top-down from the minds and mouths of a centralised few. This article describes another way to do architecture; as a series of conversations, driven by a decentralised and empowering decision-making technique, and supported by four learning and alignment mechanisms: Decision Records, Advisory Forum, Team-sourced Principles, and a Technology Radar',
    tags: ['architecture', 'decision-making', 'principles', 'technology radar', 'adr', 'aaf']
  },

  {
    url: 'https://www.youtube.com/watch?v=o_AIw9bGogo&ab_channel=linux.conf.au',
    title: 'The Tragedy of systemd',
    description:
      'I delved into the history of bootstrap systems, and even the history of UNIX and other contemporary operating systems, to try and work out why something like systemd was seem as necessary, if not desirable. I also tried to work out why so many people found it so upsetting, annoying, or otherwise rage-inducing.',
    tags: ['linux', 'systemd', 'history']
  },
  {
    url: 'https://www.youtube.com/watch?v=1n9KMqssn54&ab_channel=PyConSweden',
    title: 'Using PyPy instead of Python for speed by Niklas Bivald',
    description: 'Using PyPy - a faster version of Python for long running applications - as a first step to speed up your application.',
    tags: ['python', 'pypy', 'speed', 'performance']
  },

  {
    url: 'https://www.youtube.com/watch?v=BVEcbifDrMk&ab_channel=GopherConUK',
    title: 'Production Go Service Essentials - Elliot Williams',
    description:
      'The aim of this talk is to cover the essentials of building a production-ready Go REST API. We will take a basic example service, and talk about how we can get it ready for prime-time real-world use 🚀',
    tags: ['go', 'golang', 'rest', 'api', 'production']
  },
  {
    url: 'https://www.artima.com/weblogs/viewpost.jsp?thread=214235',
    title: "It isn't Easy to Remove the GIL",
    description: 'A response to a blog post by Juergen Brendel pleading for the removal of the GIL.',
    tags: ['python', 'gil']
  },
  {
    url: 'https://www.youtube.com/watch?v=TyPqzogFS3M&ab_channel=YvesHanoulle',
    title: 'Some coaches are caught up in the rightness of their ideas.',
    description: 'Some coaches are caught up in the rightness of their ideas.',
    tags: ['interview', 'Michael Hill']
  },
  {
    url: 'https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/',
    title: '10 best practices to containerize Node.js web applications with Docker',
    description: '10 best practices to containerize Node.js web applications with Docker',
    tags: ['docker', 'nodejs', 'security', 'best-practices', 'containers']
  },
  {
    url: 'https://pythonspeed.com/articles/alpine-docker-python/',
    title: 'Using Alpine can make Python Docker builds 50× slower',
    description:
      'When you’re choosing a base image for your Docker image, Alpine Linux is often recommended. Using Alpine, you’re told, will make your images smaller and speed up your builds. And if you’re using Go that’s reasonable advice.',
    tags: ['docker', 'alpine', 'python', 'linux', 'containers']
  },

  {
    url: 'https://www.youtube.com/watch?v=XcT4yYu_TTs&ab_channel=GoogleTechTalks',
    title: 'How to Write Clean, Testable Code',
    description:
      'Miško Hevery works as an Engineer at Google where he is responsible for coaching Googlers to maintain the high level of automated testing culture. This allows Google to do frequent releases of its web applications with consistent high quality.',
    tags: ['testing', 'clean code', 'code quality']
  },
  {
    url: 'https://www.gnu.org/software/make/manual/make.html',
    title: 'GNU make manual',
    description: 'GNU make manual',
    tags: ['make', 'manual']
  },
  {
    url: 'https://www.openpolicyagent.org/',
    title: 'Policy-based control for cloud native environments',
    description: 'Policy-based control for cloud native environments',
    tags: ['policy', 'security', 'open-source', 'opa']
  },
  {
    url: 'https://www.infoq.com/presentations/Facebook-Release-Process/',
    title: 'The Facebook Mobile Release Process',
    description: 'Christian Legnitto offers insight in some of the tools and processes used by Facebook for pushing new updates to their mobile apps.',
    tags: ['release', 'process', 'mobile', 'continuous delivery']
  },
  {
    url: 'https://www.youtube.com/watch?v=GBTdnfD6s5Q&list=PLjCyaPAmvPA_4iBpeHbZjsQmkg4DEujwi&index=2&t=1860s',
    title: 'When To Use Microservices (And When Not To!) • Sam Newman & Martin Fowler • GOTO 2020',
    description:
      'Upgrade your microservices knowledge by listening to a spirited conversation between two living legends: Sam Newman and Martin Fowler. The two touch upon the main reasons for using or not using microservices, and, if you decide to do use microservices, what else you should change along the way to fully benefit from the switch, plus much more. The interview is based on Sam Newman\'s new book "Monolith to Microservices"',
    tags: ['microservices', 'architecture', 'Sam Newman', 'Martin Fowler']
  },
  {
    url: 'https://tratt.net/laurie/blog/2022/more_evidence_for_problems_in_vm_warmup.html',
    title: 'More Evidence for Problems in VM Warmup',
    description: 'More Evidence for Problems in VM Warmup',
    tags: ['vm', 'warmup', 'research', 'performance']
  },
  {
    url: 'https://dl.acm.org/doi/10.1145/2542142.2542146',
    title: 'Unipycation: a case study in cross-language tracing',
    description:
      'Language composition approaches have traditionally suffered from poor performance. In this paper we hypothesise that meta-tracing provides a means to compose independent language interpreters while retaining the performance levels of each. ',
    tags: ['language composition', 'meta-tracing', 'performance', 'research']
  },
  {
    url: 'https://swig.org/Doc4.0/SWIGDocumentation.html#Introduction_nn5.',
    title: 'SWIG-4.0 Documentation',
    description: 'SWIG-4.0 Documentation',
    tags: ['language composition', 'research', 'documentation']
  },
  {
    url: 'https://soft-dev.org/pubs/html/barrett_bolz_diekmann_tratt__fine_grained_language_composition/',
    title: 'Fine-grained Language Composition: A Case Study',
    description:
      'Although run-time language composition is common, it normally takes the form of a crude Foreign Function Interface (FFI). While useful, such compositions tend to be coarse-grained and slow. In this paper we introduce a novel fine-grained syntactic composition of PHP and Python which allows users to embed each language inside the other, including referencing variables across languages. This composition raises novel design and implementation challenges. We show that good solutions can be found to the design challenges; and that the resulting implementation imposes an acceptable performance overhead of, at most, 2.6x.',
    tags: ['php', 'python', 'composition', 'performance', 'research']
  },
  {
    url: 'https://wiki.c2.com/?IocContainerComparison',
    title: 'Ioc Container Comparison',
    description:
      'This page has been created to compare containers supporting the Inversion Of Control pattern (see HollywoodPrinciple). This should help potential users to make an educated choice of various container and to better understand the existing products.',
    tags: ['ioc', 'compare', 'container']
  },
  {
    title: 'Inversion of Control Containers and the Dependency Injection pattern',
    description: 'Hexagonal Architecture is a fabulous pattern to easily embrace changes within our projects.',
    url: 'https://martinfowler.com/articles/injection.html',
    tags: ['ioc', 'di', 'architecture']
  },
  {
    title: 'Alistair in the "Hexagone" 1/3',
    description: 'Hexagonal Architecture is a fabulous pattern to easily embrace changes within our projects.',
    url: 'https://www.youtube.com/watch?v=th4AgBcrEHA',
    tags: ['architecture', 'hexagonal architecture']
  }
]

export default resources
