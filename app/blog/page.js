import BlogSection from '../components/BlogSection'
import Button from '../components/Button'

const calendly = 'https://calendly.com/bowieseo/seo-consultation'

export const metadata = {
  title: 'Blog | Read How A Better Web Experience Can Help Grow Your Business',
  description:
    'Read posts and articles that can help you improve your website designs to attract more leads and customers to your business.',
  metadataBase: new URL('https://poolbuilderseoconsultant.com'),
  alternates: {
    canonical: 'https://poolbuilderseoconsultant.com/blog',
  },
}

async function getPosts() {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query Posts {
        posts (orderBy: createdAt_DESC){
          title
          slug
          postTitle
          coverImage {
            url
            width
            height
          }
          date
          excerpt
          content {
            html
          }
          author {
            name
            bio
            photo {
              url
              width
              height
            }
          }
          relatedPosts {
            html
          }
        }
      }
      
        `,
    }),
  })
  const json = await response.json()

  return json.data.posts
}

export default async function Blog() {
  const posts = await getPosts()
  return (
    <>
      <section>
        <div className="hero">
          <div className="container">
            <h1 className="title">
              SEO Blog for Pool Builders and Service Companies
            </h1>
            <div className="subtext">
              <p>
                Free and insightful pro marketing tips for pool builders and
                service companies.
              </p>
              <a href={calendly}>
                <Button>Book Your Free SEO Consultation!</Button>
              </a>
            </div>
          </div>
        </div>
        <BlogSection posts={posts} />
      </section>
    </>
  )
}
