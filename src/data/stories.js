export const stories = [
  {
    id: 1,
    title: "Uche's Journey",
    character: "Anonymous Dev",
    description: "Navigate the viral fame and anonymity of a developer who accidentally went viral with a single tweet about their contract success.",
    coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    difficulty: "Medium",
    estimatedTime: "20 min",
    totalDecisions: 5,
    intro: {
      id: "intro",
      text: "Uche didn't mean to go viral. It started with one tweet — a screenshot of his dev terminal and the caption: 'Was broke 3 months ago. Now my contract just got called 100 times in 5 minutes.' He didn't explain anything. No thread. No link. No emoji. Just vibes. And that was what did it. The quote tweets rolled in. 'Alpha.' 'Cap.' 'Who is this?' What none of them knew was that he almost quit two weeks earlier. Imposter syndrome had him by the throat. The contracts he deployed then had zero traction. His last grant application? Rejected. Now, strangers were screenshotting his analytics. DMs rolled in. Someone even made a meme of his PFP on a throne made of terminal windows. The tweet became a pinned tweet. But what came next wasn't as predictable.",
      choices: [
        { id: "A1", text: "Stay anonymous and mysterious", nextDecision: "A1" },
        { id: "B1", text: "Reveal the real story behind the tweet", nextDecision: "B1" },
        { id: "C1", text: "Start a series teaching others how to build", nextDecision: "C1" }
      ]
    },
    decisions: [
      {
        id: "A1",
        text: "He didn't say anything for two days. No follow-up tweet. No interviews. The mystery deepened. Someone started a Telegram group just to speculate on who he might be. Every few hours, someone dropped a new theory. 'It's that guy from zkSync.' 'No, it's a woman from Nigeria.' The anonymity made it grow. When Uche finally tweeted again, it was just a gif — a glitching cat with laser eyes and the caption: 'Keep watching.' That got 4,000 retweets. People started replying with offers. 'We'll fund whatever you build.' 'Drop a token.' 'Do a space.' Uche wasn't sure what to do next. He hadn't planned for this. But now, he had attention. He had options.",
        choices: [
          { id: "A1a", text: "Drop a mysterious whitepaper", nextDecision: "A1a" },
          { id: "A1b", text: "Build a Telegram community under an alias", nextDecision: "A1b" },
          { id: "A1c", text: "Ghost everyone and start a new account anonymously", nextDecision: "A1c" }
        ]
      },
      {
        id: "A1a",
        text: "He used ChatGPT and Notion to draft something half-technical, half-poetic. It was titled 'The Network of Ghosts.' The whitepaper didn't say what it was building, only what it believed: decentralization should feel like disappearance, not noise. People started reading into it like scripture. Medium think-pieces emerged. 'This is the new Bitcoin.' VCs emailed burner accounts. DAOs started mentioning it in calls. But there was no token. No team. Just a wallet address at the bottom. It received $11k in ETH overnight. No instructions. Just belief.",
        choices: [
          { id: "A1a1", text: "Use the ETH to build a working prototype", nextDecision: "A1a1" },
          { id: "A1a2", text: "Burn the ETH and tweet the tx hash", nextDecision: "A1a2" },
          { id: "A1a3", text: "Airdrop NFTs to everyone who sent ETH", nextDecision: "A1a3" }
        ]
      },
      {
        id: "A1a1",
        text: "Uche started quietly working on a protocol — it wasn't revolutionary, but it was sleek, minimal, and useful. A private layer for anonymous collaboration. He used pseudonyms to recruit contributors. No one knew who anyone else was, but they shipped fast. When the testnet launched, it got 300 users in 48 hours. People were experimenting: anonymous docs, tokenless governance, whisper-chain voting. He never revealed his identity. But the protocol started showing up in conversations. Someone even forked it and added new features. A year later, he logged in to see someone write: 'This tool saved my DAO.' That was enough.",
        choices: [
          { id: "A1a1a", text: "Keep maintaining the tool quietly", ending: true },
          { id: "A1a1b", text: "Sell it to a privacy-focused org", ending: true },
          { id: "A1a1c", text: "Walk away and build something totally new", ending: true }
        ]
      },
      {
        id: "A1a2",
        text: "Uche took the ETH, sent it to the burn address, and tweeted the transaction hash with two words: 'No masters.' It exploded. People were furious, inspired, confused. 'Is he insane?' 'This is performance art.' 'He just threw away $11k?' Think-pieces followed. The act became symbolic — a protest against greed, a return to values, or just noise depending on who you asked. One person wrote: 'This is the closest thing I've seen to crypto punk in 2025.' He never explained himself. He just logged off.",
        choices: [
          { id: "A1a2a", text: "Log off and disappear again", ending: true },
          { id: "A1a2b", text: "Start a philosophy blog about Web3", ending: true },
          { id: "A1a2c", text: "Turn the moment into a zine drop", ending: true }
        ]
      },
      {
        id: "A1a3",
        text: "Uche designed 11 unique NFTs — abstract generative art that resembled glitchy ghosts. Each one matched the spirit of a wallet that sent ETH. He used on-chain data to make each piece partially deterministic. If your wallet used Tornado Cash, you got one that flickered violently. If it was a Gnosis Safe, you got a slow pulsing one. People loved them. Some holders never sold. Others flipped them for 10x on secondary markets. A collector tweeted: 'This is what art on-chain is supposed to feel like.' It sparked a short trend: narrative airdrops. Everyone tried it. None hit the same.",
        choices: [
          { id: "A1a3a", text: "Build a platform for narrative airdrops", ending: true },
          { id: "A1a3b", text: "Disappear and let the drop stand on its own", ending: true },
          { id: "A1a3c", text: "Start writing stories based on wallet behavior", ending: true }
        ]
      },
      {
        id: "A1b",
        text: "He picked the name cyberhermit and set up a Telegram channel. No profile pic. Just the word: 'Silence.' People joined without knowing what to expect. He posted cryptic messages, code snippets, and reflections on building anonymously. Some members dropped alpha. Others shared poetry. The vibe was weird but real. Slowly, it became a haven for misfits. One day, someone proposed building a DAO from the group's energy. Uche didn't say yes. He just dropped a repo link.",
        choices: [
          { id: "A1b1", text: "Let the group build the DAO without revealing yourself", ending: true },
          { id: "A1b2", text: "Use the alias to fund other anonymous builders", ending: true },
          { id: "A1b3", text: "Exit the group and leave it to evolve on its own", ending: true }
        ]
      },
      {
        id: "A1c",
        text: "Uche wiped his presence clean. New PFP. New name. Zero follows. Zero followers. He started tweeting strange questions. 'What happens to proof when no one asks for it?' People ignored him at first. But slowly, some noticed the rhythm. The account had a strange poetry. Someone replied, 'Whoever this is, I feel like they've been here before.' He smiled. Ghosting didn't mean disappearing. It meant reappearing on your own terms.",
        choices: [
          { id: "A1c1", text: "Build a zine that unpacks online rebirth", ending: true },
          { id: "A1c2", text: "Move abroad for a fresh start", ending: true },
          { id: "A1c3", text: "Open up about burnout", ending: true }
        ]
      },
      {
        id: "B1",
        text: "Uche opened a new thread: 'Everyone loved the win. Here's the truth.' He broke it down — the failed grants, the cold DMs, the one friend who kept encouraging him when he almost gave up. It wasn't dramatic. Just honest. He didn't exaggerate. He didn't spin. He told the truth about how much it hurt to almost believe in nothing. People didn't just relate — they leaned in. Retweets came with their own stories. 'Same here, bro.' 'Been there. Still there.' 'Damn, this hit.' That tweet didn't go as viral. But it hit deeper. It built loyalty, not hype. Now they waited to see what he'd do next.",
        choices: [
          { id: "B1a", text: "Apply for public funding to build in the open", nextDecision: "B1a" },
          { id: "B1b", text: "Join a team building something similar", nextDecision: "B1b" },
          { id: "B1c", text: "Start a newsletter called Builder's Therapy", nextDecision: "B1c" }
        ]
      },
      {
        id: "B1a",
        text: "Uche submitted a small but intentional proposal on a grant platform. No tokenomics hype, no AI jargon — just a clean plan for a lightweight tool to help solo devs deploy faster. The feedback was slow, then brutally honest. 'Too simple.' 'Needs more traction.' 'Why should we fund this?' But something strange happened. A smaller DAO quoted the proposal and funded it directly, saying, 'We want to back work that asks for less, not more.' Uche built it in public, tweeting updates weekly. By week 4, his GitHub was bookmarked across dev Telegrams. That same grant platform invited him to speak on sustainable builder culture. Ironic.",
        choices: [
          { id: "B1a1", text: "The tool gains adoption slowly but steadily", ending: true },
          { id: "B1a2", text: "He gets blocked by bureaucratic drama", ending: true },
          { id: "B1a3", text: "The project gets forked by someone bigger", ending: true }
        ]
      },
      {
        id: "B1b",
        text: "He found a small, under-the-radar team on Farcaster, building a stripped-down dev wallet. The founder DM'd him: 'Saw your thread. Let's talk.' It clicked instantly. No bloated backlogs. Just async chats, weird ideas, and ship energy. Uche didn't have to lead. He just had to contribute. The relief was addictive. They shipped a v1 in 3 weeks. Then someone demoed it at ETHGlobal and got featured in a recap post. Uche didn't get tagged — but he didn't care. He was in flow again.",
        choices: [
          { id: "B1b1", text: "He becomes a core contributor on the team", ending: true },
          { id: "B1b2", text: "He burns out from team politics", ending: true },
          { id: "B1b3", text: "He gets poached by a bigger, flashier team", ending: true }
        ]
      },
      {
        id: "B1c",
        text: "The first post was raw: 'No one talks about the lonely days between commits.' He didn't ask for subscribers. He just hit publish. It started as weekly reflections, then became a collection of anonymous confessions from burnt-out devs, overwhelmed creators, and ghosted contributors. Some entries were two lines. Others read like open letters to lost cofounders. By month three, Builder's Therapy hit 1,000 subs. A DAO offered to sponsor it. Uche declined. 'Some things aren't for sale.' It became a mirror people checked to see if they were still human.",
        choices: [
          { id: "B1c1", text: "The newsletter gains a cult following", ending: true },
          { id: "B1c2", text: "He gets invited to speak at conferences", ending: true },
          { id: "B1c3", text: "The newsletter quietly fades out", ending: true }
        ]
      },
      {
        id: "C1",
        text: "The response to Uche's viral tweet didn't surprise him — but the follow-up questions did. 'How did you get the contract called?' 'What stack are you using?' 'Do you teach?' Instead of replying in threads, he launched a new series: Build With Me — short, straight-to-the-point video tutorials on the exact things he wished someone had shown him months ago. No fancy branding. No paywall. Just raw code, context, and honesty. 'I'm not an expert. I'm just one step ahead of where I was yesterday.' People didn't just learn — they built alongside him. Someone even deployed a fork of his demo contract and wrote, 'This got me my first freelance job.'",
        choices: [
          { id: "C1a", text: "Turn the series into a structured cohort-based course", nextDecision: "C1a" },
          { id: "C1b", text: "Collaborate with other devs to expand the series", nextDecision: "C1b" },
          { id: "C1c", text: "Pause the series and focus on building a real project with the community", nextDecision: "C1c" }
        ]
      },
      {
        id: "C1a",
        text: "The DMs got overwhelming. So Uche sat down, mapped out a syllabus, and launched a waitlist: '30 builders. 4 weeks. No fluff.' He didn't overpromise. No guarantees. Just hands-on building, live debugging, and guest sessions with friends who had shipped real things. The first cohort filled up in 6 hours. Each week had a theme — deploying with intention, managing contributors, documenting your code so strangers could care. By week 3, most students had pushed their first contracts to testnet. The vibe wasn't academic. It was war room energy. Builders helping builders. Strangers turning into squads. By the end, people weren't just tweeting wins. They were forming collectives, launching tools, and writing their own mini-courses.",
        choices: [
          { id: "C1a1", text: "Raise funding to scale the cohort", ending: true },
          { id: "C1a2", text: "Keep it intimate and do one cohort per quarter", ending: true },
          { id: "C1a3", text: "Let others fork the curriculum and remix it", ending: true }
        ]
      },
      {
        id: "C1b",
        text: "Uche realized he didn't have to teach everything alone. So he started reaching out. 'Wanna record a module on token design?' 'Can you show people how you structure monorepos?' The response was instant. Friends, strangers, even OG builders he looked up to said yes. The series grew from solo demos into a library of different voices. Each module kept his original spirit — low ego, high signal, no ads. They focused on the stuff no one tweeted about: messy migrations, contributor etiquette, how to quit a project gracefully. Soon, Build With Me felt like a living archive of builder wisdom. Not just how to code — but how to survive the process of shipping in public. A DAO offered to fund the series, but Uche declined. 'Let it stay weird.'",
        choices: [
          { id: "C1b1", text: "Spin the series into a decentralized media collective", ending: true },
          { id: "C1b2", text: "Host a builder festival with all the contributors", ending: true },
          { id: "C1b3", text: "Shut it down after one final season", ending: true }
        ]
      },
      {
        id: "C1c",
        text: "After the tenth episode, Uche felt a shift. The comments weren't asking for more tutorials. They were asking, 'Can we actually build something together?' So he paused uploads and created a GitHub repo: Project 0xTogether. No idea what it would become — just an invitation. Builders joined. Designers followed. A few writers came too. They decided to build a tool for contributors who didn't want to use Notion or Discord — something native to the rhythm of DAOs. The project took months. Not everything shipped. But by the end, dozens of strangers had touched the code. And that alone made it worth it.",
        choices: [
          { id: "C1c1", text: "Turn the project into a real startup", ending: true },
          { id: "C1c2", text: "Open-source it and walk away", ending: true },
          { id: "C1c3", text: "Use it to teach in a new way", ending: true }
        ]
      }
    ],
    endings: [
      {
        id: "A1a1a",
        title: "The Quiet Maintainer",
        description: "Uche didn't chase growth. He just kept fixing bugs, updating features, and answering anonymous feedback. The protocol matured without drama. Eventually, devs from other ecosystems began referencing it. Forks appeared on Optimism, Solana, and even Tezos. None of them were huge, but they kept the idea alive. He never added a token. Never made a DAO. He just built. Quietly. Years later, people credited the tool as the foundation for a new genre: minimum-governance coordination protocols. He smiled when he saw that phrase in a conference panel. No one knew it was his. That was the point.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
        requirements: [
          { decisionId: "A1a1", choiceId: "A1a1a" }
        ]
      },
      {
        id: "A1a1b",
        title: "The Clean Exit",
        description: "An org called GhostChain reached out. They believed privacy should be programmable. They wanted to buy the tool and expand it. Uche negotiated through an encrypted chat. They never knew his name. He was paid in ETH and USDC, and handed over the codebase. They added an audit layer, rewrote some contracts, and launched a polished version called WhisperDAO. He watched from afar. It blew up — and he didn't mind. He'd made his exit clean. Sometimes he checked their GitHub issues just to see what they were building next.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        requirements: [
          { decisionId: "A1a1", choiceId: "A1a1b" }
        ]
      },
      {
        id: "A1a1c",
        title: "The Pivot",
        description: "He archived the project with a note: 'Finished. On to the next.' No drama. No Discord goodbye. A week later, he spun up a new account and started a simple repo: onchainstories.eth. He wanted to write fiction on the blockchain. The pivot confused people. But he didn't care. He'd built a protocol. Now he wanted to build myth. The first story he minted was about an anonymous dev who disappeared after launching a privacy tool. Collectors ate it up.",
        image: "https://images.unsplash.com/photo-1523240794102-9ebd0b167f3f?w=400&h=300&fit=crop",
        requirements: [
          { decisionId: "A1a1", choiceId: "A1a1c" }
        ]
      }
    ]
  }
];
