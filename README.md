# eslint-plugin-comment-above-typeorm-entity

An eslint plugin that forces you to comment just above the typeorm entity to describe it.

## Quick start

##### Install

```
$ yarn add --dev eslint-plugin-comment-above-typeorm-entity
```

##### In your .eslintrc

```javascript
module.exports = {
  plugins: ["eslint-plugin-comment-above-typeorm-entity"],
  rules: {
    "comment-above-typeorm-entity/comment-requirement": "error",
  },
};
```

## Examples

#### OK

````typescript
// Some comment to describe...
@Entity()
export class User {
  @PrimaryGeneratedColumn({ comment: "id" })
  id!: number;
}
````

````typescript
@Entity()
/**
 * Some comment to describe...
 */
export class User {
  @PrimaryGeneratedColumn({ comment: "id" })
  id!: number;
}
````

#### NG

````typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn({ comment: "id" })
  id!: number;
}
````

## Motivation

Seems like the typeorm entity currently doesn't allow us to add table comments.  
It would be comfortable if we could do something like this.
```typescript
@Entity({ comment: "Some description..." })
```
But we can't.  
During code reviews and development at work, I'm having a hard time understanding what an entity or the table is for.  
Examples above are just simple User Entities, but in reality, there are a number of more complex and unique concepts.  
So I made a eslint plugin that forces to explain  entities by comment.

## License

This software is distributed under [MIT license](LICENSE.txt).
