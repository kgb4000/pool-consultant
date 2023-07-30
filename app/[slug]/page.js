import Link from 'next/link'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { ShareBtn } from '../components/Share-Btns'
import Bio from '../components/Bio'
import BlogContent from '../components/BlogContent'

async function getPost(slug) {
  const res = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query Post($slug: String!) {
          post(where: {slug: $slug}) {
        title
        date
        slug
        postTitle
        excerpt
        coverImage {
          url
          width
          height
        }
        content {
          raw
        }
        author {
          name
          bio
          photo {
            url
            height
            width
          }
        }
        relatedPosts {
          raw
        }
          }
        }`,
      variables: {
        slug: slug,
      },
    }),
  })
  const data = await res.json()
  return data.data.post
}

export async function generateMetadata({ params }) {
  const postData = await getPost(params.slug)
  return {
    title: postData.title,
    description: postData.excerpt,
  }
}

export default async function Post({ params }) {
  const postData = await getPost(params.slug)
  return (
    <>
      <BlogContent>
        <div className="blog-container author-info">
          <h1>{postData.postTitle}</h1>
          <img
            src={postData.coverImage.url}
            alt={postData.title}
            title={postData.title}
            loading="lazy"
          />
          <ShareBtn
            shareLink={`https://poolbuilderseoconsultant.com/${postData.slug}`}
          />
          <p>
            Written -{' '}
            {new Date(postData.date).toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>

          <RichText content={postData.content.raw} />
          <ShareBtn
            shareLink={`https://poolbuilderseoconsultant.com/${postData.slug}`}
          />
          <Bio
            authorImg={postData.author.photo.url}
            authorBio={postData.author.bio}
          />

          <div className="related-posts">
            {postData.relatedPosts && (
              <>
                <h2>Other Interesting Posts</h2>
                <RichText content={postData.relatedPosts.raw} />
              </>
            )}
          </div>
          <p>
            <Link href="/blog">Back to blog &rarr;</Link>
          </p>
        </div>
      </BlogContent>
    </>
  )
}
