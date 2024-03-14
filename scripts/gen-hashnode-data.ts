import axios from "axios";
import fs from "fs";
import readingTime from "reading-time";

const HASHNODE_DATA_FILE_PATH = "./data/hashnode.json";
const HASHNODE_API_URL = "https://gql.hashnode.com/";
const HASHNODE_USERNAME = "AnishDe12020";

const main = async () => {
  const query = `
  query($username: String!, $page: Int!, $pageSize: Int!) {
    user(username: $username) {
    posts(page: $page, pageSize: $pageSize, sortBy: DATE_PUBLISHED_DESC) {
      nodes {
        publication{
          url
        }
        id
        slug 
        title
        brief
        coverImage {
          url
        }
        publishedAt
        content {
          markdown
        }
      }
    }
  }
}
`;

  const posts = [];
  let domain: string;
  let didNotGetData = true;

  for (let page = 1; didNotGetData; page++) {
    try {
      const res = await axios.post(
        HASHNODE_API_URL,
        JSON.stringify({
          query,
          variables: {
            username: HASHNODE_USERNAME,
            page,
            pageSize: 10,
          },
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const {
        data: { data },
      } = res;

      if (data.user.posts.nodes.length === 0) {
        didNotGetData = false;
        break;
      } else {
        const originalPostLists = [];
        data.user.posts.nodes.forEach(post => {
          domain = post.publication.url;
          // Transform and push updated graph response to posts
          const originalPostObject = {};
          originalPostObject["_id"] = post.id;
          originalPostObject["slug"] = post.slug;
          originalPostObject["title"] = post.title;
          originalPostObject["brief"] = post.brief;
          originalPostObject["coverImage"] = post.coverImage.url;
          originalPostObject["dateAdded"] = post.publishedAt;
          originalPostObject["contentMarkdown"] = post.content.markdown;
          originalPostLists.push(originalPostObject);
        });
        posts.push(...originalPostLists);
      }
    } catch (error) {
      console.error(error.response.data.errors);
      return;
    }
  }

  const parsedPosts = posts.map(post => {
    const { contentMarkdown, ...postWithoutContent } = post;
    const rTime = readingTime(contentMarkdown);
    const wordCount = contentMarkdown.split(/\s+/gu).length;
    return {
      ...postWithoutContent,
      readingTime: rTime,
      wordCount,
    };
  });

  fs.writeFileSync(
    HASHNODE_DATA_FILE_PATH,
    JSON.stringify({ posts: parsedPosts, domain })
  );
};

main();
