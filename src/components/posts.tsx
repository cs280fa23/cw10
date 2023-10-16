import { posts } from "@/lib/data";

const Posts = () => {
  return (
    <div className="">
      {posts.map((post) => {
        return (
          <div className="p-4 border-b-4 border-slate-400" key={post.id}>
            {post.content}
          </div>
          // <Post post={post}/>
        );
      })}
    </div>
  );
};

export default Posts;
