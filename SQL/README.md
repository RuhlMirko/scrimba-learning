# SQL Practice (Scrimba Follow-Along)

This folder contains SQL exercises completed while following Scrimba's SQL course.
The dataset is based on a **car dealership** domain, and each exercise is run against a local in-memory database.

## What's Inside

- `multiples/`: queries and exercises from one section of the course
- `part2/`: queries and exercises from another section of the course

Each section has the same working structure:

- `create-tables.sql` - schema setup
- `insert-cars-data.sql` - seed data
- `crud-operations.sql` - data manipulation practice
- `query.sql` - query to run and inspect
- `index.js` - script that loads SQL files and prints query output

## How It Works

Each `index.js` script uses `@electric-sql/pglite` to:

1. create an in-memory database
2. execute table creation SQL
3. insert seed data
4. run CRUD operations
5. execute the query in `query.sql`
6. print results with `console.table`

## Run a Section

From the repository root:

```bash
cd SQL/multiples
npm install
node index.js
```

Or for part 2:

```bash
cd SQL/part2
npm install
node index.js
```

## Editing Exercises

- Update `query.sql` to practice SELECT logic.
- Update `crud-operations.sql` to practice INSERT/UPDATE/DELETE.
- Re-run `node index.js` after each change.

## Goal

Use this project as a sandbox to practice SQL fundamentals:

- table creation
- data insertion
- CRUD operations
- filtering, sorting, and result inspection
