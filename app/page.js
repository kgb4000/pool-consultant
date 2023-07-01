'use client'
import Link from 'next/link'
import styled from 'styled-components'
import Button from './/components/Button'

const calendly = 'https://calendly.com/bowieseo/seo-consultation'

export default function Home() {
  return (
    <main>
      <header>
        <div className="container">
          <img
            src="/images/pool-builder-seo.webp"
            className="logo"
            alt="Pool Builder SEO Consultant"
            title="Pool Builder SEO Consultant"
            width="250px"
            height="auto"
          />
          <nav>
            <ul className="nav">
              <li>
                <Link href="#services">SEO Services</Link>
              </li>
              <li>
                <Link href="#me">Why Me</Link>
              </li>
              <li>
                <Link href="#faq">FAQs</Link>
              </li>
              <li>
                <Link href={calendly}>Book a Consultation!</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="hero">
        <div className="container">
          <h1 className="title">
            Hello, I’m the #1 Pool Builder SEO Consultant
          </h1>
          <div className="subtext">
            <p>
              I help pool builders and pool contractors get more traffic, leads,
              and sales with search engine optimization.
            </p>
            <a href={calendly}>
              <Button>Book Your SEO Consultation!</Button>
            </a>
            <p>Let's have a Zoom call and I'll share my screen!</p>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <h2 className="title">
            5 Reasons to Work With an SEO Consultant for Pool Builders and
            Contractors
          </h2>
          <p className="subtext">
            Here are some reasons you should work with a Pool Builder SEO
            specialist
          </p>
          <Reason>
            <img
              src="/images/competitors-winning.png"
              className="grid-item-1"
              alt="Competitors winning."
              title="Competitors winning."
              loading="lazy"
            />
            <div className="grid-item-2">
              <h3>#1. Other Pool Companies are Already Doing SEO</h3>
              <p>
                Every time you look for your services, you see your competitors
                on the first page.
              </p>
              <p>Don't believe me?</p>
              <p>
                Search Google for one of your services and see who comes up
                first, second, or third.
              </p>
              <p>It's not by chance or by luck.</p>
              <p>They are doing SEO.</p>
              <p>
                They know how important it is to be easy to find online, so they
                use SEO strategies to make themselves more visible, attract more
                customers, and grow their businesses.
              </p>
              <p>
                If you don't do SEO for your business, you're falling behind and
                losing customers to your competitors.
              </p>
              <p>
                Customers are looking for you, but they are finding your
                competitors instead.
              </p>
              <p>
                Each day without an SEO plan gives competitors a chance to
                improve their online presence and reputation.
              </p>
              <p>
                Also, the longer you wait to start SEO, the more ground you'll
                need to make up.
              </p>
              <p>
                SEO is a long-term plan, so don't expect to see results right
                away.
              </p>
              <p>
                If your competitors are doing SEO and you're not, it'll be more
                than just losing customers. It'll be an ongoing loss of market
                share that will become harder to reclaim.
              </p>
              <p>Now let's talk about the second reason.</p>
            </div>
          </Reason>
          <Reason>
            <img
              src="/images/competition.png"
              className="grid-item-2"
              alt="Gain a competitive edge."
              title="Gain a competitive edge."
              loading="lazy"
            />
            <div className="grid-item-1">
              <h3>
                #2. You Gain a Competitive Advantage Over Other Pool Companies
              </h3>
              <p>
                Putting money into SEO gives your business an edge over your
                competition and helps you stand out in a crowded market.
              </p>
              <p>
                A good SEO strategy raises your online visibility and ensures
                that your business appears near the top of local search results.
                When you appear at the top, it makes it easier for people to
                find your pool business website, which leads to more traffic,
                leads, and ultimately more sales.
              </p>
              <p>SEO also makes your site easier to use.</p>
              <p>
                It makes it more likely that people who visit your site will
                become customers. SEO can also make your business a leader in
                its field, which can help customers trust you more. It's also
                important to note that SEO's benefits last for a long time,
                which makes it a long-term competitive advantage.
              </p>
              <p>
                In a nutshell, SEO isn't just about keeping up with your
                competitors; it's about doing better than them and getting a
                more significant share of your target market.
              </p>
              <p>This brings us to the third reason.</p>
            </div>
          </Reason>
          <Reason>
            <img
              src="/images/rankings.png"
              className="grid-item-1"
              alt="I know what I'm doing."
              title="I know what I'm doing."
              loading="lazy"
            />
            <div className="grid-item-2">
              <h3>#3. More People Will See Your Business on Google</h3>
              <p>
                When your business shows up on the first page of Google, your
                web presence grows.
              </p>
              <p>More people will see your business and website.</p>
              <p>
                When your business is on the first page, it's like being on the
                main street of a busy city.
              </p>
              <p>More people will see it.</p>
              <p>
                More people will visit your website if more people know about
                your business.
              </p>
              <p>
                And if more people visit your website, you're more likely to get
                more leads, customers, and sales.
              </p>
              <p>This brings us to the fourth point.</p>
            </div>
          </Reason>
          <Reason>
            <img
              src="/images/leads.png"
              className="grid-item-2"
              alt="Get more leads."
              title="Get more leads."
              loading="lazy"
            />
            <div className="grid-item-1">
              <h3>#4. You Get Leads All Day, Everyday</h3>
              <p>Your website will work around the clock.</p>
              <p>
                Unlike traditional business models, a well-optimized website is
                like a salesperson employed 24/7 to bring in new customers.
              </p>
              <p>
                This persistent lead generation is made possible because SEO
                improves your visibility on search engines, making your business
                easily discoverable by people searching for the products or
                services you offer. These are not just any leads but quality
                leads, as search engine users are typically actively seeking
                solutions, making them more likely to convert.
              </p>
              <p>Also, SEO leads are not limited by location. </p>
              <p>Your business can get customers worldwide.</p>
              <p>
                SEO isn't just a marketing strategy; it's also an essential
                business tool that ensures your brand and products are visible
                and brings in leads every hour of every day.
              </p>
              <p>
                This leads us to our fifth reason why doing SEO is so important.
              </p>
            </div>
          </Reason>
          <Reason>
            <img
              src="/images/reduce-cost.png"
              className="grid-item-1"
              alt="Reduce ad costs."
              title="Reduce ad costs."
              loading="lazy"
            />
            <div className="grid-item-2">
              <h3>#5. SEO is Cheaper than Social Media</h3>
              <p>
                Unlike social media platforms, where you often have to keep
                spending money on ads to reach more people, SEO doesn't charge
                extra per click or impression to bring in organic traffic.
              </p>
              <p>SEO also has effects that last for a longer time.</p>
              <p>
                A well-ranked page can keep getting visitors for months or even
                years, while a post on social media might be forgotten in just a
                few hours or days.
              </p>
              <p>
                SEO also usually leads to higher-quality traffic since people
                who find your site through search engines actively look for your
                products or services, making them more likely to buy from you.
              </p>
              <p>
                SEO and social media have their uses, but high-quality,
                long-term traffic from SEO usually gives a better return on
                investment.
              </p>
              <p>
                In the end, social media can be a helpful part of your marketing
                mix, but SEO is often the more cost-effective long-term growth
                strategy.
              </p>
            </div>
          </Reason>
          <div className="center">
            <a href={calendly}>
              <Button>Book Your SEO Consultation!</Button>
            </a>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="container">
          <h2 className="title">My Swimming Pool Builder SEO Services</h2>
          <p className="subtext">
            Here's what I DO Swimming Pool Contractors to succeed online
          </p>
          <Services>
            <Service>
              <img
                src="/images/one-on-one-consulting.png"
                className="icon"
                alt="One on one consulting."
                loading="lazy"
              />
              <div>
                <h3>1-on-1 SEO Consulting</h3>
                <p>
                  Need some help to get real results from search engine
                  optimization?
                </p>
                <p>Use the help of a professional.</p>
                <p>
                  Work one-on-one with a top SEO expert for pool builders, and
                  I'll help you get to the top of the search results in your
                  city.
                </p>
                <p>
                  On a Zoom call, we'll analyze your website together to
                  discover ways to get you to the top of search results.
                </p>
                <p>NO B.S.</p>
              </div>
            </Service>
            <Service>
              <img
                src="/images/local-seo.png"
                className="icon"
                alt="Local SEO service."
                title="Local SEO service."
                loading="lazy"
              />
              <div>
                <h3>Local SEO Service</h3>
                <p>Show up when it really counts the most.</p>
                <p>
                  That's when people are searching for to get a pool or get pool
                  maintenance services.
                </p>
                <p>
                  I'll transform your pool company website into a machine that
                  brings in leads. You can show up in the map pack and the
                  organic search results, giving you more digital space than
                  your competitors.
                </p>
                <p>
                  It doesn't matter if you run a business in Annapolis, MD,
                  McLean, VA, or Houston, TX.
                </p>
                <p>
                  No matter if you run a one-person swimming pool company or a
                  pool construction company with a hundred employees, I can help
                  you.
                </p>
                <p>
                  You can get the best leads and customers in your industry by
                  dominating the local search results for your city.
                </p>
              </div>
            </Service>
            <Service>
              <img
                src="/images/keyword-research.png"
                className="icon"
                alt="Link building service."
                title="Link building service."
                loading="lazy"
              />
              <div>
                <h3>Keyword Research Service</h3>
                <p>
                  Finding the best and most profitable keywords for your
                  business takes time and years of experience. I find the best
                  keywords that attract the best clients and customers.
                </p>
                <p>Those that spend money with your business.</p>
              </div>
            </Service>
            <Service>
              <img
                src="/images/seo-audit.png"
                className="icon"
                alt="SEO audit service."
                title="SEO audit service."
                loading="lazy"
              />
              <div>
                <h3>SEO Audit Service</h3>
                <p>
                  It's been years, and you have yet to figure out why your
                  business doesn't appear in the search results when you search
                  for your services.
                </p>
                <p>I can help you fix that.</p>
                <p>
                  Find out what's stopping your website and your business from
                  showing up in the search results. Get an SEO audit and
                  discover what's holding you back and how to fix it so that you
                  can get seen online.
                </p>
              </div>
            </Service>
          </Services>
          <Services>
            <Service>
              <img
                src="/images/link-building.png"
                className="icon"
                alt="Link building service."
                title="Link building service."
                loading="lazy"
              />
              <div>
                <h3>Link Building Service</h3>
                <p>
                  Does your website have backlinks? Do you know what there are?
                  If you don't have backlinks, chances are you won't rank high
                  on Google.
                </p>
                <p>
                  Backlinks are the trust factor that Google uses to rank your
                  site.
                </p>
                <p>
                  I'll find and get you the best backlinks that help your
                  business gain trust with my safe link-building methods.
                </p>
              </div>
            </Service>
            <Service>
              <img
                src="/images/national.png"
                className="icon"
                alt="Link building service."
                title="Link building service."
                loading="lazy"
              />
              <div>
                <h3>National SEO Service</h3>
                <p>
                  Are you targeting customers across the entire U.S.? I can do
                  that too.
                </p>
                <p>
                  I transform Google into your primary customer acquisition
                  channel. I do this through a potent combination of an
                  impactful organic SEO strategy, meticulous technical SEO
                  (including user experience and site speed optimization),
                  compelling content marketing, and strategic link building.
                </p>
                <p>
                  The result of this comprehensive approach is an exponential
                  boost in your organic website traffic and a substantial
                  improvement in keyword rankings. Simply put, our national SEO
                  strategies are designed not just to meet your expectations,
                  but to surpass them, driving your business forward in the vast
                  digital landscape.
                </p>
              </div>
            </Service>
          </Services>
          <div className="center">
            <a href={calendly}>
              <Button>Get SEO Help Today</Button>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="title">
            With a Huge Pool of SEO Companies, Why Should You Work With Me?
          </h2>
          <Deliverables>
            <img
              src="/images/results.png"
              alt="I focus on results."
              title="I focus on results."
              loading="lazy"
            />
            <div>
              <h3>#1. I Focus on Your Results</h3>
              <p>
                As an SEO specialist, my primary focus is on delivering tangible
                results that drive your business forward.
              </p>
              <p>
                I understand that SEO is not just about rankings and traffic,
                but about generating leads, increasing sales, and growing your
                bottom line. My strategies are designed with this end goal in
                mind, seeking not just to improve your website's visibility, but
                to ensure this visibility leads to conversions.
              </p>
              <p>
                I monitor and analyze a variety of metrics to gauge the
                effectiveness of my work, adjusting strategies as needed to
                maximize results. Regular reports keep you informed about these
                results, clearly illustrating the return on your investment.
              </p>
              <p>
                I'm committed to holding myself accountable for your success and
                will not rest until your SEO campaign delivers the impact it
                should.
              </p>
            </div>
          </Deliverables>
          <Deliverables>
            <img
              src="/images/seo-campaign.png"
              className="grid-item-1"
              alt="I build custom SEO campaigns"
              title="I build custom SEO campaigns."
              loading="lazy"
            />
            <div className="grid-item-2">
              <h3>#2. I Build Custom SEO Campaigns</h3>
              <p>
                I specialize in creating tailor-made SEO campaigns that cater to
                the unique needs of each business.
              </p>
              <p>
                Instead of one-size-fits-all approaches, I believe in curating
                strategies that reflect your specific goals, industry, and
                target audience.
              </p>
              <p>
                By thoroughly understanding your business and its online
                objectives, I ensure that every aspect of the campaign, from
                keyword selection to content creation, is customized to maximize
                your online visibility. I also focus on ongoing optimization,
                routinely assessing and refining the strategy based on analytics
                and performance data.
              </p>
              <p>
                This personalized approach allows me to drive more organic
                traffic to your website and improve its search engine ranking.
              </p>
            </div>
          </Deliverables>
          <Deliverables>
            <img
              src="/images/seo-expert.png"
              alt="I know what I'm doing."
              title="I know what I'm doing."
              loading="lazy"
            />
            <div>
              <h3>#3. I Know What I'm Doing</h3>
              <p>
                My expertise is not based on theoretical knowledge alone, but
                also on years of practical experience helping businesses improve
                their online visibility and grow. I've honed my skills across a
                variety of industries, and have a proven track record of
                delivering results.
              </p>
              <p>
                My approach to SEO is holistic, encompassing everything from
                keyword research and content creation, to technical SEO and link
                building. I keep up-to-date with the latest SEO trends and
                algorithm changes, ensuring my strategies are always effective
                and relevant. I also understand the importance of clear
                communication and collaboration with my clients, working closely
                with them to achieve their goals. When you choose to work with
                me, you're choosing a professional who knows the ins and outs of
                SEO, and how to make it work for your business.
              </p>
            </div>
          </Deliverables>
          <Deliverables>
            <img
              src="/images/transperancy.png"
              className="grid-item-1"
              alt="I am 100% transparent."
              title="I am 100% transparent."
              loading="lazy"
            />
            <div className="grid-item-2">
              <h3>#4. I am 100% Transparent</h3>
              <p>
                I firmly believe in keeping clients fully informed about their
                SEO campaigns at every stage, explaining not just what I'm
                doing, but why I'm doing it. I provide regular, detailed reports
                showcasing the results of my work, including key performance
                indicators, metrics, and achieved milestones.
              </p>
              <p>
                I am also upfront about any challenges encountered and how I
                plan to overcome them. In every communication, my goal is to
                make the complex world of SEO understandable and accessible.
                This way, you're not just a spectator, but a knowledgeable
                participant in your own SEO strategy. Being 100% transparent
                means building trust and fostering a collaborative, honest
                relationship with my clients.
              </p>
            </div>
          </Deliverables>
          <Deliverables>
            <img
              src="/images/never-work-with-competiton.png"
              alt="I never work with your competiton."
              title="I never work with your competiton."
              loading="lazy"
            />
            <div>
              <h3>#5. I Never Work With Your Competition</h3>
              <p>
                My policy is simple and straightforward: I never work with your
                competition.
              </p>
              <p>
                I strongly believe in providing my clients with exclusive
                services, and this means dedicating my skills and resources to a
                single business per industry in a given market area. This
                principle ensures that I am fully invested in your success,
                without any conflicting interests.
              </p>
              <p>
                It also guarantees that the strategies, insights, and
                competitive advantages I develop for your business are unique to
                you and not shared with your competitors.
              </p>
              <p>
                I am committed to this principle of exclusivity as it enables me
                to focus completely on helping your business dominate your
                industry's search engine results.
              </p>
            </div>
          </Deliverables>
          <div className="center">
            <a href={calendly}>
              <Button>Book Your Strategy Call Today!</Button>
            </a>
          </div>
        </div>
      </section>
      <section id="faq">
        <div className="small-container">
          <h2 className="title">
            Frequently Asked Questions about SEO for Swimming Pool Contractors
          </h2>
          <div>
            <h3>How much does SEO cost for a business for Pool Builders?</h3>
            <p>
              It can cost between $1500 and $5000 for SEO services for your
              swimming pool company.
            </p>
            <p>But how much is it costing you not doing SEO?</p>
            <p>Let's see</p>
            <ul className="faq-list">
              <li>
                <h4>Low Online Visibility and Presence</h4>
                <p>
                  Without SEO, your website will have a harder time appearing in
                  search results, leading to fewer visitors and, ultimately,
                  fewer conversions.
                </p>
              </li>
              <li>
                <h4>Decreased Credibility</h4>
                <p>
                  SEO also involves making sure your website is easily navigable
                  and user-friendly. If your site is hard to use, visitors may
                  perceive your business as less credible.
                </p>
              </li>
              <li>
                <h4>Missed Customer Acquisition Opportunities</h4>
                <p>
                  People use search engines to find solutions to their problems.
                  If your business isn't visible when potential customers are
                  searching for what you offer, you're missing out on a major
                  customer acquisition channel.
                </p>
              </li>
              <li>
                <h4>Lower ROI</h4>
                <p>
                  Compared to paid advertising, SEO typically provides a much
                  higher return on investment in the long run. While SEO
                  requires ongoing effort, the organic traffic it brings often
                  converts better than traffic from paid ads.
                </p>
              </li>
              <li>
                <h4>Competitive Disadvantage</h4>
                <p>
                  If your competitors are leveraging SEO and you're not, they'll
                  likely win the organic search visibility, resulting in more
                  traffic and potential revenue for them instead of you.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3>Should you work with a large digital agency?</h3>
            <p>You can, be you may experience the following:</p>
            <ul className="faq-list">
              <li>
                <h4>Less Personal Attention</h4>
                <p>
                  With larger SEO agencies, your account might be one among
                  hundreds or even thousands. As a result, you might not receive
                  the personalized service or attention to detail that a smaller
                  agency or freelancer could provide. This could lead to your
                  business's unique needs being overlooked or not addressed.
                </p>
              </li>
              <li>
                <h4>Risk of Being 'Just a Number'</h4>
                <p>
                  In a large agency, there's a risk of feeling like just another
                  client on a list, rather than a valued partner. This can
                  impact the level of personal care and urgency applied to your
                  business.
                </p>
              </li>
              <li>
                <h4>High Employee Turnover</h4>
                <p>
                  Large agencies often have higher employee turnover rates,
                  which can impact the consistency and quality of your SEO
                  services. If your account manager leaves, for example, it
                  could take time for their replacement to get up to speed on
                  your account, resulting in potential setbacks.
                </p>
              </li>
              <li>
                <h4>Cost</h4>
                <p>
                  Larger SEO agencies often have higher overhead costs, which
                  can translate into higher prices for their clients. If you're
                  a small business or startup, these costs might be beyond your
                  budget.
                </p>
              </li>
              <li>
                <h4>Longer Response Times</h4>
                <p>
                  With many clients to serve, larger agencies may have slower
                  response times to questions, concerns, or requests. You might
                  have to wait longer for replies or action on your account.
                </p>
              </li>
              <li>
                <h4>Standardized Packages</h4>
                <p>
                  Larger SEO agencies often work off of standardized packages
                  and strategies, which might not be the best fit for every
                  business. Your company's unique needs might require a more
                  tailored approach.
                </p>
              </li>
              <li>
                <h4>Pricey Services</h4>
                <p>
                  Large SEO agencies often have higher overhead costs due to
                  their size, sophisticated tools, and wide range of staff
                  specializations. These costs can translate into higher prices
                  for their services compared to smaller agencies or
                  freelancers.
                </p>
              </li>
              <li>
                <h4>No Transparency</h4>
                <p>
                  Sometimes, large SEO agencies can be less transparent about
                  their strategies and techniques. This can make it difficult
                  for you to understand what work is being done and how
                  effective it is.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3>Can You Guarantee #1 Rankings in Google?</h3>
            <p>No.</p>
            <p>No one can guarantee you the #1 rankings on Google.</p>
          </div>
        </div>
      </section>
      <section id="me" className="hero">
        <div className="small-container">
          <h2 className="title">
            Meet the Pool Builder SEO Expert Ready to Get You More Traffic and
            Earn More Money for Your Business
          </h2>
          <img
            src="/images/kgb4000-circle.jpg"
            className="avatar"
            alt="Pool Builder SEO Consultant - Kester Browne."
            title="Pool Builder SEO Consultant - Kester Browne."
            loading="lazy"
          />
          <div>
            <p>
              Greetings, I'm Kester, an experienced search engine optimization
              specialist with over five years of dedicated expertise.
            </p>
            <p>
              Throughout my career, I have achieved remarkable success by
              consistently placing businesses on the coveted first page and
              within the top 5 positions of search engine results.
            </p>
            <p>
              What sets me apart is not only my extensive knowledge and skills
              but also my unwavering commitment to continuous learning.
            </p>
            <p>
              I stay updated with the latest trends and techniques in the
              ever-evolving world of SEO, ensuring that my clients receive the
              most effective strategies to enhance their digital presence.
            </p>
            <p>
              Transparency and open communication are the cornerstones of my
              approach. I strongly believe in fostering a relationship built on
              trust by keeping my clients informed every step of the way.
            </p>
            <p>
              By demystifying the intricacies of SEO, I empower my clients to
              make well-informed decisions regarding their online growth.
            </p>
            <p>
              Education is key, and I take great pleasure in educating my
              clients about the processes and techniques employed in search
              engine optimization.
            </p>
            <p>
              By equipping them with knowledge, I enable them to actively
              participate in the optimization journey and understand the
              rationale behind each strategic decision.
            </p>
            <p>
              Choose me as your SEO partner, and together we will embark on a
              transformative journey to elevate your digital presence and
              achieve remarkable results.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="small-container">
          <h2 className="title">Book Your Strategy Call</h2>
          <p className="subtext">
            I'll analyze your website and give you feedback ASAP to drive better
            SEO results (fast). Book your SEO consultation now:
          </p>
          <div className="center">
            <a href={calendly}>
              <Button>Book Your SEO Consultation Now</Button>
            </a>
          </div>
        </div>
      </section>
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} Bowie SEO</p>
      </footer>
    </main>
  )
}

const Reason = styled.div`
  margin: 2rem 0;
  img {
    max-width: 15rem;
    margin: 4rem auto;
  }
  @media screen and (min-width: 900px) {
    img {
      max-width: 20rem;
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 40px;
  }

  .grid-item-1 {
    grid-column: 2;
    grid-row: 1;
  }

  .grid-item-2 {
    grid-column: 1;
  }
`

const Deliverables = styled.div`
  margin: 2rem 0;
  img {
    max-width: 15rem;
    margin: 4rem auto;
  }
  @media screen and (min-width: 900px) {
    img {
      max-width: 20rem;
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 40px;
  }

  .grid-item-1 {
    grid-column: 2;
    grid-row: 1;
  }

  .grid-item-2 {
    grid-column: 1;
  }
`

const Services = styled.div`
  margin: 2rem 0;
  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`

const Service = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 80px;
    height: 80px;
    margin-top: 1rem;
    margin-right: 2rem;
  }
`
