'use client'
import Link from 'next/link'
import styled from 'styled-components'

export default function Blog({ posts }) {
  return (
    <>
      <BlogMain>
        <div className="blog-container">
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/${post.slug}`} passHref>
                <div className="blog-posts">
                  <img
                    src={post.coverImage.url}
                    alt={post.title}
                    loading="lazy"
                    title={post.title}
                  />
                  <div className="blog-info">
                    <h2>{post.postTitle}</h2>
                    Read more
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </BlogMain>
    </>
  )
}

const BlogMain = styled.main`

  margin-top: 2rem;

  .blog-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1.2rem;
    margin-bottom: 4rem;
  }


  .blog-info {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .blog-info h2 {
    font-size: 1.2rem;
    margin: 1rem 0;
    text-align: left;
    color: #000;
  }

  a {
    text-decoration: none;
  }


  @media screen and (min-width: 768px) {
    .blog-info 
      h2 {
        font-size: 2rem;
      }
    .blog-posts {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    img {
      width: 95%;
      margin-right: 2rem;
    }
    
`
