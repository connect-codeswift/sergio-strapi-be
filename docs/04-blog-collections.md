# Blog Collection

```
title text(short) required
slug uid(title) required
description text(long) required
relation Blog Category (has many) Blogs
```

## Components (for Dynamic Zone)

- Go to (Content-Type Builder → Components → Create new component)

### Rich Text Block

- Category: blog
- Component name: Rich text block
- Field: body → Rich Text → Required
- "SAVE"

## Image Block

- Category: blog
- Component name: Image block
- Field 1: image → Media → Single → optional
- Field 2: caption → Text → optional
- "SAVE"

## Add Dynamic Zone to Blog

- Go back to Blog collection, click Add another field:
- Field name: contentBlocks
- Type: Dynamic Zone
- Components allowed:
  - blog.rich-text-block
  - blog.image-block
- Save → wait for rebuild.

## Enable Public API Access

- Go to (Settings → Users & Permissions → Roles → Public)
- Enable:
  - For Blog (find & findOne)
  - For Blog Category (find & findOne)
- Save

## Test It

- Create a category and a blog
- Add multiple content blocks in any order and test at:

```
http://localhost:1337/api/blogs?populate[contentBlocks][populate]=\*&populate=category
```
