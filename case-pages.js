const img = (src, alt = "") => ({ type: "image", src, alt });
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
      p("Campagins are a collabarative effort (digital marketing, content writers, designers)\n\nCustomers need “Siba-Lemesiba”, after 10 years, the idea bank is done\n\nPain-points:\n\nno centralized place to see the big picture\nconsidering needs of different departments\npredicting trends over the year\nmeasuring success and failure\n\nNo standard tools:\nGoogle Calendar & Analytics, spreadsheets + docs\n\nCurrent campaign creation practices: past experience, competitive analysis, guessing\n\nCampaign timeline depends on its type. Can be planned ahead (e.g. Black Friday) or dynamic"),
      h("Wireframes"),
      p("During the research, I realized that the project is actually divided into two parts. The first part is the area where the user builds his board, and the second part is the board itself and its use."),
      img("assets/wix/035-Frame-143417697.jpg", "Frame 143417697.jpg"),
      p("The calendar-building concept is to simulate a cart page in an eCommerce website since this is our customer's world. The user chooses the types of campaigns he wants to see on his board and chooses with whom he wants to share the board. Everything is shown in a summary on the side. Finally, he reached the board and saw all his choices that were made earlier."),
      img("assets/wix/036-Group-143417714-1-.png", "Group 143417714 (1).png"),
      h("Final Delivery"),
      p("Once the wireframe phase was done, I moved on to design the final screens. My goal was to create a visual identity that’s aligned with the brand’s values and message. Also, I’ve took a deep dive into my catalog of references for inspiration. Here’s a short video of the feature:"),
      img("assets/wix/037-fa557c_087e3fdf9ab748139465d49d589a4080f001.jpg"),
      h("What I Learned"),
      p("This process has taught me a lot. I gained a better understanding of how to reach out to customers and how to ask questions in a way that I'll get an honest answer, an answer that will help me in the next steps. I also became better at planning and working on complex flows."),
      img("assets/wix/038-Group-143417713.png", "Group 143417713.png")
    ],
    next: { title: "Creating a product from scratch: Intent-Based Promotions", href: "intent-based-promotions/", image: "assets/Home page/Home_page_Image_2_intent.png" },
    explore: [
      { title: "Creating a product from scratch: Intent-Based Promotions", href: "intent-based-promotions/", image: "assets/Home page/Home_page_Image_2_intent.png" },
      { title: "Building a data visualization tool: Journey Flow", href: "journey-flow/", image: "assets/flow/more_to_explore.jpg" }
    ]
  },
  intent: {
    title: "Creating a product from scratch: Intent-Based Promotions",
    blocks: [
      h("Summary"),
      p("Intent-Based Promotions is a platform that offers individualized discounts for users based on their real-time buying intent. I led the product's design from conception to its adoption by over a hundred customers."),
      h("Background"),
      p("At Namogoo, I worked on a product that offers individualized promotions to eCommerce site visitors based on real-time buying intent. Promotions are defined using campaigns, which determine the type of offers and their duration."),
      h("The Problem"),
      p("Allocating budgets for promotions is a difficult task for eCommerce website managers, leading to a waste of money. They often offer the same discount to all customers on the site, which is strategically incorrect."),
      h("The Solution"),
      p("Develop a platform that can present the appropriate promotion at the right time based on a user's intent to purchase."),
      h("My Role"),
      p("Intent-Based Promotions (IBP) is a product that I led at Namogoo. I was responsible for the UI/UX of IBP since its conception. From initial efforts, including research on existing solutions, prototyping, and building wireframes, to finalizing a design that maximizes user experience and appeal. The effort required close collaboration with product managers and developers."),
      h("Speaking to users"),
      p("I went out and interviewed 6 users who\ncreate and manage eCommerce\npromotion campaigns.\n\nHearing their perspectives was important because it gave me a deeper understanding of their workflows, decision-making, and the challenges they face when creating\u00a0promotions."),
      img("assets/Intent-Based Promotions/Kickoff.png?v=20260513", "Kickoff"),
      h("What Did I Find Out?"),
      p("The flow of creating a campaign should be very quick, intuitive, simple, and easy. The user should be able to create a campaign in a few minutes.\n\nA first impression is a matter of seconds — and if the user does not have a positive impression, they will abandon the product and look elsewhere.\n\nThe flow should be divided into steps. This will help us create a user-friendly product that doesn’t overwhelm our users with options — each step will be focused on one main task.\n\nNo matter how many prepared templates we will offer, we need the ability to customize each template to the user’s needs\n\nThe flow should be quick, intuitive, simple, and easy\n\nThe flow should be divided into steps\n\nA first impression is a matter of seconds\n\nAbility to customize each template to the user’s needs"),
      h("Competitor Analysis"),
      p("I gathered information about the competitors in order to define what exists today in the market and also understand which features should be part of the core experience. I analyzed the platforms, understood what is essential or what was missing. As you can see in the table below, part of the research compares each competitor’s ability."),
      img("assets/Intent-Based Promotions/Competitor Analysis.jpg", "Competitor Analysis"),
      h("User Stories"),
      p("It was important to understand what exactly users would want to accomplish when using the 'Create Campaign'. I created user stories which gave me a clear vision of what our goals for this design must accomplish. They were organized from high, medium to low priority."),
      img("assets/Intent-Based Promotions/User Stories.png?v=20260513-2", "User Stories"),
      h("Sketches"),
      p("My next step was to summarize the information I gathered from users, competitors, product, marketing, and sales.\n\nI had a lot of questions: How should I split the campaign creation flow into steps? What should the order of those steps be? How many decisions should users make in each step? Should they first see our templates, or start by defining their campaign goal or incentive type?\n\nFollowing a conversation with the PM, I started putting everything I knew on the page. It helped me focus and better understand the product capabilities:"),
      img("assets/Intent-Based Promotions/Sketches.png", "Sketches"),
      h("Update the user flow"),
      p("After the first release, I mapped the user flow to understand where users were slowing down.\n\nWe found that choosing a campaign goal, promotion type, and brand color as separate steps added decisions without enough value. Instead, we combined them into the templates step.\n\nThis reduced unnecessary steps and made the flow faster and more intuitive."),
      img("assets/Intent-Based Promotions/User Journey.png?v=20260513-1359", "User Journey"),
      h("Refining the creation flow"),
      p("With the insights from the first release, I revisited the structure of the campaign creation experience. I reduced it to three clear steps: Templates, Settings, and Studio.\n\nI chose a layout that makes better use of the available space. We also expanded template customization, giving users more control to create promotions that matched their brand."),
      img("assets/Intent-Based Promotions/Wireframes.png", "Wireframes"),
      h("Finalizing Design"),
      p("With the flow and structure defined, I moved forward and refined the whole experience. The final flow is organized into three steps: Templates, Settings, and Studio.\n\nUsers have more freedom to customize each template, including control over every color, unrestricted text, the promotion's background on their website, and more.\n\nThe video below shows the final Campaign Creation, the core of the Intent-Based Promotions product."),
      video("assets/Intent-Based Promotions/Create a campaign.mp4?v=lossless-vfr-remux-20260727", "Create Campaign walkthrough"),
      h("Impact"),
      p("After the second release, we saw a reduction in the time it took to create a campaign and an increase in the number of active campaigns. We also received positive feedback from users, some of which you can find below.")
    ],
    next: { title: "Building a data visualization tool: Journey Flow", href: "journey-flow/", image: "assets/flow/more_to_explore.jpg" },
    explore: [
      { title: "The design process of a new feature: Campaign Board", href: "campaigns-board/", image: "assets/Home page/Home_page_Image_1_campaign_board.jpg" },
      { title: "Building a data visualization tool: Journey Flow", href: "journey-flow/", image: "assets/flow/more_to_explore.jpg" }
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
      h("Mapping Out The Flow"),
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
    next: { title: "Simple management of data: Activations", href: "activations/", image: "assets/Home page/Home_page_Image_4_activation.jpg?v=20260522-1053" },
    explore: [
      { title: "Creating a product from scratch: Intent-Based Promotions", href: "intent-based-promotions/", image: "assets/Home page/Home_page_Image_2_intent.png" },
      { title: "Simple management of data: Activations", href: "activations/", image: "assets/Home page/Home_page_Image_4_activation.jpg?v=20260522-1053" }
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
      h("Mapping Out The Flow"),
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
    next: { title: "The design process of a new feature: Campaign Board", href: "campaigns-board/", image: "assets/Home page/Home_page_Image_1_campaign_board.jpg" },
    explore: [
      { title: "Building a data visualization tool: Journey Flow", href: "journey-flow/", image: "assets/flow/more_to_explore.jpg" },
      { title: "The design process of a new feature: Campaign Board", href: "campaigns-board/", image: "assets/Home page/Home_page_Image_1_campaign_board.jpg" }
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
      p("Create a clearer Account Pane that helps users quickly understand what their account represents and continue their investigation with confidence."),
      h("My Role"),
      p("I worked on this project as a Product Designer at Varonis. I was responsible for the UX and UI of the Account Pane redesign, from understanding the existing experience and defining the information hierarchy to creating the updated interface."),
      h("Overview of the previous Account Pane"),
      p("My first step was reviewing the previous Account Pane to understand its structure, hierarchy, and how users moved through it. I focused on identifying where key information was hard to scan. \n\nAs part of the redesign requirements, the pane needed to shift from a single user perspective to an account level perspective."),
      h("Understanding\nusers' needs"),
      p("I spoke with stakeholders across the product to better understand users’ needs, pain points, and expectations. These conversations helped me identify what was missing from the pane, which information users needed most, and where the existing experience made their work harder."),
      h("Competitor Analysis"),
      p("I compared similar account and user pages to understand how other products present this type of information. The research helped me identify patterns, understand what makes these pages easier to scan, and see where the Account Pane could become clearer and more useful."),
      h("First Mockups"),
      p("The first round of mock-ups stayed close to the original Account Pane. At this stage, the changes were relatively small: merging two steps into one, removing the flags option because it was no longer relevant, and aligning the design with other areas of the product."),
      h("Finalizing Design"),
      p("The next step was to take everything I had learned and apply it to the existing pane. The general information tab became an overview tab with more relevant data, including the option to see all related accounts, since one user can have multiple accounts. I also added clearer sections for statistics, recent activities organized by priority, and membership information related to the account.")
    ],
    next: { title: "The design process of a new feature: Campaign Board", href: "campaigns-board/", image: "assets/Home page/Home_page_Image_1_campaign_board.jpg" },
    explore: [
      { title: "Simple management of data: Activations", href: "activations/", image: "assets/Home page/Home_page_Image_4_activation.jpg?v=20260522-1053" },
      { title: "Building a data visualization tool: Journey Flow", href: "journey-flow/", image: "assets/flow/more_to_explore.jpg" }
    ]
  }
};

const escapeHtml = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const withBreaks = (value) =>
  escapeHtml(value)
    .replace("manage eCommerce promotion\u00a0campaigns.", '<span class="text-keep">manage&nbsp;eCommerce&nbsp;promotion&nbsp;campaigns.</span>')
    .split("\n\n")
    .map((part) => part.replaceAll("\n", "<br>"))
    .join("</p><p>");

const withInlineBreaks = (value) =>
  escapeHtml(value).replaceAll("\n", "<br>");

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
                <img src="${localUrl(project.image)}" alt="${escapeHtml(project.title)}">
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
        return `<figure><img src="${localUrl(block.src)}" alt="${escapeHtml(block.alt)}"></figure>`;
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
    return `<figure${classAttribute}><img src="${localUrl(block.src)}" alt="${escapeHtml(block.alt)}"></figure>`;
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
          <img src="${localUrl("assets/campaign board/header_image.jpg")}" alt="Campaign Board calendar interface">
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
      className: "intent-speaking-users-section",
      title: data.blocks[10].text,
      text: data.blocks[11].text,
    media: [
      { ...img("assets/Intent-Based Promotions/Screenshot 2026-07-29 at 10.03.46 AM.png", "User research findings"), caption: "Affinity mapping" }
    ],
    underTextMedia: [
      { ...img("assets/Intent-Based Promotions/Screenshot 2026-07-29 at 9.52.08 AM.png", "Interview protocol"), caption: "Interview Protocol" }
    ]
    },
    {
      title: data.blocks[13].text,
      bullets: [
        "The flow of creating a campaign should be very quick, intuitive, simple, and easy. The user should be able to create a campaign in a few minutes.",
        "A first impression is a matter of seconds. If the user doesn’t have a positive impression, they will abandon the product and look elsewhere.",
        "The flow should be divided into steps. This will help us create a user-friendly product that doesn’t overwhelm our users with options, each step will be focused on one main task.",
        "No matter how many prepared templates we will offer, we need the ability to customize each template to the user’s needs."
      ],
      insightItems: [
        {
          icon: "speed",
          title: "The flow should be quick, intuitive, simple, and easy."
        },
        {
          icon: "impression",
          title: "A first impression is a matter of seconds."
        },
        {
          icon: "steps",
          title: "The flow should be divided into steps."
        },
        {
          icon: "customize",
          title: "Ability to customize each template to the user’s needs."
        }
      ]
    },
    {
      className: "campaign-story-section--competitor-analysis",
      title: data.blocks[15].text,
      text: data.blocks[16].text,
      media: [data.blocks[17]]
    },
    {
      className: "campaign-story-section--copy-left intent-user-stories-section",
      title: data.blocks[18].text,
      text: data.blocks[19].text,
      media: [data.blocks[20]]
    },
    {
      className: "campaign-story-section--sketches-stack intent-sketches-section",
      title: data.blocks[21].text,
      text: data.blocks[22].text,
      media: [
        img("assets/Intent-Based Promotions/Sketches_1.png", "Sketches 1"),
        img("assets/Intent-Based Promotions/Sketches_2.png", "Sketches 2"),
        { ...img("assets/Intent-Based Promotions/Screenshot 2026-07-29 at 11.00.13 AM.png", "First release campaign creation flow"), caption: "More sketches" }
      ],
      mediaPlacement: "underText"
    },
    {
      className: "intent-first-release-section campaign-story-section--copy-left",
      title: "First Release",
      text: "The campaign creation flow was built around short, focused steps. Users started by selecting their goal, promotion type, and brand color, then saw all templates in that color, making it easier to imagine each promotion on their own site.\n\nAs we observed users moving back and forth between steps, we realized the flow was not saving as much time as it could. In later iterations, we combined several steps to create a more fluid campaign-building\u00a0experience.\n\nMany users saved campaigns as drafts instead of publishing them. One reason was limited control over the promotion design. In later iterations, we added more customization capabilities, allowing users to adjust colors, sizes, and fonts to create promotions that better matched their brand.",
      media: [
        { ...img("assets/Intent-Based Promotions/Screenshot 2026-07-29 at 11.59.44 AM.png", "First release campaign creation flow"), caption: "First Release" }
      ]
    },
    {
      className: "campaign-story-section--sketches-stack intent-user-flow-section",
      title: data.blocks[24].text,
      text: data.blocks[25].text,
      media: [
        img("assets/Intent-Based Promotions/screens/Frame 143417726.png?v=20260729-1208", "Updated campaign creation user flow")
      ]
    },
    {
      className: "campaign-story-section--sketches-stack intent-wireframes-section",
      title: data.blocks[27].text,
      text: data.blocks[28].text,
      media: [
        img("assets/Intent-Based Promotions/screens/image_1.png", "Templates step wireframe"),
        img("assets/Intent-Based Promotions/screens/image_2.png", "Studio step wireframe")
      ],
      mediaPlacement: "underText"
    },
    {
      className: "campaign-story-section--sketches-stack campaign-story-section--final-delivery",
      title: data.blocks[30].text,
      text: data.blocks[31].text,
      media: [data.blocks[32]],
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
    },
    {
      className: "campaign-story-section--sketches-stack",
      title: data.blocks[33].text,
      textWithEmphasis: {
        before: "A month after the redesign launched, we saw\u00a0a\u00a0",
        emphasis: "decrease in the time it took to create a campaign and an increase in the number of active campaigns",
        after: ". We also received positive feedback from users, some of which you can find\u00a0below."
      },
      feedbackQuotes: [
        "I love this! It looks great and it’s so much easier to\u00a0navigate.",
        "It is pretty much everything I could ask for when creating a campaign.",
        "Creating a promotion feels much easier now. I can really create what I have in mind.",
        "I have much more control over my promotions,\nwithout making the process complicated."
      ]
    }
  ];

  renderStructuredCase(root, data, {
    briefItems,
    chapters,
    heroImage: img("assets/Intent-Based Promotions/header_image.jpg", "Intent-Based Promotions interface mockup"),
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
      media: [video("assets/flow/record.mov?v=20260521", "Journey Flow final interaction recording", "video/mp4")]
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
    heroImage: img("assets/flow/header_image.jpg", "Journey Flow data visualization mockup"),
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
      media: [img("assets/Account Pane/Competitor Analysis.png?v=20260527-competitor-analysis", "Competitor analysis examples")]
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
    heroImage: img("assets/Account Pane/header_image.jpg?v=account-pane-header-v4", "Account Pane interface mockup"),
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
    return `<figure><img src="${localUrl(block.src)}" alt="${escapeHtml(block.alt)}">${block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : ""}</figure>`;
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
                    .map((image) => `<img src="${localUrl(image.src)}" alt="${escapeHtml(image.alt)}">`)
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

    return `
      <div class="campaign-story-media account-mockup-pager" data-page="1">
        <figure class="account-mockup-pager-frame">
          <div class="account-mockup-pager-viewport">
            <div class="account-mockup-pager-track">
              <img class="account-mockup-pager-image" src="${localUrl(firstMockup.src)}" alt="${escapeHtml(firstMockup.alt)}">
              <img class="account-mockup-pager-image" src="${localUrl(secondMockup.src)}" alt="${escapeHtml(secondMockup.alt)}">
              <img class="account-mockup-pager-image" src="${localUrl(firstMockup.src)}" alt="">
            </div>
          </div>
          <button class="account-mockup-pager-arrow account-mockup-pager-arrow--next" type="button" aria-label="Show next mockup">
            <svg viewBox="0 0 12 22" aria-hidden="true">
              <defs>
                <linearGradient id="account-arrow-gradient" x1="0" x2="12" y1="0" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#ff6b4a"/>
                  <stop offset="0.44" stop-color="#f65ca8"/>
                  <stop offset="0.78" stop-color="#1f6fff"/>
                  <stop offset="1" stop-color="#0f43b5"/>
                </linearGradient>
              </defs>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.499999 1.16599L10.1878 11L0.5 20.834L1.15609 21.5L11.5 11L1.15609 0.5L0.499999 1.16599Z" stroke-width="0.3"/>
            </svg>
          </button>
        </figure>
        <div class="account-mockup-pager-dots" aria-label="Choose mockup image">
          <button class="account-mockup-pager-dot account-mockup-pager-dot--first" type="button" data-target-page="1" aria-label="Show first mockup"></button>
          <button class="account-mockup-pager-dot account-mockup-pager-dot--second" type="button" data-target-page="2" aria-label="Show second mockup"></button>
        </div>
      </div>
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
          <img src="${localUrl(options.heroImage.src)}" alt="${escapeHtml(options.heroImage.alt)}">
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
