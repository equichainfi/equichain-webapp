import { relations } from "drizzle-orm";
import { Comment, CommentLike, Like, Post, User, Wallet } from ".";

export const userRelations = relations(User, ({ one, many }) => ({
    posts: many(Post),
    comments: many(Comment),
    likes: many(Like),
    commentLikes: many(CommentLike),
    wallet: one(Wallet, {
        fields: [User.id],
        references: [Wallet.userId],
    }),
}));

export const postRelations = relations(Post, ({ one, many }) => ({
    author: one(User, {
        fields: [Post.userId],
        references: [User.id],
    }),
    comments: many(Comment),
    likes: many(Like),
}));

export const commentsRelations = relations(Comment, ({ one, many }) => ({
    post: one(Post, {
        fields: [Comment.postId],
        references: [Post.id],
    }),
    author: one(User, {
        fields: [Comment.userId],
        references: [User.id],
    }),
    likes: many(CommentLike),
}));

export const postLikesRelations = relations(Like, ({ one }) => ({
    post: one(Post, {
        fields: [Like.postId],
        references: [Post.id],
    }),
    author: one(User, {
        fields: [Like.userId],
        references: [User.id],
    }),
}));

export const commentLikesRelations = relations(CommentLike, ({ one }) => ({
    comment: one(Comment, {
        fields: [CommentLike.commentId],
        references: [Comment.id],
    }),
    user: one(User, {
        fields: [CommentLike.userId],
        references: [User.id],
    }),
}));
