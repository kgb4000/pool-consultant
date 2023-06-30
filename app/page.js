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
              <h3>#1. Your Competitors are Already Doing SEO</h3>
              <p>You see it every time you search for your services.</p>
              <p>Your competitors are on the first page.</p>
              <p>Don't believe me?</p>
              <p>
                Search for one of your services and see who comes up first,
                second, or third. It's not by luck or by accident.
              </p>
              <p>
                They understand the immense value of being easily discoverable
                online and are using SEO strategies to improve their visibility,
                attract more customers, and grow their businesses.
              </p>
              <p>
                If your business is not doing SEO, you are falling behind and
                losing potential customers to competitors.
              </p>
              <p>Your customers are finding your competitors instead of you.</p>
              <p>
                Every day that passes without an SEO strategy is an opportunity
                for competitors to boost their online presence and reputation.
              </p>
              <p>
                Also, the longer you wait to start SEO, the more ground you'll
                have to make up.
              </p>
              <p>
                Remember, SEO is a long-term strategy, and immediate results are
                rare.
              </p>
              <p>
                If your competitors are doing SEO and you're not, it's more than
                just a potential loss of customers. It's an ongoing loss of
                market share that becomes increasingly difficult to reclaim.
              </p>
              <p>This brings us to the second reason.</p>
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
              <h3>#2. You Gain a Competitive advantage</h3>
              <p>
                Investing in SEO gives your business a competitive edge, helping
                you stand out in a crowded swimming pool marketplace.
              </p>
              <p>
                A well-executed SEO strategy improves your online visibility,
                ensuring your business appears prominently in local search
                results when potential customers are looking for your services.
                This increased visibility directly contributes to higher website
                traffic, leads, and, ultimately, more sales.
              </p>
              <p>
                SEO also enhances the user experience on your site, making it
                more likely that site visitors will become customers.
                Additionally, SEO can position your business as an industry
                leader, boosting customer credibility. It's also worth noting
                that the benefits of SEO are long-term, making it a sustainable
                competitive advantage.
              </p>
              <p>
                In a nutshell, SEO isn't just about keeping pace with your
                competitors; it's about outperforming them and capturing a
                larger share of your target market.
              </p>
              <p>This lead to the third reason.</p>
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
                As your business appears on the first page of Google, your web
                presence increases, ensuring that a larger audience sees your
                company and website.
              </p>
              <p>
                Being on the first page is like being on the main street of a
                busy city - more people will pass by your business. The more
                people who see your business, the more likely they will visit
                your website. And when more people visit your website, you have
                a better chance of getting more customers.
              </p>
              <p>This lead to the fourth reason.</p>
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
              <p>Your website will work for you around the clock.</p>
              <p>
                Unlike traditional business models, a well-optimized website is
                like a 24/7 salesperson, constantly attracting potential
                customers.
              </p>
              <p>
                This persistent lead generation is made possible because SEO
                improves your visibility on search engines, making your business
                easily discoverable by people searching for the products or
                services you offer. These are not just any leads but quality
                leads, as search engine users are typically actively seeking
                solutions, making them more likely to convert.
              </p>
              <p>
                Furthermore, the leads generated from SEO are not limited by
                geography; your business can attract local, national, and even
                global customers. SEO, therefore, is not just a marketing
                strategy but an essential business tool that ensures your brand
                and offerings are visible and generating leads every hour of
                every day.
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
              <h3>#5. It’s More Cost-effective than Social Media</h3>
              <p>
                Unlike social media platforms, where ongoing ad spending is
                often necessary to reach a larger audience, the organic traffic
                generated through SEO comes at no additional per-click or
                per-impression cost.
              </p>
              <p>Additionally, the effects of SEO are longer-lasting.</p>
              <p>
                A well-ranked page can continue to attract traffic for months or
                even years, while a social media post might lose visibility
                within hours or days.
              </p>
              <p>
                SEO also typically results in higher quality traffic, as people
                who find your site via search engines are actively looking for
                the products or services you offer, making them more likely to
                convert.
              </p>
              <p>
                While both SEO and social media have their place, the long-term,
                high-quality traffic driven by SEO often delivers a better
                return on investment.
              </p>
              <p>
                In essence, while social media can be a practical part of your
                marketing mix, SEO is often the more cost-effective strategy for
                sustainable, long-term growth.
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
            Here's what I give Swimming Pool Contractors to succeed online
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
                  Need some help with search engine optimization to get actual
                  results?
                </p>
                <p>Work with a professional.</p>
                <p>
                  Work with a top SEO specialist one-on-one, and let's get you
                  to the top of the search results.
                </p>
                <p>
                  We'll go through your website together on a Zoom call and
                  identify things to get you to the top of the search results.
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
                <p>
                  Show up when it matters the most. And that's when people are
                  searching for your services.
                </p>
                <p>
                  I will turn your website into a lead-generating machine. You
                  can appear in the map pack and the organic search and occupy
                  more digital real estate than your competitors.
                </p>
                <p>
                  It doesn't matter if you operate in Annapolis, MD or McLean
                  Va.
                </p>
                <p>
                  Whether you're a solo swimming pool construction business
                  owner or you have one hundred people working in your company.
                </p>
                <p>
                  You can dominate the B'more local search results in your
                  industry and attract the best leads and customers.
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
              Hello, I’m Kester, and I have been doing search engine
              optimization for over five years.
            </p>
            <p>
              I have ranked businesses on the first page and top 5 positions.
            </p>
            <p>
              My expertise, long-standing commitment to learning, and
              results-oriented approach set me apart. That makes me the optimal
              choice for clients who want to grow their digital presence.
            </p>
            <p>
              I believe in transparency, and constant communication. I also
              belive in educating my clients about the processes and techniques.
            </p>
            <p>I want to empowering them to make informed decisions.</p>
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
