import { relations } from "drizzle-orm";
import { Account, Comment, CommentLike, Like, Post, User } from ".";

export const userRelations = relations(User, ({ many }) => ({
    accounts: many(Account),
}));

export const accountRelations = relations(Account, ({ one, many }) => ({
    user: one(User, {
        fields: [Account.id],
        references: [User.id],
    }),
    posts: many(Post),
    comments: many(Comment),
    likes: many(Like),
    commentLikes: many(CommentLike),
}));

export const postRelations = relations(Post, ({ one, many }) => ({
    author: one(Account, {
        fields: [Post.authorId],
        references: [Account.id],
    }),
    comments: many(Comment),
    likes: many(Like),
}));

export const commentsRelations = relations(Comment, ({ one, many }) => ({
    post: one(Post, {
        fields: [Comment.postId],
        references: [Post.id],
    }),
    author: one(Account, {
        fields: [Comment.authorId],
        references: [Account.id],
    }),
    likes: many(CommentLike),
}));

export const postLikesRelations = relations(Like, ({ one }) => ({
    post: one(Post, {
        fields: [Like.postId],
        references: [Post.id],
    }),
    author: one(Account, {
        fields: [Like.accountId],
        references: [Account.id],
    }),
}));

export const commentLikesRelations = relations(CommentLike, ({ one }) => ({
    comment: one(Comment, {
        fields: [CommentLike.commentId],
        references: [Comment.id],
    }),
    user: one(Account, {
        fields: [CommentLike.accountId],
        references: [Account.id],
    }),
}));
