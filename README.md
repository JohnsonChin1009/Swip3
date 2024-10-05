<a id="readme-top"></a>

<br />
<div align="center">
  <a href="https://swip3.pages.dev/">
    <img src="/landing-page/public/logo.svg" alt="Logo">
  </a>

<h3 align="center">Web3 Talent Matcher</h3>

  <p align="center">
    A decentralized platform to match web3 job seekers with opportunities through a swipe card like gamification experience, enhanced by AI-powered association algorithms, smart contract for salary renegotiation and verifiable skill NFTs. Also, we introduce Rate My Web3 Profile, a social trend that gamifies profile optimization and helps users highlight their contributions to the Web3 space.
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#proof-of-deployment">Proof of Deployment</a></li>
    <li><a href="#problem-statement">Problem Statement</a></li>
    <li><a href="#technology-stack">Technology Stack</a></li>
    <li><a href="#association-algorithms">Association Algorithms</a></li>
    <li><a href="#product-and-feature-description">Product and Feature Description</a></li>
    <li><a href="#target-market-tam-sam-som">Target Market (TAM, SAM, SOM)</a></li>
    <li><a href="#business-strategy-our-package">Business Strategy (Our Package)</a></li>
    <li><a href="#why-invest-in-us">Why Invest in Us</a></li>
  </ol>
</details>

## 🤸🏽 Proof of Deployment
<h2>✅ Scroll</h2>
<img src="model/scroll.png" alt="Scroll Logo" width="100" />

<ul>
  <li><strong>Smart Contract Address:</strong> 0x49e00C20c277bE3920AE14335066A451E14d7134</li>
  <li><a href="https://sepolia.scrollscan.com/address/0x49e00C20c277bE3920AE14335066A451E14d7134">View on Sepolia Scroll</a></li>
</ul>

<hr>

<h2>✅ ORA</h2>
<img src="model/ora.jpeg" alt="ORA Logo" width="100" />

<ul>
  <li><strong>Smart Contract Address:</strong> 0xa03943826246955af459280d84bdfbea66f7e42c
</li>
  <li><a href="https://sepolia.scrollscan.com/address/0xa03943826246955af459280d84bdfbea66f7e42c">View on Sepolia Scroll</a></li>
</ul>

<hr>

## Problem Statement

The Web3 job market continues to experience robust growth in 2024, fueled by the expanding adoption of decentralized technologies and innovations such as DeFi, NFTs, and blockchain applications. Below are key statistics and trends shaping the Web3 job landscape:

### Market Growth

- The Web3 industry is projected to grow at a **CAGR of 41.2%**, reaching a market size of **$3.1 trillion** by 2028. This growth is driven by substantial investment in blockchain technology, decentralized finance (DeFi), and NFTs.

### Job Postings Surge

- In the first half of 2024, Web3 job postings increased by nearly **20%**, with significant hiring surges from companies like **Coinbase** and **Animoca Brands**. This growth is partly driven by regulatory developments such as Bitcoin ETF approvals.

### In-Demand Roles

- Key roles in the Web3 ecosystem, such as **Web3 Developers**, **UX/UI Designers**, and **Community Managers**, are highly sought after. Salaries for these roles range from **$60,000 to $150,000** annually, depending on experience and responsibilities.

### Global Talent Distribution

- **The U.S., India, and China** together represent 50% of the global Web3 talent pool, with emerging hubs in **Brazil, Canada**, and **Singapore**. **Berlin** has also become a major European center for blockchain startups.

These trends highlight the Web3 job market as one of the fastest-growing sectors, offering excellent career opportunities for both technical and non-technical professionals in the decentralized space.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technology Stack

Our platform leverages cutting-edge technologies to ensure a seamless, secure, and intuitive experience for both recruiters and job seekers. 

- **Frontend**: Next.js, shadcn, MagicUi, TailwindCSS
- **Backend**: Solidity, Python, Hardhat, Scroll Sepholia, EtherJS, ORA, Llama3
- **Blockchain**: Ethereum (Scroll Sepolia Testnet)
- **Authentication**: WorldCoin, MetaMask (WorldID)
- **API**: EtherJS
- **Large Language Model**: Llama3, Stable Diffusion
- **AI Algorithms**: Custom association algorithms for job and candidate matching

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Association Algorithms

The core of the Web3 Talent Matcher platform is our custom association algorithms designed to enhance the matching experience:

### Use Case: Swip3 Skillset Recommendations

**Swip3** aims to match Web 3 researchers and developers with companies seeking talent in the blockchain and decentralized technology space. By applying **Market Basket Analysis** to past successful hires and candidate skillsets, we can identify **frequent patterns** in skill combinations that are valued by recruiters.

For example:
- Candidates proficient in **Solidity** are often skilled in **Ethereum** development.
- Those with experience in **Smart Contracts** often have expertise in building **dApps**.
- Developers familiar with **Zero-Knowledge Proofs** may also have experience in **Blockchain Security**.

These relationships can guide recruiters to select candidates with the most **comprehensive** and **complementary** skillsets, even if those skills were not explicitly mentioned in the job description.

### 3. Definition of Algorithm

**Market Basket Analysis** is powered by **association rule learning**, a rule-based machine learning technique that identifies relationships between items in a dataset. In the case of **Swip3**, the "items" are **skills** or **competencies** possessed by candidates. The objective is to find **strong associations** between these skillsets, which can then be used to make more informed recruitment decisions.

The most commonly used algorithm for this analysis is the **Apriori Algorithm**, which finds frequent itemsets (skill combinations) and generates **association rules** that predict the likelihood of one skill leading to another. This is based on two key metrics:


#### 3.1. Support
- **Definition**: Support measures how frequently a combination of skillsets (itemset) appears in the dataset. For example, if **Solidity** and **Smart Contracts** frequently co-occur in the profiles of successful candidates, this combination will have high support.
  
$$
Support(X \Rightarrow Y) = \frac{|X \cup Y|}{N}
$$

Where \( X \) and \( Y \) represent skillsets, and \( N \) is the total number of candidate profiles analyzed.


#### 3.2. Confidence
- **Definition**: Confidence measures the strength of the association between skillsets. It tells us how likely it is that a candidate who possesses one skill will also possess the related skill.
  
$$
Confidence(X \Rightarrow Y) = \frac{|X \cap Y|}{|X|}
$$

For example, if a candidate is skilled in **Solidity**, how likely are they to also have experience with **Ethereum**?


#### 3.3. Lift
- **Definition**: Lift measures how much more likely two skillsets are to appear together than if they were independent of each other. A Lift greater than 1 indicates a strong association.
  
$$
Lift(X \Rightarrow Y) = \frac{Confidence(X \Rightarrow Y)}{Support(Y)}
$$

For example, if candidates proficient in **Blockchain Security** are much more likely to also know **Zero-Knowledge Proofs** than by chance, the Lift value will be significantly greater than 1.

#### 3.4 Conviction
The conviction of a rule is defined as

$$
conv(X \Rightarrow Y) = \frac{1 - supp(Y)}{1 - conf(X \Rightarrow Y)}
$$

It can be interpreted as the ratio of the expected frequency that X occurs without Y if X and Y were independent divided by the observed frequency of incorrect predictions. A high value means that the consequent depends strongly on the antecedent.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Product and Feature Description

**Web3 Talent Matcher** provides a fast and fun job-matching experience that focuses on cultural fit and verifiable skills through the following features:

- **Swipe-to-Match Interface**: 
  - For recruiters: Swipe to find candidates based on skill sets and vibe, with a flip-card to reveal more information.
  - For job seekers: Swipe through company profiles based on benefits and vibe, with detailed insights available upon flipping the card.
  
- **Skill Hub and Verifiable NFTs**:
  - Users can mint NFTs that represent their verifiable achievements (e.g., hackathon wins).
  - This serves as a decentralized resume where achievements are validated on the blockchain.

- **Verification (KYB/KYC)**:
  - Primary verification through zkLogin, preserving privacy while proving identity via Twitter.
  - Secondary verification through DeBank integration to build trust and credibility.

- **Social Trend Tools**:
  - Rate My Web3 Profile: AI-powered tool to evaluate Twitter and GitHub profiles, generating shareable stats.
  - Share Web3 Stats: Users can export their web3 contribution stats as a shareable image to social media platforms.

- **Chat & Dashboard**:
  - Telegram integration for quick communication.
  - A personalized dashboard to manage job applications, medium posts, GitHub contributions, and governance proposals.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Target Market

- **Total Addressable Market (TAM)**:
  The global Web3 market is projected to grow from $3.19 billion in 2024 to over $81.5 billion by 2030, with a compound annual growth rate (CAGR) of around 43.7% during this period. This includes roles in decentralized finance (DeFi), NFTs, blockchain development, and decentralized applications (dApps) across industries like finance, healthcare, and entertainment.
  
- **Serviceable Available Market (SAM)**:
  Focusing on Web3 professionals such as blockchain developers, smart contract engineers, and project managers, the SAM is a significant part of the broader Web3 market. Estimates suggest that blockchain and cryptocurrency jobs alone could account for more than 50% of the Web3 market. For example, in 2023, blockchain developer roles in the U.S. saw average annual salaries ranging from $124,000 to $185,000, underscoring the increasing demand​
  
- **Serviceable Obtainable Market (SOM)**:
  For SOM, which is more specific to Web3 startups, DAOs, and innovative companies, North America dominates with approximately 34% of the global Web3 market, followed closely by Europe at around 24%, and Asia-Pacific contributing 18%​. Targeting these regions provides a strong foundation, with high concentrations of Web3 adoption and skilled professionals.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Business Strategy (Our Package)

We offer a range of tailored subscription packages to enhance both job seekers' and recruiters' experiences in the Web3 talent market:

- **🌟 SeekerPro – For Job Seekers**

    **Unlock endless opportunities and stand out from the crowd.**

    - **Unlimited Swipes**: Search for your ideal Web3 job with no daily swipe limits.
    - **Priority Visibility**: Get noticed first by top recruiters in your field.
    - **Advanced Matching**: Utilize our exclusive algorithm to get matched with jobs that align with your skills, experience, and passion.

    **Pricing**:
    - Monthly: 0.05 ETH / $15
    - Yearly: 0.5 ETH / $140

- **🏅 RecruiterPrime – For Recruiters**

    **Streamline your hiring process and discover top Web3 talent.**

    - **Unlimited Candidate Swipes**: No restrictions on searching for the perfect hire.
    - **Featured Listings**: Highlight your job posts for maximum visibility.
    - **Advanced Matching Algorithm**: Get matched with candidates based on culture fit, experience, and potential.

    **Pricing**:
    - Monthly: 0.1 ETH / $30
    - Yearly: 1 ETH / $290

- **⚡ SwipeBoosts – Enhance Your Profile Visibility**

    **Boost your profile and accelerate your job search success.**

    - **Resume Boost**: Place your profile at the top of search results for one day.
    - **Skill Badges & NFTs**: Display your Web3 achievements with verified badges and NFTs.

    **Pricing**:
    - Resume Boost: 0.01 ETH / $5
    - Badges: 0.02 ETH / $7
    - Custom NFTs: Starting from 0.03 ETH

- **🔓 Unlock Additional Swipes**

    **Don’t let swipe limits slow you down!**

    - Unlock 50 extra swipes with a one-time purchase.

    **Pricing**:
    - 0.01 ETH / $3


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Why Invest in Us ?

- **Rapidly Growing Market**: The web3 job market is experiencing explosive growth, with a high demand for skilled professionals in the blockchain space. The decentralized job market is projected to grow at over 40% annually, with countless untapped opportunities ahead.
- **Unique Value Proposition**: We’re not just another job platform. Our gamified job matching system goes beyond resumes, using AI-powered algorithms, smart contract for salary renegotiation and blockchain-based NFTs to verify skills and prioritize culture fit. This unique combination not only streamlines hiring but also revolutionizes how talent and companies connect, ensuring the right match at every level.
- **Scalable Technology**: Built on a modern stack with scalability in mind, we are prepared to grow as the demand for decentralized job marketplaces expands.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



