import { AuthLayout } from "@/features/auth/routes/auth-layout";
import { LoginRoute } from "@/features/auth/routes/login";
import { RegisterRoute } from "@/features/auth/routes/register";
import { PostRoute } from "@/features/posts/routes/post";
import { PostsRoute } from "@/features/posts/routes/posts";
import { UserRoute } from "@/features/users/routes/user";
import { EditUserRoute } from "@/features/users/routes/edit-user";
import { Layout } from "@/routes/layout";
import { Protected } from "@/routes/protected";
import { Public } from "@/routes/public";
import { createBrowserRouter } from "react-router-dom";
import { FollowersFollowingsRoute } from "@/features/users/routes/followers-followings";
import { NotificationsRoute } from "@/features/notifications/routes/notifications";

export const router = createBrowserRouter([
  {
    element: <Public />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/register",
            element: <RegisterRoute />
          },
          {
            path: "/login",
            element: <LoginRoute />
          },
        ]
      }
    ]
  },
  {
    element: <Protected />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/users/:userId",
            children: [
              {
                path: "",
                element: <UserRoute />,
              },
              {
                path: "edit",
                element: <EditUserRoute />
              },
              {
                path: "followers",
                element: <FollowersFollowingsRoute />
              },
              {
                path: "followings",
                element: <FollowersFollowingsRoute />
              },
              {
                path: "notifications",
                element: <NotificationsRoute />
              }
            ]
          },
          {
            path: "/posts/:postId",
            element: <PostRoute />
          },
          {
            path: "/",
            element: <PostsRoute />
          },
        ]
      }
    ]
  }
])
