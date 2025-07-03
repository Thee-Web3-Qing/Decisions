import pinnedTweetCover from '../assets/the-pinned-tweet.jpg';

export const stories = [
  {
    id: 1,
    title: "The Pinned Tweet",
    character: "Anonymous Dev",
    description: "Navigate the viral fame and anonymity of a developer who accidentally went viral with a single tweet about their contract success.",
    coverImage: pinnedTweetCover,
    difficulty: "Medium",
    estimatedTime: "20 min",
    totalDecisions: 5,
    intro: {
      id: "intro",
      paragraphs: [
        {
          id: "intro_p1",
          text: "Uche didn't mean to go viral. It started with one tweet — a screenshot of his dev terminal and the caption: \"Was broke 3 months ago. Now my contract just got called 100 times in 5 minutes.\" He didn't explain anything: no thread, no link, no emoji, just vibes, and that was what did it. The quote tweets rolled in: \"Alpha,\" \"Cap,\" \"Who is this?\""
        },
        {
          id: "intro_p2",
          text: "What none of them knew was that he almost quit two weeks earlier. Imposter syndrome had him by the throat, the contracts he deployed then had zero traction, and his last grant application had been rejected."
        },
        {
          id: "intro_p3",
          text: "Now, strangers were screenshotting his analytics, DMs rolled in, and someone even made a meme of his PFP on a throne made of terminal windows. The tweet became a pinned tweet, but what came next wasn't as predictable."
        }
      ],
      choices: [
        { id: "A1", text: "Stay anonymous and mysterious", nextDecision: "A1" },
        { id: "B1", text: "Reveal the real story behind the tweet", nextDecision: "B1" },
        { id: "C1", text: "Start a series teaching others how to build", nextDecision: "C1" }
      ]
    },
    decisions: [
      {
        id: "A1",
        paragraphs: [
          {
            id: "A1_p1",
            text: "He didn't say anything for two days, no follow-up tweet, no interviews, and the mystery deepened. Someone started a Telegram group just to speculate on who he might be."
          },
          {
            id: "A1_p2",
            text: "Every few hours, someone dropped a new theory: \"It's that guy from zkSync,\" or \"No, it's a woman from Nigeria,\" and the anonymity made it grow."
          },
          {
            id: "A1_p3",
            text: "When Uche finally tweeted again, it was just a gif — a glitching cat with laser eyes and the caption: \"Keep watching,\" and that got 4,000 retweets. People started replying with offers: \"We'll fund whatever you build,\" \"Drop a token,\" \"Do a space.\" Uche wasn't sure what to do next; he hadn't planned for this, but now he had attention and options."
          }
        ],
        choices: [
          { id: "A1a", text: "Drop a mysterious whitepaper", nextDecision: "A1a" },
          { id: "A1b", text: "Build a Telegram community under an alias", nextDecision: "A1b" },
          { id: "A1c", text: "Ghost everyone and start a new account anonymously", nextDecision: "A1c" }
        ]
      },
      {
        id: "A1a",
        paragraphs: [
          {
            id: "A1a_p1",
            text: "He used ChatGPT and Notion to draft something half-technical, half-poetic, titled \"The Network of Ghosts.\" The whitepaper didn't say what it was building, only what it believed: decentralization should feel like disappearance, not noise."
          },
          {
            id: "A1a_p2",
            text: "People started reading into it like scripture, and Medium think-pieces emerged claiming, \"This is the new Bitcoin.\" VCs emailed burner accounts, DAOs started mentioning it in calls, but there was no token, no team, just a wallet address at the bottom."
          },
          {
            id: "A1a_p3",
            text: "It received $11k in ETH overnight, with no instructions, just belief."
          }
        ],
        choices: [
          { id: "A1a1", text: "Use the ETH to build a working prototype", nextDecision: "A1a1" },
          { id: "A1a2", text: "Burn the ETH and tweet the tx hash", nextDecision: "A1a2" },
          { id: "A1a3", text: "Airdrop NFTs to everyone who sent ETH", nextDecision: "A1a3" }
        ]
      },
      {
        id: "A1a1",
        paragraphs: [
          {
            id: "A1a1_p1",
            text: "Uche started quietly working on a protocol — it wasn't revolutionary, but it was sleek, minimal, and useful: a private layer for anonymous collaboration. He used pseudonyms to recruit contributors, and no one knew who anyone else was, but they shipped fast."
          },
          {
            id: "A1a1_p2",
            text: "When the testnet launched, it got 300 users in 48 hours, and people were experimenting with anonymous docs, tokenless governance, and whisper-chain voting. He never revealed his identity, but the protocol started showing up in conversations, and someone even forked it and added new features."
          },
          {
            id: "A1a1_p3",
            text: "A year later, he logged in to see someone write: \"This tool saved my DAO,\" and that was enough."
          }
        ],
        choices: [
          { id: "A1a1a", text: "Keep maintaining the tool quietly", ending: true },
          { id: "A1a1b", text: "Sell it to a privacy-focused org", ending: true },
          { id: "A1a1c", text: "Walk away and build something totally new", ending: true }
        ]
      },
      {
        id: "A1a2",
        paragraphs: [
          {
            id: "A1a2_p1",
            text: "Uche took the ETH, sent it to the burn address, and tweeted the transaction hash with two words: \"No masters.\" It exploded. People were furious, inspired, confused: \"Is he insane?\" \"This is performance art.\" \"He just threw away $11k?\""
          },
          {
            id: "A1a2_p2",
            text: "Think-pieces followed, and the act became symbolic — a protest against greed, a return to values, or just noise, depending on who you asked. One person wrote: \"This is the closest thing I've seen to crypto punk in 2025.\""
          },
          {
            id: "A1a2_p3",
            text: "He never explained himself; he just logged off."
          }
        ],
        choices: [
          { id: "A1a2a", text: "Log off and disappear again", ending: true },
          { id: "A1a2b", text: "Start a philosophy blog about Web3", ending: true },
          { id: "A1a2c", text: "Turn the moment into a zine drop", ending: true }
        ]
      },
      {
        id: "A1a3",
        paragraphs: [
          {
            id: "A1a3_p1",
            text: "Uche designed 11 unique NFTs — abstract generative art that resembled glitchy ghosts, each one matching the spirit of a wallet that sent ETH. He used on-chain data to make each piece partially deterministic: if your wallet used Tornado Cash, you got one that flickered violently; if it was a Gnosis Safe, you got a slow pulsing one."
          },
          {
            id: "A1a3_p2",
            text: "People loved them, some holders never sold, and others flipped them for 10x on secondary markets."
          },
          {
            id: "A1a3_p3",
            text: "A collector tweeted: \"This is what art on-chain is supposed to feel like,\" and it sparked a short trend: narrative airdrops, which everyone tried, but none hit the same."
          }
        ],
        choices: [
          { id: "A1a3a", text: "Build a platform for narrative airdrops", ending: true },
          { id: "A1a3b", text: "Disappear and let the drop stand on its own", ending: true },
          { id: "A1a3c", text: "Start writing stories based on wallet behavior", ending: true }
        ]
      },
      {
        id: "A1b",
        paragraphs: [
          {
            id: "A1b_p1",
            text: "He picked the name cyberhermit and set up a Telegram channel with no profile pic, just the word: \"Silence.\" People joined without knowing what to expect, and he posted cryptic messages, code snippets, and reflections on building anonymously."
          },
          {
            id: "A1b_p2",
            text: "Some members dropped alpha, others shared poetry; the vibe was weird but real, and slowly, it became a haven for misfits."
          },
          {
            id: "A1b_p3",
            text: "One day, someone proposed building a DAO from the group's energy, and Uche didn't say yes; he just dropped a repo link."
          }
        ],
        choices: [
          { id: "A1b1", text: "Let the group build the DAO without revealing yourself", ending: true },
          { id: "A1b2", text: "Use the alias to fund other anonymous builders", ending: true },
          { id: "A1b3", text: "Exit the group and leave it to evolve on its own", ending: true }
        ]
      },
      {
        id: "A1c",
        paragraphs: [
          {
            id: "A1c_p1",
            text: "Uche wiped his presence clean: new PFP, new name, zero follows, zero followers. He started tweeting strange questions, like, \"What happens to proof when no one asks for it?\""
          },
          {
            id: "A1c_p2",
            text: "People ignored him at first, but slowly, some noticed the rhythm; the account had a strange poetry."
          },
          {
            id: "A1c_p3",
            text: "Someone replied, \"Whoever this is, I feel like they've been here before.\" He smiled: ghosting didn't mean disappearing, it meant reappearing on your own terms."
          }
        ],
        choices: [
          { id: "A1c1", text: "Build a zine that unpacks online rebirth", ending: true },
          { id: "A1c2", text: "Move abroad for a fresh start", ending: true },
          { id: "A1c3", text: "Open up about burnout", ending: true }
        ]
      },
      {
        id: "B1",
        paragraphs: [
          {
            id: "B1_p1",
            text: "Uche opened a new thread: \"Everyone loved the win. Here's the truth.\" He broke it down — the failed grants, the cold DMs, the one friend who kept encouraging him when he almost gave up."
          },
          {
            id: "B1_p2",
            text: "It wasn't dramatic, just honest; he didn't exaggerate or spin, but told the truth about how much it hurt to almost believe in nothing. People didn't just relate — they leaned in, and retweets came with their own stories: \"Same here, bro,\" \"Been there. Still there,\" \"Damn, this hit.\""
          },
          {
            id: "B1_p3",
            text: "That tweet didn't go as viral, but it hit deeper; it built loyalty, not hype. Now they waited to see what he'd do next."
          }
        ],
        choices: [
          { id: "B1a", text: "Start a mentorship program", nextDecision: "B1a" },
          { id: "B1b", text: "Build a tool for struggling devs", nextDecision: "B1b" },
          { id: "B1c", text: "Write a book about the journey", nextDecision: "B1c" }
        ]
      },
      {
        id: "B1a",
        paragraphs: [
          {
            id: "B1a_p1",
            text: "He started with 10 people — all devs who'd messaged him with similar stories. No fancy platform, just weekly calls and a shared Notion doc."
          },
          {
            id: "B1a_p2",
            text: "They built together, failed together, and slowly, some of them started shipping. One got a grant, another landed a job, and a third launched their own project."
          },
          {
            id: "B1a_p3",
            text: "The group grew organically, and Uche realized he was building something more valuable than any protocol: a network of people who believed in each other."
          }
        ],
        choices: [
          { id: "B1a1", text: "Scale the program with funding", nextDecision: "B1a1" },
          { id: "B1a2", text: "Keep it small and intimate", nextDecision: "B1a2" },
          { id: "B1a3", text: "Turn it into a DAO", nextDecision: "B1a3" }
        ]
      },
      {
        id: "B1b",
        paragraphs: [
          {
            id: "B1b_p1",
            text: "He built a simple dashboard that tracked grant applications, cold outreach, and project milestones. Nothing fancy, just the tools he wished he'd had."
          },
          {
            id: "B1b_p2",
            text: "Other devs started using it, and he added features based on their feedback: integration with Notion, automated follow-ups, and a community of people sharing their strategies."
          },
          {
            id: "B1b_p3",
            text: "It became the go-to tool for indie devs trying to make it, and he realized he'd accidentally built a business."
          }
        ],
        choices: [
          { id: "B1b1", text: "Apply for grants to scale the tool", nextDecision: "B1b1" },
          { id: "B1b2", text: "Keep it free and open source", nextDecision: "B1b2" },
          { id: "B1b3", text: "Sell it to a larger company", nextDecision: "B1b3" }
        ]
      },
      {
        id: "B1c",
        paragraphs: [
          {
            id: "B1c_p1",
            text: "He started writing every day, documenting the highs and lows, the technical challenges, and the emotional rollercoaster of building in public."
          },
          {
            id: "B1c_p2",
            text: "The book became more than a memoir — it was a manual for anyone trying to build something from nothing, with real code examples, failed experiments, and honest reflections."
          },
          {
            id: "B1c_p3",
            text: "When he published it, it didn't go viral, but it found its audience: developers who were tired of the hype and wanted real stories from real people."
          }
        ],
        choices: [
          { id: "B1c1", text: "Turn it into a series of workshops", nextDecision: "B1c1" },
          { id: "B1c2", text: "Write a sequel about scaling", nextDecision: "B1c2" },
          { id: "B1c3", text: "Use it as a foundation for speaking", nextDecision: "B1c3" }
        ]
      },
      {
        id: "C1",
        paragraphs: [
          {
            id: "C1_p1",
            text: "The response to Uche's viral tweet didn't surprise him — but the follow-up questions did: \"How did you get the contract called?\" \"What stack are you using?\" \"Do you teach?\""
          },
          {
            id: "C1_p2",
            text: "Instead of replying in threads, he launched a new series: Build With Me — short, straight-to-the-point video tutorials on the exact things he wished someone had shown him months ago."
          },
          {
            id: "C1_p3",
            text: "No fancy branding, no paywall, just raw, unfiltered knowledge. People devoured it, and his following grew from curious onlookers to actual builders."
          }
        ],
        choices: [
          { id: "C1a", text: "Start a paid course", nextDecision: "C1a" },
          { id: "C1b", text: "Build a community around the content", nextDecision: "C1b" },
          { id: "C1c", text: "Partner with other creators", nextDecision: "C1c" }
        ]
      },
      {
        id: "C1a",
        paragraphs: [
          {
            id: "C1a_p1",
            text: "He created a comprehensive course covering everything from smart contract development to marketing strategies, with real code examples and case studies."
          },
          {
            id: "C1a_p2",
            text: "The course wasn't cheap, but it delivered value. Students built real projects, got real funding, and some even launched successful protocols."
          },
          {
            id: "C1a_p3",
            text: "He used the revenue to fund his own projects and help other builders, creating a sustainable ecosystem around his knowledge."
          }
        ],
        choices: [
          { id: "C1a1", text: "Scale with a team of instructors", nextDecision: "C1a1" },
          { id: "C1a2", text: "Keep it small and personal", nextDecision: "C1a2" },
          { id: "C1a3", text: "Turn it into a certification program", nextDecision: "C1a3" }
        ]
      },
      {
        id: "C1b",
        paragraphs: [
          {
            id: "C1b_p1",
            text: "He created a Discord server where builders could share their progress, ask questions, and collaborate on projects."
          },
          {
            id: "C1b_p2",
            text: "The community became a hub for innovation, with members launching successful projects, forming partnerships, and supporting each other through failures."
          },
          {
            id: "C1b_p3",
            text: "He realized he'd built something more valuable than any individual project — a network of builders who could change the world together."
          }
        ],
        choices: [
          { id: "C1b1", text: "Turn it into a DAO", nextDecision: "C1b1" },
          { id: "C1b2", text: "Keep it as a free community", nextDecision: "C1b2" },
          { id: "C1b3", text: "Use it to launch a fund", nextDecision: "C1b3" }
        ]
      },
      {
        id: "C1c",
        paragraphs: [
          {
            id: "C1c_p1",
            text: "He reached out to other successful builders and creators, proposing collaborations that would benefit everyone involved."
          },
          {
            id: "C1c_p2",
            text: "Together, they created content, launched projects, and built a network that was stronger than any individual could achieve alone."
          },
          {
            id: "C1c_p3",
            text: "The partnerships led to new opportunities, bigger audiences, and more impact than he could have achieved on his own."
          }
        ],
        choices: [
          { id: "C1c1", text: "Form a creator collective", nextDecision: "C1c1" },
          { id: "C1c2", text: "Launch a joint venture", nextDecision: "C1c2" },
          { id: "C1c3", text: "Keep it as loose collaborations", nextDecision: "C1c3" }
        ]
      }
    ],
    endings: [
      {
        id: "A1a1a",
        title: "The Quiet Maintainer",
        paragraphs: [
          {
            id: "A1a1a_p1",
            text: "Uche didn't chase growth; he just kept fixing bugs, updating features, and answering anonymous feedback, and the protocol matured without drama."
          },
          {
            id: "A1a1a_p2",
            text: "Eventually, devs from other ecosystems began referencing it, and forks appeared on Optimism, Solana, and even Tezos; none of them were huge, but they kept the idea alive. He never added a token, never made a DAO; he just built, quietly."
          },
          {
            id: "A1a1a_p3",
            text: "Years later, people credited the tool as the foundation for a new genre: minimum-governance coordination protocols. He smiled when he saw that phrase in a conference panel; no one knew it was his, and that was the point."
          }
        ],
        requirements: [
          { decisionId: "A1a1", choiceId: "A1a1a" }
        ]
      },
      {
        id: "A1a1b",
        title: "The Privacy Advocate",
        paragraphs: [
          {
            id: "A1a1b_p1",
            text: "He sold the protocol to a privacy-focused organization that promised to keep it open source and maintain its core values."
          },
          {
            id: "A1a1b_p2",
            text: "The sale gave him enough to fund his next project while ensuring the tool would continue to serve the community that had grown around it."
          },
          {
            id: "A1a1b_p3",
            text: "He used the proceeds to start a foundation dedicated to building privacy-first tools for the decentralized web."
          }
        ],
        requirements: [
          { decisionId: "A1a1", choiceId: "A1a1b" }
        ]
      },
      {
        id: "A1a1c",
        title: "The Fresh Start",
        paragraphs: [
          {
            id: "A1a1c_p1",
            text: "He walked away from the protocol entirely, leaving it in the hands of the community that had grown around it."
          },
          {
            id: "A1a1c_p2",
            text: "With a clean slate, he started building something completely different — a tool for creators to monetize their work without intermediaries."
          },
          {
            id: "A1a1c_p3",
            text: "This time, he built in public from day one, sharing his process and learning from the community as he went."
          }
        ],
        requirements: [
          { decisionId: "A1a1", choiceId: "A1a1c" }
        ]
      },
      {
        id: "A1a2a",
        title: "The Digital Ghost",
        paragraphs: [
          {
            id: "A1a2a_p1",
            text: "He logged off and disappeared completely, leaving behind only the burned ETH and the mystery of his identity."
          },
          {
            id: "A1a2a_p2",
            text: "Years later, people still referenced the act as a defining moment in Web3 culture — a reminder that value isn't always measured in dollars."
          },
          {
            id: "A1a2a_p3",
            text: "Some claimed to have met him in person, but no one could prove it. The legend grew larger than the man."
          }
        ],
        requirements: [
          { decisionId: "A1a2", choiceId: "A1a2a" }
        ]
      },
      {
        id: "A1a2b",
        title: "The Philosopher",
        paragraphs: [
          {
            id: "A1a2b_p1",
            text: "He started a blog exploring the philosophical implications of Web3, decentralization, and digital identity."
          },
          {
            id: "A1a2b_p2",
            text: "His writing attracted a following of thinkers, builders, and critics who engaged in deep discussions about the future of technology."
          },
          {
            id: "A1a2b_p3",
            text: "The blog became a platform for exploring ideas that went beyond the hype and focused on the deeper questions of what Web3 could become."
          }
        ],
        requirements: [
          { decisionId: "A1a2", choiceId: "A1a2b" }
        ]
      },
      {
        id: "A1a2c",
        title: "The Artist",
        paragraphs: [
          {
            id: "A1a2c_p1",
            text: "He turned the moment into a limited-edition zine that explored themes of value, anonymity, and digital performance art."
          },
          {
            id: "A1a2c_p2",
            text: "The zine became a collector's item, with each copy containing unique elements that made it impossible to replicate exactly."
          },
          {
            id: "A1a2c_p3",
            text: "He continued creating digital art that challenged people's assumptions about what Web3 could be beyond just financial speculation."
          }
        ],
        requirements: [
          { decisionId: "A1a2", choiceId: "A1a2c" }
        ]
      },
      {
        id: "A1a3a",
        title: "The Platform Builder",
        paragraphs: [
          {
            id: "A1a3a_p1",
            text: "He built a platform that made it easy for creators to design and distribute narrative airdrops based on wallet behavior."
          },
          {
            id: "A1a3a_p2",
            text: "The platform became popular among artists and creators who wanted to tell stories through blockchain interactions."
          },
          {
            id: "A1a3a_p3",
            text: "He found a new way to combine his technical skills with his love for storytelling and community building."
          }
        ],
        requirements: [
          { decisionId: "A1a3", choiceId: "A1a3a" }
        ]
      },
      {
        id: "A1a3b",
        title: "The Enigma",
        paragraphs: [
          {
            id: "A1a3b_p1",
            text: "He disappeared again, leaving the NFT drop as his final statement on the intersection of art, technology, and community."
          },
          {
            id: "A1a3b_p2",
            text: "The drop became legendary, with collectors and artists studying it for years to understand what made it so powerful."
          },
          {
            id: "A1a3b_p3",
            text: "His influence lived on through the work of others who were inspired by his approach to digital art and community."
          }
        ],
        requirements: [
          { decisionId: "A1a3", choiceId: "A1a3b" }
        ]
      },
      {
        id: "A1a3c",
        title: "The Storyteller",
        paragraphs: [
          {
            id: "A1a3c_p1",
            text: "He started writing stories based on wallet behavior, creating narratives that emerged from on-chain data."
          },
          {
            id: "A1a3c_p2",
            text: "His stories became popular among crypto enthusiasts who saw their own journeys reflected in the data-driven narratives."
          },
          {
            id: "A1a3c_p3",
            text: "He pioneered a new genre of blockchain literature that used on-chain data as the foundation for storytelling."
          }
        ],
        requirements: [
          { decisionId: "A1a3", choiceId: "A1a3c" }
        ]
      },
      {
        id: "A1b1",
        title: "The Silent Architect",
        paragraphs: [
          {
            id: "A1b1_p1",
            text: "He let the group build the DAO without revealing his identity, watching from the shadows as they created something beautiful."
          },
          {
            id: "A1b1_p2",
            text: "The DAO became a model for anonymous collaboration, with members working together without knowing each other's real identities."
          },
          {
            id: "A1b1_p3",
            text: "He continued to contribute under his alias, finding satisfaction in building something bigger than himself."
          }
        ],
        requirements: [
          { decisionId: "A1b", choiceId: "A1b1" }
        ]
      },
      {
        id: "A1b2",
        title: "The Anonymous Patron",
        paragraphs: [
          {
            id: "A1b2_p1",
            text: "He used his alias to fund other anonymous builders, creating a network of support for those who preferred to work in the shadows."
          },
          {
            id: "A1b2_p2",
            text: "His funding helped launch several successful projects that might never have seen the light of day otherwise."
          },
          {
            id: "A1b2_p3",
            text: "He became known as a mysterious benefactor who supported the ecosystem without seeking recognition or credit."
          }
        ],
        requirements: [
          { decisionId: "A1b", choiceId: "A1b2" }
        ]
      },
      {
        id: "A1b3",
        title: "The Ghost",
        paragraphs: [
          {
            id: "A1b3_p1",
            text: "He exited the group and left it to evolve on its own, disappearing into the digital ether once again."
          },
          {
            id: "A1b3_p2",
            text: "The group continued to grow and change, with new members joining and old ones leaving, but the spirit of anonymous collaboration remained."
          },
          {
            id: "A1b3_p3",
            text: "He watched from afar, satisfied that he had created something that could exist without him."
          }
        ],
        requirements: [
          { decisionId: "A1b", choiceId: "A1b3" }
        ]
      },
      {
        id: "A1c1",
        title: "The Digital Philosopher",
        paragraphs: [
          {
            id: "A1c1_p1",
            text: "He created a zine that explored the concept of online rebirth and digital identity transformation."
          },
          {
            id: "A1c1_p2",
            text: "The zine became popular among people who were questioning their relationship with social media and online identity."
          },
          {
            id: "A1c1_p3",
            text: "He continued to explore themes of anonymity, rebirth, and the fluid nature of digital existence."
          }
        ],
        requirements: [
          { decisionId: "A1c", choiceId: "A1c1" }
        ]
      },
      {
        id: "A1c2",
        title: "The Wanderer",
        paragraphs: [
          {
            id: "A1c2_p1",
            text: "He moved abroad for a fresh start, using the opportunity to reinvent himself both online and offline."
          },
          {
            id: "A1c2_p2",
            text: "The new environment gave him perspective on his previous work and inspired new ideas for future projects."
          },
          {
            id: "A1c2_p3",
            text: "He started building again, this time with a clearer sense of what he wanted to achieve and why."
          }
        ],
        requirements: [
          { decisionId: "A1c", choiceId: "A1c2" }
        ]
      },
      {
        id: "A1c3",
        title: "The Truth Teller",
        paragraphs: [
          {
            id: "A1c3_p1",
            text: "He opened up about his experience with burnout and the pressure of building in public."
          },
          {
            id: "A1c3_p2",
            text: "His honesty resonated with many other builders who were struggling with similar challenges."
          },
          {
            id: "A1c3_p3",
            text: "He became an advocate for mental health in the tech community, using his platform to support others."
          }
        ],
        requirements: [
          { decisionId: "A1c", choiceId: "A1c3" }
        ]
      },
      {
        id: "B1a1",
        title: "The Funded Cohort",
        paragraphs: [
          {
            id: "B1a1_p1",
            text: "He applied for grants to scale the mentorship program, and the second proposal was tighter — full usage metrics, testimonials, and a breakdown of saved developer hours."
          },
          {
            id: "B1a1_p2",
            text: "This time, it passed in a landslide, and even people outside his network vouched for the tool. He hired one contributor full-time, then another."
          },
          {
            id: "B1a1_p3",
            text: "For the first time, he wasn't just building — he was leading."
          }
        ],
        requirements: [
          { decisionId: "B1a", choiceId: "B1a1" }
        ]
      },
      {
        id: "B1a2",
        title: "The Intimate Circle",
        paragraphs: [
          {
            id: "B1a2_p1",
            text: "He kept the mentorship program small and intimate, focusing on quality over quantity."
          },
          {
            id: "B1a2_p2",
            text: "The deep relationships he built with each mentee led to lasting friendships and collaborations that went beyond the program."
          },
          {
            id: "B1a2_p3",
            text: "He found that sometimes the biggest impact comes from helping a few people deeply rather than many people superficially."
          }
        ],
        requirements: [
          { decisionId: "B1a", choiceId: "B1a2" }
        ]
      },
      {
        id: "B1a3",
        title: "The Decentralized Network",
        paragraphs: [
          {
            id: "B1a3_p1",
            text: "He turned the mentorship program into a DAO, giving members ownership and decision-making power over the program's direction."
          },
          {
            id: "B1a3_p2",
            text: "The DAO became a model for decentralized education, with members teaching each other and sharing resources."
          },
          {
            id: "B1a3_p3",
            text: "He stepped back and watched as the community he had started grew into something he could never have imagined."
          }
        ],
        requirements: [
          { decisionId: "B1a", choiceId: "B1a3" }
        ]
      },
      {
        id: "B1b1",
        title: "The Grant Winner",
        paragraphs: [
          {
            id: "B1b1_p1",
            text: "He applied for grants to scale the tool, and the second proposal was tighter — full usage metrics, testimonials, and a breakdown of saved developer hours."
          },
          {
            id: "B1b1_p2",
            text: "This time, it passed in a landslide, and even people outside his network vouched for the tool."
          },
          {
            id: "B1b1_p3",
            text: "He hired one contributor full-time, then another. For the first time, he wasn't just building — he was leading."
          }
        ],
        requirements: [
          { decisionId: "B1b", choiceId: "B1b1" }
        ]
      },
      {
        id: "B1b2",
        title: "The Open Source Advocate",
        paragraphs: [
          {
            id: "B1b2_p1",
            text: "He kept the tool free and open source, believing that the best way to help the community was to make it accessible to everyone."
          },
          {
            id: "B1b2_p2",
            text: "The tool became a standard in the indie dev community, with contributors from around the world adding features and improvements."
          },
          {
            id: "B1b2_p3",
            text: "He found satisfaction in knowing that his tool was helping thousands of developers, even if he wasn't making money from it."
          }
        ],
        requirements: [
          { decisionId: "B1b", choiceId: "B1b2" }
        ]
      },
      {
        id: "B1b3",
        title: "The Exit",
        paragraphs: [
          {
            id: "B1b3_p1",
            text: "He sold the tool to a larger company that promised to keep it accessible to the community while providing the resources to scale it properly."
          },
          {
            id: "B1b3_p2",
            text: "The sale gave him financial security and the freedom to pursue his next project without worrying about funding."
          },
          {
            id: "B1b3_p3",
            text: "He used the proceeds to start a foundation dedicated to supporting indie developers and their tools."
          }
        ],
        requirements: [
          { decisionId: "B1b", choiceId: "B1b3" }
        ]
      },
      {
        id: "B1c1",
        title: "The Workshop Leader",
        paragraphs: [
          {
            id: "B1c1_p1",
            text: "He turned the book into a series of workshops that combined storytelling with practical building exercises."
          },
          {
            id: "B1c1_p2",
            text: "The workshops became popular among developers who wanted to learn not just the technical skills, but also the mindset and resilience needed to build in public."
          },
          {
            id: "B1c1_p3",
            text: "He found that teaching others helped him refine his own understanding and approach to building."
          }
        ],
        requirements: [
          { decisionId: "B1c", choiceId: "B1c1" }
        ]
      },
      {
        id: "B1c2",
        title: "The Sequel",
        paragraphs: [
          {
            id: "B1c2_p1",
            text: "He wrote a sequel about scaling projects and teams, drawing from his own experiences and the stories of other builders."
          },
          {
            id: "B1c2_p2",
            text: "The sequel addressed the challenges that come after initial success — managing growth, maintaining culture, and staying true to your vision."
          },
          {
            id: "B1c2_p3",
            text: "It became a guide for founders who had achieved product-market fit and were wondering what came next."
          }
        ],
        requirements: [
          { decisionId: "B1c", choiceId: "B1c2" }
        ]
      },
      {
        id: "B1c3",
        title: "The Speaker",
        paragraphs: [
          {
            id: "B1c3_p1",
            text: "He used the book as a foundation for speaking engagements at conferences and events around the world."
          },
          {
            id: "B1c3_p2",
            text: "His talks focused on the human side of building — the emotional challenges, the mental health aspects, and the importance of community."
          },
          {
            id: "B1c3_p3",
            text: "He became known as a voice for authenticity in tech, someone who wasn't afraid to talk about the hard parts of building."
          }
        ],
        requirements: [
          { decisionId: "B1c", choiceId: "B1c3" }
        ]
      },
      {
        id: "C1a1",
        title: "The Academy",
        paragraphs: [
          {
            id: "C1a1_p1",
            text: "He scaled the course by bringing in a team of instructors, each specializing in different aspects of Web3 development."
          },
          {
            id: "C1a1_p2",
            text: "The academy became a comprehensive learning platform that covered everything from smart contracts to community building."
          },
          {
            id: "C1a1_p3",
            text: "He found that teaching at scale allowed him to impact thousands of developers while building a sustainable business."
          }
        ],
        requirements: [
          { decisionId: "C1a", choiceId: "C1a1" }
        ]
      },
      {
        id: "C1a2",
        title: "The Personal Touch",
        paragraphs: [
          {
            id: "C1a2_p1",
            text: "He kept the course small and personal, focusing on quality over quantity and building deep relationships with each student."
          },
          {
            id: "C1a2_p2",
            text: "The intimate setting allowed for personalized feedback and mentorship that larger programs couldn't provide."
          },
          {
            id: "C1a2_p3",
            text: "He found that the personal approach led to better outcomes and more meaningful connections with his students."
          }
        ],
        requirements: [
          { decisionId: "C1a", choiceId: "C1a2" }
        ]
      },
      {
        id: "C1a3",
        title: "The Certification",
        paragraphs: [
          {
            id: "C1a3_p1",
            text: "He turned the course into a certification program that was recognized by the broader tech industry."
          },
          {
            id: "C1a3_p2",
            text: "The certification became a valuable credential for developers looking to break into Web3, opening doors for many."
          },
          {
            id: "C1a3_p3",
            text: "He used the program's success to advocate for better education standards in the Web3 space."
          }
        ],
        requirements: [
          { decisionId: "C1a", choiceId: "C1a3" }
        ]
      },
      {
        id: "C1b1",
        title: "The Decentralized Community",
        paragraphs: [
          {
            id: "C1b1_p1",
            text: "He turned the Discord community into a DAO, giving members ownership and decision-making power over the community's direction."
          },
          {
            id: "C1b1_p2",
            text: "The DAO became a model for decentralized community building, with members collaborating on projects and sharing resources."
          },
          {
            id: "C1b1_p3",
            text: "He stepped back and watched as the community he had started grew into something he could never have imagined."
          }
        ],
        requirements: [
          { decisionId: "C1b", choiceId: "C1b1" }
        ]
      },
      {
        id: "C1b2",
        title: "The Free Hub",
        paragraphs: [
          {
            id: "C1b2_p1",
            text: "He kept the community free and accessible to everyone, believing that knowledge should be shared without barriers."
          },
          {
            id: "C1b2_p2",
            text: "The community became a hub for innovation, with members launching successful projects and supporting each other."
          },
          {
            id: "C1b2_p3",
            text: "He found satisfaction in knowing that his community was helping thousands of developers, even if he wasn't making money from it."
          }
        ],
        requirements: [
          { decisionId: "C1b", choiceId: "C1b2" }
        ]
      },
      {
        id: "C1b3",
        title: "The Investment Fund",
        paragraphs: [
          {
            id: "C1b3_p1",
            text: "He used the community's collective knowledge and network to launch an investment fund focused on early-stage Web3 projects."
          },
          {
            id: "C1b3_p2",
            text: "The fund became a bridge between builders and capital, helping promising projects get the resources they needed."
          },
          {
            id: "C1b3_p3",
            text: "He found a new way to support the ecosystem while building something sustainable for the community."
          }
        ],
        requirements: [
          { decisionId: "C1b", choiceId: "C1b3" }
        ]
      },
      {
        id: "C1c1",
        title: "The Creator Collective",
        paragraphs: [
          {
            id: "C1c1_p1",
            text: "He formed a collective with other successful builders and creators, pooling their resources and networks."
          },
          {
            id: "C1c1_p2",
            text: "The collective became a powerhouse for content creation, project launches, and community building."
          },
          {
            id: "C1c1_p3",
            text: "He found that collaboration amplified everyone's impact and created opportunities that none could achieve alone."
          }
        ],
        requirements: [
          { decisionId: "C1c", choiceId: "C1c1" }
        ]
      },
      {
        id: "C1c2",
        title: "The Joint Venture",
        paragraphs: [
          {
            id: "C1c2_p1",
            text: "He launched a joint venture with his partners, combining their expertise to create something bigger than any individual project."
          },
          {
            id: "C1c2_p2",
            text: "The venture became a platform for launching and scaling Web3 projects, with each partner bringing their unique strengths."
          },
          {
            id: "C1c2_p3",
            text: "He found that the structured partnership allowed for more ambitious projects and greater impact."
          }
        ],
        requirements: [
          { decisionId: "C1c", choiceId: "C1c2" }
        ]
      },
      {
        id: "C1c3",
        title: "The Loose Network",
        paragraphs: [
          {
            id: "C1c3_p1",
            text: "He kept the collaborations loose and informal, working together when it made sense but maintaining independence."
          },
          {
            id: "C1c3_p2",
            text: "The flexible approach allowed for organic partnerships that emerged from genuine shared interests and goals."
          },
          {
            id: "C1c3_p3",
            text: "He found that the informal network was more sustainable and allowed each person to pursue their own vision while supporting others."
          }
        ],
        requirements: [
          { decisionId: "C1c", choiceId: "C1c3" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Coming Soon #1",
    character: "???",
    description: "A new interactive story is on the way. Stay tuned!",
    coverImage: null,
    difficulty: "TBA",
    estimatedTime: "TBA",
    totalDecisions: 0,
  },
  {
    id: 3,
    title: "Coming Soon #2",
    character: "???",
    description: "Another interactive story is on the way. Stay tuned!",
    coverImage: null,
    difficulty: "TBA",
    estimatedTime: "TBA",
    totalDecisions: 0,
  }
];