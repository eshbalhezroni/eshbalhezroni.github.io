const img = (src, alt = "", width, height) => ({ type: "image", src, alt, width, height });
const video = (src, label = "", mime = "video/mp4") => ({ type: "video", src, label, mime });
const h = (text) => ({ type: "heading", text });
const p = (text) => ({ type: "paragraph", text });

const localUrl = (url = "") => {
  if (!url || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) return url;
  return `${document.body.dataset.root || ""}${url}`;
};

const caseStudies = {
  campaigns: {
    title: "The design process of a new feature: Campaign Board",
    blocks: [
      h("Summary"),
      p("Campaign Boards allow planning promotions on eCommerce websites. I led the design of the project from initial efforts to finalizing a design that maximizes user experience and appeal."),
      h("Background"),
      p("At Namogoo, I worked on a product that offers individualized promotions to eCommerce site visitors based on real-time buying intent.\n\nPromotions are defined using campaigns, which determine the type of offers and their duration."),
      h("The Problem"),
      p("Creating campaigns is a collaborative effort involving digital marketing, content writers, and designers.\nYet, there is no centralized place for planning the big picture."),
      h("The Goal"),
      p("Create a centralized calendar for planning campaigns."),
      h("My Role"),
      p("I led the design of the Campaign Board from initial efforts, including research on existing solutions, prototyping, and building wireframes, to finalizing a design that maximizes user experience and appeal.\nThe work was done in collaboration with the product management and marketing teams."),
      h("Getting to Know the User"),
      p("Shelly (PM) and I brought up questions to Yael (PMM) in order to deeply understand the process of creating campaigns.\n\nFinally, we got back a long and in-depth Google Doc containing the answers to our questions. From this, I came to the main conclusions that I took for the rest of the process."),
      img("assets/wix/031-fa557c_24ec279d80e64054bd1399765a818b5b-mv2.jpg"),
      h("Interviews"),
      img("assets/wix/032-Group-143416993.jpg", "Group 143416993.jpg"),
      p("During the ideation phase of the project, I conducted interviews to understand better our users. Together with Shelly and Yael, we prepared an interview script with 20 open questions, focusing on our target audiences’ values, motivations, and daily routines. We referenced the user interview findings throughout the entire design process."),
      img("assets/wix/033-fa557c_3a48ecc1a95843faaa9373c4b6f058e8-mv2.jpg"),
      h("Competitor Analysis"),
      p("I gathered information about competitors to define what exists in the market today and to understand which features should be part of the core experience. I analyzed the platforms and understood what was essential and what was missing. As you can see in the table below, part of the research compares each competitor’s ability."),
      img("assets/wix/034-Group-143417083_1539_c.jpg", "Group-143417083_1539_c.jpg"),
      h("Insights"),
      p("Campaigns are a collaborative effort (digital marketing, content writers, designers).\n\nCustomers need “Siba-Lemesiba”, after 10 years, the idea bank is done.\n\nPain points:\n• No centralized place to see the big picture\n• Considering the needs of different departments\n• Predicting trends over the year\n• Measuring success and failure\n\nNo standard tools:\nGoogle Calendar & Analytics, spreadsheets + docs.\n\nCurrent campaign creation practices: past experience, competitive analysis, guessing.\n\nCampaign timeline depends on its type. Can be planned ahead (e.g. Black Friday) or dynamic."),
      h("Wireframes"),
      p("During the research, I realized that the project is actually divided into two parts. The first part is the area where the user builds his board, and the second part is the board itself and its use."),
      img("assets/wix/035-Frame-143417697.jpg", "Frame 143417697.jpg"),
      p("The calendar-building concept is to simulate a cart page in an eCommerce website since this is our customer's world. The user chooses the types of campaigns he wants to see on his board and chooses with whom he wants to share the board. Everything is shown in a summary on the side. Finally, he reached the board and saw all his choices that were made earlier."),
      img("assets/wix/036-Group-143417714-1-.png", "Group 143417714 (1).png"),
      h("Final Delivery"),
      p("Once the wireframe phase was done, I moved on to design the final screens. My goal was to create a visual identity that’s aligned with the brand’s values and message. Also, I took a deep dive into my catalog of references for inspiration. Here’s a short video of the feature:"),
      img("assets/wix/037-fa557c_087e3fdf9ab748139465d49d589a4080f001.jpg"),
      h("What I Learned"),
      p("This process has taught me a lot. I gained a better understanding of how to reach out to customers and how to ask questions in a way that I'll get an honest answer, an answer that will help me in the next steps. I also became better at planning and working on complex flows."),
      img("assets/wix/038-Group-143417713.png", "Group 143417713.png")
    ],
    next: { title: "Creating a product from scratch: Intent-Based Promotions", href: "intent-based-promotions.html", image: "assets/Home page/optimized/Home_page_Image_2_intent_v4.jpg" },
    explore: [
      { title: "Creating a product from scratch: Intent-Based Promotions", href: "intent-based-promotions.html", image: "assets/Home page/optimized/Home_page_Image_2_intent_v4.jpg" },
      { title: "Building a data visualization tool: Journey Flow", href: "journey-flow.html", image: "assets/Home page/optimized/Home_page_Image_3_flow_v3.jpg" }
    ]
  },
  intent: {
    title: "Creating a product from scratch: Intent-Based Promotions",
    blocks: [
      h("Summary"),
      p("Intent-Based Promotions is a platform that offers individualized discounts for users based on their real-time buying intent. I led the product’s design from conception to its adoption by over a hundred customers.")
    ],
    next: { title: "Building a data visualization tool: Journey Flow", href: "journey-flow.html", image: "assets/Home page/optimized/Home_page_Image_3_flow_v3.jpg" },
    explore: [
      { title: "The design process of a new feature: Campaign Board", href: "campaigns-board.html", image: "assets/Home page/optimized/Home_page_Image_1_campaign_board_v9.jpg" },
      { title: "Building a data visualization tool: Journey Flow", href: "journey-flow.html", image: "assets/Home page/optimized/Home_page_Image_3_flow_v3.jpg" }
    ]
  },
  journey: {
    title: "Building a data visualization tool: Journey Flow",
    blocks: [
      h("Summary"),
      p("Journey Flow is a data tool that helps analyze the journey of a customer in an eCommerce website for non-experts. My main inspiration came from an unexpected source: roads in navigation apps."),
      h("Background"),
      p("At Namogoo, I worked on a product that identifies and blocks unauthorized ads that divert visitors from the website.\nHere, I describe the development of a tool, called Journey Flow, that provides a full view of the journey of a customer on the site."),
      h("The Problem"),
      p("Data visualization tools for user activity are often quite complex, and are designed for analysts.\nFor someone who isn’t a domain expert, it can be difficult to use and understand these tools."),
      h("The Goal"),
      p("Create a user-friendly analytics tool, which will allow non-experts to easily understand user activity in their website."),
      h("My Role"),
      p("I led the design of Journey Flow from initial efforts, including research on existing solutions, prototyping, and building wireframes, to finalizing a design that maximizes user experience and appeal.\nThe project was a collaborative effort, in which I worked alongside the product manager and data analysts."),
      h("Personas"),
      p("We wanted to form a deeper understanding of our users' goals, needs, experiences, and behaviors. So, we partitioned our users into two \"personas\" that we created based on user interviews and surveys. The personas were updated throughout the project as we gathered more data."),
      img("assets/flow/personas.png?v=20260516-0850", "Journey Flow personas"),
      h("Mapping Out the Flow"),
      p("I started sketching all possibilities flows the user can take in a website, mainly to identify and understand the steps I need to take into consideration."),
      img("assets/flow/Mapping_Out_The_Flow_1947.png", "Mapping Out The Flow"),
      h("Sketches Round 1"),
      p("These two examples below are some of the first mockups. What guided me here was to keep it simple, take out all the noise and to keep the user focused on the flow they are looking at - this is the reason I choose to show only three top flows in our tool."),
      img("assets/flow/Sketches Round 1.png", "Sketches Round 1"),
      h("Changing Direction"),
      p("An idea that came up along the way was to think of the flow as a road. Suddenly, my inspiration is no longer our competitors’ flows, but other digital products like Google Maps and Waze. See below my inspiration for imagining the flow as roads on a map:"),
      img("assets/flow/Changing Direction.png?v=20260516-0828", "Changing Direction inspiration"),
      p("We have the start point, we have the end, and the road that connects them. This step was a turning point for me because it opened a new window of many ideas that I had to check…"),
      h("Sketches Round 2"),
      p("How does it look like if I’m using dotted lines, similar to a route that is taken, the icons here change to match the idea of a road (Circle at the start and pin at the end)."),
      img("assets/flow/Sketches Round 2_image_1.png?v=20260516-0841", "Sketches Round 2 dotted route concept"),
      p("But then I thought it wasn’t enough, and why not take a map and place the flow on it and see how it looks? So this is what happened:"),
      { ...img("assets/flow/map-flow-clean-4.gif", "Journey Flow map concept animation"), className: "journey-map-flow-animation" },
      p("As a result, all my next mockups were inspired by the map. The flow definitely looks cool, it’s different from what I saw in the research, and it seems fun to explore it.\nBut then I understood that it all comes at the cost of other things that are just as important. Suddenly the order of the flow isn’t clear enough, it is a little bit difficult to identify the beginning and the end."),
      img("assets/wix/053-Frame-143416938-1-.png", "Frame 143416938 (1).png"),
      p("So I took a step back. But this process was really necessary because it helped me understand and communicate the idea better.\nThe flag and the pin icons are better than the previous ones and the gradient color makes it look more flowing.\nOne more thing that happened at this point, which was critical, is that through the mockup I understood that I can improve the experience and make it even more easy and clean.\nMockup with gradient color and icons (pin and flag):"),
      img("assets/wix/054-Screen-Shot-2020-12-01-at-11_21_20.png", "Screen-Shot-2020-12-01-at-11.21.20.png"),
      h("Design"),
      p("The change that I made here was to separate completely the main flow (that is on the top) from the investigation and exploration (on the bottom).\nIn that way, the user can open or close the investigation parts to view deeper insights, or collapse them and only view the main flow at the top.\nMockup of the main flow (on the top) and sub-flows (on the bottom):"),
      img("assets/flow/design_image.png?v=20260521-1148", "Journey Flow design mockup"),
      p("This is the flow, a result of a long and complex process. We have the main flow on the top and the sub-flows on the button, the user can open or close them.\nIn that way, we are different from our competitors - we don’t overwhelm our users with a lot of data, we are giving them the opportunity to play with the tool.\nWe have the icons of the road-the pin at the start and the flag at the end. We have elements to emphasize the direction and the flowing feeling, like the gradient color on the sides, and the lines that are curved and not straight."),
      img("assets/wix/056-fa557c_f09ec6ae9b4b40638b8f3108d7f132ccf001.jpg"),
      h("Conclusion"),
      p("Every time I thought I solved something and moved a step forward, I suddenly took a step back. It also was a test on how much I can stretch boundaries - go more to the extreme - but then find the right balance.\n\nA few things that were really important and helped me in the process are:\n\nGet feedback and constantly improve. Also know how to take feedback and sometimes compromise, because ‘a lot of people a lot of opinions’. During the process, I got feedback all the time: from other Designers, the Product Managers, the Developers, the Data Team, and also from our Clients.\n\nDon’t limit yourself. Don’t be afraid to think differently and out of the box, because even if it’s not the direction, I learned from the process.\n\nAnd the last one, let things go. During the process, I created a lot of different versions. It’s a process, the flow is updated all the time. It’s important to know to say to myself: that’s it, I took it as far as I can, I did the best for now."),
      p("Get feedback, constantly improve\n\nWhen collaborating, compromising is necessary since different people have different opinions\n\nThink out of the box\n\nEven if it's not the \"right\" direction, I learned from the process\n\nLet things go\n\nI created a lot of different versions. It’s a process, the flow is updated all the time"),
      h("Possible Improvements"),
      p("I believe there are still ways to improve the current UI/UX. For example, simplifying the navigation between the main flow and the secondary flow.")
    ],
    next: { title: "Creating a product from scratch: Intent-Based Promotions", href: "intent-based-promotions.html", image: "assets/Home page/optimized/Home_page_Image_2_intent_v4.jpg" },
    explore: [
      { title: "Creating a product from scratch: Intent-Based Promotions", href: "intent-based-promotions.html", image: "assets/Home page/optimized/Home_page_Image_2_intent_v4.jpg" },
      { title: "The design process of a new feature: Campaign Board", href: "campaigns-board.html", image: "assets/Home page/optimized/Home_page_Image_1_campaign_board_v9.jpg" }
    ]
  },
  activations: {
    title: "Simple management of data: Activations",
    blocks: [
      h("Summary"),
      p("To enable website managers to leverage unique data about their users, I designed a user-friendly process for integrating it with different platforms."),
      h("Background"),
      p("At Namogoo, I worked on a product that automatically identifies user data on a website, such as local weather and browser extensions.\nActivations is a page in which website managers can easily get Namogoo's unique data into other tools in their tech stack and use it to boost their business."),
      h("The Problem"),
      p("Need to take into consideration the different use cases a user can have. The workflow should be informative, yet user-friendly."),
      h("The Goal"),
      p("Enable website managers to leverage Namogoo's unique data by integrating it into other platforms in their stack, so that they can analyze and act on it to drive revenue."),
      h("My Role"),
      p("I led the design of the activations from initial efforts, to ensure an intuitive, accurate, and cohesive experience.\nIn addition, I closely collaborated with developers and product managers."),
      h("Personas"),
      p("We wanted to form a deeper understanding of our users' goals, needs, experiences, and behaviors. So, we partitioned our users into two \"personas\" that we created based on user interviews and surveys. The personas were updated throughout the project as we gathered more data."),
      img("assets/Activation/persons.png", "Activations personas"),
      h("Mapping Out the Flow"),
      p("I started sketching all possible actions that the user can take in the platform, to get to the activation page/modal. It helped me see the big picture, and understand what adjustments I need to make."),
      img("assets/Activation/mapping_flow.png", "Activation mapping out the flow"),
      h("User Stories"),
      p("It was important to understand what exactly users would want to accomplish when making an activation. I created user stories which gave me a clear vision of what our goals for this design must accomplish. They were organized from high, medium to low priority."),
      img("assets/Activation/as_a_user_i_want.png", "Activation user stories"),
      p("As a user, I want to..."),
      h("Sketches"),
      p("Sketching is a big part of my process, any time I struggle with a problem, I essentially put whatever I'm thinking on paper.\nSketching allows me to visualize the multiple paths I can take before committing to one."),
      img("assets/Activation/sketch 1.jpg", "Activation sketches"),
      h("Wireframes"),
      p("In this step, I could test the flow and overall user experience and iterate through many options quickly. It helped me define our expectations and remind me of what I wanted to present on each screen."),
      img("assets/Activation/wireframes.png", "Activation wireframes"),
      h("Finalizing Design"),
      p("When I completed the wireframes, I started working on the visual design. This is almost the end of the process, just before development.\nThe video below provides a brief overview of the integration page, as well as one example of the integration modal."),
      video("assets/Activation/finalizing_design.mp4", "Activation finalizing design walkthrough"),
      h("Self-Reflection"),
      p("This project was a good reminder of the importance of mapping all the flows. It was challenging work collecting and extracting objectives from management.\nThere is always a tendency to start with the solutions after hearing the challenges, which leads to faulty design outcomes. I learned to guess less and focus more on the user, and business aspects.")
    ],
    next: { title: "The design process of a new feature: Campaign Board", href: "campaigns-board.html", image: "assets/Home page/optimized/Home_page_Image_1_campaign_board_v9.jpg" },
    explore: [
      { title: "Building a data visualization tool: Journey Flow", href: "journey-flow.html", image: "assets/Home page/optimized/Home_page_Image_3_flow_v3.jpg" },
      { title: "The design process of a new feature: Campaign Board", href: "campaigns-board.html", image: "assets/Home page/optimized/Home_page_Image_1_campaign_board_v9.jpg" }
    ]
  },
  varonis: {
    title: "Reimagining the Account Pane for a\u00A0complex security\u00A0platform",
    blocks: [
      h("Summary"),
      p("This case study is based on work completed at Varonis. In this project, I redesigned the Account Pane to turn complex data into a clearer, easier to scan experience, with added functionality that supports deeper investigation."),
      img("assets/Home page/Home_page_Image_5_varonis.png?v=account-pane-inline-v2", "Account Pane interface mockup"),
      h("Background"),
      p("Varonis has been around for more than 20 years, and over time the platform became rich with capabilities, data, and workflows. As the product evolved, some areas of the interface were not revisited often enough and no longer reflected the way users needed to work. The Account Pane was one of those places. It had to be updated with more relevant information and clearer hierarchy."),
      h("The Challenge"),
      p("Improve an existing product area in a mature platform. The page needed to respect familiar workflows while making account details easier to understand and use."),
      h("The Goal"),
      p("Create an improved Account Pane that meets users’ current needs."),
      h("My Role"),
      p("I worked on this project as a Product Designer at Varonis. I was responsible for the UX and UI of the Account Pane redesign, from understanding the existing experience and defining the information hierarchy to creating the updated interface."),
      h("Overview of the Previous Account Pane"),
      p("My first step was reviewing the previous Account Pane to understand its structure, hierarchy, and how users moved through it. I focused on identifying where key information was hard to scan. \n\nAs part of the redesign requirements, the pane needed to shift from a single user perspective to an account level perspective."),
      h("Understanding Users' Needs"),
      p("I spoke with stakeholders across the product to better understand users’ needs, pain points, and expectations. These conversations helped me identify what was missing from the pane, which information users needed most, and where the existing experience made their work harder."),
      h("Competitor Analysis"),
      p("I compared similar account and user pages to understand how other products present this type of information. The research helped me identify patterns, understand what makes these pages easier to scan, and see where the Account Pane could become clearer and more useful."),
      h("First Release"),
      p("The first round stayed close to the original Account Pane. At this stage, the changes were:\n• Changing the view to an Account Pane\n• Merging two steps into one\n• Removing the flags option because it was no longer relevant\n• Aligning the design with other areas of the product"),
      h("Finalizing Design"),
      p("The next step was to take everything I had learned and apply it to the existing pane. The general information tab became an overview tab with more relevant data, including the option to see all related accounts, since one user can have multiple accounts. I also added clearer sections for statistics, recent activities organized by priority, and membership information related to the account.")
    ],
    next: { title: "The design process of a new feature: Campaign Board", href: "campaigns-board.html", image: "assets/Home page/optimized/Home_page_Image_1_campaign_board_v9.jpg" },
    explore: [
      { title: "Creating a product from scratch: Intent-Based Promotions", href: "intent-based-promotions.html", image: "assets/Home page/optimized/Home_page_Image_2_intent_v4.jpg" },
      { title: "Building a data visualization tool: Journey Flow", href: "journey-flow.html", image: "assets/Home page/optimized/Home_page_Image_3_flow_v3.jpg" }
    ]
  }
};

const escapeHtml = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const withBreaks = (value) =>
  escapeHtml(value)
    .replace("manage eCommerce promotion\u00a0campaigns.", '<span class="text-keep">manage&nbsp;eCommerce&nbsp;promotion&nbsp;campaigns.</span>')
    .split("\n\n")
    .map((part) => part.replaceAll("\n", " <br>"))
    .join("</p><p>");

const withInlineBreaks = (value) =>
  escapeHtml(value).replaceAll("\n", " <br>");

const withJourneyConclusionUnderlines = (value) =>
  `<p>${withBreaks(value)}</p>`
    .replace("Get feedback", "<u>Get feedback</u>")
    .replace("Don’t limit yourself.", "<u>Don’t limit yourself.</u>")
    .replace("let things go", "<u>let things go</u>");

const withTitleKeeps = (value) =>
  escapeHtml(value).replace("a\u00A0complex", '<span class="text-keep">a&nbsp;complex</span>');

const withExploreTitleKeeps = (value) =>
  escapeHtml(value)
    .replaceAll("Campaign Board", "Campaign&nbsp;Board")
    .replaceAll("Journey Flow", "Journey&nbsp;Flow")
    .replaceAll("Intent-Based Promotions", "Intent-Based&nbsp;Promotions");

function renderMoreToExplore(data) {
  const projectClassName = (href) => href.replace(/\/$/, "").replace(".html", "").replaceAll("-", "_");

  return `
    <section class="more-to-explore">
      <h2>More to explore</h2>
      <div class="explore-grid">
        ${data.explore
          .map(
            (project) => `
              <a class="explore-card explore-card--${projectClassName(project.href)}" href="${localUrl(project.href)}">
                <div class="explore-image"><img src="${localUrl(project.image)}" alt="${escapeHtml(project.title)}"></div>
                <span>${withExploreTitleKeeps(project.title)}</span>
              </a>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCaseStudy() {
  const id = document.body.dataset.case;
  const data = caseStudies[id];
  const root = document.querySelector("#case-root");
  if (!data || !root) return;

  if (id === "campaigns") {
    renderCampaignCase(root, data);
    return;
  }

  if (id === "intent") {
    renderIntentCase(root, data);
    return;
  }

  if (id === "journey") {
    renderJourneyCase(root, data);
    return;
  }

  if (id === "activations") {
    renderActivationsCase(root, data);
    return;
  }

  if (id === "varonis") {
    renderVaronisCase(root, data);
    return;
  }

  const blocks = data.blocks
    .map((block) => {
      if (block.type === "heading") return `<h2>${escapeHtml(block.text)}</h2>`;
      if (block.type === "paragraph") return `<p>${withBreaks(block.text)}</p>`;
      if (block.type === "image") {
        return `<figure><img loading="eager" decoding="async" src="${localUrl(block.src)}" alt="${escapeHtml(block.alt)}"></figure>`;
      }
      return "";
    })
    .join("");

  root.innerHTML = `
    <article class="case-study-page">
      <h1>${escapeHtml(data.title)}</h1>
      ${blocks}
      <a class="up-link" href="#top">Up</a>
      ${renderMoreToExplore(data)}
    </article>
  `;
}

function renderCampaignCase(root, data) {
  const briefItems = [
    {
      icon: "background",
      title: data.blocks[2].text,
      text: data.blocks[3].text
    },
    {
      icon: "problem",
      title: data.blocks[4].text,
      text: data.blocks[5].text
    },
    {
      icon: "goal",
      title: data.blocks[6].text,
      text: data.blocks[7].text
    },
    {
      icon: "myRole",
      title: data.blocks[8].text,
      text: data.blocks[9].text
    }
  ];

  const chapters = [
    {
      label: "Research",
      title: data.blocks[10].text,
      text: data.blocks[11].text,
      media: [img("assets/campaign board/Getting_to_Know_the_User.png", "Getting to Know the User research questions")]
    },
    {
      label: "Interviews",
      title: data.blocks[13].text,
      headlineMedia: img("assets/campaign board/Interviews_image_1.png?v=20260511-100741", "Interview script and notes"),
      text: data.blocks[15].text,
      media: [img("assets/campaign board/Interviews_image_2.png?v=20260527-092457", "Interview notes summary")]
    },
    {
      label: "Market Scan",
      title: data.blocks[17].text,
      text: data.blocks[18].text,
      media: [img("assets/campaign board/Competitor Analysis.jpg", "Competitor Analysis")]
    },
    {
      label: "Synthesis",
      title: data.blocks[20].text,
      text: data.blocks[21].text
    },
    {
      label: "Wireframes",
      title: data.blocks[22].text,
      text: `${data.blocks[23].text}\n\n${data.blocks[25].text}`,
      media: [
        img("assets/campaign board/Wireframes_1.png", "Wireframes 1"),
        img("assets/campaign board/Wireframes_2.png", "Wireframes 2")
      ]
    },
    {
      label: "Final Design",
      title: data.blocks[27].text,
      text: data.blocks[28].text,
      media: [video("assets/campaign board/campaign_board.mp4", "Campaign Board feature walkthrough")]
    },
    {
      label: "Reflection",
      title: data.blocks[30].text,
      text: data.blocks[31].text,
      media: [img("assets/campaign board/what_I_learned.png", "What I Learned")]
    }
  ];

  const iconSvg = {
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v4"/><path d="M17 3v4"/><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg>',
    alert: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.3 4.1 2.8 17.4A2 2 0 0 0 4.5 20h15a2 2 0 0 0 1.7-2.6L13.7 4.1a2 2 0 0 0-3.4 0Z"/><path d="M12 8v5"/><path d="M12 17h.01"/></svg>',
    target: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="m16 8 4-4"/><path d="M20 4v4h-4"/></svg>',
    pen: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
    background: `<img class="campaign-brief-icon" src="${localUrl("assets/campaign board/Background_icon.svg")}" alt="" aria-hidden="true">`,
    problem: `<img class="campaign-brief-icon" src="${localUrl("assets/campaign board/The_Problem_icon.svg")}" alt="" aria-hidden="true">`,
    goal: `<img class="campaign-brief-icon" src="${localUrl("assets/campaign board/The_Goal_icon.svg")}" alt="" aria-hidden="true">`,
    myRole: `<img class="campaign-brief-icon" src="${localUrl("assets/campaign board/My_Role_icon.svg")}" alt="" aria-hidden="true">`
  };

  const renderFigure = (block) => {
    if (!block || block.type !== "image") return "";
    const classAttribute = block.className ? ` class="${escapeHtml(block.className)}"` : "";
    return `<figure${classAttribute}><img loading="eager" decoding="async" src="${localUrl(block.src)}" alt="${escapeHtml(block.alt)}"></figure>`;
  };

  const renderVideo = (block) => {
    if (!block || block.type !== "video") return "";
    return `
      <figure>
        <video class="scroll-play-video" controls muted playsinline loop preload="metadata" aria-label="${escapeHtml(block.label)}">
          <source src="${localUrl(block.src)}" type="${escapeHtml(block.mime)}">
          <a href="${localUrl(block.src)}">Watch the Campaign Board video</a>
        </video>
      </figure>
    `;
  };

  const renderMediaItem = (block) => {
    if (block?.type === "video") return renderVideo(block);
    if (block?.type === "pager") {
      const slides = block.slides;
      const arrow = (dir, label, d) => `<button type="button" class="ibp-pager-btn ibp-pager-side ibp-pager-side--${dir > 0 ? "next" : "prev"}" data-dir="${dir}" aria-label="${label}"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg></button>`;
      const prevD = "M15 5l-7 7 7 7", nextD = "M9 5l7 7-7 7";
      return `<figure class="ibp-pager${block.side ? " ibp-pager--side" : ""}" data-index="0" aria-roledescription="carousel" aria-label="${escapeHtml(block.label || "")}">
        <p class="ibp-pager-caption" aria-live="polite">${escapeHtml(slides[0].caption)}</p>
        <div class="ibp-pager-view"${block.ratio ? ` style="aspect-ratio:${block.ratio}"` : ""}>
          ${slides.map((s, i) => `<img class="ibp-pager-img${i ? "" : " is-active"}" loading="eager" decoding="async" src="${localUrl(s.src)}" alt="${escapeHtml(s.alt || s.caption)}" data-caption="${escapeHtml(s.caption)}">`).join("")}
          ${block.side ? arrow(-1, "Previous", prevD) + arrow(1, "Next", nextD) : ""}
        </div>
        <div class="ibp-pager-nav">
          ${block.side ? "" : `<button type="button" class="ibp-pager-btn" data-dir="-1" aria-label="Previous"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${prevD}"/></svg></button>`}
          <span class="ibp-pager-dots">${slides.map((s, i) => `<button type="button" class="ibp-pager-dot" data-go="${i}" aria-label="Show ${i + 1} of ${slides.length}"${i ? "" : ' aria-current="true"'}></button>`).join("")}</span>
          ${block.side ? "" : `<button type="button" class="ibp-pager-btn" data-dir="1" aria-label="Next"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${nextD}"/></svg></button>`}
        </div>
      </figure>`;
    }
    return renderFigure(block);
  };

  const renderMedia = (media = []) => {
    if (!media.length) return "";
    return `<div class="campaign-story-media">${media.map(renderMediaItem).join("")}</div>`;
  };

  const renderHeadlineMedia = (media) => {
    if (!media) return "";
    return `<div class="campaign-story-headline-media">${renderFigure(media)}</div>`;
  };

  const renderInsightIcon = (name) => {
    const icons = {
      team: '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="9.5" cy="11.5" r="3.4"/><circle cx="22.5" cy="11.5" r="3.4"/><circle cx="16" cy="22" r="3.4"/><path d="m12.3 13.5 2.7 5.4"/><path d="m19.7 13.5-2.7 5.4"/><path d="M12.8 11.5h6.4"/></svg>',
      idea: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M10.4 18.2a6.2 6.2 0 1 1 11.2 0c-.9 1.2-1.8 2-1.8 3.8h-7.6c0-1.8-.9-2.6-1.8-3.8Z"/><path d="M13 26h6"/><path d="M12.2 22h7.6"/></svg>',
      creation: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 23 12.5 15.5l5 5L27 11"/><path d="M20.5 11H27v6.5"/><path d="M5 11h6"/></svg>',
      pain: '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="9"/><circle cx="12.5" cy="13.5" r=".45"/><circle cx="19.5" cy="13.5" r=".45"/><path d="M11.5 21c1.1-2 2.6-3 4.5-3s3.4 1 4.5 3"/></svg>',
      tools: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 24l4.5-1 10-10a3 3 0 0 0-4.2-4.2l-10 10Z"/><path d="m17.5 9.5 5 5"/><path d="M8 24l1-4.5"/></svg>',
      timeline: '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="9"/><path d="M16 10.5V16l4 2.4"/></svg>'
    };

    return icons[name] || "";
  };

  const renderInsights = () => {
    const insights = [
      {
        icon: "team",
        tone: "aqua",
        title: "Campaigns are a collaborative effort",
        text: "Digital marketing, content writers, and designers."
      },
      {
        icon: "idea",
        tone: "violet",
        title: "Customers need “Siba-Lemesiba”",
        text: "After 10 years, the idea bank is done."
      },
      {
        icon: "creation",
        tone: "gold",
        title: "Current campaign creation practices",
        text: "Past experience, competitive analysis, and guessing."
      },
      {
        icon: "pain",
        tone: "rose",
        title: "Pain-points",
        text: "No centralized place to see the big picture, considering the needs of different departments, predicting trends over the year, measuring success and failure."
      },
      {
        icon: "tools",
        tone: "orange",
        title: "No standard tools",
        text: "Google Calendar & Analytics, spreadsheets + docs."
      },
      {
        icon: "timeline",
        tone: "green",
        title: "Campaign timeline depends on its type",
        text: "Can be planned ahead, such as Black Friday, or dynamic."
      }
    ];

    return `
      <div class="campaign-insights-grid" aria-label="Research insights">
        ${insights
          .map(
            (item) => `
              <article class="campaign-insight-item campaign-insight-item--${item.tone}">
                <span class="campaign-insight-icon">${renderInsightIcon(item.icon)}</span>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.text)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  };

  root.innerHTML = `
    <article class="campaign-case-study">
      <section class="campaign-case-hero">
        <div>
          <h1>${withTitleKeeps(data.title)}</h1>
          <p>${withBreaks(data.blocks[1].text)}</p>
        </div>
        <figure>
          <img loading="eager" decoding="async" src="${localUrl("assets/campaign board/header_image_v6.jpg")}" alt="Campaign Board calendar interface" width="2000" height="1660">
        </figure>
      </section>

      <section class="campaign-case-brief" aria-label="Project brief">
        ${briefItems
          .map(
            (item) => `
              <div>
                ${iconSvg[item.icon]}
                <h2>${escapeHtml(item.title)}</h2>
                <p>${withBreaks(item.text)}</p>
              </div>
            `
          )
          .join("")}
      </section>

      <section class="campaign-case-story">
        ${chapters
          .map((chapter) => {
            if (chapter.headlineMedia) {
              return `
                <section class="campaign-story-section campaign-story-section--headline-media">
                  <div class="campaign-story-heading-block">
                    <h2>${escapeHtml(chapter.title)}</h2>
                    ${renderHeadlineMedia(chapter.headlineMedia)}
                  </div>
                  <div class="campaign-story-copy">
                    <p>${withBreaks(chapter.text)}</p>
                  </div>
                  ${renderMedia(chapter.media)}
                </section>
              `;
            }

            if (chapter.label === "Synthesis") {
              return `
                <section class="campaign-story-section campaign-story-section--insights">
                  <div class="campaign-story-copy">
                    <h2>${escapeHtml(chapter.title)}</h2>
                  </div>
                  ${renderInsights()}
                </section>
              `;
            }

            if (chapter.label === "Wireframes") {
              const [introText, followupText] = chapter.text.split("\n\n");

              return `
                <section class="campaign-story-section campaign-story-section--wireframes campaign-board-wireframes-section">
                  <div class="campaign-story-copy campaign-wireframes-copy">
                    <h2>${escapeHtml(chapter.title)}</h2>
                    <p>${withBreaks(introText)}</p>
                    <p>${withBreaks(followupText)}</p>
                    ${renderMedia(chapter.media)}
                  </div>
                </section>
              `;
            }

            const sectionClasses = [
              "campaign-story-section",
              chapter.label === "Market Scan" ? "campaign-story-section--competitor-analysis" : "",
              chapter.label === "Final Design" ? "campaign-story-section--final-delivery" : ""
            ]
              .filter(Boolean)
              .join(" ");

            return `
              <section class="${sectionClasses}">
                <div class="campaign-story-copy">
                  <h2>${escapeHtml(chapter.title)}</h2>
                  <p>${withBreaks(chapter.text)}</p>
                </div>
                ${renderMedia(chapter.media)}
              </section>
            `;
          })
          .join("")}
      </section>

      <a class="up-link" href="#top">Up</a>
      ${renderMoreToExplore(data)}
    </article>
  `;

  setupScrollPlayVideos(root);
}

function renderIntentCase(root, data) {
  /* New story, taken from the Google Slides deck "Intent-Based Promotions" (32 slides). */
  const briefItems = [
    {
      icon: "background",
      title: "Background",
      text: "IBP: Product that offers individualized promotions to eCommerce site visitors based on real-time buying intent (B2B2C)."
    },
    {
      icon: "problem",
      title: "The Problem",
      text: "eCommerce managers often offer the same discount to all visitors, so money isn’t spent strategically."
    },
    {
      icon: "goal",
      title: "The Solution",
      text: "A platform that can present the appropriate promotion at the right time based on a user’s intent to purchase."
    },
    {
      icon: "myRole",
      title: "My Role",
      text: "From 0 → 1\nProduct designer of IBP, from the first sketch to launch."
    }
  ];

  const stat = (value, label, detail) =>
    `<div class="ibp-stat"><span class="ibp-stat-label">${label}</span><strong class="ibp-stat-value">${value}</strong><span class="ibp-stat-detail">${detail}</span></div>`;

  const chapters = [
    {
      /* slide 3: the persona image comes from the Desktop folder (487.png) */
      className: "ibp-persona-section",
      title: "Who Are the Users?",
      text: "",
      media: [img("img/ibp/persona.png", "Persona: Emma, eCommerce Promotions Manager / Digital Marketing Manager")]
    },
    {
      /* slides 4-5: same structure and images as the live page, new text only */
      className: "intent-speaking-users-section",
      title: "Speaking to Users",
      text: "I went out and interviewed 6 users who create and manage eCommerce promotion campaigns.\n\nHearing their perspectives was important because it gave me a deeper understanding of their workflows, decision-making, and the challenges they face when creating promotions.",
      media: [
        { ...img("assets/Intent-Based Promotions/Screenshot_10-03-46-AM.png", "User research findings"), caption: "Affinity mapping" }
      ],
      underTextMedia: [
        { ...img("assets/Intent-Based Promotions/Screenshot_9-52-08-AM.png", "Interview protocol"), caption: "Interview Protocol" }
      ]
    },
    {
      /* slide 6 */
      className: "campaign-story-section--copy-left ibp-competitors",
      title: "Competitor Analysis",
      text: "I compared five platforms: Poptin, OptiMonk, Justuno, Claspo and ProveSource.\n\nNone of them decides on a promotion based on the visitor’s intent. Promotions are rule based, and OptiMonk uses AI only to help build one.\n\nMost of them also made it hard to go back from designing the promotion to the template step.",
      media: [img("img/ibp/competitor.png?v=3", "Competitor analysis: Poptin, OptiMonk, Justuno, Claspo, ProveSource")]
    },
    {
      /* slide 7: four findings in a row, title above the icon */
      className: "campaign-story-section--sketches-stack ibp-findings",
      title: "Research Findings",
      textHtml: `<ul class="ibp-findings-grid"><li class="ibp-finding"><span class="ibp-finding-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="19"/><path d="M24 14v10.5l6 3.5"/></svg></span><h3>Time Consuming</h3><p>Today, building a campaign takes time. We need to allow building a campaign quickly and easily.</p></li><li class="ibp-finding"><span class="ibp-finding-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 40C11 31 6 24 6 17.5 6 12.5 10 9 14.5 9c3.700 0 7 2.200 9.500 6C26.500 11.200 29.800 9 33.500 9 38 9 42 12.500 42 17.500 42 24 37 31 24 40Z"/></svg></span><h3>User Connection</h3><p>Our users need to feel connected to the promotions. This will help them adapt quickly to the workflow.</p></li><li class="ibp-finding"><span class="ibp-finding-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 7l14.500 8.500v17L24 41 9.500 32.500v-17Z"/><path d="M17.500 24.500l4.500 4.500 8.500-9"/><circle cx="24" cy="6.500" r="2.500"/><circle cx="39" cy="15.500" r="2.500"/><circle cx="39" cy="32.500" r="2.500"/><circle cx="24" cy="41.500" r="2.500"/><circle cx="9" cy="32.500" r="2.500"/><circle cx="9" cy="15.500" r="2.500"/></svg></span><h3>Consistent Flow</h3><p>Jumping between steps should feel like moving through one workspace (same flow).</p></li><li class="ibp-finding"><span class="ibp-finding-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M30 8h10v10M40 8L27 21M18 40H8V30M8 40l13-13"/></svg></span><h3>Customization</h3><p>Need the ability to customize each template to the user’s needs.</p></li></ul>`
    },
    {
      /* slides 8-10: where does the flow live */
      className: "campaign-story-section--copy-left ibp-context",
      title: "From Ideas to Action",
      textHtml: `<h3 class="ibp-sub">Where does this flow live?<br>What is the surrounding context?</h3><p>These questions occupied me. The product was still being built and the other areas didn’t exist yet, so I had to take that into account.</p><p>I explored several options to understand where the campaign creation area should live. In the end I chose to give the flow a world of its own. It’s a short flow, but a complex one, and the user needs to stay focused on the task.</p>`,
      media: [{
        type: "pager",
        ratio: "1079 / 720",
        label: "Three options for where the flow lives",
        slides: [
          { src: "img/ibp/context-1.png", caption: "Is it one of the platform’s pages?", alt: "The flow as a page inside the platform" },
          { src: "img/ibp/context-2.png", caption: "A part of a page I still don’t have?", alt: "The flow as a part of a page that doesn’t exist yet" },
          { src: "img/ibp/context-3.png", caption: "Or a world of its own?", alt: "The flow as a world of its own, opened on top of the platform" }
        ]
      }]
    },
    {
      /* slides 12-15: the order of the steps, part of From Ideas to Action (no section title of its own) */
      className: "campaign-story-section--copy-left ibp-continue",
      textHtml: `<h3 class="ibp-sub">What is the order of the steps, and how is each step organized?</h3><p>The order was set logically. Color affects the templates, so it comes first. The template comes before Settings and Studio, because that is where it is seen. Settings come before Studio, because they also affect how the promotion looks.</p><p>Settings and Studio are the widest steps, so I decided how to build each one. Settings go from the core elements, like the start and end date and the discount range, to the specific ones, like audience and targeting. Studio follows the look of the promotion: content, images, then its position on the page.</p>`,
      media: [img("img/ibp/steps-order.png", "The steps in order, with hand drawn arrows. Settings hold the campaign rules, Studio holds the content and design")]
    },
    {
      /* slide 16: text on the left, the smaller picture on the right, both centred vertically */
      className: "campaign-story-section--copy-left ibp-wireframes-note ibp-no-top-line",
      text: "My thinking, laid out on paper: working notes, rules for each step, and the first sketches of how the platform could look. This is where the flow started to take shape.",
      media: [img("img/ibp/ideas-sketches.png", "Notes, sketches and early wireframes of the creation flow")]
    },
    {
      /* slides 17-21: text on the left, the four screens as a slow gif on the right */
      className: "campaign-story-section--copy-left ibp-release",
      title: "First Release",
      text: "The campaign creation flow was built around short, focused steps. Users started by selecting their goal, promotion type, and brand color, then saw all templates in that color, making it easier to imagine each promotion on their own site.",
      media: [{
        type: "pager",
        ratio: "1400 / 855",
        label: "The four steps of the first release",
        slides: [
          { src: "img/ibp/release-goal.png", caption: "Step 1: Set a Campaign Goal", alt: "First release: Set a Campaign Goal" },
          { src: "img/ibp/release-color.png", caption: "Step 2: Set the Main Color", alt: "First release: Set the Main Color" },
          { src: "img/ibp/release-template.png", caption: "Step 3: Choose a Template", alt: "First release: Choose a Template" },
          { src: "img/ibp/release-studio.png", caption: "Step 4: Promotion Studio", alt: "First release: Promotion Studio" }
        ]
      }]
    },
    {
      /* slide 22 */
      className: "campaign-story-section--sketches-stack ibp-issues",
      title: "Issues to Address",
      textHtml: `<p>After a release, things are rarely perfect, and problems start to surface. <br>Two of them stood out, and we wanted to fix them.</p><ul class="ibp-findings-grid ibp-issues-grid"><li class="ibp-finding"><span class="ibp-finding-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="19"/><path d="M24 14v10.5l6 3.5"/></svg></span><h3>Time to Create a Campaign</h3><p>Breaking the workflow into shorter steps didn’t necessarily help users complete the task faster, as they frequently moved back and forth between steps.</p></li><li class="ibp-finding"><span class="ibp-finding-icon"><svg viewBox="0 0 40 40" aria-hidden="true" style="fill:currentColor;stroke:#F9F9F8;stroke-width:.9;stroke-linejoin:round"><path d="M34.3903 18.9239L30.8667 15.4016C30.8243 15.3272 30.8012 15.2433 30.7994 15.1576L32.6384 9.6367C32.7732 9.31887 32.81 8.96804 32.7441 8.62917C32.6782 8.29029 32.5126 7.9788 32.2686 7.73462C32.0246 7.49045 31.7132 7.32469 31.3743 7.25861C31.0355 7.19253 30.6846 7.22913 30.3667 7.36371L24.8656 9.20004C24.7798 9.2037 24.6944 9.18697 24.6163 9.15123L21.0795 5.61312C20.855 5.32614 20.5391 5.12455 20.1842 5.04177C19.8294 4.95899 19.4569 5.00001 19.1286 5.15802C18.8002 5.31603 18.5358 5.58153 18.3791 5.9105C18.2223 6.23946 18.1828 6.61211 18.267 6.96663L18.8699 12.3661C18.8573 12.417 18.8378 12.4658 18.8118 12.5113L13.1498 15.6576C12.8184 15.7969 12.5425 16.0421 12.3651 16.3547C12.1877 16.6674 12.1187 17.03 12.169 17.386C12.2194 17.7419 12.3861 18.0712 12.6432 18.3224C12.9003 18.5737 13.2334 18.7328 13.5904 18.7748L17.3237 19.635C17.3813 19.6478 17.4344 19.6759 17.4773 19.7163C17.5203 19.7567 17.5516 19.808 17.5679 19.8646C17.5843 19.9213 17.585 19.9814 17.5701 20.0384C17.5553 20.0955 17.5253 20.1475 17.4834 20.189L3.81508 33.856C3.66193 34.0091 3.54045 34.191 3.45757 34.391C3.37469 34.5911 3.33203 34.8056 3.33203 35.0222C3.33203 35.2388 3.37469 35.4532 3.45757 35.6533C3.54045 35.8534 3.66193 36.0352 3.81508 36.1884C3.96822 36.3415 4.15003 36.463 4.35012 36.5459C4.55022 36.6287 4.76468 36.6714 4.98126 36.6714C5.19783 36.6714 5.41229 36.6287 5.61239 36.5459C5.81248 36.463 5.99429 36.3415 6.14743 36.1884L19.8144 22.5214C19.8561 22.4799 19.9081 22.4503 19.9651 22.4357C20.022 22.421 20.0819 22.4219 20.1384 22.4382C20.1949 22.4545 20.2461 22.4856 20.2865 22.5283C20.327 22.571 20.3553 22.6237 20.3685 22.681L21.2299 26.4157C21.272 26.7727 21.4311 27.1058 21.6823 27.3629C21.9335 27.62 22.2628 27.7867 22.6188 27.837C22.9747 27.8873 23.3373 27.8184 23.65 27.641C23.9627 27.4636 24.2078 27.1877 24.3472 26.8563L27.4737 21.2193C27.5131 21.1849 27.5576 21.1569 27.6056 21.1362L33.0381 21.7378C33.3925 21.8206 33.7645 21.7801 34.0927 21.623C34.4209 21.4658 34.6857 21.2014 34.8433 20.8734C35.0009 20.5454 35.0419 20.1735 34.9596 19.819C34.8772 19.4646 34.6764 19.1488 34.3903 18.9239V18.9239ZM27.8959 18.5136C27.3576 18.4665 26.817 18.5734 26.3372 18.8219C25.8574 19.0705 25.4582 19.4504 25.1862 19.9173L23.6612 22.6612C23.6288 22.7194 23.5796 22.7665 23.5199 22.7962C23.4603 22.8258 23.393 22.8368 23.327 22.8275C23.2611 22.8182 23.1995 22.7892 23.1503 22.7442C23.1012 22.6992 23.0668 22.6404 23.0517 22.5755L22.3921 19.7431C22.2581 19.2298 21.9897 18.7614 21.6145 18.3862C21.2394 18.0111 20.771 17.7427 20.2577 17.6087L17.4266 16.957C17.3618 16.9416 17.3032 16.907 17.2583 16.8577C17.2135 16.8085 17.1845 16.7468 17.1753 16.6809C17.166 16.6149 17.1768 16.5476 17.2064 16.4879C17.2359 16.4282 17.2828 16.3788 17.3409 16.3462L20.0862 14.8212C20.5518 14.5477 20.9304 14.1479 21.1781 13.6681C21.4258 13.1883 21.5325 12.6482 21.4858 12.1102L21.2959 10.4032C21.2887 10.3352 21.3027 10.2668 21.3359 10.2071C21.3692 10.1474 21.42 10.0995 21.4816 10.0699C21.5431 10.0403 21.6123 10.0304 21.6797 10.0417C21.747 10.0529 21.8093 10.0847 21.8579 10.1327L22.7444 11.0205C23.1289 11.3836 23.6025 11.6386 24.1172 11.7598C24.6319 11.8809 25.1696 11.8639 25.6756 11.7105L28.9736 10.6129C29.0317 10.5937 29.094 10.5909 29.1535 10.605C29.213 10.6191 29.2674 10.6495 29.3107 10.6927C29.3539 10.736 29.3843 10.7904 29.3984 10.8499C29.4125 10.9095 29.4098 10.9717 29.3905 11.0298L28.2916 14.3278C28.1396 14.834 28.1235 15.3713 28.2451 15.8856C28.3667 16.4 28.6216 16.8732 28.9842 17.2578L29.8733 18.1456C29.9207 18.1938 29.9522 18.2554 29.9635 18.322C29.9749 18.3886 29.9656 18.4571 29.9368 18.5183C29.9081 18.5795 29.8614 18.6304 29.8028 18.6643C29.7443 18.6981 29.6769 18.7132 29.6095 18.7076L27.8959 18.5136Z"/></svg></span><h3>Template Adjustment</h3><p>The promotions weren’t customizable enough, so tickets were opened with the support team to resolve it.</p></li></ul>`
    },
    {
      /* slides 23-25 */
      className: "campaign-story-section--sketches-stack intent-user-flow-section ibp-stack",
      title: "Update the User Flow",
      text: "I went back to the user flow and mapped it again to understand where users were slowing down.\n\nI decided to remove the color step completely. The goal moved into Settings, and the promotion type moved into the Template step. This reduced unnecessary steps and made the flow faster and more intuitive.",
      media: [
        { ...img("img/ibp/flow-before.png", "User flow of the first release"), caption: "Before" },
        { ...img("img/ibp/flow-after.png", "Updated user flow without the color step"), caption: "After" }
      ],
      mediaPlacement: "underText"
    },
    {
      /* slide 26 */
      className: "campaign-story-section--sketches-stack intent-wireframes-section",
      title: "Refining the Creation Flow",
      text: "With the insights from the first release, I revisited the structure of the campaign creation experience. I reduced it to three clear steps: Templates, Settings, and Studio.\n\nI chose a layout that makes better use of the available space. We also expanded template customization, giving users more control to create promotions that matched their brand.",
      media: [
        img("img/ibp/wire-templates.jpg", "Templates step wireframe"),
        img("img/ibp/wire-studio.jpg", "Studio step wireframe")
      ],
      mediaPlacement: "underText"
    },
    {
      className: "campaign-story-section--sketches-stack campaign-story-section--final-delivery",
      title: "Finalizing Design",
      text: "With the flow and structure defined, I moved forward and refined the whole experience. The final flow is organized into three steps: Templates, Settings, and Studio.\n\nUsers have more freedom to customize each template, including control over every color, unrestricted text, the promotion’s background on their website, and more.\n\nThe video below shows the final Campaign Creation, the core of the Intent-Based Promotions product.",
      media: [video("assets/Intent-Based Promotions/Create a campaign.mp4?v=lossless-vfr-remux-20260727", "Create Campaign walkthrough")]
    },
    {
      /* slide 28: data on the left, one under the other; the users' words on the right, one above the other */
      className: "campaign-story-section--copy-left ibp-impact-section",
      title: "Impact",
      textHtml: `
        <div class="ibp-stats">
          ${stat("−16.5%", "Time to create a campaign", "Dropped from 10.3 to 8.6 minutes after the redesign")}
          ${stat("−71%", "Open support tickets", "Dropped from 76 to 22 tickets over 4 months after the redesign")}
        </div>`,
      media: [{
        type: "quotes",
        quotes: [
          "I love this! It looks great and it’s so much easier to\u00a0navigate.",
          "It is pretty much everything I could ask for when creating a campaign.",
          "Creating a promotion feels much easier now. I can really create what I have in mind."
        ]
      }]
    },
    {
      className: "campaign-story-section--sketches-stack campaign-story-section--final-delivery ibp-more-work",
      title: "More of My Work on IBP",
      screenGallery: [
        {
          src: "assets/Intent-Based Promotions/screens/Group 143418246.png?v=3",
          alt: "Promotion template selection",
          headline: "Seasonal event selection: Christmas",
          layout: "top-left"
        },
        {
          src: "assets/Intent-Based Promotions/screens/Group 143418293.png?v=3",
          alt: "Campaign settings and promotion preview",
          headline: "Campaign goal selection",
          layout: "top-right"
        },
        {
          src: "assets/Intent-Based Promotions/screens/Product list.png",
          alt: "Product list selection screen",
          headline: "Limit options: Triggers",
          layout: "second-left"
        },
        {
          src: "assets/Intent-Based Promotions/screens/Group 1434198565.png",
          alt: "URL targeting rules",
          headline: "URL rules: Which pages\nthe promotion will appear on",
          layout: "trigger-rules"
        },
        {
          images: [
            {
              src: "assets/Intent-Based Promotions/screens/Modal.png",
              alt: "Publish campaign confirmation"
            },
            {
              src: "assets/Intent-Based Promotions/screens/Modal2.png",
              alt: "Campaign selection change modal"
            },
            {
              src: "assets/Intent-Based Promotions/screens/Modal1.png",
              alt: "Campaign publishing restriction modal"
            },
            {
              src: "assets/Intent-Based Promotions/screens/Group 1434198566.png",
              alt: "Save campaign as draft confirmation"
            }
          ],
          headline: "In-platform informational modals",
          layout: "trigger-modals"
        },
        {
          images: [
            {
              src: "assets/Intent-Based Promotions/screens/Group 1434198562.png",
              alt: "Email integration selector"
            },
            {
              src: "assets/Intent-Based Promotions/screens/Group 1434198563.png",
              alt: "Klaviyo integration field mapping"
            }
          ],
          headline: "Required campaign integrations",
          layout: "integration-stack"
        },
        {
          images: [
            {
              src: "assets/Intent-Based Promotions/screens/Group 1434198568.png?v=2",
              alt: "Product selection list"
            },
            {
              src: "assets/Intent-Based Promotions/screens/Group 1434198564.png",
              alt: "Empty product search results"
            }
          ],
          headline: "Which products the promotion will appear on",
          layout: "product-stack"
        },
        {
          src: "assets/Intent-Based Promotions/screens/Campaigns Management_table.png?v=3",
          alt: "Campaign management dashboard",
          headline: "Campaign Management overview",
          layout: "feature"
        },
        {
          src: "assets/Intent-Based Promotions/screens/3.png?v=2",
          alt: "Coupon file upload modal",
          headline: "Coupon code upload",
          layout: "pair"
        },
        {
          src: "assets/Intent-Based Promotions/screens/4.png?v=2",
          alt: "Uploaded coupon files modal",
          headline: "Coupons management",
          layout: "pair"
        }
      ]
    }
  ];

  renderStructuredCase(root, data, {
    briefItems,
    chapters,
    heroImage: img("img/ibp/header.jpg", "Intent-Based Promotions: choosing a template", 1800, 989),
    heroClassName: "campaign-case-hero--plain"
  });
}

function renderJourneyCase(root, data) {
  const briefItems = [
    {
      icon: "background",
      title: data.blocks[2].text,
      text: data.blocks[3].text
    },
    {
      icon: "problem",
      title: data.blocks[4].text,
      text: data.blocks[5].text
    },
    {
      icon: "goal",
      title: data.blocks[6].text,
      text: data.blocks[7].text
    },
    {
      icon: "myRole",
      title: data.blocks[8].text,
      text: data.blocks[9].text
    }
  ];

  const chapters = [
    {
      className: "campaign-story-section--sketches-stack",
      title: data.blocks[10].text,
      text: data.blocks[11].text,
      media: [data.blocks[12]]
    },
    {
      className: "campaign-story-section--sketches-stack",
      title: data.blocks[13].text,
      text: data.blocks[14].text,
      media: [data.blocks[15]]
    },
    {
      className: "campaign-story-section--sketches-stack",
      title: data.blocks[16].text,
      text: data.blocks[17].text,
      media: [data.blocks[18]]
    },
    {
      className: "campaign-story-section--sketches-stack",
      title: data.blocks[19].text,
      text: data.blocks[20].text,
      media: [data.blocks[21]],
      afterText: data.blocks[22].text
    },
    {
      className: "campaign-story-section--copy-left",
      title: data.blocks[23].text,
      text: data.blocks[24].text,
      media: [data.blocks[25]]
    },
    {
      className: "campaign-story-section--copy-left campaign-story-section--same-topic-continuation journey-map-gif-section",
      text: data.blocks[26].text,
      media: [data.blocks[27]]
    },
    {
      className: "campaign-story-section--sketches-stack",
      text: data.blocks[28].text,
      media: [img("assets/flow/Sketches Round 2_image_2.png", "Journey Flow map-inspired mockup")]
    },
    {
      className: "campaign-story-section--sketches-stack",
      text: data.blocks[30].text,
      media: [img("assets/flow/Sketches Round 2_image_3.png", "Journey Flow gradient mockup with pin and flag")]
    },
    {
      className: "campaign-story-section--sketches-stack campaign-story-section--final-delivery campaign-story-section--design-intro",
      title: data.blocks[32].text,
      text: data.blocks[33].text,
      media: [img("assets/flow/design_image.png?v=20260521-1151", "Journey Flow design mockup")]
    },
    {
      className: "campaign-story-section--sketches-stack campaign-story-section--final-delivery campaign-story-section--design-followup",
      text: data.blocks[35].text,
      media: [video("assets/flow/record.mp4?v=20260521", "Journey Flow final interaction recording", "video/mp4")]
    },
    {
      className: "campaign-story-section--conclusion-icons",
      title: data.blocks[37].text,
      text: data.blocks[38].text,
      textHtml: withJourneyConclusionUnderlines(data.blocks[38].text),
      insightItems: [
        {
          icon: "feedback",
          title: "Get feedback, constantly improve",
          text: "When collaborating, compromising is necessary since different people have different opinions."
        },
        {
          icon: "outOfBox",
          title: "Think out of the box",
          text: "Even if it's not the \"right\" direction, I learned from the process."
        },
        {
          icon: "letGo",
          title: "Let things go",
          text: "I created a lot of different versions. It’s a process, the flow is updated all the time."
        }
      ]
    }
  ];

  renderStructuredCase(root, data, {
    briefItems,
    chapters,
    heroImage: img("assets/flow/header_image_v3.jpg", "Journey Flow data visualization mockup", 1505, 1250),
    heroClassName: "campaign-case-hero--plain"
  });
}

function renderActivationsCase(root, data) {
  const briefItems = [
    {
      icon: "background",
      title: data.blocks[2].text,
      text: data.blocks[3].text
    },
    {
      icon: "problem",
      title: data.blocks[4].text,
      text: data.blocks[5].text
    },
    {
      icon: "goal",
      title: data.blocks[6].text,
      text: data.blocks[7].text
    },
    {
      icon: "myRole",
      title: data.blocks[8].text,
      text: data.blocks[9].text
    }
  ];

  const chapters = [
    {
      className: "campaign-story-section--sketches-stack",
      title: data.blocks[10].text,
      text: data.blocks[11].text,
      media: [data.blocks[12]]
    },
    {
      className: "campaign-story-section--sketches-stack",
      title: data.blocks[13].text,
      text: data.blocks[14].text,
      media: [data.blocks[15]]
    },
    {
      className: "campaign-story-section--copy-left",
      title: data.blocks[16].text,
      text: data.blocks[17].text,
      media: [data.blocks[18]]
    },
    {
      className: "campaign-story-section--copy-left campaign-story-section--static-copy activations-sketches-section",
      title: data.blocks[20].text,
      text: data.blocks[21].text,
      media: [data.blocks[22]]
    },
    {
      className: "campaign-story-section--copy-left campaign-story-section--static-copy",
      title: data.blocks[23].text,
      text: data.blocks[24].text,
      media: [data.blocks[25]]
    },
    {
      className: "campaign-story-section--sketches-stack campaign-story-section--final-delivery",
      title: data.blocks[26].text,
      text: data.blocks[27].text,
      media: [data.blocks[28]]
    },
    {
      className: "campaign-story-section--sketches-stack",
      title: data.blocks[29].text,
      text: data.blocks[30].text
    }
  ];

  renderStructuredCase(root, data, {
    briefItems,
    chapters,
    heroImage: img("assets/Activation/header_image.jpg?v=20260522-1131", "Activations data management interface"),
    heroClassName: "campaign-case-hero--plain"
  });
}

function renderVaronisCase(root, data) {
  const briefItems = [
    {
      icon: "background",
      title: data.blocks[3].text,
      text: data.blocks[4].text
    },
    {
      icon: "problem",
      title: data.blocks[5].text,
      text: data.blocks[6].text
    },
    {
      icon: "goal",
      title: data.blocks[7].text,
      text: data.blocks[8].text
    },
    {
      icon: "myRole",
      title: data.blocks[9].text,
      text: data.blocks[10].text
    }
  ];

  const chapters = [
    {
      className: "campaign-story-section--static-copy",
      title: data.blocks[11].text,
      text: data.blocks[12].text,
      media: [img("assets/Account Pane/current_Account_Pane.png?v=20260527-114929", "Current Account Pane interface")]
    },
    {
      className: "campaign-story-section--static-copy campaign-story-section--copy-left varonis-users-needs-section",
      title: data.blocks[13].text,
      text: data.blocks[14].text,
      media: [img("assets/Account Pane/Understanding_users'_needs.png?v=20260529-0828", "Understanding users' needs notes")]
    },
    {
      className: "campaign-story-section--findings varonis-pain-points-section",
      title: "Main Pain Points",
      listMode: "bullets",
      insightItems: [
        {
          icon: "usability",
          title: "Poor usability",
          textHtml: "The pane isn't intuitive and includes <strong>unnecessary/duplicated actions.</strong>"
        },
        {
          icon: "outdatedUi",
          title: "Outdated UI",
          textHtml: "The visual design feels heavy and limited, and <strong>isn't aligned with the rest of the platform.</strong>"
        },
        {
          icon: "growth",
          title: "Limited flexibility and no support for growth",
          textHtml: "The pane is built around a <strong>single-user perspective</strong>, which limits its ability to support more complex account structures with <strong>multiple members.</strong>"
        }
      ]
    },
    {
      className: "campaign-story-section--static-copy campaign-story-section--copy-left varonis-competitor-section",
      title: data.blocks[15].text,
      text: data.blocks[16].text,
      media: [img("assets/Account Pane/Competitor Analysis_v2.png", "Competitor analysis examples")]
    },
    {
      className: "campaign-story-section--wireframes account-first-mockups-slider",
      title: data.blocks[17].text,
      text: data.blocks[18].text,
      media: [
        img("assets/Account Pane/image_1.png?v=20260527-121328", "First Account Pane mockup"),
        img("assets/Account Pane/image_2.png?v=20260527-121342", "Second Account Pane mockup")
      ],
      mediaMode: "mockupPager"
    },
    {
      className: "campaign-story-section--static-copy account-finalizing-design-video",
      title: data.blocks[19].text,
      text: data.blocks[20].text,
      media: [video("assets/Account Pane/Finalizing Design2.mp4?v=20260710-finalizing-design-2", "Finalizing Design walkthrough", "video/mp4")],
      mediaPlacement: "underText"
    }
  ];

  renderStructuredCase(root, data, {
    briefItems,
    chapters,
    heroImage: img("assets/Account Pane/header_image_v3.jpg", "Account Pane interface mockup", 1600, 1329),
    heroClassName: "campaign-case-hero--plain"
  });
}

function renderStructuredCase(root, data, options) {
  const isVaronisCase = document.body.dataset.case === "varonis";
  const defaultIconSvg = {
    background: `<img class="campaign-brief-icon" src="${localUrl("assets/campaign board/Background_icon.svg")}" alt="" aria-hidden="true">`,
    problem: `<img class="campaign-brief-icon" src="${localUrl("assets/campaign board/The_Problem_icon.svg")}" alt="" aria-hidden="true">`,
    goal: `<img class="campaign-brief-icon" src="${localUrl("assets/campaign board/The_Goal_icon.svg")}" alt="" aria-hidden="true">`,
    myRole: `<img class="campaign-brief-icon" src="${localUrl("assets/campaign board/My_Role_icon.svg")}" alt="" aria-hidden="true">`
  };
  const varonisIconSvg = {
    background: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.2 14.5 9.5 21.6l9.3-10-5-2.8.7-6.4-9.3 10Z"/></svg>',
    problem: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 13V8.1m0 8.4v.1m6.1 4H5.9a3.6 3.6 0 0 1-3.4-2.6c-.2-.6 0-1.3.4-1.9L8.9 5.1c1.4-2.3 4.8-2.3 6.2 0l6 11c.4.6.6 1.3.4 1.9a3.6 3.6 0 0 1-3.4 2.6Z"/></svg>',
    goal: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 12.6a9.3 9.3 0 1 1-9.3-9.3"/><path d="M16.3 12.6a4.8 4.8 0 1 1-4.8-4.8"/><path d="m11.5 12.6 4.2-4.2"/><path d="m22.1 5.2-3.8 3.8-2.5-.8-.8-2.5 3.8-3.8.4 3 3 .4Z"/></svg>',
    myRole: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12.5 19.2.8-.8a2.1 2.1 0 0 1 3.3.3 2.1 2.1 0 0 0 3.1.4l1.3-1.2"/><path d="m3 19.5 4.4-.9a1.2 1.2 0 0 0 .6-.3l9.7-9.8a1.2 1.2 0 0 0 0-1.7l-2-2.1a1.2 1.2 0 0 0-1.7 0l-9.8 9.8a1.2 1.2 0 0 0-.3.6Z"/></svg>'
  };
  const iconSvg = isVaronisCase ? varonisIconSvg : defaultIconSvg;

  const renderFigure = (block) => {
    if (!block || block.type !== "image") return "";
    return `<figure><img loading="eager" decoding="async" src="${localUrl(block.src)}" alt="${escapeHtml(block.alt)}">${block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : ""}</figure>`;
  };

  const renderVideo = (block) => {
    if (!block || block.type !== "video") return "";
    return `
      <figure>
        <video class="scroll-play-video" controls muted playsinline loop preload="metadata" aria-label="${escapeHtml(block.label)}">
          <source src="${localUrl(block.src)}" type="${escapeHtml(block.mime)}">
          <a href="${localUrl(block.src)}">Watch the video</a>
        </video>
      </figure>
    `;
  };

  const renderMediaItem = (block) => {
    if (block?.type === "video") return renderVideo(block);
    if (block?.type === "quotes") return `<div class="campaign-feedback-quotes ibp-quotes-stack">${block.quotes.map((q) => `<blockquote>&ldquo;${escapeHtml(q).replaceAll("\n", "<br>")}&rdquo;</blockquote>`).join("")}</div>`;
    if (block?.type === "pager") {
      const slides = block.slides;
      const arrow = (dir, label, d) => `<button type="button" class="ibp-pager-btn ibp-pager-side ibp-pager-side--${dir > 0 ? "next" : "prev"}" data-dir="${dir}" aria-label="${label}"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg></button>`;
      const prevD = "M15 5l-7 7 7 7", nextD = "M9 5l7 7-7 7";
      return `<figure class="ibp-pager${block.side ? " ibp-pager--side" : ""}" data-index="0" aria-roledescription="carousel" aria-label="${escapeHtml(block.label || "")}">
        <p class="ibp-pager-caption" aria-live="polite">${escapeHtml(slides[0].caption)}</p>
        <div class="ibp-pager-view"${block.ratio ? ` style="aspect-ratio:${block.ratio}"` : ""}>
          ${slides.map((s, i) => `<img class="ibp-pager-img${i ? "" : " is-active"}" loading="eager" decoding="async" src="${localUrl(s.src)}" alt="${escapeHtml(s.alt || s.caption)}" data-caption="${escapeHtml(s.caption)}">`).join("")}
          ${block.side ? arrow(-1, "Previous", prevD) + arrow(1, "Next", nextD) : ""}
        </div>
        <div class="ibp-pager-nav">
          ${block.side ? "" : `<button type="button" class="ibp-pager-btn" data-dir="-1" aria-label="Previous"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${prevD}"/></svg></button>`}
          <span class="ibp-pager-dots">${slides.map((s, i) => `<button type="button" class="ibp-pager-dot" data-go="${i}" aria-label="Show ${i + 1} of ${slides.length}"${i ? "" : ' aria-current="true"'}></button>`).join("")}</span>
          ${block.side ? "" : `<button type="button" class="ibp-pager-btn" data-dir="1" aria-label="Next"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${nextD}"/></svg></button>`}
        </div>
      </figure>`;
    }
    return renderFigure(block);
  };

  const renderMedia = (media = [], afterText = "") => {
    const mediaMarkup = media.map(renderMediaItem).join("");
    if (!mediaMarkup) return "";
    return `<div class="campaign-story-media">${mediaMarkup}${afterText ? `<div class="campaign-story-after-text">${renderChapterText(afterText)}</div>` : ""}</div>`;
  };

  const renderScreenGallery = (screens = []) => {
    if (!screens.length) return "";

    return `
      <section class="intent-design-screens" aria-label="Intent-Based Promotions design screens">
        ${screens
          .map(
            (screen) => `
              <figure class="intent-design-screen${screen.layout ? ` intent-design-screen--${escapeHtml(screen.layout)}` : ""}">
                <figcaption>${escapeHtml(screen.headline || "Placeholder headline")}</figcaption>
                <div class="intent-design-screen-media">
                  ${(screen.images || [screen])
                    .map((image) => `<img loading="eager" decoding="async" src="${localUrl(image.src)}" alt="${escapeHtml(image.alt)}">`)
                    .join("")}
                </div>
              </figure>
            `
          )
          .join("")}
      </section>
    `;
  };

  const renderMockupPager = (media = []) => {
    const [firstMockup, secondMockup] = media;
    if (!firstMockup || firstMockup.type !== "image" || !secondMockup || secondMockup.type !== "image") return "";

    const ar = (d) => `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
    const slides = [firstMockup, secondMockup];
    return `
      <figure class="ibp-pager ibp-mockup-pager" data-index="0" aria-roledescription="carousel" aria-label="Account Pane mockups">
        <p class="ibp-pager-caption" aria-live="polite">${escapeHtml(firstMockup.alt)}</p>
        <div class="ibp-pager-view" style="aspect-ratio:16 / 9">
          ${slides.map((s, i) => `<img class="ibp-pager-img${i ? "" : " is-active"}" loading="eager" decoding="async" src="${localUrl(s.src)}" alt="${escapeHtml(s.alt)}" data-caption="${escapeHtml(s.alt)}">`).join("")}
        </div>
        <div class="ibp-pager-nav">
          <button type="button" class="ibp-pager-btn" data-dir="-1" aria-label="Previous">${ar("M15 5l-7 7 7 7")}</button>
          <span class="ibp-pager-dots">${slides.map((s, i) => `<button type="button" class="ibp-pager-dot" data-go="${i}" aria-label="Show ${i + 1} of 2"${i ? "" : ' aria-current="true"'}></button>`).join("")}</span>
          <button type="button" class="ibp-pager-btn" data-dir="1" aria-label="Next">${ar("M9 5l7 7-7 7")}</button>
        </div>
      </figure>
    `;
  };

  const renderChapterText = (chapter) => {
    if (chapter.textHtml) return `<div class="campaign-story-rich-text">${chapter.textHtml}</div>`;
    if (chapter.textWithEmphasis) {
      const { before = "", emphasis = "", after = "" } = chapter.textWithEmphasis;
      return `<p>${escapeHtml(before)}<span class="impact-emphasis">${escapeHtml(emphasis)}</span>${escapeHtml(after)}</p>`;
    }
    return chapter.text ? `<p>${withBreaks(chapter.text)}</p>` : "";
  };

  const renderChapterBullets = (bullets = []) => {
    if (!bullets.length) return "";

    return `
      <ul class="campaign-story-bullets">
        ${bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    `;
  };

  const renderInsightIcon = (name) => {
    const icons = {
      speed: '<svg class="campaign-insight-icon-cursor" viewBox="0 0 40 40" aria-hidden="true"><path d="M9.1215 23.4982L6.30957 26.3101M6.01574 15.9991H2.03906M6.30957 5.69002L9.1215 8.50184M16.6209 1.4187L16.6209 5.39522M26.9304 5.69002L24.1185 8.50184M36.373 32.1951L33.2696 35.2985C32.9268 35.6413 32.371 35.6413 32.0282 35.2985L27.1355 30.4058C26.7656 30.0359 26.1562 30.0696 25.8294 30.4782L22.5389 34.5914C22.0935 35.1481 21.2053 34.9697 21.0094 34.2842L15.7038 15.7145C15.5146 15.0523 16.1268 14.4401 16.789 14.6293L35.3587 19.9349C36.0442 20.1308 36.2226 21.019 35.6659 21.4644L31.5527 24.7549C31.1441 25.0817 31.1104 25.6911 31.4803 26.061L36.373 30.9537C36.7158 31.2965 36.7158 31.8523 36.373 32.1951Z"/></svg>',
      impression: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 5l2.7 7.2L26 15l-7.3 2.8L16 25l-2.7-7.2L6 15l7.3-2.8Z"/><path d="M25 5v5"/><path d="M22.5 7.5h5"/></svg>',
      steps: '<svg class="campaign-insight-icon-list" viewBox="0 0 40 40" aria-hidden="true"><path d="M18 8H36M18 20H36M20 32H36M4 28C4 26.9391 4.42143 25.9217 5.17157 25.1716C5.92172 24.4214 6.93913 24 8 24C9.06087 24 10.0783 24.4214 10.8284 25.1716C11.5786 25.9217 12 26.9391 12 28C12 29.182 11 30 10 31L4 36H12M8 16V4L4 8"/></svg>',
      customize: '<svg class="campaign-insight-icon-customize" viewBox="0 0 40 40" aria-hidden="true"><path d="M35.9979 15.5862V4H24.4117M35.9979 4L22.4807 17.5172M4 24.4138V36H15.5862M4 36L17.5172 22.4827"/></svg>',
      feedback: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6.5 8.5h19v12h-11l-5.5 4v-4H6.5Z"/><path d="M11 13h10"/><path d="M11 16.5h6"/></svg>',
      outOfBox: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 13.5 16 9l8 4.5-8 4.5Z"/><path d="M8 13.5v8.5l8 4.5 8-4.5v-8.5"/><path d="M16 18v8.5"/><path d="M15 13 24 4"/><path d="M18.8 4H24v5.2"/></svg>',
      letGo: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="7" y="7" width="11" height="11" rx="2"/><rect x="11" y="11" width="11" height="11" rx="2"/><rect x="15" y="15" width="11" height="11" rx="2"/></svg>',
      usability: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="6" y="7" width="20" height="15" rx="2.5"/><path d="M11 26h10"/><path d="M16 22v4"/><path d="M12 13h8"/><path d="M12 17h5"/><path d="M23 10l3 3-3 3"/></svg>',
      outdatedUi: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="6" y="6" width="20" height="20" rx="3"/><path d="M6 12h20"/><path d="M11 10h.1"/><path d="M15 10h.1"/><path d="M11 17h10"/><path d="M11 21h6"/></svg>',
      growth: '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="10" cy="11" r="3"/><circle cx="22" cy="11" r="3"/><circle cx="16" cy="22" r="3"/><path d="M12.4 13.5 14.3 19"/><path d="M19.6 13.5 17.7 19"/><path d="M13 11h6"/></svg>'
    };

    return icons[name] || "";
  };

  const renderInsightItems = (items = []) => {
    if (!items.length) return "";

    return `
      <div class="campaign-insights-grid campaign-insights-grid--compact" aria-label="Findings">
        ${items
          .map(
            (item) => `
              <article class="campaign-insight-item">
                <span class="campaign-insight-icon">${renderInsightIcon(item.icon)}</span>
                ${item.text || item.textHtml ? `<h3>${escapeHtml(item.title)}</h3><p>${item.textHtml || escapeHtml(item.text)}</p>` : `<p>${escapeHtml(item.title)}</p>`}
              </article>
            `
          )
          .join("")}
      </div>
    `;
  };

  const renderBulletInsightItems = (items = []) => {
    if (!items.length) return "";

    return `
      <ul class="campaign-pain-points-list" aria-label="Pain points">
        ${items
          .map(
            (item) => `
              <li>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${item.textHtml || escapeHtml(item.text)}</p>
              </li>
            `
          )
          .join("")}
      </ul>
    `;
  };

  root.innerHTML = `
    <article class="campaign-case-study">
      <section class="campaign-case-hero ${options.heroClassName || ""}">
        <div>
          <h1>${withTitleKeeps(data.title)}</h1>
          <p>${withBreaks(data.blocks[1].text)}</p>
        </div>
        <figure>
          <img src="${localUrl(options.heroImage.src)}" alt="${escapeHtml(options.heroImage.alt)}"${options.heroImage.width ? ` width="${options.heroImage.width}" height="${options.heroImage.height}"` : ""}>
        </figure>
      </section>

      <section class="campaign-case-brief" aria-label="Project brief">
        ${options.briefItems
          .map(
            (item) => `
              <div>
                ${iconSvg[item.icon]}
                <h2>${escapeHtml(item.title)}</h2>
                <p>${withBreaks(item.text)}</p>
              </div>
            `
          )
          .join("")}
      </section>

      <section class="campaign-case-story">
        ${options.chapters
          .map(
            (chapter) => `
              <section class="campaign-story-section${chapter.insightItems ? " campaign-story-section--findings" : ""}${chapter.className ? ` ${chapter.className}` : ""}">
                <div class="campaign-story-copy">
                  ${chapter.title ? `<h2>${withInlineBreaks(chapter.title)}</h2>` : ""}
                  ${renderChapterText(chapter)}
                  ${renderChapterBullets(chapter.bullets)}
                  ${chapter.feedbackQuotes ? `<div class="campaign-feedback-quotes">${chapter.feedbackQuotes.map((quote) => `<blockquote>&ldquo;${escapeHtml(quote).replaceAll("\n", "<br>")}&rdquo;</blockquote>`).join("")}</div>` : ""}
                  ${chapter.underTextMedia ? renderMedia(chapter.underTextMedia) : chapter.mediaPlacement === "underText" ? renderMedia(chapter.media) : ""}
                  ${chapter.underMediaText ? `<div class="campaign-story-under-media-copy">${chapter.underMediaTitle ? `<h2>${escapeHtml(chapter.underMediaTitle)}</h2>` : ""}<p>${withBreaks(chapter.underMediaText)}</p></div>` : ""}
                </div>
                ${chapter.underTextMedia ? renderMedia(chapter.media, chapter.afterText) : chapter.mediaPlacement === "underText" ? "" : chapter.insightItems && chapter.listMode === "bullets" ? renderBulletInsightItems(chapter.insightItems) : chapter.insightItems ? renderInsightItems(chapter.insightItems) : chapter.mediaMode === "mockupPager" ? renderMockupPager(chapter.media) : renderMedia(chapter.media, chapter.afterText)}
                ${renderScreenGallery(chapter.screenGallery)}
              </section>
            `
          )
          .join("")}
      </section>

      <a class="up-link" href="#top">Up</a>
      ${renderMoreToExplore(data)}
    </article>
  `;

  setupScrollPlayVideos(root);
  setupMockupPagers(root);
  setupIbpPagers(root);
}

function setupIbpPagers(root = document) {
  root.querySelectorAll(".ibp-pager").forEach((pager) => {
    const imgs = [...pager.querySelectorAll(".ibp-pager-img")];
    const dots = [...pager.querySelectorAll(".ibp-pager-dot")];
    const caption = pager.querySelector(".ibp-pager-caption");
    const show = (i) => {
      const n = (i + imgs.length) % imgs.length;
      imgs.forEach((im, k) => { im.style.setProperty("--x", (k < n ? -28 : 28) + "px"); im.classList.toggle("is-active", k === n); im.setAttribute("aria-hidden", k === n ? "false" : "true"); });
      dots.forEach((d, k) => { if (k === n) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current"); });
      caption.textContent = imgs[n].dataset.caption;
      pager.dataset.index = String(n);
    };
    pager.querySelectorAll("[data-dir]").forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); show(Number(pager.dataset.index) + Number(b.dataset.dir)); }));
    dots.forEach((d) => d.addEventListener("click", () => show(Number(d.dataset.go))));
    pager.querySelector(".ibp-pager-view").addEventListener("click", () => { if (matchMedia("(max-width:700px)").matches) return; show(Number(pager.dataset.index) + 1); });
  });
}

function setupMockupPagers(root = document) {
  root.querySelectorAll(".account-mockup-pager").forEach((pager) => {
    const nextButton = pager.querySelector(".account-mockup-pager-arrow--next");
    const dots = [...pager.querySelectorAll(".account-mockup-pager-dot")];
    const track = pager.querySelector(".account-mockup-pager-track");
    if (!nextButton || !track) return;

    nextButton.addEventListener("click", () => {
      pager.dataset.page = pager.dataset.page === "1" ? "2" : "3";
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        pager.dataset.page = dot.dataset.targetPage || "1";
      });
    });

    track.addEventListener("transitionend", () => {
      if (pager.dataset.page !== "3") return;

      pager.classList.add("is-resetting");
      pager.dataset.page = "1";
      track.offsetHeight;
      requestAnimationFrame(() => {
        pager.classList.remove("is-resetting");
      });
    });
  });
}

function setupScrollPlayVideos(root = document) {
  const videos = [...root.querySelectorAll(".scroll-play-video")];
  if (!videos.length) return;

  /* "Reduce motion" on: the video waits on its first frame until the person presses play */
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    videos.forEach((videoElement) => { videoElement.autoplay = false; videoElement.pause(); });
    return;
  }

  const resetToStart = (videoElement) => {
    try {
      videoElement.currentTime = 0;
    } catch {
      videoElement.addEventListener("loadedmetadata", () => {
        videoElement.currentTime = 0;
      }, { once: true });
    }
  };

  videos.forEach((videoElement) => {
    videoElement.dataset.hasStarted = "false";
    videoElement.autoplay = false;
    videoElement.addEventListener("loadedmetadata", () => resetToStart(videoElement), { once: true });
    videoElement.addEventListener("canplay", () => {
      if (videoElement.dataset.hasStarted !== "true") resetToStart(videoElement);
    }, { once: true });
  });

  if (!("IntersectionObserver" in window)) {
    videos.forEach((videoElement) => {
      if (videoElement.dataset.hasStarted !== "true") {
        resetToStart(videoElement);
        videoElement.dataset.hasStarted = "true";
      }
      videoElement.play().catch(() => {});
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const videoElement = entry.target;

        if (entry.isIntersecting) {
          if (videoElement.dataset.hasStarted !== "true") {
            resetToStart(videoElement);
            videoElement.dataset.hasStarted = "true";
          }
          videoElement.play().catch(() => {});
        } else {
          videoElement.pause();
        }
      });
    },
    { threshold: 0.45 }
  );

  videos.forEach((videoElement) => observer.observe(videoElement));
}

renderCaseStudy();

const caseBackLink = document.querySelector(".case-back-link--page");
const caseHeroCopy = document.querySelector(".campaign-case-hero > div");

if (caseBackLink && caseHeroCopy) {
  caseHeroCopy.prepend(caseBackLink);
}

/* pictures: every picture loads as soon as the page does (no waiting until you scroll near it); the top picture goes first */
(function () {
  const hero = document.querySelector("#case-root .campaign-case-hero img");
  if (hero) hero.fetchPriority = "high";
})();

/* phones: tap a picture to open it on its own, full screen. Tap anywhere, the X or Escape closes it; pinch to zoom works inside. */
(function () {
  const root = document.getElementById("case-root");
  if (!root) return;
  const phone = matchMedia("(max-width:700px)");
  let box, view, closeBtn, opener;
  const build = () => {
    box = document.createElement("div");
    box.className = "case-lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Picture");
    box.hidden = true;
    box.innerHTML = '<button type="button" class="case-lightbox-x" aria-label="Close picture"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button><img alt="">';
    document.body.appendChild(box);
    view = box.querySelector("img");
    closeBtn = box.querySelector("button");
    box.addEventListener("click", close);
  };
  const open = (img) => {
    if (!box) build();
    opener = document.activeElement;
    view.src = img.currentSrc || img.src;
    view.alt = img.alt || "";
    box.setAttribute("aria-label", img.alt || "Picture");
    box.hidden = false;
    document.documentElement.classList.add("case-lightbox-open");
    requestAnimationFrame(() => box.classList.add("on"));
    closeBtn.focus({ preventScroll: true });
  };
  const close = () => {
    if (!box || box.hidden) return;
    box.classList.remove("on");
    box.hidden = true;
    view.removeAttribute("src");
    document.documentElement.classList.remove("case-lightbox-open");
    if (opener && opener.focus) opener.focus({ preventScroll: true });
  };
  root.addEventListener("click", (e) => {
    if (!phone.matches) return;
    const img = e.target.closest && e.target.closest("img");
    if (!img || !root.contains(img)) return;
    if (img.closest("a, button") || img.getAttribute("aria-hidden") === "true" || img.matches(".campaign-brief-icon")) return;
    if (img.classList.contains("ibp-pager-img") && !img.classList.contains("is-active")) return;
    open(img);
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  phone.addEventListener("change", close);
})();
