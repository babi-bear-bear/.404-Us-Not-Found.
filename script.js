// A Letter, Quietly Kept — vanilla JS only (no frameworks)
// Renders the letter as paper "cards", reveals sections on scroll,
// and drifts a few soft watercolor petals across the page.

(function () {
  "use strict";

  /* ---------------- Letter content ---------------- */
  // Each entry is one paper card; each string inside is one paragraph.

  var PART_ONE = [
    [
      "I know this is my chance to say everything, and hindi ko na sasayangin 'to because I know this is probably the only time I'll be able to say everything I want to say.",
      "I just want you to understand where I'm coming from because I don't want you to misunderstand everything I'm about to tell you."
    ],
    [
      "I think you deserve an explanation. I don't want you to think this happened overnight, or because of one fight or one conversation.",
      "It didn't."
    ],
    [
      "I don't even know exactly when it started.",
      "All I know is that the more I fell for you, the more I realized how much you meant to me. And somehow... that's when my mind started changing."
    ],
    [
      "Before maging tayo, I was someone who questioned things, but I didn't overthink them. When I started having feelings for you, I began questioning everything. Every decision. Every feeling. Every possibility. Every “what if.” It was like my mind couldn't stop searching for answers to questions that didn't have answers.",
      "Para akong nasa isang gera laban sa sarili kong isip."
    ],
    [
      "At first, I didn't think much of it. I thought maybe it was because I cared about you so much. I thought I was just being careful because I didn't want to lose someone who meant so much to me.",
      "But instead of those thoughts fading away...",
      "They only became louder."
    ],
    [
      "I hated it.",
      "I hated how my own mind wouldn't let me simply enjoy being with you. Instead of just being happy that I had you, I kept questioning everything.",
      "I kept telling myself, “Just be happy. Stop asking so many questions. Trust what you feel for her.”",
      "But no matter how hard I tried, those thoughts always came back."
    ],
    [
      "That's why I honestly believed loving you would be enough. I thought that once we became official, my mind would finally be at peace. I thought all the doubts I had before would disappear.",
      "But...",
      "I was wrong."
    ],
    [
      "Instead of finding peace, I found myself questioning everything all over again.",
      "At first, I thought it was just temporary. Akala ko mawawala rin 'to. Lagi kong sinasabi sa sarili ko, “Maybe tomorrow magiging okay na ulit.”",
      "That's why I didn't tell you everything. I honestly believed those thoughts would eventually disappear.",
      "But they never did."
    ],
    [
      "As time went on, parang araw araw may bagong tanong yung nasa utak ko.",
      "“What if I never feel like I'm enough for you, no matter how many times you reassure me?”",
      "“What if I end up holding you back from meeting someone who can love you the way you deserve?”",
      "“What if I keep making promises I'm not sure I can keep?”",
      "“What if I continue, and you give me your whole heart while I'm still full of doubts?”",
      "“What if I leave and regret that too?”"
    ],
    [
      "Every time I found an answer, another question would appear. Lagi na lang may bagong tanong sa isip ko, and I didn't know how to stop it.",
      "Instead of enjoying our relationship, I spent so much time fighting my own thoughts.",
      "Every reassurance you gave me really meant a lot. It always made me feel okay...",
      "But only for a while."
    ],
    [
      "Eventually, the overthinking always came back, and it became mentally and emotionally exhausting.",
      "I know you probably felt that too.",
      "I'm sorry if I made you feel like you always had to reassure me."
    ],
    [
      "I know you kept trying to make me feel better, and I'm really grateful for that.",
      "The problem was never that you didn't do enough. No matter how much you reassured me, I'd only feel okay for a while before the overthinking came back."
    ],
    [
      "I wanted to believe I was ready for this relationship, but I slowly realized I wasn't. Akala ko kaya ko pero hindi pala.",
      "Even before, there was always a part of me that felt like I did better on my own. I kept pushing that feeling aside because I loved you and I genuinely wanted us to last.",
      "But no matter how much I wanted that, the uncertainty never really disappeared."
    ],
    [
      "There's also one moment I want to tell you about because it made me question myself even more.",
      "Back on July 9, I wrote this.",
      "I don't think July 9 was the beginning. I'd been questioning myself long before that. I just kept convincing myself those thoughts would eventually disappear because I loved you and I wanted us to work."
    ],
    [
      "Then you told me what Ivy said. You said she wanted you to get back with your ex or date a guy instead because she thought that would be better for you.",
      "When I heard that, it felt like every doubt I'd been trying to bury suddenly came back all at once.",
      "I kept asking myself,",
      "“What if she's right? What if one day you realize she's right too? What if I'm only holding you back from the life you deserve?”"
    ],
    [
      "I never told you any of that. Instead, I reassured you because I wanted to believe those thoughts would pass. I convinced myself they were just another episode of overthinking.",
      "But every time I thought I'd finally moved on from them...",
      "They came back."
    ],
    [
      "That's why July 9 stayed with me.",
      "Not because of what Ivy said.",
      "But because that was the first time I realized how hard I was fighting my own mind, even while trying my best to hold on to us."
    ],
    [
      "The more I overthought, the more I convinced myself that maybe letting you go was better than asking you to stay with someone who couldn't stop questioning himself.",
      "That's when I started thinking about breaking up."
    ],
    [
      "What hurt me the most was that I couldn't understand why I felt this way.",
      "Because I loved you.",
      "So I kept asking myself...",
      "“If I love her this much... why can't I find peace?”",
      "Honestly...",
      "I still don't fully know the answer."
    ],
    [
      "I'm also sorry that I pursued you even though there were doubts inside me that I didn't even understand myself.",
      "Please don't ever think that I didn't love you.",
      "Because I did."
    ],
    [
      "Every “I love you” was real.",
      "Every effort I made was real.",
      "Every memory we created was real.",
      "Every website I made, every surprise, every late-night conversation, every smile you gave me...",
      "I cherished all of it.",
      "You genuinely made me happy."
    ]
  ];

  var PART_TWO = [
    [
      "The picture above was supposed to stay a secret for a little while longer.",
      "I guess this is the only time I can finally show it to you.",
      "It was meant to be part of your 3rd monthsary surprise."
    ],
    [
      "Actually... not just the picture. This whole website was. The theme, the design, and everything you're seeing right now were originally made for our 3rd monthsary.",
      "I still remember that while I was busy making our 2nd monthsary website, I was already secretly working on this one too. I was just so excited to make another surprise for you. Hehe. I never thought that the website I was making for our next monthsary would end up becoming this instead."
    ],
    [
      "I had already started making it before all of this happened. It's a picture of you made from hundreds of tiny screenshots I secretly collected during our calls.",
      "I still remember that time when you kept insisting that I send you all of them. I only sent a few because I thought you wouldn't like the rest. But after that, I just told myself, “Eh, pake mo ba.” Hehe. I was going to keep taking screenshots anyway."
    ],
    [
      "The screenshot in the middle of the mosaic is actually my favorite one. I took it on February 19, 2026, at exactly 11:23. I don't really know why, but every time I looked at it, it made me smile.",
      "I still remember that day. You kept pouting while hugging your teddy bear. Haha. You looked so cute that all I wanted to do was kiss you. I remember staring at that screenshot and thinking, “Ang cute mo naman.” I even wanted to just impulsively confess my feelings right then and there... but syempre, I didn't. Hehe."
    ],
    [
      "I really thought this would be one of the surprises I'd finally get to show you.",
      "I just never imagined you'd end up seeing it like this instead.",
      "I just wanted you to know that this existed.",
      "Now... let me continue."
    ],
    [
      "I guess that's why this hurts so much.",
      "If I had already stopped loving you, none of this would've existed.",
      "This website wouldn't have existed.",
      "That mosaic wouldn't have existed.",
      "Those hundreds of screenshots wouldn't have existed.",
      "I was still looking forward to making more memories with you."
    ],
    [
      "That's why making this decision has been one of the hardest things I've ever had to do.",
      "I'm also sorry for making you wait for a whole week.",
      "Honestly... I didn't want to send this yet."
    ],
    [
      "A part of me kept hoping I'd wake up one morning and everything inside my mind would finally become clear.",
      "I wanted to hold on a little longer because I really didn't want this to be the ending for us.",
      "But I also didn't want to keep making you wait while I was still fighting myself.",
      "You deserved an answer, even if it was one neither of us wanted."
    ],
    [
      "It would've been so much easier if I had simply stopped loving you.",
      "But that's not what happened.",
      "Right now, I can't choose this relationship while I'm still so uncertain about myself.",
      "It wouldn't be fair to you."
    ],
    [
      "You deserve someone who can choose you wholeheartedly without constantly questioning themselves.",
      "Right now...",
      "I can't honestly say I'm that person."
    ],
    [
      "It hurts me knowing that this decision is going to hurt you.",
      "I think that's one of the hardest parts of all of this.",
      "I don't know when you'll be okay, but I truly hope that, little by little, you'll heal and smile again.",
      "Even if I'm no longer there to see it."
    ],
    [
      "Before I end this...",
      "There's just one last thing I want to leave you with.",
      "Please sleep early, okay?"
    ],
    [
      "Honestly, I've been feeling guilty about this too.",
      "Sa gabi lang talaga tayo nakakapag-usap, and most of the time it's already around 11 PM or even later.",
      "Thank you for staying awake just to spend time with me ah.",
      "I appreciated every single night."
    ],
    [
      "But after this...",
      "I hope you'll take better care of yourself.",
      "Please get enough sleep.",
      "Don't sacrifice your health for someone again.",
      "I know I won't be the one reminding you anymore...",
      "So I hope you'll remember to take care of yourself for me, even just this one last time."
    ],
    [
      "And...",
      "I know I hurt you, and if you become angry with me, I'll understand.",
      "I just hope that one day, when this doesn't hurt as much anymore, you'll remember me as someone who truly loved you, even if I couldn't overcome the battles inside my own mind."
    ],
    [
      "I guess",
      "this is really the end..."
    ],
    [
      "I cherished every bit of it with all my heart.",
      "Thank you for being so patient with me, even when I was so stubborn.",
      "Thank you for every reassurance, every effort, every memory, and every moment you shared with me.",
      "None of it was ever taken for granted.",
      "I'll always be grateful that, even if it was only for a little while, I got to experience a love like yours."
    ]
  ];

  function buildCards(container, cards) {
    var frag = document.createDocumentFragment();
    cards.forEach(function (paragraphs) {
      var card = document.createElement("div");
      card.className = "paper letter-card";
      paragraphs.forEach(function (text) {
        var p = document.createElement("p");
        p.textContent = text;
        card.appendChild(p);
      });
      frag.appendChild(card);
    });
    container.appendChild(frag);
  }

  buildCards(document.getElementById("letter-body"), PART_ONE);
  buildCards(document.getElementById("letter-body-2"), PART_TWO);

  /* ---------------- Gentle scroll reveal ---------------- */

  var sections = document.querySelectorAll("[data-reveal]");
  var cards = document.querySelectorAll(".letter-card");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    sections.forEach(function (el) { observer.observe(el); });
    cards.forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });

    // Safety net: some in-app browsers (Messenger, Instagram, etc.) fire
    // IntersectionObserver unreliably or not at all, which would otherwise
    // leave text permanently hidden at opacity 0. Force everything visible
    // shortly after load if the observer hasn't already handled it.
    setTimeout(function () {
      sections.forEach(function (el) { el.classList.add("is-visible"); });
      cards.forEach(function (el) { el.classList.add("is-visible"); });
      observer.disconnect();
    }, 2500);
  } else {
    sections.forEach(function (el) { el.classList.add("is-visible"); });
    cards.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------- Floating watercolor petals ---------------- */

  var canvas = document.getElementById("petal-canvas");
  var ctx = canvas.getContext("2d");
  var petals = [];
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function seedPetals() {
    var count = window.innerWidth < 640 ? 6 : 10;
    petals = [];
    for (var i = 0; i < count; i++) {
      petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 4 + Math.random() * 5,
        speedY: 0.10 + Math.random() * 0.12,
        speedX: (Math.random() - 0.5) * 0.14,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: 0.004 + Math.random() * 0.004,
        hue: ["#F3D8D8", "#D8A7A7", "#D8D2E8", "#AEBFA5", "#C9B27C"][i % 5],
        opacity: 0.25 + Math.random() * 0.25
      });
    }
  }

  function drawPetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(function (p) {
      p.sway += p.swaySpeed;
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.sway) * 0.15;

      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
      if (p.x > canvas.width + 20) p.x = -20;
      if (p.x < -20) p.x = canvas.width + 20;

      ctx.beginPath();
      ctx.fillStyle = p.hue;
      ctx.globalAlpha = p.opacity;
      ctx.ellipse(p.x, p.y, p.r, p.r * 0.7, p.sway, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    if (!reduceMotion) requestAnimationFrame(drawPetals);
  }

  resizeCanvas();
  seedPetals();
  window.addEventListener("resize", function () {
    resizeCanvas();
    seedPetals();
  });

  if (!reduceMotion) {
    requestAnimationFrame(drawPetals);
  }
})();
