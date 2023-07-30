'use client'
import Button from './Button'

const calendly = 'https://calendly.com/bowieseo/seo-consultation'

const Footer = () => {
  return (
    <>
      <section>
        <div className="small-container">
          <h2 className="title">Book Your Free Strategy Call</h2>
          <p className="subtext">
            I'll analyze your site and give you feedback ASAP to drive better
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
        <p>
          Copyright &copy; {new Date().getFullYear()} Pool Builder SEO
          Consultant.
        </p>
      </footer>
    </>
  )
}

export default Footer
