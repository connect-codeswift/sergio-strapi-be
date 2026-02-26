# Strapi Collections

## Blog Category

```
name text(short) required
slug uid(name) required
description text(long) optional
```

## Content Management

- Add the first entry
- Add name, auto slug and description
- Save and publish or publish directly

## Test It

- Create a blog category

```
http://localhost:1337/api/blog-category?populate[contentBlocks][populate]=\*&populate=category test-category
```
