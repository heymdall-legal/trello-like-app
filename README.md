# How to start the application

```sh
npm install
npm start
```

App would be available at [http://localhost:3000](http://localhost:3000).

# What app is capable of

- [x] Create columns (with add column button).
- [x] Create cards (with add card button).
- [x] Edit cards (with ✏️ button).
- [x] Delete cards (with 🗑 button).
- [x] Edit columns (with ✏️ button).
- [x] Delete columns (with 🗑 button).
- [x] All editable fields save info on blur, click outside or pressing enter. Pressing escape would cancel changes.
- [x] Drag and drop cards between columns.
- [x] Store data in local storage.

# Which features can be added

- [ ] Drag and drop cards within columns.
- [ ] Drag and drop columns.
- [ ] Confirmation dialog when deleting cards/columns (or undo).
- [ ] Responsive design, I didn't focus on it, and it's not working well on mobile.
- [ ] Some kind of validation. Probably cards and columns should not be empty.

# What should be done in real life project

- [ ] Add tests. I didn't add any tests, because I didn't want to spend too much time on this project.
  But in real life project, I would add tests for application - probably using Cypress.
  I don't think that unit tests are really helpful inside of projects - I believe that you should cover your libraries with unit tests
  and use e2e tests inside your application. Of course there are exceptions, like utility-like functions, complex logic, etc.
- [ ] Obviously in real life I would not consider to use self-written store manager. I would choose Redux.
- [ ] Again, in real life I would not try to implement drag and drop by myself. Even if none of existing libraries would fit my needs,
  I would write all the logic for drag and drop in separate library, and then use it in my application. I would also write tests for it.
- [ ] Probably some kind of CI/CD would be nice to have. Different tools can be used for it, it depends on the company, and it's infrastructure.
  For personal projects I usually use GitHub Actions, but in my current company we use Jenkins and Bamboo (mostly because it can be self-hosted).
- [ ] Backend :-)


# Requirements

App functionality:
- A user should be able to add and label columns.
- A user should be able to add and edit cards.
- A user should be able to move cards between columns (UX is up to you, does not need to be drag-and-drop).
- Do make sure the available interactions are intuitive. In other words, we will be considering usability.
- Some kind of persistency (LocalStorage or SessionStorage) is encouraged, though not required.
- Any additional features you find important (feel free to elaborate in your README file about why you made certain choices).
