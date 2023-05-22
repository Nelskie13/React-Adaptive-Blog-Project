import { createContext } from "react";
// Create a context to store the posts and favoritePosts state to avoid props drilling
export const PostsContext = createContext();

export default PostsContext;
