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
            text: "He used ChatGPT and Notion to draft something half-technical, half-poetic. It was titled \"The Network of Ghosts.\""
          },
          {
            id: "A1a_p2",
            text: "The whitepaper didn't say what it was building, only what it believed: decentralization should feel like disappearance, not noise."
          },
          {
            id: "A1a_p3",
            text: "People started reading into it like scripture. Medium think-pieces emerged. \"This is the new Bitcoin.\""
          },
          {
            id: "A1a_p4",
            text: "VCs emailed burner accounts. DAOs started mentioning it in calls. But there was no token. No team. Just a wallet address at the bottom."
          },
          {
            id: "A1a_p5",
            text: "It received $11k in ETH overnight. No instructions. Just belief."
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
            text: "Uche started quietly working on a protocol — it wasn't revolutionary, but it was sleek, minimal, and useful. A private layer for anonymous collaboration."
          },
          {
            id: "A1a1_p2",
            text: "He used pseudonyms to recruit contributors. No one knew who anyone else was, but they shipped fast."
          },
          {
            id: "A1a1_p3",
            text: "When the testnet launched, it got 300 users in 48 hours. People were experimenting: anonymous docs, tokenless governance, whisper-chain voting."
          },
          {
            id: "A1a1_p4",
            text: "He never revealed his identity. But the protocol started showing up in conversations. Someone even forked it and added new features."
          },
          {
            id: "A1a1_p5",
            text: "A year later, he logged in to see someone write: \"This tool saved my DAO.\" That was enough."
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
            text: "Uche took the ETH, sent it to the burn address, and tweeted the transaction hash with two words: \"No masters.\" It exploded."
          },
          {
            id: "A1a2_p2",
            text: "People were furious, inspired, confused. \"Is he insane?\" \"This is performance art.\" \"He just threw away $11k?\""
          },
          {
            id: "A1a2_p3",
            text: "Think-pieces followed. The act became symbolic — a protest against greed, a return to values, or just noise depending on who you asked."
          },
          {
            id: "A1a2_p4",
            text: "One person wrote: \"This is the closest thing I've seen to crypto punk in 2025.\""
          },
          {
            id: "A1a2_p5",
            text: "He never explained himself. He just logged off."
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
            text: "Uche designed 11 unique NFTs — abstract generative art that resembled glitchy ghosts. Each one matched the spirit of a wallet that sent ETH."
          },
          {
            id: "A1a3_p2",
            text: "He used on-chain data to make each piece partially deterministic. If your wallet used Tornado Cash, you got one that flickered violently. If it was a Gnosis Safe, you got a slow pulsing one."
          },
          {
            id: "A1a3_p3",
            text: "People loved them. Some holders never sold. Others flipped them for 10x on secondary markets."
          },
          {
            id: "A1a3_p4",
            text: "A collector tweeted: \"This is what art on-chain is supposed to feel like.\""
          },
          {
            id: "A1a3_p5",
            text: "It sparked a short trend: narrative airdrops. Everyone tried it. None hit the same."
          }
        ],
        choices: [
          { id: "A1a3a", text: "Build a platform for narrative airdrops", ending: true },
          { id: "A1a3b", text: "Disappear and let the drop stand on its own", ending: true },
          { id: "A1a3c", text: "Start writing stories based on wallet behavior", ending: true }
        ]
      },
      {
        id: "A1a1a",
        paragraphs: [
          {
            id: "A1a1a_p1",
            text: "Uche didn't chase growth. He just kept fixing bugs, updating features, and answering anonymous feedback. The protocol matured without drama."
          },
          {
            id: "A1a1a_p2",
            text: "Eventually, devs from other ecosystems began referencing it. Forks appeared on Optimism, Solana, and even Tezos. None of them were huge, but they kept the idea alive."
          },
          {
            id: "A1a1a_p3",
            text: "He never added a token. Never made a DAO. He just built. Quietly."
          },
          {
            id: "A1a1a_p4",
            text: "Years later, people credited the tool as the foundation for a new genre: minimum-governance coordination protocols."
          },
          {
            id: "A1a1a_p5",
            text: "He smiled when he saw that phrase in a conference panel. No one knew it was his. That was the point."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1a1b",
        paragraphs: [
          {
            id: "A1a1b_p1",
            text: "An org called GhostChain reached out. They believed privacy should be programmable. They wanted to buy the tool and expand it."
          },
          {
            id: "A1a1b_p2",
            text: "Uche negotiated through an encrypted chat. They never knew his name. He was paid in ETH and USDC, and handed over the codebase."
          },
          {
            id: "A1a1b_p3",
            text: "They added an audit layer, rewrote some contracts, and launched a polished version called WhisperDAO."
          },
          {
            id: "A1a1b_p4",
            text: "He watched from afar. It blew up — and he didn't mind. He'd made his exit clean."
          },
          {
            id: "A1a1b_p5",
            text: "Sometimes he checked their GitHub issues just to see what they were building next."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1a1c",
        paragraphs: [
          {
            id: "A1a1c_p1",
            text: "He archived the project with a note: \"Finished. On to the next.\" No drama. No Discord goodbye."
          },
          {
            id: "A1a1c_p2",
            text: "A week later, he spun up a new account and started a simple repo: onchainstories.eth. He wanted to write fiction on the blockchain."
          },
          {
            id: "A1a1c_p3",
            text: "The pivot confused people. But he didn't care. He'd built a protocol. Now he wanted to build myth."
          },
          {
            id: "A1a1c_p4",
            text: "The first story he minted was about an anonymous dev who disappeared after launching a privacy tool."
          },
          {
            id: "A1a1c_p5",
            text: "Collectors ate it up."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1a2a",
        paragraphs: [
          {
            id: "A1a2a_p1",
            text: "Uche deleted the wallet, wiped the burner devices, and walked away. No goodbye. Just silence."
          },
          {
            id: "A1a2a_p2",
            text: "Months passed. A few conspiracy threads popped up asking, \"Where is the Ghost Dev now?\" No one had answers."
          },
          {
            id: "A1a2a_p3",
            text: "One dev built a tribute page with the quote: \"No masters.\" It became a badge in some circles."
          },
          {
            id: "A1a2a_p4",
            text: "Meanwhile, Uche lived offline. Grew vegetables. Painted. Touched code only when he felt like it."
          },
          {
            id: "A1a2a_p5",
            text: "He found peace in the quiet."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1a2b",
        paragraphs: [
          {
            id: "A1a2b_p1",
            text: "He launched a simple site — white background, black text, no ads. Just titled: 'No Masters Notes'."
          },
          {
            id: "A1a2b_p2",
            text: "Each post unpacked ideas behind decentralization, anonymity, and meaning. It wasn't academic, but it was sharp."
          },
          {
            id: "A1a2b_p3",
            text: "It gained a cult following among devs and founders who craved more than hype cycles and tokenomics."
          },
          {
            id: "A1a2b_p4",
            text: "One founder said the blog saved their protocol from becoming \"just another DeFi casino.\""
          },
          {
            id: "A1a2b_p5",
            text: "Uche kept writing. The words found their people."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1a2c",
        paragraphs: [
          {
            id: "A1a2c_p1",
            text: "He took screenshots of the burn, user reactions, and added cryptic essays. Then printed 243 hand-folded zines and shipped them globally."
          },
          {
            id: "A1a2c_p2",
            text: "Each zine came with a burnt-paper scented sticker and a POAP code inside."
          },
          {
            id: "A1a2c_p3",
            text: "Collectors fought for them. A sealed one sold for 1 ETH on a niche auction site."
          },
          {
            id: "A1a2c_p4",
            text: "Years later, a museum exhibit included it under the section: \"Crypto Subcultures.\""
          },
          {
            id: "A1a2c_p5",
            text: "The moment lived on, preserved in paper and pixels."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1a3a",
        paragraphs: [
          {
            id: "A1a3a_p1",
            text: "He started building a no-code tool: upload data, write your story, and mint it per wallet behavior."
          },
          {
            id: "A1a3a_p2",
            text: "He named it \"LoreDrop.\" The UX was sleek — like publishing Medium essays that lived in wallets."
          },
          {
            id: "A1a3a_p3",
            text: "Small artists loved it. A few big ones joined too."
          },
          {
            id: "A1a3a_p4",
            text: "It didn't blow up overnight, but slowly, a new lane formed: onchain storytelling."
          },
          {
            id: "A1a3a_p5",
            text: "Uche had created a new medium."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1a3b",
        paragraphs: [
          {
            id: "A1a3b_p1",
            text: "He deleted the repo, closed the site, and made no promises. The NFTs remained."
          },
          {
            id: "A1a3b_p2",
            text: "People still tweeted about them, especially on anniversaries. Some added them to wallets they used for nothing else."
          },
          {
            id: "A1a3b_p3",
            text: "Someone even tattooed theirs."
          },
          {
            id: "A1a3b_p4",
            text: "It became a lore object — a moment never explained, never replicated."
          },
          {
            id: "A1a3b_p5",
            text: "Perfect in its mystery."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1a3c",
        paragraphs: [
          {
            id: "A1a3c_p1",
            text: "He built a parser that read historical wallet data and turned it into short fiction."
          },
          {
            id: "A1a3c_p2",
            text: "Each address got its own story — like, \"This wallet jumped protocols like a tourist with a backpack full of gas tokens.\""
          },
          {
            id: "A1a3c_p3",
            text: "People loved reading themselves. A few even cried."
          },
          {
            id: "A1a3c_p4",
            text: "It turned data into humanity — and became a genre of its own."
          },
          {
            id: "A1a3c_p5",
            text: "Uche had found poetry in the blockchain."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1b",
        paragraphs: [
          {
            id: "A1b_p1",
            text: "He picked the name cyberhermit and set up a Telegram channel. No profile pic. Just the word: \"Silence.\""
          },
          {
            id: "A1b_p2",
            text: "People joined without knowing what to expect. He posted cryptic messages, code snippets, and reflections on building anonymously."
          },
          {
            id: "A1b_p3",
            text: "Some members dropped alpha. Others shared poetry. The vibe was weird but real. Slowly, it became a haven for misfits."
          },
          {
            id: "A1b_p4",
            text: "One day, someone proposed building a DAO from the group's energy. Uche didn't say yes. He just dropped a repo link."
          },
          {
            id: "A1b_p5",
            text: "The group began forming working groups. One for governance tooling, one for documentation, and one for memes."
          }
        ],
        choices: [
          { id: "A1b1", text: "Let the group build the DAO without revealing yourself", nextDecision: "A1b1" },
          { id: "A1b2", text: "Use the alias to fund other anonymous builders", nextDecision: "A1b2" },
          { id: "A1b3", text: "Exit the group and leave it to evolve on its own", nextDecision: "A1b3" }
        ]
      },
      {
        id: "A1b1",
        paragraphs: [
          {
            id: "A1b1_p1",
            text: "The Telegram group began forming working groups. One for governance tooling, one for documentation, and one for memes."
          },
          {
            id: "A1b1_p2",
            text: "Uche watched as they debated mission, scope, and name. He only nudged the process subtly — a link here, a cryptic emoji there."
          },
          {
            id: "A1b1_p3",
            text: "They ended up naming it SilentDAO. It launched with no founder, no manifesto — just a rhythm of anonymous action."
          },
          {
            id: "A1b1_p4",
            text: "Somehow, it worked. People contributed just to feel part of something real and undefined."
          },
          {
            id: "A1b1_p5",
            text: "Uche kept watching. Quietly proud."
          }
        ],
        choices: [
          { id: "A1b1a", text: "The DAO collapses in silence", ending: true },
          { id: "A1b1b", text: "The DAO gains momentum and becomes a model for others", ending: true },
          { id: "A1b1c", text: "Uche's subtle influence is discovered and reshapes the narrative", ending: true }
        ]
      },
      {
        id: "A1b2",
        paragraphs: [
          {
            id: "A1b2_p1",
            text: "He started DMing people from the group who dropped solid ideas or prototypes. The messages were short: \"How much would it take to finish this?\""
          },
          {
            id: "A1b2_p2",
            text: "He used multisigs and one-time wallets to stay detached. No strings. No Discord roles. Just quiet support."
          },
          {
            id: "A1b2_p3",
            text: "The vibe caught on. Other pseudonymous wallets joined in. A strange micro-economy bloomed — builders funding builders, no branding, no pressure."
          },
          {
            id: "A1b2_p4",
            text: "Some of the most useful tools of the year came out of that cluster. No VC ever saw it coming."
          },
          {
            id: "A1b2_p5",
            text: "People speculated about the wallet behind the generosity. Uche never confirmed anything. He didn't need to."
          }
        ],
        choices: [
          { id: "A1b2a", text: "The alias is mistaken for a collective and gets too much attention", ending: true },
          { id: "A1b2b", text: "A builder funded by Uche goes on to change the space", ending: true },
          { id: "A1b2c", text: "Uche is exposed in a chain analysis deep dive", ending: true }
        ]
      },
      {
        id: "A1b3",
        paragraphs: [
          {
            id: "A1b3_p1",
            text: "One morning, Uche woke up, deleted his Telegram, and never looked back. No goodbye. No warning."
          },
          {
            id: "A1b3_p2",
            text: "The group noticed, of course. \"cyberhermit left.\" That message stayed pinned for months."
          },
          {
            id: "A1b3_p3",
            text: "People started interpreting it like scripture. \"He always meant to leave.\" \"He gave us the blueprint.\""
          },
          {
            id: "A1b3_p4",
            text: "But the group didn't die. If anything, it got weirder — freer."
          },
          {
            id: "A1b3_p5",
            text: "Uche watched quietly from a burner account. The seed had outgrown the hand that planted it."
          }
        ],
        choices: [
          { id: "A1b3a", text: "The group fractures without guidance", ending: true },
          { id: "A1b3b", text: "A new anonymous leader rises", ending: true },
          { id: "A1b3c", text: "The group becomes a digital cult", ending: true }
        ]
      },
      {
        id: "A1b1a",
        paragraphs: [
          {
            id: "A1b1a_p1",
            text: "Without a leader, cracks formed slowly. A governance vote stalled for days."
          },
          {
            id: "A1b1a_p2",
            text: "People got tired of waiting. Small conflicts turned into exits. Core builders lost steam."
          },
          {
            id: "A1b1a_p3",
            text: "No one declared it dead. It just… stopped. The chats turned quiet. PRs dried up."
          },
          {
            id: "A1b1a_p4",
            text: "Months later, someone forked it and tried again — but it never felt the same."
          },
          {
            id: "A1b1a_p5",
            text: "Uche saw it all unfold and never said a word. Just closed the tab."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1b1b",
        paragraphs: [
          {
            id: "A1b1b_p1",
            text: "SilentDAO kept shipping. The rhythm of pseudonymous contribution worked better than anyone expected."
          },
          {
            id: "A1b1b_p2",
            text: "A few community tools they built started getting attention. Other DAOs forked their templates."
          },
          {
            id: "A1b1b_p3",
            text: "They even got invited to present anonymously at a conference — no founder, just a protocol."
          },
          {
            id: "A1b1b_p4",
            text: "Blogs called it \"The DAO That Runs on Vibes.\" Someone printed stickers."
          },
          {
            id: "A1b1b_p5",
            text: "Uche smiled. They didn't need him. That was the point."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1b1c",
        paragraphs: [
          {
            id: "A1b1c_p1",
            text: "One day, a dev was digging through the repo history and found a strange pattern."
          },
          {
            id: "A1b1c_p2",
            text: "They connected dots, usernames, commits. A theory surfaced: \"cyberhermit started all this.\""
          },
          {
            id: "A1b1c_p3",
            text: "A long thread went viral: \"The Ghost Founder of SilentDAO.\" Some loved it. Others felt betrayed."
          },
          {
            id: "A1b1c_p4",
            text: "It didn't break the DAO — but it broke the myth. Now people had a face, even if it wasn't confirmed."
          },
          {
            id: "A1b1c_p5",
            text: "Uche deleted the alias that night. Not out of shame — just completion."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1b2a",
        paragraphs: [
          {
            id: "A1b2a_p1",
            text: "Someone posted a theory: \"cyberhermit is actually a group of angels.\" Threads exploded."
          },
          {
            id: "A1b2a_p2",
            text: "Suddenly, journalists wanted interviews. Founders wanted intros. People even tried to pitch in voice chats."
          },
          {
            id: "A1b2a_p3",
            text: "Uche watched it spiral. He hadn't even touched the wallet in weeks — the myth had grown without him."
          },
          {
            id: "A1b2a_p4",
            text: "Eventually, someone rugged a project using the same name. The backlash hit hard."
          },
          {
            id: "A1b2a_p5",
            text: "He burned the alias. Not in anger — but because it had stopped being what it was."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1b2b",
        paragraphs: [
          {
            id: "A1b2b_p1",
            text: "One recipient, a 19-year-old from Jakarta, built a governance tool that quietly became a new standard."
          },
          {
            id: "A1b2b_p2",
            text: "They never knew who funded them — just that someone believed early."
          },
          {
            id: "A1b2b_p3",
            text: "When they won a major hackathon, they thanked \"a stranger who saw potential.\""
          },
          {
            id: "A1b2b_p4",
            text: "Uche saw the tweet, screenshotted it, and archived it in a folder called Seeds."
          },
          {
            id: "A1b2b_p5",
            text: "That one DM had shifted everything."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1b2c",
        paragraphs: [
          {
            id: "A1b2c_p1",
            text: "A self-proclaimed onchain sleuth traced multisig flows and published a detailed Medium post."
          },
          {
            id: "A1b2c_p2",
            text: "They didn't say his real name, but the connections were obvious: same wallets, same timestamps, same git commits."
          },
          {
            id: "A1b2c_p3",
            text: "The article went semi-viral. Some applauded him. Others said it was performative stealth."
          },
          {
            id: "A1b2c_p4",
            text: "He didn't respond. He just stopped funding. The wallet stayed quiet."
          },
          {
            id: "A1b2c_p5",
            text: "Some called it a loss. Uche called it a pause."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1b3a",
        paragraphs: [
          {
            id: "A1b3a_p1",
            text: "Without the silent anchor, chaos bubbled up. Petty arguments turned into power grabs."
          },
          {
            id: "A1b3a_p2",
            text: "A few members tried forming a council, but no one agreed on the rules."
          },
          {
            id: "A1b3a_p3",
            text: "Some devs forked the group and started their own versions. The energy felt diluted."
          },
          {
            id: "A1b3a_p4",
            text: "The original group still existed — but mostly as a graveyard of potential."
          },
          {
            id: "A1b3a_p5",
            text: "Uche winced once, then closed the tab. Some gardens overgrow. Some rot."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1b3b",
        paragraphs: [
          {
            id: "A1b3b_p1",
            text: "After weeks of silence, someone with the alias \"QuietLoud\" began dropping builds. No explanations."
          },
          {
            id: "A1b3b_p2",
            text: "They became a lightning rod — not a founder, but a catalyst. People followed again."
          },
          {
            id: "A1b3b_p3",
            text: "The group regained momentum. It felt like the early days, but evolved."
          },
          {
            id: "A1b3b_p4",
            text: "No one knew if QuietLoud was Uche under a new name. The speculation only fueled the myth."
          },
          {
            id: "A1b3b_p5",
            text: "Uche didn't confirm. He didn't deny. He just watched the torch pass."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1b3c",
        paragraphs: [
          {
            id: "A1b3c_p1",
            text: "The cryptic nature of Uche's exit turned symbolic. Threads popped up: \"What would cyberhermit do?\""
          },
          {
            id: "A1b3c_p2",
            text: "They started hosting weekly \"Silence Sessions\" — meetings where no one spoke, only posted commits."
          },
          {
            id: "A1b3c_p3",
            text: "Someone printed T-shirts. Others wrote poems. A few members left when it got too intense."
          },
          {
            id: "A1b3c_p4",
            text: "But the core believers stayed. They didn't need purpose — they needed mystery."
          },
          {
            id: "A1b3c_p5",
            text: "Uche laughed softly one night. He hadn't meant to start a movement. But here it was."
          }
        ],
        choices: [],
        ending: true
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
          { id: "A1c1", text: "Build a zine that unpacks online rebirth", nextDecision: "A1c1" },
          { id: "A1c2", text: "Move abroad for a fresh start", nextDecision: "A1c2" },
          { id: "A1c3", text: "Open up about burnout", nextDecision: "A1c3" }
        ]
      },
      {
        id: "A1c1",
        paragraphs: [
          {
            id: "A1c1_p1",
            text: "He made a PDF zine titled Shadow Layers, filled with scanned notebooks, cryptic poems, and fragments of deleted tweets."
          },
          {
            id: "A1c1_p2",
            text: "It had no name on the cover — just a checksum and a date. He minted 100 copies onchain."
          },
          {
            id: "A1c1_p3",
            text: "It sold out in under an hour. People debated every phrase like it was scripture."
          },
          {
            id: "A1c1_p4",
            text: "One reader printed it and left copies at hacker houses worldwide. A few even tattooed excerpts."
          },
          {
            id: "A1c1_p5",
            text: "Uche watched the copies travel. They didn't need him. The words had their own passport."
          }
        ],
        choices: [
          { id: "A1c1a", text: "Reveal his identity after the zine gains cult status", ending: true },
          { id: "A1c1b", text: "Mint a second volume that contradicts the first", ending: true },
          { id: "A1c1c", text: "Refuse to speak about it ever again", ending: true }
        ]
      },
      {
        id: "A1c2",
        paragraphs: [
          {
            id: "A1c2_p1",
            text: "He got into a fellowship in Lisbon. Packed his bags and flew out."
          },
          {
            id: "A1c2_p2",
            text: "For the first time, no one knew who he was. He walked into crypto meetups without expectations."
          },
          {
            id: "A1c2_p3",
            text: "He stayed silent at first. Then slowly, his insights earned him nods. Invitations. Collaborations."
          },
          {
            id: "A1c2_p4",
            text: "He felt like he was beginning again — but this time, wiser."
          },
          {
            id: "A1c2_p5",
            text: "Someone once asked, \"Where did you learn all this?\" He just said, \"Online.\""
          }
        ],
        choices: [
          { id: "A1c2a", text: "Start building again under a new name", ending: true },
          { id: "A1c2b", text: "Reveal he was cyberhermit all along", ending: true },
          { id: "A1c2c", text: "Quietly leave the space and work in a café", ending: true }
        ]
      },
      {
        id: "A1c3",
        paragraphs: [
          {
            id: "A1c3_p1",
            text: "One tweet changed everything: \"I ghosted because I was tired. Web3 moves too fast. I needed air.\""
          },
          {
            id: "A1c3_p2",
            text: "It got thousands of replies. People resonated. Builders, artists, even devs from blue-chip DAOs."
          },
          {
            id: "A1c3_p3",
            text: "He started hosting weekly reflections on voice chat — just check-ins, no alpha."
          },
          {
            id: "A1c3_p4",
            text: "Others began doing the same. The movement spread. Someone called it \"mindful decentralization.\""
          },
          {
            id: "A1c3_p5",
            text: "Uche didn't call it anything. He just kept breathing."
          }
        ],
        choices: [
          { id: "A1c3a", text: "Write a manifesto on digital rest", ending: true },
          { id: "A1c3b", text: "Get invited to speak at a mental health panel", ending: true },
          { id: "A1c3c", text: "Burn out again, but this time in silence", ending: true }
        ]
      },
      {
        id: "A1c1a",
        paragraphs: [
          {
            id: "A1c1a_p1",
            text: "Someone doxxed him halfway — posted a screenshot from his old GitHub contributions that matched a zine timestamp."
          },
          {
            id: "A1c1a_p2",
            text: "Uche didn't deny it. Instead, he posted a selfie with the caption: \"Yes. I wrote Shadow Layers.\""
          },
          {
            id: "A1c1a_p3",
            text: "Some fans felt betrayed. Others felt closer. A few said it killed the magic."
          },
          {
            id: "A1c1a_p4",
            text: "But new readers flooded in. College lectures quoted him. Podcasts reached out."
          },
          {
            id: "A1c1a_p5",
            text: "He didn't chase the spotlight — he just gave people a face to blame or believe."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1c1b",
        paragraphs: [
          {
            id: "A1c1b_p1",
            text: "Volume 2 was chaos. Redacted pages. Contradictions. QR codes that led nowhere."
          },
          {
            id: "A1c1b_p2",
            text: "Readers were furious. \"Is this a joke?\" \"What does this mean?\" Theories piled up."
          },
          {
            id: "A1c1b_p3",
            text: "One zine collector claimed both volumes formed a hidden third zine — if you read them backward."
          },
          {
            id: "A1c1b_p4",
            text: "Others just called him a fraud. But some loved it more because of the discomfort."
          },
          {
            id: "A1c1b_p5",
            text: "Uche didn't clarify. He wasn't building certainty — he was building tension."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1c1c",
        paragraphs: [
          {
            id: "A1c1c_p1",
            text: "Interviewers asked. Fans speculated. Anonymous accounts begged for answers."
          },
          {
            id: "A1c1c_p2",
            text: "But Uche never responded. The zine stood alone. He didn't sign it, expand it, or explain it."
          },
          {
            id: "A1c1c_p3",
            text: "He moved on — built other things, joined collectives, published under different names."
          },
          {
            id: "A1c1c_p4",
            text: "People still shared Shadow Layers, but it became more myth than material."
          },
          {
            id: "A1c1c_p5",
            text: "He liked it that way. Some work shouldn't be unwrapped."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1c2a",
        paragraphs: [
          {
            id: "A1c2a_p1",
            text: "The new alias built fast. Joined hackathons. Shipped MVPs. Ghosted again."
          },
          {
            id: "A1c2a_p2",
            text: "But this time, Uche kept his ego out of it. No threads. No hype."
          },
          {
            id: "A1c2a_p3",
            text: "His code spoke for itself — lightweight, clear, pragmatic. People forked his tools silently."
          },
          {
            id: "A1c2a_p4",
            text: "Eventually, he earned a rep as \"the dev who always disappears.\""
          },
          {
            id: "A1c2a_p5",
            text: "It suited him. His work didn't need applause — just adoption."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1c2b",
        paragraphs: [
          {
            id: "A1c2b_p1",
            text: "He dropped the bomb at a Lisbon meetup: \"Yeah, I used to go by cyberhermit.\""
          },
          {
            id: "A1c2b_p2",
            text: "The silence was thick. Then someone clapped. Then more. Then questions. So many questions."
          },
          {
            id: "A1c2b_p3",
            text: "He didn't answer all. Just a few. Enough to let them know he was real."
          },
          {
            id: "A1c2b_p4",
            text: "The myth didn't die. It shifted. Now people said, \"He walks among us.\""
          },
          {
            id: "A1c2b_p5",
            text: "He smiled. Sometimes, disappearing is just the prologue."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1c2c",
        paragraphs: [
          {
            id: "A1c2c_p1",
            text: "He got a job at a sleepy café on a quiet street. Morning shifts. Good coffee. No Discord."
          },
          {
            id: "A1c2c_p2",
            text: "He still coded — little things. Tools for local vendors. A weather script for his neighbor."
          },
          {
            id: "A1c2c_p3",
            text: "One day, someone recognized him. \"Aren't you…?\" Uche smiled and shook his head."
          },
          {
            id: "A1c2c_p4",
            text: "\"Just a guy who used to post online.\""
          },
          {
            id: "A1c2c_p5",
            text: "The person didn't push. Just nodded, ordered a pastry, and left a big tip."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1c3a",
        paragraphs: [
          {
            id: "A1c3a_p1",
            text: "He called it Log Off to Live. A 10-page PDF with lines like: \"The grind is a scam. So is your timeline.\""
          },
          {
            id: "A1c3a_p2",
            text: "It went viral — ironically — through reposts, screenshots, even TikToks."
          },
          {
            id: "A1c3a_p3",
            text: "One founder wrote, \"This stopped me from launching my 4th protocol this year. Thank you.\""
          },
          {
            id: "A1c3a_p4",
            text: "It wasn't a book. It wasn't a course. It was a break in the noise."
          },
          {
            id: "A1c3a_p5",
            text: "Uche turned off his notifications and slept for 12 hours."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1c3b",
        paragraphs: [
          {
            id: "A1c3b_p1",
            text: "The panel was small — a side-stage thing at ETHCC. But the room was full."
          },
          {
            id: "A1c3b_p2",
            text: "Uche didn't use slides. He spoke slowly, pausing between every thought."
          },
          {
            id: "A1c3b_p3",
            text: "He talked about waking up anxious for no reason. About missing birthdays. About guilt."
          },
          {
            id: "A1c3b_p4",
            text: "Afterward, a young dev hugged him. \"I thought I was weak for needing rest.\""
          },
          {
            id: "A1c3b_p5",
            text: "Uche shook his head. \"Weakness is pretending you don't.\""
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "A1c3c",
        paragraphs: [
          {
            id: "A1c3c_p1",
            text: "He felt it creeping back — the weight, the numbness, the dread."
          },
          {
            id: "A1c3c_p2",
            text: "This time, he didn't tweet. He didn't explain. He just disappeared. Again."
          },
          {
            id: "A1c3c_p3",
            text: "People noticed, but said nothing. Maybe they understood. Maybe they didn't care anymore."
          },
          {
            id: "A1c3c_p4",
            text: "His Discord went quiet. His GitHub showed no green squares."
          },
          {
            id: "A1c3c_p5",
            text: "But one day, a stranger tweeted: \"If you're out there — thank you.\" That was enough."
          }
        ],
        choices: [],
        ending: true
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
            text: "It wasn't dramatic. Just honest. He didn't exaggerate. He didn't spin. He told the truth about how much it hurt to almost believe in nothing."
          },
          {
            id: "B1_p3",
            text: "People didn't just relate — they leaned in. Retweets came with their own stories. \"Same here, bro.\" \"Been there. Still there.\" \"Damn, this hit.\""
          },
          {
            id: "B1_p4",
            text: "That tweet didn't go as viral. But it hit deeper. It built loyalty, not hype."
          },
          {
            id: "B1_p5",
            text: "Now they waited to see what he'd do next."
          }
        ],
        choices: [
          { id: "B1a", text: "Apply for public funding to build in the open", nextDecision: "B1a" },
          { id: "B1b", text: "Join a team building something similar", nextDecision: "B1b" },
          { id: "B1c", text: "Start a newsletter called Builder's Therapy", nextDecision: "B1c" }
        ]
      },
      {
        id: "B1a",
        paragraphs: [
          {
            id: "B1a_p1",
            text: "Uche submitted a small but intentional proposal on a grant platform. No tokenomics hype, no AI jargon — just a clean plan for a lightweight tool to help solo devs deploy faster."
          },
          {
            id: "B1a_p2",
            text: "The feedback was slow, then brutally honest. \"Too simple.\" \"Needs more traction.\" \"Why should we fund this?\""
          },
          {
            id: "B1a_p3",
            text: "But something strange happened. A smaller DAO quoted the proposal and funded it directly, saying, \"We want to back work that asks for less, not more.\""
          },
          {
            id: "B1a_p4",
            text: "Uche built it in public, tweeting updates weekly. By week 4, his GitHub was bookmarked across dev Telegrams."
          },
          {
            id: "B1a_p5",
            text: "That same grant platform invited him to speak on sustainable builder culture. Ironic."
          }
        ],
        choices: [
          { id: "B1a1", text: "The tool gains adoption slowly but steadily", nextDecision: "B1a1" },
          { id: "B1a2", text: "He gets blocked by bureaucratic drama", nextDecision: "B1a2" },
          { id: "B1a3", text: "The project gets forked by someone bigger", nextDecision: "B1a3" }
        ]
      },
      {
        id: "B1b",
        paragraphs: [
          {
            id: "B1b_p1",
            text: "He found a small, under-the-radar team on Farcaster, building a stripped-down dev wallet. The founder DM'd him: \"Saw your thread. Let's talk.\""
          },
          {
            id: "B1b_p2",
            text: "It clicked instantly. No bloated backlogs. Just async chats, weird ideas, and ship energy."
          },
          {
            id: "B1b_p3",
            text: "Uche didn't have to lead. He just had to contribute. The relief was addictive."
          },
          {
            id: "B1b_p4",
            text: "They shipped a v1 in 3 weeks. Then someone demoed it at ETHGlobal and got featured in a recap post."
          },
          {
            id: "B1b_p5",
            text: "Uche didn't get tagged — but he didn't care. He was in flow again."
          }
        ],
        choices: [
          { id: "B1b1", text: "He becomes a core contributor on the team", nextDecision: "B1b1" },
          { id: "B1b2", text: "He burns out from team politics", nextDecision: "B1b2" },
          { id: "B1b3", text: "He gets poached by a bigger, flashier team", nextDecision: "B1b3" }
        ]
      },
      {
        id: "B1c",
        paragraphs: [
          {
            id: "B1c_p1",
            text: "The first post was raw: \"No one talks about the lonely days between commits.\" He didn't ask for subscribers. He just hit publish."
          },
          {
            id: "B1c_p2",
            text: "It started as weekly reflections, then became a collection of anonymous confessions from burnt-out devs, overwhelmed creators, and ghosted contributors."
          },
          {
            id: "B1c_p3",
            text: "Some entries were two lines. Others read like open letters to lost cofounders."
          },
          {
            id: "B1c_p4",
            text: "By month three, Builder's Therapy hit 1,000 subs. A DAO offered to sponsor it. Uche declined. \"Some things aren't for sale.\""
          },
          {
            id: "B1c_p5",
            text: "It became a mirror people checked to see if they were still human."
          }
        ],
        choices: [
          { id: "B1c1", text: "The newsletter gains a cult following", nextDecision: "B1c1" },
          { id: "B1c2", text: "He gets invited to speak at conferences", nextDecision: "B1c2" },
          { id: "B1c3", text: "The newsletter quietly fades out", nextDecision: "B1c3" }
        ]
      },
      {
        id: "B1a1",
        paragraphs: [
          {
            id: "B1a1_p1",
            text: "Uche kept posting dev updates and small wins: \"Fixed latency by 40ms\" or \"Added batch deploy.\" The little things that devs care about."
          },
          {
            id: "B1a1_p2",
            text: "At first, only five people starred the repo. Then fifteen. Then someone created a walkthrough YouTube video titled 'Why no one is talking about this insane tool yet'."
          },
          {
            id: "B1a1_p3",
            text: "Contributors appeared naturally. No bounty. No roadmap. Just interest."
          },
          {
            id: "B1a1_p4",
            text: "By the third month, a few DAOs had integrated it into their internal tooling. He realized: this is how real adoption looks."
          },
          {
            id: "B1a1_p5",
            text: "The tool was becoming infrastructure."
          }
        ],
        choices: [
          { id: "B1a1a", text: "Apply for a bigger round of public goods funding", ending: true },
          { id: "B1a1b", text: "Stay lean and keep it indie forever", ending: true },
          { id: "B1a1c", text: "Hand it over to a DAO and move on", ending: true }
        ]
      },
      {
        id: "B1a2",
        paragraphs: [
          {
            id: "B1a2_p1",
            text: "The funding DAO he applied to suddenly paused all proposals. Treasury issues. Governance drama. Forums exploded in rage."
          },
          {
            id: "B1a2_p2",
            text: "He thought about writing a long post, defending his proposal — but he knew it wouldn't change anything."
          },
          {
            id: "B1a2_p3",
            text: "So instead, he started building anyway. He tweeted: \"Building even when it's unfunded is the ultimate flex.\""
          },
          {
            id: "B1a2_p4",
            text: "Ironically, that tweet brought attention. A delegate from another DAO messaged him: \"Let's skip the forums. We'll fund you direct.\""
          },
          {
            id: "B1a2_p5",
            text: "The lesson was clear — momentum beats paperwork."
          }
        ],
        choices: [
          { id: "B1a2a", text: "Accept direct funding and deliver fast", ending: true },
          { id: "B1a2b", text: "Stay neutral and open-source it without taking sides", ending: true },
          { id: "B1a2c", text: "Write a post exposing the DAO's dysfunction", ending: true }
        ]
      },
      {
        id: "B1a3",
        paragraphs: [
          {
            id: "B1a3_p1",
            text: "A larger, better-funded team forked his tool, polished it, and launched a slick dashboard around it. They didn't credit him."
          },
          {
            id: "B1a3_p2",
            text: "At first, he was furious. He drafted a thread calling them out — but didn't post it."
          },
          {
            id: "B1a3_p3",
            text: "Instead, he published a changelog: \"For those who know, you know.\" His community replied with old commit screenshots and inside jokes."
          },
          {
            id: "B1a3_p4",
            text: "Some users stuck with his version, calling it the \"real one.\" Others left."
          },
          {
            id: "B1a3_p5",
            text: "In the end, both tools coexisted. Quietly, his repo kept getting stars."
          }
        ],
        choices: [
          { id: "B1a3a", text: "Collaborate with the forked team and unify efforts", ending: true },
          { id: "B1a3b", text: "Double down and niche into a specific use case", ending: true },
          { id: "B1a3c", text: "Archive the project and start a new one in stealth", ending: true }
        ]
      },
      {
        id: "B1b1",
        paragraphs: [
          {
            id: "B1b1_p1",
            text: "Uche didn't plan to stay long, but after the first three releases, the team couldn't imagine building without him. He handled edge cases no one else saw coming."
          },
          {
            id: "B1b1_p2",
            text: "He started leading sprint planning, writing docs, and even calming community FUD. The founder began calling him \"our hidden backbone.\""
          },
          {
            id: "B1b1_p3",
            text: "One day, the team voted to give him equal equity. He hesitated — but then accepted. He had earned it."
          },
          {
            id: "B1b1_p4",
            text: "They weren't famous. But their tools powered a dozen stealth projects. The code spoke louder than the brand."
          },
          {
            id: "B1b1_p5",
            text: "Uche had found his tribe."
          }
        ],
        choices: [
          { id: "B1b1a", text: "Spin out a side project under the same team", ending: true },
          { id: "B1b1b", text: "Leave to found your own protocol", ending: true },
          { id: "B1b1c", text: "Step back and become an advisor", ending: true }
        ]
      },
      {
        id: "B1b2",
        paragraphs: [
          {
            id: "B1b2_p1",
            text: "At first, the energy was pure. But then came the product-market debates, the roadmap fights, and the Slack threads that never ended."
          },
          {
            id: "B1b2_p2",
            text: "One call turned into five arguments. Uche found himself muting more than contributing."
          },
          {
            id: "B1b2_p3",
            text: "He wrote code in silence. Stopped replying to jokes. Missed a standup. Then another."
          },
          {
            id: "B1b2_p4",
            text: "Finally, he dropped a message: \"Taking a break. Not sure for how long.\""
          },
          {
            id: "B1b2_p5",
            text: "The joy of collaboration had turned into dread."
          }
        ],
        choices: [
          { id: "B1b2a", text: "Leave and document your learnings", ending: true },
          { id: "B1b2b", text: "Take a sabbatical and return recharged", ending: true },
          { id: "B1b2c", text: "Quit and go solo in full stealth", ending: true }
        ]
      },
      {
        id: "B1b3",
        paragraphs: [
          {
            id: "B1b3_p1",
            text: "After a dev conference demo, a VC-backed project reached out. \"We love your work. Want to do it with more resources?\""
          },
          {
            id: "B1b3_p2",
            text: "He was torn. Loyalty versus leverage. Impact versus visibility."
          },
          {
            id: "B1b3_p3",
            text: "The offer came with a 3x pay bump, tokens, and a founding engineer title. He said yes."
          },
          {
            id: "B1b3_p4",
            text: "Leaving his first team was emotional. But new rooms brought new ideas."
          },
          {
            id: "B1b3_p5",
            text: "He stepped into the new team with nerves and ambition."
          }
        ],
        choices: [
          { id: "B1b3a", text: "Build internal tools and stay low", ending: true },
          { id: "B1b3b", text: "Climb fast and take over product", ending: true },
          { id: "B1b3c", text: "Realize the culture mismatch and leave quietly", ending: true }
        ]
      },
      {
        id: "B1c1",
        paragraphs: [
          {
            id: "B1c1_p1",
            text: "By the fifth issue, Uche noticed something strange. Readers weren't just consuming — they were responding. Long, thoughtful emails. Voice notes from devs he didn't know. Some even submitted their own entries."
          },
          {
            id: "B1c1_p2",
            text: "He started publishing those entries as guest features. Anonymous by default. Raw. Honest. One was from a founder whose cofounder ghosted. Another from a mod who burned out moderating three DAOs at once."
          },
          {
            id: "B1c1_p3",
            text: "People started quoting Builder's Therapy in governance forums and project retrospectives. One reader called it \"emotional infrastructure for the builder stack.\""
          },
          {
            id: "B1c1_p4",
            text: "Sponsors reached out. Uche said no. He wanted the space clean. No performance pressure."
          },
          {
            id: "B1c1_p5",
            text: "The newsletter had become a movement."
          }
        ],
        choices: [
          { id: "B1c1a", text: "Compile the best entries into a published book", ending: true },
          { id: "B1c1b", text: "Start live audio sessions based on the newsletter", ending: true },
          { id: "B1c1c", text: "Shut it down while it's still pure", ending: true }
        ]
      },
      {
        id: "B1c2",
        paragraphs: [
          {
            id: "B1c2_p1",
            text: "It started with a DM: \"Would love for you to speak at ETHAmsterdam about builder mental health.\" Uche almost declined. But something told him to say yes."
          },
          {
            id: "B1c2_p2",
            text: "He flew out with no slides — just stories. He told the crowd how it felt to ship in silence, to be invisible, to want to quit. The room stayed quiet, then clapped slowly. Not out of hype. Out of understanding."
          },
          {
            id: "B1c2_p3",
            text: "After the talk, founders came up to him. \"That was me last year.\" \"I didn't know we could talk about this.\" His inbox overflowed."
          },
          {
            id: "B1c2_p4",
            text: "One org even asked him to help design contributor wellness systems. He realized he had found a new role — not just as a builder, but as a space-maker."
          },
          {
            id: "B1c2_p5",
            text: "Uche had become a voice for the voiceless."
          }
        ],
        choices: [
          { id: "B1c2a", text: "Focus entirely on advocacy for builder wellness", ending: true },
          { id: "B1c2b", text: "Return to building with a new mental model", ending: true },
          { id: "B1c2c", text: "Start a DAO focused on mental health in Web3", ending: true }
        ]
      },
      {
        id: "B1c3",
        paragraphs: [
          {
            id: "B1c3_p1",
            text: "After the 14th issue, Uche started skipping weeks. Life got busy. The messages slowed. The inbox quieted."
          },
          {
            id: "B1c3_p2",
            text: "He tried to force an issue, but it didn't feel right. He wasn't burnt out — just done. The story had been told. The mirror had served its purpose."
          },
          {
            id: "B1c3_p3",
            text: "So he wrote a final post. \"Thank you for reading. I'm logging off, but I hope you keep writing to yourself.\" No drama. No announcement."
          },
          {
            id: "B1c3_p4",
            text: "A few loyal readers replied with emojis, emails, or just silence. They understood."
          },
          {
            id: "B1c3_p5",
            text: "Some stories don't need an arc. Just a space."
          }
        ],
        choices: [
          { id: "B1c3a", text: "Archive the newsletter and build something new", ending: true },
          { id: "B1c3b", text: "Re-emerge under a new voice, anonymously", ending: true },
          { id: "B1c3c", text: "Turn inward and stop creating publicly altogether", ending: true }
        ]
      },
      {
        id: "B1a1a",
        paragraphs: [
          {
            id: "B1a1a_p1",
            text: "The second proposal was tighter — full usage metrics, testimonials, and a breakdown of saved developer hours."
          },
          {
            id: "B1a1a_p2",
            text: "This time, it passed in a landslide. Even people outside his network vouched for the tool."
          },
          {
            id: "B1a1a_p3",
            text: "He hired one contributor full-time. Then another. For the first time, he wasn't just building — he was leading."
          },
          {
            id: "B1a1a_p4",
            text: "The tool became a standard. People forgot it had a founder."
          },
          {
            id: "B1a1a_p5",
            text: "Uche had built something that would outlast him."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1a1b",
        paragraphs: [
          {
            id: "B1a1b_p1",
            text: "He never scaled. Never raised. Just maintained."
          },
          {
            id: "B1a1b_p2",
            text: "He kept the code elegant. Simple commits, clear docs, no fluff. People forked it respectfully."
          },
          {
            id: "B1a1b_p3",
            text: "It became one of those \"unsung tools\" — not famous, but everywhere. Quiet infrastructure. Just like him."
          },
          {
            id: "B1a1b_p4",
            text: "Developers knew it by heart. No marketing needed."
          },
          {
            id: "B1a1b_p5",
            text: "Uche had built something timeless."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1a1c",
        paragraphs: [
          {
            id: "B1a1c_p1",
            text: "He set up a small multisig, onboarded three contributors, and left a note in the README: \"This isn't mine anymore.\""
          },
          {
            id: "B1a1c_p2",
            text: "At first, it was rocky. But slowly, the community stabilized. Updates slowed but stayed consistent."
          },
          {
            id: "B1a1c_p3",
            text: "Uche unplugged. Focused on art. Sometimes he checked the repo. Mostly, he didn't."
          },
          {
            id: "B1a1c_p4",
            text: "The tool lived on without him. That was the point."
          },
          {
            id: "B1a1c_p5",
            text: "He had learned to let go."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1a2a",
        paragraphs: [
          {
            id: "B1a2a_p1",
            text: "Uche took the grant and shipped in silence. No big announcements. Just clean commits."
          },
          {
            id: "B1a2a_p2",
            text: "The MVP worked. He open-sourced it and quietly tagged the DAO in a \"shipped\" tweet."
          },
          {
            id: "B1a2a_p3",
            text: "They didn't respond. But the community did. Adoption spiked. And so did his inbound DMs."
          },
          {
            id: "B1a2a_p4",
            text: "Sometimes the best revenge is success."
          },
          {
            id: "B1a2a_p5",
            text: "Uche had proven that builders could thrive outside the system."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1a2b",
        paragraphs: [
          {
            id: "B1a2b_p1",
            text: "He uploaded the code with a one-liner: \"Built for anyone, owed to no one.\""
          },
          {
            id: "B1a2b_p2",
            text: "People respected it. No alliances. No infighting. Just code."
          },
          {
            id: "B1a2b_p3",
            text: "Some DAOs adopted it quietly. One even said in a call, \"We use his tool, but we've never spoken to him.\""
          },
          {
            id: "B1a2b_p4",
            text: "The tool transcended politics. It just worked."
          },
          {
            id: "B1a2b_p5",
            text: "Uche had built something that belonged to everyone."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1a2c",
        paragraphs: [
          {
            id: "B1a2c_p1",
            text: "His mirror post was titled \"Why Builders Stop Trusting You.\" It wasn't angry. Just precise."
          },
          {
            id: "B1a2c_p2",
            text: "He listed screenshots, timelines, inconsistencies. It hit like a slow knife."
          },
          {
            id: "B1a2c_p3",
            text: "A few delegates clapped back. Others resigned. The drama trended onchain."
          },
          {
            id: "B1a2c_p4",
            text: "Uche didn't follow up. He went back to shipping."
          },
          {
            id: "B1a2c_p5",
            text: "Sometimes the truth needs to be spoken."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1a3a",
        paragraphs: [
          {
            id: "B1a3a_p1",
            text: "He messaged them: \"Let's stop pretending we aren't building the same thing.\""
          },
          {
            id: "B1a3a_p2",
            text: "They replied within the hour. A call turned into a collab. His code became the core module in their system."
          },
          {
            id: "B1a3a_p3",
            text: "They added his name to the credits. Quietly, he became their backend oracle."
          },
          {
            id: "B1a3a_p4",
            text: "Sometimes competition leads to collaboration."
          },
          {
            id: "B1a3a_p5",
            text: "Uche had turned a fork into a partnership."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1a3b",
        paragraphs: [
          {
            id: "B1a3b_p1",
            text: "He rebuilt the tool, but only for DAO multisig managers. Less sexy. More functional."
          },
          {
            id: "B1a3b_p2",
            text: "It got picked up by three treasury teams instantly. People said it \"just worked.\""
          },
          {
            id: "B1a3b_p3",
            text: "The original project faded, but Uche's niche version became a DAO essential."
          },
          {
            id: "B1a3b_p4",
            text: "Sometimes the best strategy is to go deeper, not wider."
          },
          {
            id: "B1a3b_p5",
            text: "Uche had found his niche."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1a3c",
        paragraphs: [
          {
            id: "B1a3c_p1",
            text: "He pushed one final commit: \"Archiving. Thanks for the ride.\" Then zipped the repo and logged out."
          },
          {
            id: "B1a3c_p2",
            text: "The next day, he opened a blank Figma and wrote: \"Start over, but better.\""
          },
          {
            id: "B1a3c_p3",
            text: "No one knew what he was building. But they knew it was him. And they were waiting."
          },
          {
            id: "B1a3c_p4",
            text: "Sometimes the best move is to reset."
          },
          {
            id: "B1a3c_p5",
            text: "Uche had learned to start fresh."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1b1a",
        paragraphs: [
          {
            id: "B1b1a_p1",
            text: "Late one night, while cleaning up redundant scripts, Uche had an idea — a dev tool to simplify multisig interactions that wasn't tied to their main product."
          },
          {
            id: "B1b1a_p2",
            text: "He pitched it lightly in the group chat. \"Not core to our roadmap, but feels useful.\" The team replied, \"If you've got the energy, we'll back you.\""
          },
          {
            id: "B1b1a_p3",
            text: "He built it in parallel, sometimes on weekends, sometimes during lunch breaks. One contributor offered to help with frontend polish. Another rewrote the CLI interface from scratch."
          },
          {
            id: "B1b1a_p4",
            text: "By the time it launched, the side project had its own identity — but with the DNA of the team that raised it. People started calling it a \"spinout\" even though it never really left the house."
          },
          {
            id: "B1b1a_p5",
            text: "Uche smiled watching it grow. Sometimes the best ideas aren't pivots. They're branches."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1b1b",
        paragraphs: [
          {
            id: "B1b1b_p1",
            text: "Success gave him clarity. He realized that while he loved his team, he had his own vision — one he couldn't ignore anymore."
          },
          {
            id: "B1b1b_p2",
            text: "He didn't burn bridges. He told the team during their weekly sync: \"I want to try something of my own. Not instead of what we built — but because of it.\""
          },
          {
            id: "B1b1b_p3",
            text: "They hugged him in silence. Shipped a release with a hidden thank-you in the footer."
          },
          {
            id: "B1b1b_p4",
            text: "Six months later, he launched the MVP of his own protocol. Simple. Elegant. No tokens. But it worked."
          },
          {
            id: "B1b1b_p5",
            text: "Uche had found his voice."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1b1c",
        paragraphs: [
          {
            id: "B1b1c_p1",
            text: "After back-to-back sprints and two major releases, Uche felt himself pulling back. Not from burnout — but because he finally trusted the team to run without him."
          },
          {
            id: "B1b1c_p2",
            text: "He told the founder during a 1:1, \"I think it's time for me to step into a different seat. I'll still be here — just not in the trenches.\""
          },
          {
            id: "B1b1c_p3",
            text: "They kept him on the multisig. He reviewed PRs, gave input on roadmap calls, and occasionally jumped in to solve a gnarly bug."
          },
          {
            id: "B1b1c_p4",
            text: "The new devs called him \"the ghost architect.\" His fingerprints were on everything, even when he wasn't typing."
          },
          {
            id: "B1b1c_p5",
            text: "And that was enough. Sometimes growth means letting go — but gently."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1b2a",
        paragraphs: [
          {
            id: "B1b2a_p1",
            text: "Uche didn't want to vanish. He knew others were in the same place — stuck, tired, unsure of how something they loved turned sour."
          },
          {
            id: "B1b2a_p2",
            text: "So he wrote. A long-form post titled \"Leaving Without Bitterness\" — a walkthrough of the build, the team dynamics, the quiet red flags, and what he wished he had done sooner."
          },
          {
            id: "B1b2a_p3",
            text: "It wasn't a rant. It was a resource. People messaged him privately: \"This helped me quit.\" \"This made me stay — but smarter.\""
          },
          {
            id: "B1b2a_p4",
            text: "He didn't expect the piece to spread, but it did. A few DAOs even used it to redesign their contributor onboarding."
          },
          {
            id: "B1b2a_p5",
            text: "Uche felt peace. He may have left the team, but he didn't leave empty."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1b2b",
        paragraphs: [
          {
            id: "B1b2b_p1",
            text: "He booked a flight. Not for a conference — for rest. One month. No calls. No commits. No deadlines."
          },
          {
            id: "B1b2b_p2",
            text: "He journaled daily. Drew flowcharts with no purpose. Sat in cafes with his phone off. It felt strange at first — like letting go of air."
          },
          {
            id: "B1b2b_p3",
            text: "But slowly, the anxiety dissolved. He started missing building again, but in a quiet, gentle way. Not like a hunger. More like a song coming back."
          },
          {
            id: "B1b2b_p4",
            text: "When he rejoined the team, he didn't try to catch up. He just asked, \"Where can I help?\""
          },
          {
            id: "B1b2b_p5",
            text: "They welcomed him like he never left."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1b2c",
        paragraphs: [
          {
            id: "B1b2c_p1",
            text: "He didn't write an exit thread. Didn't DM anyone goodbye. Just dropped a final message — \"logging off\" — and disappeared."
          },
          {
            id: "B1b2c_p2",
            text: "Then he got to work. Built at night, tested in silence, wrote code like it was music. No community calls. No token speculation. Just clarity."
          },
          {
            id: "B1b2c_p3",
            text: "After 3 months, he shipped something new under a pseudonym. No fanfare. Just a clean landing page and a single tweet."
          },
          {
            id: "B1b2c_p4",
            text: "People found it. They liked it. Some suspected it was him. No one knew for sure."
          },
          {
            id: "B1b2c_p5",
            text: "He didn't confirm. He didn't need to."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1b3a",
        paragraphs: [
          {
            id: "B1b3a_p1",
            text: "The new team had fancy branding, investor calls, and a growing Twitter presence. But Uche asked to skip all that."
          },
          {
            id: "B1b3a_p2",
            text: "He carved out a quiet role — building tooling that made the engineers faster, the deployments cleaner, the onboarding smoother. No one outside the team knew his name."
          },
          {
            id: "B1b3a_p3",
            text: "His code made other people shine. He fixed bottlenecks before others noticed they existed. Even the CTO said, \"Nothing public, but he holds the whole engine together.\""
          },
          {
            id: "B1b3a_p4",
            text: "He liked it that way. He didn't need to be seen. He needed to be useful."
          },
          {
            id: "B1b3a_p5",
            text: "When people asked what he was building now, he just said, \"Stuff that works.\""
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1b3b",
        paragraphs: [
          {
            id: "B1b3b_p1",
            text: "Uche didn't plan to lead. But he saw gaps — missing features, confused users, broken handoffs. And he spoke up."
          },
          {
            id: "B1b3b_p2",
            text: "By month two, he was writing specs. By month four, he was leading standups. His design docs turned into product roadmap."
          },
          {
            id: "B1b3b_p3",
            text: "Some older team members resented how fast he rose. But they couldn't argue with his output. Every sprint he ran shipped smoother."
          },
          {
            id: "B1b3b_p4",
            text: "He never asked for a title. But one day, the CEO changed his Slack role to \"Product Lead.\""
          },
          {
            id: "B1b3b_p5",
            text: "He left it there. Didn't say a word. Just kept going."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1b3c",
        paragraphs: [
          {
            id: "B1b3c_p1",
            text: "At first, the new team dazzled him — the polished pitch decks, the vision decks, the tokenomics spreadsheets."
          },
          {
            id: "B1b3c_p2",
            text: "But soon, the red flags flashed. Founder vibes were off. Deadlines trumped design. Speed over soul."
          },
          {
            id: "B1b3c_p3",
            text: "He tried to adjust. Kept his head down. Delivered on time. But the spark was gone. He wasn't building — he was producing."
          },
          {
            id: "B1b3c_p4",
            text: "One day, after another rushed release, he opened his laptop and typed just one line in the team chat: \"This isn't for me. I'm out.\""
          },
          {
            id: "B1b3c_p5",
            text: "He logged off, unplugged, and breathed again."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1c1a",
        paragraphs: [
          {
            id: "B1c1a_p1",
            text: "Uche spent two weeks re-reading every submission. The anonymous ones. The messy ones. The ones with typos that still broke hearts."
          },
          {
            id: "B1c1a_p2",
            text: "He chose thirty-seven stories and added short reflections after each. Not lessons — just thoughts. Observations from someone who had walked through the same fire."
          },
          {
            id: "B1c1a_p3",
            text: "The book was called Commit Messages from the Soul. He minted 1,000 copies as NFTs and released a PDF for free. It spread in group chats like folklore."
          },
          {
            id: "B1c1a_p4",
            text: "Founders printed it and left it on coffee tables at coworking spaces. One dev even said, \"I read a page before every sprint.\""
          },
          {
            id: "B1c1a_p5",
            text: "Uche didn't do a book tour. He just wrote one last post: \"This was always yours. I just helped write it down.\""
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1c1b",
        paragraphs: [
          {
            id: "B1c1b_p1",
            text: "Every Sunday night, he went live on a low-key Telegram voice chat. No schedule. No replay. No speakers. Just whoever showed up."
          },
          {
            id: "B1c1b_p2",
            text: "They talked about burnout, building without hype, failing in silence. Sometimes five people joined. Sometimes thirty. But it was always enough."
          },
          {
            id: "B1c1b_p3",
            text: "One night, someone broke down mid-sentence. The group stayed quiet. Then someone said, \"Take your time. We're here.\""
          },
          {
            id: "B1c1b_p4",
            text: "Soon, builders started hosting their own sessions. In Spanish. In Portuguese. One was entirely just ambient lo-fi with a pinned prompt."
          },
          {
            id: "B1c1b_p5",
            text: "Uche never branded it. Never called it a movement. But it was one."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1c1c",
        paragraphs: [
          {
            id: "B1c1c_p1",
            text: "The inbox was full. The numbers were up. But Uche felt it — the creeping temptation to monetize, to optimize, to turn Builder's Therapy into \"content.\""
          },
          {
            id: "B1c1c_p2",
            text: "So he stopped."
          },
          {
            id: "B1c1c_p3",
            text: "No grand finale. Just a short post titled \"Done — but not deleted.\" He left the archive open, the domain paid, the comments enabled."
          },
          {
            id: "B1c1c_p4",
            text: "People checked in weeks later. \"Will it come back?\" he never replied. But the silence felt fitting."
          },
          {
            id: "B1c1c_p5",
            text: "Some stories don't need an arc. Just a space. And sometimes, letting go is the most honest thing you can do."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1c2a",
        paragraphs: [
          {
            id: "B1c2a_p1",
            text: "The DMs kept coming. From contributors, founders, even VCs: \"Can we talk?\" \"Can you help us design something that won't break people?\""
          },
          {
            id: "B1c2a_p2",
            text: "So Uche leaned in. He stopped coding — at least publicly — and started consulting. He created mental health frameworks for DAOs, ran empathy workshops for dev teams, and helped contributors feel like humans again."
          },
          {
            id: "B1c2a_p3",
            text: "Some people rolled their eyes. \"Too soft.\" \"Not real work.\" But Uche saw the shift. Happier teams shipped faster. And people stopped quitting in silence."
          },
          {
            id: "B1c2a_p4",
            text: "He was invited to panels, podcasts, even government-backed Web3 policy boards. Not because he was loud, but because he made people feel seen."
          },
          {
            id: "B1c2a_p5",
            text: "One founder messaged him, \"You saved my project. But more importantly, you saved me.\""
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1c2b",
        paragraphs: [
          {
            id: "B1c2b_p1",
            text: "After the conference circuit, Uche unplugged for a month. No panels. No interviews. Just rest."
          },
          {
            id: "B1c2b_p2",
            text: "When he returned, he wrote one sentence on a whiteboard: \"Build like your nervous system depends on it.\" That became his new rule."
          },
          {
            id: "B1c2b_p3",
            text: "He joined a stealth project but insisted on async meetings, no Slack after 7pm, and mandatory monthly rest weeks. People laughed at first — then realized how much better they performed."
          },
          {
            id: "B1c2b_p4",
            text: "He still shipped. Still contributed. But never at the cost of his peace. And that balance became contagious."
          },
          {
            id: "B1c2b_p5",
            text: "Soon, other teams adopted his rhythm. Quietly. No branding. Just better habits."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1c2c",
        paragraphs: [
          {
            id: "B1c2c_p1",
            text: "He named it WarmChain. No token. No roadmap. Just a multisig, a Notion, and a weekly check-in space."
          },
          {
            id: "B1c2c_p2",
            text: "It began with twelve people. Builders, mods, ops leads — all exhausted. They shared stories. Coping tools. Sometimes just music."
          },
          {
            id: "B1c2c_p3",
            text: "Then came grants. Partnerships. A pilot wellness stipend system that got copied by four major DAOs. WarmChain stayed small, but its impact spread."
          },
          {
            id: "B1c2c_p4",
            text: "When asked why he started it, Uche said, \"Because if Web3 is supposed to change the world, we should at least not destroy ourselves doing it.\""
          },
          {
            id: "B1c2c_p5",
            text: "And for once, people didn't need more explanation than that."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1c3a",
        paragraphs: [
          {
            id: "B1c3a_p1",
            text: "Uche zipped up all 14 issues of Builder's Therapy into one folder and uploaded it to Arweave. No edits. No cleanup. Just as it was."
          },
          {
            id: "B1c3a_p2",
            text: "He added a one-liner to the pinned tweet: \"The mirror is still there if you ever need it.\" Then opened a blank project file the next day."
          },
          {
            id: "B1c3a_p3",
            text: "This time, it wasn't about feelings. It was about structure — tools that quietly enforced healthier workflows, more humane contribution systems. Still therapy. Just in code."
          },
          {
            id: "B1c3a_p4",
            text: "He called it Backlog Garden. A product that grew tasks like plants — slow, organic, honest. People didn't get it at first."
          },
          {
            id: "B1c3a_p5",
            text: "But the right ones did. And that was enough."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1c3b",
        paragraphs: [
          {
            id: "B1c3b_p1",
            text: "He created a new account with no bio, no links, and only one post: \"No one is immune to the noise. Especially not me.\""
          },
          {
            id: "B1c3b_p2",
            text: "The tweets were different this time. Less journal, more riddle. He posted screenshots of discarded drafts, half-drawn flowcharts, audio snippets of long silences."
          },
          {
            id: "B1c3b_p3",
            text: "People noticed the account. Followed quietly. Started quoting it on Farcaster and Telegram. Some suspected it was Uche. Others said, \"Whoever this is — they've been through something.\""
          },
          {
            id: "B1c3b_p4",
            text: "He didn't confirm or deny. He just kept posting. A new voice. But the same heart."
          },
          {
            id: "B1c3b_p5",
            text: "Sometimes reinvention is the most honest form of continuation."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "B1c3c",
        paragraphs: [
          {
            id: "B1c3c_p1",
            text: "For the first time in years, Uche didn't feel the urge to tweet. Or post. Or build for an audience."
          },
          {
            id: "B1c3c_p2",
            text: "He spent more time walking. Reading. Writing in a notebook with no plans to publish. A different kind of building — one where the only reader was himself."
          },
          {
            id: "B1c3c_p3",
            text: "Friends checked in. \"When are you dropping something?\" He replied with voice notes. Stories. Laughter. But no links."
          },
          {
            id: "B1c3c_p4",
            text: "He didn't quit Web3. He just stopped performing for it. And in that silence, he found something steadier than virality."
          },
          {
            id: "B1c3c_p5",
            text: "He found peace."
          }
        ],
        choices: [],
        ending: true
      },
      {
        id: "C1",
        paragraphs: [
          { id: "C1_p1", text: "The response to Uche's viral tweet didn't surprise him — but the follow-up questions did. \"How did you get the contract called?\" \"What stack are you using?\" \"Do you teach?\"" },
          { id: "C1_p2", text: "Instead of replying in threads, he launched a new series: Build With Me — short, straight-to-the-point video tutorials on the exact things he wished someone had shown him months ago." },
          { id: "C1_p3", text: "No fancy branding. No paywall. Just raw code, context, and honesty. \"I'm not an expert. I'm just one step ahead of where I was yesterday.\"" },
          { id: "C1_p4", text: "People didn't just learn — they built alongside him. Someone even deployed a fork of his demo contract and wrote, \"This got me my first freelance job.\"" }
        ],
        choices: [
          { id: "C1a", text: "Turn the series into a structured cohort-based course", nextDecision: "C1a" },
          { id: "C1b", text: "Collaborate with other devs to expand the series", nextDecision: "C1b" },
          { id: "C1c", text: "Pause the series and focus on building a real project with the community", nextDecision: "C1c" }
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
        paragraphs: [
          {
            id: "C1a2_p1",
            text: "He expanded the course into a comprehensive program with multiple levels and specializations."
          },
          {
            id: "C1a2_p2",
            text: "The structured approach allowed him to reach more developers while maintaining quality standards."
          },
          {
            id: "C1a2_p3",
            text: "He found that teaching at scale allowed him to impact thousands of developers while building a sustainable business."
          }
        ],
        choices: [
          { id: "C1a2a", text: "Launch a full Web3 academy", ending: true },
          { id: "C1a2b", text: "Partner with universities", ending: true },
          { id: "C1a2c", text: "Create a certification program", ending: true }
        ]
      },
      {
        id: "C1a3",
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
        choices: [
          { id: "C1a3a", text: "Expand certification globally", ending: true },
          { id: "C1a3b", text: "Focus on industry partnerships", ending: true },
          { id: "C1a3c", text: "Create specialized tracks", ending: true }
        ]
      },
      {
        id: "C1b1",
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
        choices: [
          { id: "C1b1a", text: "Let the DAO evolve independently", ending: true },
          { id: "C1b1b", text: "Guide the DAO's strategic direction", ending: true },
          { id: "C1b1c", text: "Use the DAO to launch new projects", ending: true }
        ]
      },
      {
        id: "C1b2",
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
        choices: [
          { id: "C1b2a", text: "Keep it completely free forever", ending: true },
          { id: "C1b2b", text: "Add optional premium features", ending: true },
          { id: "C1b2c", text: "Partner with sponsors to maintain free access", ending: true }
        ]
      },
      {
        id: "C1b3",
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
        choices: [
          { id: "C1b3a", text: "Focus on early-stage builders", ending: true },
          { id: "C1b3b", text: "Expand to include established projects", ending: true },
          { id: "C1b3c", text: "Create a builder-focused incubator", ending: true }
        ]
      },
      {
        id: "C1c1",
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
        choices: [
          { id: "C1c1a", text: "Keep the collective small and focused", ending: true },
          { id: "C1c1b", text: "Expand the collective globally", ending: true },
          { id: "C1c1c", text: "Turn the collective into a company", ending: true }
        ]
      },
      {
        id: "C1c2",
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
        choices: [
          { id: "C1c2a", text: "Focus on building the platform", ending: true },
          { id: "C1c2b", text: "Use the platform to launch projects", ending: true },
          { id: "C1c2c", text: "Sell the platform to a larger company", ending: true }
        ]
      },
      {
        id: "C1c3",
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
        choices: [
          { id: "C1c3a", text: "Keep the network informal", ending: true },
          { id: "C1c3b", text: "Formalize some partnerships", ending: true },
          { id: "C1c3c", text: "Use the network for mutual support", ending: true }
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